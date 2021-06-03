import { BiologiaReproduccionData } from '@data/Medical/Attachments/BiologiaReproduccion.data';
import { BiologiaReproduccion } from '@interface/Medical/Attachtments/BiologiaReproduccion.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'BiologiaReproduccionComponent',
    components: {
    },
    props:{
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
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
