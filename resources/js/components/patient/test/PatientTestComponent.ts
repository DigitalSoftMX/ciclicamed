import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent } from 'vue';
import $ from 'jquery';
import moment from 'moment';
import { Consult } from '@interface/Medical/Consult.interface';
import { ConsultPagination } from '@interface/Medical/ConsultPagination.interface';
import axios from 'axios';
import { ConsultPaginationData } from '@data/Medical/ConsultPagination.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import TestTableModalComponent from '@component/medical/test/testTable/testTableModal/TestTableModalComponent';
import { TestData } from '@data/Medical/Test.data';
require('daterangepicker'); 
require('bootstrap');

/** 
 * @description Componente que muestra la lista de examenes médicos del paciente, en forma de tarjetas (solo rol paciente)
 * @class PatientTestComponent
 * @example <patient-test-component :patient=""></patient-test-component>
*/
export default defineComponent({
    /** 
     * {@link TestTableModalComponent}, {@link PatientTestFileModalComponent}
     * @member PatientTestComponent.components
    */
    components: {
        TestTableModalComponent,
        PatientTestFileModalComponent: require('@component/patient/test/testFileModal/PatientTestFileModalComponent.vue').default
    },
    /** 
     * Propiedades que recibe el componente 
     * @member PatientTestComponent.props
     * @property {number} patient ID del paciente seleccionado
     * 
    */
    props: {
        patient: {
            type: Number,
            default: -1
        }
    },
    /**
    * Variables del componente
    * @member PatientTestComponent.data
    * @property {ConsultPaginationData} prescriptionsData Guarda la información de los estudios médicos del paciente que retorna el backend en paginación
    * @property {boolean} enableEmptyData Muestra u oculta un mensaje de vacío en caso de no existir examenes médicos
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {Object} results Guarda los resultados del examen médico seleccionado
    * @property {string} productSelected Guarda el código de producto del estudio seleccionado
    * @property {Test} testSelected Guarda el estudio médico seleccionado
    */
    data() {
        return {
            prescriptionsData: ConsultPaginationData,
            enableEmptyData: false,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            results: {},
            productSelected: '',
            testSelected: TestData
        };
    },
     /** 
     * Al iniciar el componente, se crea una instancia de daterangepicker (jquery) con datos predefinidos y obtiene las
     * {@link PatientTestComponent.getPrescriptionsData|estudios médicos} del paciente
     * @member PatientTestComponent.mounted
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
         * Retorna la fecha de creación del estudio, en un formato local
         * @function PatientTestComponent.getDateFormatted
         * @param {string} date Fecha del estudio
         * @returns {string}
        */
        getDateFormatted(date: string) {
            moment.locale('es');
            return moment(date).format('D MMMM YYYY');
        },
        /** 
         * Asigna a la variable productSelected el código del producto del estudio seleccionado, asigna a la variable results los resultados del estudio seleccionado
         * y finalmente muestra los resultados en el componente {@link PatientTestFileModalComponent}
         * @function PatientTestComponent.showFileResults
         * @param {Consult} consult Cpnsulta donde se creó el estudio médico
        */
        showFileResults(consult: Consult) {
            this.productSelected = consult.test_scheduled?.order.product.product_code!;
            this.results = consult.test_scheduled!.result!.results;
            $('#pattcFileTest').modal('show');
        },
        /** 
         * Asigna a la variable testSelected las ordenes de estudio y finalmente muestra el componente {@link TestTableModalComponent}
         * @function PatientTestComponent.getTestOrders
         * @param {Consult} consult Cpnsulta donde se creó el estudio médico
        */
        getTestOrders(consult: Consult)
        {
            this.testSelected = consult.test_scheduled!;
            $('#testTableModal').modal('show');
        },
        /** 
         * Obtiene los estudios médicas registradas en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con los estudios, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * prescriptionsData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /pacientes/{id}/estudios con el parámetro de la página. Si la petición es correcta se asigna la variable prescriptionsData con la respuesta
         * del servidor, se asigna a la variable paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function PatientTestComponent.getPrescriptionsData
        */
        getPrescriptionsData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.prescriptionsData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<ConsultPagination>(`/pacientes/${this.patient}/estudios?page=${this.paginationActive}`)
                .then(response => {
                    this.prescriptionsData = response.data;
                    this.prescriptionsData.data = response.data.data.filter(item => item.test_scheduled?.order);
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
            }
        },
        /** 
         * Obtiene los estudios médicas registradas en el sistema que coincidan con la búsqueda por fecha realizada por el usuario.
         * Antes de realizar la petición al servidor con los estudios, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /pacientes/{id}/estudios con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable prescriptionsData con la respuesta del servidor, se asigna a la variable paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function PatientTestComponent.getPrescriptionsDataQuery
        */
        getPrescriptionsDataQuery()
        {
            if(this.activateSearch || this.query.length > 0)
            {
                this.loading = true;
                const queryPagination = this.query === '' ? this.paginationActive : 0;
                axios.get<ConsultPagination>(`/pacientes/${this.patient}/estudios`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.prescriptionsData = response.data;
                    this.prescriptionsData.data = response.data.data.filter(item => item.test_scheduled?.order);
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