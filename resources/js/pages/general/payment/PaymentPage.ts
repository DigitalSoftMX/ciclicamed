import ChargePaymentComponent from '@component/payment/chargePayment/ChargePaymentComponent';
import PaymentsTableComponent from '@component/payment/paymentsTable/PaymentsTableComponent';
import { PatientData } from '@data/Patient/Patient.data';
import { PaymentData } from '@data/Payment/Payment.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { Payment } from '@interface/Payment/Payment.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        PaymentsTableComponent,
        ChargePaymentComponent
    },
    emits: [],
    props: {
        role: {
            type: String as PropType<String>,
            default: ''
        }
    },
    data() {
        return {
            showComponent: 'paymentTable',
            patient: PatientData,
            payment: PaymentData,
            isNew: false
        };
    },
    mounted() {
    },
    watch: {
    },
    methods: {
        setPaymentData(payment: Payment)
        {
            this.showComponent = 'paymentCharge';
            this.payment = payment;
        },
        setReturnComponent(name: string)
        {
            this.isNew = false;
            this.showComponent = name;
            this.payment.products = [];
            this.payment.id = 0;
        },
        setChargePaymentComponent()
        {
            this.isNew = true;
            this.showComponent = 'paymentCharge';
        }
    },
})