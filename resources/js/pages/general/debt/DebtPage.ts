import DebtsTableComponent from '@component/payment/debtsTable/DebtsTableComponent';
import PatientDebtTableComponent from '@component/payment/patientDebtTable/PatientDebtTableComponent';
import PaymentDebtTableComponent from '@component/payment/paymentDebtTable/PaymentDebtTableComponent';
import { PatientData } from '@data/Patient/Patient.data';
import { PaymentData } from '@data/Payment/Payment.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { Payment } from '@interface/Payment/Payment.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        DebtsTableComponent,
        PaymentDebtTableComponent,
        PatientDebtTableComponent
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
            showComponent: 'patientsDebts',
            patient: PatientData,
            payment: PaymentData
        };
    },
    mounted() {
    },
    watch: {
    },
    methods: {
        setPatientData(patient: Patient)
        {
            this.patient = patient;
            this.showComponent = 'paymentDebt';
        },
        setPaymentData(payment: Payment)
        {
            this.payment = payment;
            this.showComponent = 'debtsTable';
        },
        setReturnComponent(name: string)
        {
            this.showComponent = name;
        }
    },
})