import { TestData } from '@data/Medical/Test.data';
import { Test } from '@interface/Medical/Test.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';

/** 
 * @description Componente que muestra los resultados de los estudios del checkup seleccionado dentro de la consulta
 * @class ConsultCheckupTest
 * @example <consult-checkup-component></consult-checkup-component>
*/
export default defineComponent({
    /** 
     * {@link PatientTestFileModalComponent}
     * @member ConsultCheckupTest.components
    */
    components: {
        PatientTestFileModalComponent: require('@component/patient/test/testFileModal/PatientTestFileModalComponent.vue').default
    },
    /** 
     * Propiedades que recibe el componente 
     * @member ConsultCheckupTest.props
     * @property {number} checkup (Obligatorio) ID del checkup
    */
    props: {
        checkup: {
            type: Number,
            default: 0
        },
    },
    /**
    * Variables del componente
    * @member ConsultCheckupTest.data
    * @property {Test[]} testData Guarda los estudios médicos pertenecientes al checkup seleccionado
    * @property {Object} results Guarda los resultados del estudio médico seleccionado
    * @property {string} productSelected Guarda el nombre del estudio médico seleccionado
    */
    data() {
        return {
            testData: [] as Test[],
            results: {},
            productSelected: '',
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los estudios médicos del {@link ConsultCheckupTest.getCheckupTest|checkup seleccionado}
     * @member ConsultCheckupTest.mounted
    */
    mounted() {
        this.getCheckupTest();
    },
    /** 
     * Variables a observar por el componente
     * @member ConsultCheckupTest.watch
     * @property {number} checkup Al actualizar un rol dentro del formulario, los estudios médicos del {@link ConsultCheckupTest.getCheckupTest|checkup seleccionado}
    */
    watch: {
        checkup()
        {
            this.getCheckupTest();
        }
    },
    methods: {
        /** 
         * Obtiene los estudios médicos del checkup seleccionado. Si la petición se procesa correctamente se asigna a la variable testData los resultados
         * arrojados por el servidor
         * @function ConsultCheckupTest.getCheckupTest
        */
        getCheckupTest()
        {
            axios.get<Test[]>(`/checkup/${this.checkup}/resultados`)
            .then(response => {
                this.testData = response.data;
            })
            .catch(error => {
                
            })
        },
        /** 
         * Se asigna el nombre del estudio a la variable productSelected, además que se asigna a la variable results el resultado del
         * estudio médico seleccionado, mostrando dicho resultado mediante el componente {@link PatientTestFileModalComponent}
         * @function ConsultCheckupTest.showFileResults
         * @param {Test} test Estudio médico seleccionado
        */
        showFileResults(test: Test) {
            this.productSelected = test.order.product.name;
            this.results = test.result!.results!;
            $('#conchekFileTest').modal('show');
        },
        /** 
         * Formatea la fecha de la creación del estudio provista por el servidor en un formato local
         * @function ConsultCheckupTest.getDateFormatted
        */
        getDateFormatted(date: string) {
            moment.locale('es');
            return moment(date).format('D MMMM YYYY');
        },
    },
})
