import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { PaymentPaginationData } from '@data/Payment/PaymentPagination.data';
import { PaymentPagination } from '@interface/Payment/PaymentPagination.interface';
import { Payment } from '@interface/Payment/Payment.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { Product } from '@interface/Product/Product.interface';
import { PropType } from 'vue';
import { DebtData } from '@data/Payment/Debt.data';
import PaymentDebtTableModal from './paymentDebtTableModal/PaymentDebtTableModal';

export default defineComponent({
    components: {
        PaymentDebtTableModal,
    },
    emits: ['onDebtSelected', 'onReturn'],
    props: {
        patient: {
            type: Object as PropType<Patient>,
            default: PatientData
        }
    },
    data() {
        return {
            paymentData: PaymentPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            loading: true,
            paymentID: 0
        };
    },
    mounted() {
        this.getPaymentData(1);
    },
    watch: {
        patient:
        {
            handler()
            {
                this.getPaymentData(1);
            },
            deep: true
        }
    },
    computed: {
        fullName(): string
        {
            return `${this.patient.first_name} ${this.patient.last_name}`;
        },
        birthday(): string
        {
            return moment(this.patient.birthday).format('DD-MM-YYYY');
        }
    },
    methods: {
        formatDate(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        getPaymentData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.paymentData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<PaymentPagination>(`/pacientes/${this.patient.id}/deudas?page=${this.paginationActive}`)
                .then(response => {
                    this.paymentData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    ;
                    this.loading = false;
                })
            }
        },
        redirectToDebtInfo(payment: Payment)
        {
            this.$emit('onDebtSelected', payment);
        },
        safeNullProduct(payment: Payment): Product[]
        {
            return payment.products!;
        },
        returnBack()
        {
            this.$emit('onReturn', 'patientsDebts');
        },
        missingPayment(payment: Payment)
        {
            const debt = payment.debts!.reduce((a, b) => ({...a, total: Number(a.total) + Number(b.total)}), DebtData).total;
            return (payment.total - debt).toFixed();
        },
        showModal(payment: Payment)
        {
            this.paymentID = payment.id;
            $('#pdtmPaymentModal').modal('show');
        }
    },
})