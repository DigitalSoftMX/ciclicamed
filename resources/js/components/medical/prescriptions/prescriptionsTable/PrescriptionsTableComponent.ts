import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { PrescriptionPaginationData } from '@data/Medical/Prescription/PrescriptionPagination.data';
import { PrescriptionPagination } from '@interface/Medical/Prescription/PrescriptionPagination.interface';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Consult } from '@interface/Medical/Consult.interface';
import 'bootstrap';

/** 
 * @description Componente que muestra la lista de recetas médicas creadas, mediante una table
 * @class PrescriptionsTableComponent
 * @example <prescriptions-table-component :title="" :role=""></prescriptions-table-component>
*/
export default defineComponent({
    /** 
     * {@link PrescriptionModalComponent}
     * @member PrescriptionsTableComponent.components
    */
    components: {
        PrescriptionModalComponent: require('@component/patient/prescription/prescriptionModal/PrescriptionModalComponent.vue').default
    },
    /** 
     * Propiedades que recibe el componente 
     * @member PrescriptionsTableComponent.props
     * @property {string} title (Opcional) Título de la tabla
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
    */
    props: {
        title: {
            type: String,
            default: ''
        },
        role: {
            type: String,
            default: ''
        }
    },
    /**
    * Variables del componente
    * @member PrescriptionsTableComponent.data
    * @property {PrescriptionPagination} prescriptionData Guarda la información de las recetas médicas que retorna el servidor mediante paginación
    * @property {PrescriptionPagination} prescriptions Guarda la lista de medicamentos de la recete médica seleccionada
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    */
    data() {
        return {
            prescriptionData: PrescriptionPaginationData,
            prescriptions: [] as Prescription[],
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de las {@link PrescriptionsTableComponent.getPrescriptionsData|recetas médicas}
     * @member PrescriptionsTableComponent.mounted
    */
    mounted() {
        this.getPrescriptionsData(1);
    },
    methods: {
        /** 
         * Formatea la fecha provista por el servidor a un formato local
         * @param {string} date Fecha de la consulta donde se creó la receta
         * @function PrescriptionsTableComponent.formatDate
        */
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        /** 
         * Concatena el nombre completo del paciente
         * @param {Consult} consult Datos de la consulta
         * @function PrescriptionsTableComponent.formatPatientName
        */
        formatPatientName(consult: Consult)
        {
            return `${consult.patient!.first_name} ${consult.patient!.last_name}`;
        },
        /** 
         * Obtiene la lista de recetas médicas creadas, provistas por el servidor.
         * Antes de realizar la petición al servidor dicha lista, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * prescriptionData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /consultas/recetas con el parámetro de la página. Si la petición es correcta se asigna la variable prescriptionData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function PrescriptionsTableComponent.getPrescriptionsData
        */
        getPrescriptionsData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.prescriptionData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<PrescriptionPagination>(`/consultas/recetas?page=${this.paginationActive}`)
                .then(response => {
                    this.prescriptionData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
            }
        },
        /** 
         * Obtiene la lista de recetas médicas que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con los empleados, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /consultas/recetas con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable prescriptionData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function PrescriptionsTableComponent.getPrescriptionsDataQuery
        */
        getPrescriptionsDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<PrescriptionPagination>(`/consultas/recetas`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.prescriptionData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
        /** 
         * Muestra el componente {@link PrescriptionModalComponent} con la información de la receta médica seleccionada
         * @param {Consult} consult Datos de la consulta
         * @function PrescriptionsTableComponent.getPrescriptions
        */
        getPrescriptions(consult: Consult)
        {
            this.prescriptions = consult.prescriptions!;
            $('#prestacoPrescriptions').modal('show');
        }
    },
})