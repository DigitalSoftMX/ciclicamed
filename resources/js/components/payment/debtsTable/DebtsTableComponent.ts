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
    emits: ['onReturn'],
    props: {
        payment: {
            type: Object as PropType<Payment>,
            default: PaymentData
        }
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    computed: {
        debts(): Debt[]
        {
            return this.payment.debts!;
        },
        sumDebtPayments(): number {
            return this.payment.debts!.reduce((a, b) => ({...a, total: Number(a.total) + Number(b.total)}), DebtData).total;
        },
        missingPayment(): string
        {
            return (this.payment.total - this.sumDebtPayments).toFixed();
        }
    },
    methods: {
        formatDate(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        returnBack()
        {
            this.$emit('onReturn', 'paymentDebt');
        }
    },
})