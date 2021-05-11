import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
import { BiologiaReproduccion } from '@/resources/js/interfaces/Attachtments/BiologiaReproduccion/BiologiaReproduccion.interface';
import { BiologiaReproduccionData } from '../../../defaultData/Attachments/BiologiaReproduccion/BiologiaReproduccion.data';

export default defineComponent({
    name: 'BiologiaReproduccionComponent',
    components: {
    },
    props:{
        formData: {
            type: Object as PropType<BiologiaReproduccion>,
            default: BiologiaReproduccionData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
