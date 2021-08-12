import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent } from 'vue';
import $ from 'jquery';
import moment from 'moment';
import { Consult } from '@interface/Medical/Consult.interface';
import { ConsultPagination } from '@interface/Medical/ConsultPagination.interface';
import axios from 'axios';
import { ConsultPaginationData } from '@data/Medical/ConsultPagination.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
require('daterangepicker'); 
require('bootstrap');

/** 
 * @description Componente que muestra las recetas médicas de un paciente (solo rol paciente)
 * @class PrescriptionComponent
 * @example <prescription-component :patientID=""></prescription-component>
*/
export default defineComponent({
    /** 
     * {@link PrescriptionModalComponent}
     * @member PrescriptionComponent.components
    */
    components: {
        PrescriptionModalComponent: require('@component/patient/prescription/prescriptionModal/PrescriptionModalComponent.vue').default
    },
    /** 
     * Propiedades que recibe el componente 
     * @member PrescriptionComponent.props
     * @property {number} patientID ID del paciente seleccionado
     * 
    */
    props: {
        patientID: {
            type: Number,
            default: -1
        }
    },
    /**
    * Variables del componente
    * @member PrescriptionComponent.data
    * @property {ConsultPagination} prescriptionsData Guarda la información de las recetas médicas pertenecientes al usuario seleccionado
    * @property {boolean} enableEmptyData Habilita o deshabilita el componente {@link EmptyErrorComponent} si existe o no recetas médicas
    * @property {boolean} prescriptions Guarda los medicamentos de la recete médica seleccionada
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    */
    data() {
        return {
            prescriptionsData: ConsultPaginationData,
            enableEmptyData: false,
            prescriptions: [] as Prescription[],
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
        };
    },
    /** 
     * Al iniciar el componente, se crea una instancia de daterangepicker (jquery) con datos predefinidos y obtiene las
     * {@link PrescriptionComponent.getPrescriptionsData|recetas médicas} del paciente
     * @member PrescriptionComponent.mounted
    */
    mounted() {
        const that = this;
        $("#search").daterangepicker({
            showDropdowns: true,
            minYear: 1930,
            maxYear: moment().endOf("year").year(),
            ranges: {
                'Hoy': [moment(), moment()],
                'Últimos 7 dias': [moment().subtract(6, 'days'), moment()],
                'Últimos 30 dias': [moment().subtract(29, 'days'), moment()],
                'Este mes': [moment().startOf('month'), moment().endOf('month')],
                'Último mes': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month')
                    .endOf('month')
                ],
                'Este año': [moment().startOf('year'), moment().endOf('year')],
                'Todos': [moment().year(1930).startOf('year'), moment().endOf('year')],
            },
            locale: {
                cancelLabel: 'Cancelar',
                applyLabel: 'Seleccionar',
                "customRangeLabel": "Seleccionar otra fecha",
            }
        });
        this.getPrescriptionsData(1);
    },
    methods: {
        /** 
         * Retorna la fecha de creación de la receta, en un formato local
         * @function PrescriptionComponent.getDateFormatted
         * @param {string} date Fecha de la receta
         * @returns {string}
        */
        getDateFormatted(date: string) {
            moment.locale('es');
            return moment(date).format('D MMMM YYYY');
        },
        /** 
         * Asigna a la variable prescriptions las recetas médicas seleccionada por el usuario, a continuación muestra el componente {@link PrescriptionModalComponent}
         * @function PrescriptionComponent.showMedicaments
         * @param {Consult} consult Consulta donde se creó la receta médica
        */
        showMedicaments(consult: Consult) {
            this.prescriptions = consult.prescriptions!
            $('#medicamentsModal').modal('show');
        },
        /** 
         * Obtiene las recetas médicas registradas en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con las recetas, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * prescriptionsData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /pacientes/{id}/recetas con el parámetro de la página. Si la petición es correcta se asigna la variable prescriptionsData con la respuesta
         * del servidor, se asigna a la variable paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function PrescriptionComponent.getPrescriptionsData
        */
        getPrescriptionsData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.prescriptionsData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<ConsultPagination>(`/pacientes/${this.patientID}/recetas?page=${this.paginationActive}`)
                .then(response => {
                    this.prescriptionsData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
            }
        },
        /** 
         * Obtiene las recetas médicas registradas en el sistema que coincidan con la búsqueda por fecha realizada por el usuario.
         * Antes de realizar la petición al servidor con las recetas, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /pacientes/{id}/recetas con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable prescriptionsData con la respuesta del servidor, se asigna a la variable paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function PrescriptionComponent.getPrescriptionsDataQuery
        */
        getPrescriptionsDataQuery()
        {
            if(this.activateSearch || this.query.length > 0)
            {
                this.loading = true;
                const queryPagination = this.query === '' ? this.paginationActive : 0;
                axios.get<ConsultPagination>(`/pacientes/${this.patientID}/recetas`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.prescriptionsData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
                this.activateSearch = this.query === '' ? false : true;
            }
        },
    }
})