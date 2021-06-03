import { UroginecologiaData } from '@data/Medical/Attachments/Uroginecologia.data';
import { Uroginecologia } from '@interface/Medical/Attachtments/Uroginecologia.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
export default defineComponent({
    name: 'ColposcopiaComponent',
    components: {
    },
    props:{
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        formData: {
            type: Object as PropType<Uroginecologia>,
            default: UroginecologiaData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
