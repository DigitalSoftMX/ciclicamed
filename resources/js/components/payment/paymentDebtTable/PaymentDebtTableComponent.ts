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

/** 
 * @description Componente que muestra la lista de deudas activas que tiene un paciente, mediante una tabla
 * @class PaymentDebtTableComponent
 * @example <payment-debt-table-component :patient=""></payment-debt-table-component>
*/
export default defineComponent({
    /** 
     * {@link PaymentDebtTableModal}
     * @member PaymentDebtTableComponent.components
    */
    components: {
        PaymentDebtTableModal,
    },
    /** 
     * Eventos del componente
     * @member PaymentDebtTableComponent.emits
     * @property {Payment} onDebtSelected Evento que retorna al componente padre, el pago seleccionado que tiene una deuda activa
     * @property {string} onReturn Evento que indica a que componente debe regresarse
    */
    emits: ['onDebtSelected', 'onReturn'],
    /** 
     * Propiedades que recibe el componente 
     * @member PaymentDebtTableComponent.props
     * @property {Patient} patient (Obligatorio) Datos del paciente seleccionado
    */
    props: {
        patient: {
            type: Object as PropType<Patient>,
            default: PatientData
        }
    },
    /**
    * Variables del componente
    * @member PaymentDebtTableComponent.data
    * @property {EmployeePagination} paymentData Guarda la información de los pagos que tienen una deuda pendiente, los cuales retorna el backend en paginación
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {number} paymentID Guarda el ID del pago seleccionado
    */
    data() {
        return {
            paymentData: PaymentPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            loading: true,
            paymentID: 0
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link EmployeeTableComponent.getPaymentData|pagos con deuda activa}
     * @member PaymentDebtTableComponent.mounted
    */
    mounted() {
        this.getPaymentData(1);
    },
    /** 
     * Variables a observar por el componente
     * @member PaymentDebtTableComponent.watch
     * @property {Patient} patient Al actualizar el paciente seleccionado, obtiene los {@link PaymentDebtTableComponent.getPaymentData|pagos con deuda activa}
    */
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
    /**
    * Propiedades computadas del componente 
    * @member PaymentDebtTableComponent.computed
    * @property {string} fullName Concatena el nombre completo del paciente
    * @property {string} birthday Retorna la fecha de nacimiento provista por el servidor en un formato local
    */
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
        /** 
         * Retorna la fecha de nacimiento provista por el servidor a un formato local
         * @param {string} birthday Fecha de nacimiento del paciente
         * @function PaymentDebtTableComponent.formatDate
         * @returns {string} Retorna la fecha en formato local
        */
        formatDate(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        /** 
         * Obtiene la lista de pagos con deudas activas registrados en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con la lista de pagos con deudas activas, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * paymentData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /pacientes/{id}/deudas con el parámetro de la página. Si la petición es correcta se asigna la variable paymentData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function PaymentDebtTableComponent.getPaymentData
        */
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
        /** 
         * Envía un evento onDebtSelected al componente padre, con la información del pago seleccionado
         * @function PaymentDebtTableComponent.redirectToDebtInfo
         * @param {Payment} payment Datos del pago seleccionado
        */
        redirectToDebtInfo(payment: Payment)
        {
            this.$emit('onDebtSelected', payment);
        },
        /** 
         * Retorna los productos pertenecientes a un pago, evitando un error en el template de vue
         * @function PaymentDebtTableComponent.safeNullProduct
         * @param {Payment} payment Datos del pago seleccionado
         * @return {Product[]}
        */
        safeNullProduct(payment: Payment): Product[]
        {
            return payment.products!;
        },
        /** 
         * Envía un evento onReturn para retornar al componente {@link PatientDebtTableComponent}
         * @function PaymentDebtTableComponent.returnBack
        */
        returnBack()
        {
            this.$emit('onReturn', 'patientsDebts');
        },
        /** 
         * Retorna la cantidad faltante por pagar de la deuda actual seleccionada
         * @function PaymentDebtTableComponent.missingPayment
         * @param {Payment} payment Datos del pago seleccionado
         * @return {string}
        */
        missingPayment(payment: Payment)
        {
            const debt = payment.debts!.reduce((a, b) => ({...a, total: Number(a.total) + Number(b.total)}), DebtData).total;
            return (payment.total - debt).toFixed(2);
        },
        /** 
         * Muestra el componente {@link PaymentDebtTableModal} con la información del pago con deuda, al cual se desea realizar un pago para completar la deuda
         * @function PaymentDebtTableComponent.showModal
         * @param {Payment} payment Datos del pago seleccionado
        */
        showModal(payment: Payment)
        {
            this.paymentID = payment.id;
            $('#pdtmPaymentModal').modal('show');
        }
    },
})