import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { TestPaginationData } from '@data/Medical/TestPagination.data';
import { TestPagination } from '@interface/Medical/TestPagination.interface';
import moment from 'moment';
import { Test } from '@interface/Medical/Test.interface';
import { TestData } from '@data/Medical/Test.data';

/** 
 * @description Componente que muestra a imagenología o laboratorio la lista de estudios médicos faltantes de
 * un resultado, mediante el uso de una tablq
 * @class TestTableComponent
 * @example <test-table-component :testCategory="" :testStatus="" :title="" role=""></test-table-component>
*/
export default defineComponent({
    /** 
     * {@link TestTableModalComponent}
     * @member TestTableComponent.components
    */
    components: {
        TestTableModalComponent: require('@component/medical/test/testTable/testTableModal/TestTableModalComponent.vue').default
    },
    /** 
     * Eventos del componente
     * @member EmployeeTableModalComponent.emits
     * @property {null} onTestEdited Evento que se lanza cuando se edita un estudio
     * @property {Test} onTestUpload Evento que se lanza cuando se sube un estudio
    */
    emits: ['onTestEdited', 'onTestUpload'],
    /** 
     * Propiedades que recibe el componente 
     * @member TestTableComponent.props
     * @property {string} testCategory (Obligatorio) Categoría del tipo de estudio a subir (Imagenología o Laboratorio)
     * @property {string} testStatus (Obligatorio) Estado de la lista de estudios a obtener (creados, muestras o completados)
     * @property {string} title (Opcional) Título de la tabla
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
    */
    props: {
        testCategory: {
            type: String,
            default: ''
        },
        testStatus: {
            type: String,
            default: ''
        },
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
    * @member TestTableComponent.data
    * @property {TestPagination} testData Guarda la información de los estudios médicos que retorna el servidor mediante paginación
    * @property {number} paginationPages Guarda el número de páginas de userData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {Test} testSelected Guarda la información del estudio médico seleccionado
    */
    data() {
        return {
            testData: TestPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            testSelected: TestData
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos de los {@link EmployeeTableModalComponent.getUserData|estudios médicos}
     * @member TestTableComponent.mounted
    */
    mounted() {
        this.getUserData(1);
    },
    /**
    * Propiedades computadas del componente 
    * @member TestTableComponent.computed
    * @property {boolean} showSupplierCode Muestra u oculta la columna de Código de proveedor en caso de existir o no dicho código en alguno de los estudios médicos 
    */
    computed: {
        showSupplierCode(): boolean
        {
            return this.testData.data.filter(item => item.order!.product.supplier_code).length > 0;
        }
    },
    methods: {
        /** 
         * Muestra las anotaciones de estudios mediante el componente {@link TestTableModalComponent} asignando dichas anotaciones a la variable testSelected
         * @param {Test} test Estudio médico seleccionado
         * @function TestTableComponent.showTestOrderAnnotations
        */
        showTestOrderAnnotations(test: Test)
        {
            this.testSelected = test;
            $('#testTableModal').modal('show');
        },
        /** 
         * Envía un evento onTestUpload para indicar el estudio seleccionado al que hay que subir el resultado del estudio
         * @param {Test} test Estudio médico seleccionado
         * @function TestTableComponent.showUploadComponent
        */
        showUploadComponent(test: Test)
        {
            this.$emit('onTestUpload', test);
        },
        /** 
         * Formatea la fecha provista por el servidor a un formato local
         * @param {string} date Fecha de la consulta donde se creó el estudio
         * @function TestTableComponent.formatDate
        */
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        /** 
         * Concatena el nombre completo del paciente
         * @param {Consult} consult Datos de la consulta
         * @function TestTableComponent.formatPatientName
        */
        formatPatientName(test: Test)
        {
            return test.patient ? `${test.patient!.first_name} ${test.patient!.last_name}` : '';
        },
        /** 
         * Obtiene la lista los estudios médicos creados, provistas por el servidor.
         * Antes de realizar la petición al servidor dicha lista, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * testData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /consultas/{id}/{status} con el parámetro de la página. Si la petición es correcta se asigna la variable testData con la respuesta
         * del servidor, se asigna a la variable paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function TestTableComponent.getUserData
        */
        getUserData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.testData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<TestPagination>(`/estudios/${this.testCategory}/${this.testStatus}?page=${this.paginationActive}`)
                .then(response => {
                    this.testData = response.data;
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
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /consultas/{id}/{status} con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable testData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function TestTableComponent.getUserDataQuery
        */
        getUserDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<TestPagination>(`/estudios/${this.testCategory}/${this.testStatus}`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.testData = response.data;
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