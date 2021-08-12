import { defineComponent } from '@vue/runtime-core';
import moment from 'moment';
import { Payment } from '@interface/Payment/Payment.interface';
import { DebtData } from '@data/Payment/Debt.data';
import { Debt } from '@interface/Payment/Debt.interface';
import { PaymentData } from '@data/Payment/Payment.data';
import { PropType } from 'vue';

/** 
 * @description Componente que muestra la lista de pagos de una deuda que tiene un paciente, mediante una tabla
 * @class DebtsTableComponent
 * @example <debts-table-component :payment=""></debts-table-component>
*/
export default defineComponent({
    /** 
     * Eventos del componente
     * @member DebtsTableComponent.emits
     * @property {string} onReturn Evento que indica que se debe de regresar al componente {@link PaymentDebtTableComponent}
    */
    emits: ['onReturn'],
    /** 
     * Propiedades que recibe el componente 
     * @member DebtsTableComponent.props
     * @property {Payment} payment (Obligatorio) Datos del pago seleccionado
    */
    props: {
        payment: {
            type: Object as PropType<Payment>,
            default: PaymentData
        }
    },
    /**
    * Propiedades computadas del componente 
    * @member DebtsTableComponent.computed
    * @property {Debt[]} debts Lista de las deudas a la que pertenece el pago seleccionado
    * @property {number} sumDebtPayments Total de la suma de las deudas pertenecientes al pago seleccionado
    * @property {string} missingPayment Total que falta por pagar para saldar la deuda
    */
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
        /** 
         * Retorna la fecha de nacimiento provista por el servidor a un formato local
         * @param {string} birthday Fecha de nacimiento del paciente
         * @function DebtsTableComponent.formatDate
         * @returns {string} Retorna la fecha en formato local
        */
        formatDate(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        /** 
         * Envía un evento onReturn para indicar que se debe regresar al componente {@link PaymentDebtTableComponent}
         * @function DebtsTableComponent.returnBack
        */
        returnBack()
        {
            this.$emit('onReturn', 'paymentDebt');
        }
    },
})