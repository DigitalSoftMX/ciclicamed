import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import $ from 'jquery';
import moment from 'moment';
import { UserPaginationData } from '@data/User/UserPagination.data';
import { PatientData } from '@data/Patient/Patient.data';
import { UserPagination } from '@interface/User/UserPagination.interface';
import { Patient } from '@interface/Patient/Patient.interface';

/** 
 * @description Componente que muestra la lista de pacientes que tienen una deuda activa, mediante el uso de una tabla
 * @class PatientDebtTableComponent
 * @example <patient-debt-table-component></patient-debt-table-component>
*/
export default defineComponent({
    /** 
     * Eventos del componente
     * @member PatientDebtTableComponent.emits
     * @property {Patient} onPatientSelect Evento que indica el paciente seleccionado por el usuario
    */
    emits: ['onPatientSelect'],
    /**
    * Variables del componente
    * @member PatientDebtTableComponent.data
    * @property {UserPagination} userData Guarda la información de los pacientes con deudas activas que retorna el backend en paginación
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {Patient} patientData Guarda los datos del paciente seleccionado
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    */
    data() {
        return {
            userData: UserPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            patientData: PatientData,
            loading: true
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link PatientDebtTableComponent.getUserData|pacientes con deuda}
     * @member PatientDebtTableComponent.mounted
    */
    mounted() {
        this.getUserData(1);
    },
    methods: {
        /** 
         * Retorna la fecha de nacimiento del paciente provista por el servidor, a un formato local
         * @param {string} birthday Fecha de nacimiento del paciente
         * @function PatientDebtTableComponent.formatBirthday
         * @returns {string} Retorna la fecha en formato local
        */
        formatBirthday(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        /** 
         * Obtiene la lista de pacientes con deuda activa registradas en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con los pacientes, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * userData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /pacientes/deudas con el parámetro de la página. Si la petición es correcta se asigna la variable userData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function PatientDebtTableComponent.getUserData
        */
        getUserData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.userData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<UserPagination>(`/pacientes/deudas?page=${this.paginationActive}`)
                .then(response => {
                    this.userData = response.data;
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
         * Obtiene la lista de pacientes con deuda activa registradas en el sistema que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con los empleados, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /pacientes/deudas con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable userData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function PatientDebtTableComponent.getUserDataQuery
        */
        getUserDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query === '')
            {
                axios.get<UserPagination>(`/pacientes/deudas`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.userData = response.data;
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
         * Envía el evento onPatientSelect con los datos del paciente seleccionado
         * @param {Patient} patient Datos del paciente seleccionado
         * @function PatientDebtTableComponent.redirectToDebtData
        */
        redirectToDebtData(patient: Patient)
        {
            this.$emit('onPatientSelect', patient);
        }
    },
})