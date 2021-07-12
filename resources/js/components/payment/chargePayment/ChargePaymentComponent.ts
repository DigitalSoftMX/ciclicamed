import { Product } from '@interface/Product/Product.interface';
import { defineComponent } from '@vue/runtime-core';
import $ from 'jquery';
import 'bootstrap';
import { ProductData } from '@data/Product/Product.data';
import { PropType } from 'vue';
import axios from 'axios';
import { Consult } from '@interface/Medical/Consult.interface';
import { ConsultData } from '@data/Medical/Consult.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import vSelect from "vue-select-3/src";
import { Select } from '@interface/General/Select.interface';
import { Branch } from '@interface/Branch/Branch.interface';

export default defineComponent({
    components: {
        vSelect,
        EmptyErrorComponent: require('@component/general/error/EmptyErrorComponent.vue').default,
        ConsultProductListComponent: require('@component/payment/chargePayment/productModalList/ProductModalListComponent.vue').default,
        PaymentInfoComponent: require('@component/payment/paymentInfo/PaymentInfoComponent.vue').default,
        ConfirmationAlertComponent: require('@component/general/alert/ConfirmationAlertComponent/ConfirmationAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    emits: [],
    props: {
        products: {
            type: Array as PropType<Product[]>,
            default: []
        },
        role: {
            type: String,
            default: ''
        },
        consult: {
            type: Object as PropType<Consult>,
            default: ConsultData
        },
        patient: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        paymentID: {
            type: Number as PropType<Number>,
            default: 0
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        }
    },
    data() {
        return {
            productSelectedList: this.products,
            productList: [] as Product[],
            productCategoryLoaded: [] as String[],
            categorySelected: '',
            titleSelected: '',
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content,
            debtData: {
                check: false,
                description: 0
            },
            paymentMethod: {
                check: 1,
                description: ''
            },
            branchesList: [] as Select[],
            patientsList: [] as Select[],
            patientID : 0,
            branchID : 0,
            errors: []
        };
    },
    mounted()
    {
        if(this.isNew)
        {
            this.getPatientsList();
            this.getBranchesList();
        }
    },
    computed: {
        totalPrice(): string
        {
            const price: number = this.productSelectedList.reduce((a, b) => ({...a, price: Number(a.price) + Number(b.price)}), ProductData).price;
            const discount: number = this.productSelectedList.reduce((a, b) => ({...a, discount: Number(a.discount) + Number(b.discount)}), ProductData).discount;
            return (price - discount).toFixed(2);
        },
        totalDebt(): string
        {
            return (Number(this.totalPrice) - this.debtData.description).toFixed(2);
        },
        activePayment(): boolean
        {
            return this.role === 'Administrador' || this.role === 'Caja' || this.role === 'Caja administrador';
        },
        price(): number
        {
            return this.productSelectedList.reduce((a, b) => ({...a, price: Number(a.price) + Number(b.price)}), ProductData).price;
        },
        discount(): number
        {
            return this.productSelectedList.reduce((a, b) => ({...a, discount: Number(a.discount) + Number(b.discount)}), ProductData).discount;
        },
        showCredit(): boolean
        {
            console.log(this.paymentMethod.check)
            return Number(this.paymentMethod.check) !== 1 ? true : false;
        }
    },
    watch: {
        products:
        {
            handler()
            {
                this.productSelectedList = this.products;

            },
            deep: true
        },
        isNew()
        {
            this.getPatientsList();
            this.getBranchesList();
        }
    },
    methods: {
        getBranchesList(): void
        {
            axios.get<Branch[]>(`/sucursales`)
            .then(response => {
                this.branchesList = response.data.map((branch, index) => {
                    return {
                        id: index,
                        childID: branch.id, 
                        text: branch.name,
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },
        getPatientsList(): void
        {
            axios.get <Patient[]> (`/pacientes`)
            .then(response => {
                console.log(response.data)
                this.patientsList = response.data.map((patient, index) => {
                    return {
                        id: index,
                        childID: patient.id,
                        text: `${patient.patient_code} ${patient.first_name} ${patient.last_name}`
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },
        confirmConsultFinish()
        {
            $('#chpcConsult').modal('show');
        },
        selectPaymentURL()
        {
            switch(this.role)
            {
                case 'Administrador':
                    if(this.consult.id > 0)
                    {
                        this.createConsultPayment();
                    }
                    else {
                        this.isNew ? this.createNewPayment() : this.setPayment();
                    }
                    break;
                case 'Caja':
                    this.isNew ? this.createNewPayment() : this.setPayment();
                    break;
                case 'Caja administrador':
                    this.isNew ? this.createNewPayment() : this.setPayment();
                    break;
                case 'Doctor':
                    this.createConsultPayment();
                    break;
            }
        },
        createNewPayment()
        {
            axios.post(`/pagos`, {
                data: {
                    patientID: this.patientID,
                    branchID: this.branchID,
                    products: this.productSelectedList,
                    debt: this.debtData,
                    paymentMethod: this.paymentMethod
                }
            })
            .then(response => {
                $('#chpcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors
                $('#chpcError').modal('show');
            })
        },
        setPayment()
        {
            axios.post(`/pagos/${this.paymentID}/pago`, {
                data: {
                    products: this.productSelectedList,
                    debt: this.debtData,
                    paymentMethod: this.paymentMethod
                }
            })
            .then(response => {
                $('#chpcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors
                $('#chpcError').modal('show');
            })
        },
        createConsultPayment()
        {
            axios.post(`/consultas/${this.consult.id}/pago`, {
                data: {
                    id: this.consult.id,
                    branch_id: this.consult.branch_id,
                    products: this.productSelectedList,
                    patient_id: this.patient.id
                }
            })
            .then(response => {
                $('#chpcSuccess').modal('show');
                setInterval(() => {
                    window.location.replace(`${this.url}/app/inicio`);
                }, 2000)
            })
            .catch(error => {
                this.errors = error.response.data.errors
                $('#chpcError').modal('show');
            })
        },
        openProductListModal(category: string, title: string)
        {
            this.categorySelected = category;
            this.titleSelected = title;
            $('#cpcProductList').modal('show');
        },
        editProducSelectedList(product: Product, checked: boolean)
        {
            checked ? this.productSelectedList.push(product) : this.productSelectedList = this.productSelectedList.filter(item => item.id !== product.id);
        },
        getTotalPrice()
        {
            const price: number = this.productSelectedList.reduce((a, b) => ({...a, price: Number(a.price) + Number(b.price)}), ProductData).price;
            const discount: number = this.productSelectedList.reduce((a, b) => ({...a, discount: Number(a.discount) + Number(b.discount)}), ProductData).discount;
            return (price - discount).toFixed(2);
        },
        deleteProduct(product: Product)
        {
           this.productSelectedList = this.productSelectedList.filter(item => item.id !== product.id);
        }
    },
})