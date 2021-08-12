import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import $ from 'jquery';
import moment from 'moment';
import { PaymentPagination } from '@interface/Payment/PaymentPagination.interface';
import { PaymentPaginationData } from '@data/Payment/PaymentPagination.data';
import { Payment } from '@interface/Payment/Payment.interface';
import { PaymentData } from '@data/Payment/Payment.data';

/** 
 * @description Componente que muestra la lista de pagos creados sin completar, mediante el uso de una tabla
 * @class PaymentsTableComponent
 * @example <payments-table-component></payments-table-component>
*/
export default defineComponent({
    /** 
     * Eventos del componente
     * @member PaymentsTableComponent.emits
     * @property {Payment} onPaymentSelect Evento que indica que se ha seleccionado un pago para mostrar los datos relacionados con dicho pago
     * @property {null} onNewPayment Evento que indica que se crea un nuevo pago
    */
    emits: ['onPaymentSelect', 'onNewPayment'],
    /**
    * Variables del componente
    * @member PaymentsTableComponent.data
    * @property {PaymentPagination} paymentData Guarda la lista de pagos sin completar, de acuerdo a la información del servidor
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {Payment} paymentSelected Guarda la información de un pago seleccionado
    */
    data() {
        return {
            paymentData: PaymentPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            errors: [],
            paymentSelected: PaymentData
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link PaymentsTableComponent.getpaymentData|pagos sin completas}
     * @member PaymentsTableComponent.mounted
    */
    mounted() {
        this.getpaymentData(1);
    },
    methods: {
        /** 
         * Muestra el componente {@link ConfirmationAlertComponent} con un mensaje de confirmación, antes de cancelar un pago
         * @param {Payment} payment Pago seleccionado
         * @function PaymentsTableComponent.showModalConfirmation
        */
        showModalConfirmation(payment: Payment)
        {
            this.paymentSelected = payment;
            $('#paytcConfirmation').modal('show');
        },
        /** 
         * Elimina un pago del servidor. En caso de que la petición sea correcta, se muestra el componente {@link SuccessAlertComponent} con un mensaje de éxito, en
         * caso contrario se muestra el componente {@link ErrorAlertComponent} con un mensaje de error
         * @param {Payment} payment Pago seleccionado
         * @function PaymentsTableComponent.showModalConfirmation
        */
        deletePayment()
        {
            axios.delete(`/pagos/${this.paymentSelected.id}`)
            .then(response => {
                $('#paytcSuccess').modal('show');
            })
            .catch(error => {
                $('#paytcError').modal('show');
            })
        },
        /** 
         * Retorna la fecha de nacimiento del paciente provista por el servidor a un formato local
         * @param {string} birthday Fecha de nacimiento del paciente
         * @function PaymentsTableComponent.formatBirthday
         * @returns {string} Retorna la fecha en formato local
        */
        formatBirthday(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        /** 
         * Obtiene la lista de pagos sin completar registrados en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con  la lista de pagos sin completar, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * paymentData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /pagos/faltantes con el parámetro de la página. Si la petición es correcta se asigna la variable paymentData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function PaymentsTableComponent.getpaymentData
        */
        getpaymentData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.paymentData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<PaymentPagination>(`/pagos/faltantes?page=${this.paginationActive}`)
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
        /** 
         * Obtiene la lista de pagos sin completar registrados en el sistema que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con la lista de pagos sin completar registrados, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /pagos/faltantes con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable paymentData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function PaymentsTableComponent.getpaymentDataQuery
        */
        getpaymentDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query === '')
            {
                axios.get<PaymentPagination>(`/pagos/faltantes`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
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
            this.activateSearch = this.query === '' ? false : true;
        },
        /** 
         * Envía un evento onPaymentSelect que permite al sistema obtener los datos del pago al componente {@link ChargePaymentComponent}
         * @param {Payment} payment Datos del pago seleccionado
         * @function PaymentsTableComponent.fullName=
        */
        redirectToChargeComponent(payment: Payment)
        {
            this.$emit('onPaymentSelect', payment);
        },
        /** 
         * Retorna el nombre completo del paciente relacionado con el pago
         * @param {Payment} payment Datos del pago seleccionado
         * @function PaymentsTableComponent.fullName
         * @returns {string} Retorna el nombre completo del paciente relacionado con el pago
        */
        fullName(payment: Payment)
        {
            return `${payment.patient?.first_name} ${payment.patient?.last_name}`;
        },
        /** 
         * Retorna la fecha de creación del pago provista por el servidor a un formato local
         * @param {string} birthday Fecha de nacimiento del paciente
         * @function PaymentsTableComponent.formatDate
         * @returns {string} Retorna la fecha en formato local
        */
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        /** 
         * Envía un evento onNewPayment que permite al sistema crear un nuevo pargo para el componente {@link ChargePaymentComponent}
         * @function PaymentsTableComponent.createNewPayment
        */
        createNewPayment()
        {
            this.$emit('onNewPayment');
        }
    },
})