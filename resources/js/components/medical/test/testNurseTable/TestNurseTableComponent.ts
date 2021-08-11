import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Test } from '@interface/Medical/Test.interface';
import { ConsultPagination } from '@interface/Medical/ConsultPagination.interface';
import { ConsultPaginationData } from '@data/Medical/ConsultPagination.data';
import { Consult } from '@interface/Medical/Consult.interface';

/** 
 * @description Componente que muestra a enfermera la lista de estudios médicos creados y su estado actual, mediante el uso de una tablq
 * @class TestNurseTableComponent
 * @example <test-nurse-component :title="" :role=""></test-nurse-component>
*/
export default defineComponent({
    /** 
     * Propiedades que recibe el componente 
     * @member TestNurseTableComponent.props
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
    * @member TestNurseTableComponent.data
    * @property {ConsultPagination} consultData Guarda la información de los estudios médicos que retorna el servidor mediante paginación
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    */
    data() {
        return {
            consultData: ConsultPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link TestNurseTableComponent.getUserData|estudios médicos}
     * @member TestNurseTableComponent.mounted
    */
    mounted() {
        this.getUserData(1);
    },
    /**
    * Propiedades computadas del componente 
    * @member TestNurseTableComponent.computed
    * @property {boolean} showSupplierCode Muestra u oculta la columna de Código de proveedor en caso de existir o no dicho código en alguno de los estudios médicos 
    */
    computed: {
        showSupplierCode(): boolean
        {
            return this.consultData.data.filter(item => item.test_scheduled!.order?.product?.supplier_code).length > 0;
        }
    },
    methods: {
        /** 
         * Formatea la fecha provista por el servidor a un formato local
         * @param {string} date Fecha de la consulta donde se creó el estudio
         * @function TestNurseTableComponent.formatDate
        */
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        /** 
         * Concatena el nombre completo del paciente
         * @param {Consult} consult Datos de la consulta
         * @function TestNurseTableComponent.formatPatientName
        */
        formatPatientName(consult: Consult)
        {
            return `${consult.patient!.first_name} ${consult.patient!.last_name}`;
        },
        /** 
         * Obtiene la lista los estudios médicos creados, provistas por el servidor.
         * Antes de realizar la petición al servidor dicha lista, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * consultData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /consultas/muestras con el parámetro de la página. Si la petición es correcta se asigna la variable consultData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function TestNurseTableComponent.getUserData
        */
        getUserData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.consultData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<ConsultPagination>(`/consultas/muestras?page=${this.paginationActive}`)
                .then(response => {
                    this.consultData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
            }
        },
        /** 
         * Obtiene la lista de estudios médicos que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con los empleados, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /consultas/muestras con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable consultData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function TestNurseTableComponent.getUserDataQuery
        */
        getUserDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<ConsultPagination>(`/consultas/muestras`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.consultData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})