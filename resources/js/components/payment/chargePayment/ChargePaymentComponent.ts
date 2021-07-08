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

export default defineComponent({
    components: {
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
        }
    },
    data() {
        return {
            productSelectedList: this.products,
            productList: [] as Product[],
            productCategoryLoaded: [] as String[],
            categorySelected: '',
            titleSelected: '',
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content
        };
    },
    mounted()
    {
    },
    computed: {
        activePayment(): boolean
        {
            return this.role === 'Administrador' || this.role === 'Caja';
        },
        price(): number
        {
            return this.productSelectedList.reduce((a, b) => ({...a, price: Number(a.price) + Number(b.price)}), ProductData).price;
        },
        discount(): number
        {
            return this.productSelectedList.reduce((a, b) => ({...a, discount: Number(a.discount) + Number(b.discount)}), ProductData).discount;
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
        }
    },
    methods: {
        confirmConsultFinish()
        {
            $('#chpcConsult').modal('show');
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
                console.log(error)
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