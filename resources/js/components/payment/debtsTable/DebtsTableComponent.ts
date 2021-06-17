import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Payment } from '@interface/Payment/Payment.interface';
import { DebtData } from '@data/Payment/Debt.data';
import { Debt } from '@interface/Payment/Debt.interface';
import { PaymentData } from '@data/Payment/Payment.data';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: [],
    props: {
        paymentID: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            debtData: [] as Debt[],
            paymentData: PaymentData,
            loading: true
        };
    },
    mounted() {
        this.getDebtData();
        this.getPaymentData();
    },
    computed: {
        sumDebtPayments(): number {
            return this.debtData.reduce((a, b) => ({...a, total: Number(a.total) + Number(b.total)}), DebtData).total;
        },
        missingPayment(): number
        {
            return this.paymentData.total - this.sumDebtPayments;
        }
    },
    methods: {
        formatDate(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        getDebtData()
        {
            this.loading = true;
            axios.get<Debt[]>(`/pagos/${this.paymentID}/deudas`)
            .then(response => {
                this.debtData = response.data;
                this.loading = false;
            })
            .catch(error => {
                console.log(error);
                this.loading = false;
            })
        },
        getPaymentData()
        {
            axios.get<Payment>(`/pagos/${this.paymentID}`)
            .then(response => {
                this.paymentData = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
})