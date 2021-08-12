import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

/** 
 * @description Componente que permite agregar un pago a la deuda seleccionada, mediante el uso de un formulario dentro de un modal
 * @class PaymentDebtTableModal
 * @example <payment-debt-table-modal-component :paymentID=""></payment-debt-table-modal-component>
*/
export default defineComponent({
    /** 
     * Propiedades que recibe el componente 
     * @member PaymentDebtTableModal.props
     * @property {number} paymentID (Obligatorio) ID del pago con deuda seleccionado
    */
    props: {
        paymentID: {
            type: Number as PropType<Number>,
            default: 0
        },
    },
    /**
    * Variables del componente
    * @member PaymentDebtTableModal.data
    * @property {number} cantidad Guarda la cantidad del pago que se desea realizar
    * @property {number} paymentMethod.check Guarda el método de pago del pago de la deuda actual (efectivo, tarjeta de débito, tarjeta de crédito)
    * @property {string} paymentMethod.description Guarda los últimos 4 dígitos de la tarjeta de crédito o débito
    * @property {string} description Guarda el motivo del pago de la deuda
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    */
    data() {
        return {
            cantidad: 0,
            paymentMethod: {
                check: 1,
                description: ''
            },
            descripcion: null,
            errors: []
        };
    },
    /**
    * Propiedades computadas del componente 
    * @member PaymentDebtTableModal.computed
    * @property {boolean} showCredit Muestra u oculta el input de los últimos 4 dígitos de la tarjeta
    */
    computed: {
        showCredit(): boolean
        {
            return Number(this.paymentMethod.check) !== 1 ? true : false;
        }
    },
    methods: {
        /** 
         * Envía al servidor el pago de la deuda creado en el componente. En caso de que se procese la petición correctamente
         * se reinician las variables del componente, se oculta este componente y se muestra el componente {@link SuccessAlertComponent} con un mensaje de éxito,
         * en caso contrario asigna a la variable errors los errores de parte del servidor, oculta este componente y muestra el componente {@link ErrorAlertComponent}
         * @function PaymentDebtTableModal.createDebtPayment
        */
        createDebtPayment()
        {
            axios.post(`/pagos/${this.paymentID}/deudas`, {
                cantidad: this.cantidad,
                paymentMethod: this.paymentMethod,
                descripcion: this.descripcion
            })
            .then(response => {
                this.cantidad = 0,
                this.paymentMethod.check = 1;
                this.paymentMethod.description = '';
                this.descripcion = null,
                $('#pdtmPaymentModal').modal('hide');
                $('#pdtmSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#pdtmPaymentModal').modal('hide');
                $('#pdtmError').modal('show');
            })
        }
    },
})