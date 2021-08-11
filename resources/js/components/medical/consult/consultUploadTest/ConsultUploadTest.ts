import UploadFileComponent from '@component/general/uploadFile/UploadFileComponent';
import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { Prop, PropType } from 'vue';

/** 
 * @description Componente que permite subir los resultados de un estudio médico en la consulta en proceso, mediante el componente {@link UploadFileComponent}
 * @class ConsultUploadTest
 * @example <consult-upload-test></consult-upload-test>
*/
export default defineComponent({
    /** 
     * {@link UploadFileComponent}
     * @member ConsultUploadTest.components
    */
    components: {
        UploadFileComponent
    },
    emits: [],
    /** 
     * Propiedades que recibe el componente 
     * @member ConsultUploadTest.props
     * @property {number} testID (Obligatorio) ID del estudio médico
    */
    props: {
        testID: {
            type: Number as PropType<Number>,
            default: 0
        }
    },
    mounted() {
    },
    watch: {
    },
    methods: {
    },
})