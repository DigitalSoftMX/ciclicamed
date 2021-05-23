import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
import { Oncologia } from '@/resources/js/interfaces/Attachtments/Oncologia.interface';
import { OncologiaData } from '../../../defaultData/Attachments/Oncologia.data';

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
            type: Object as PropType<Oncologia>,
            default: OncologiaData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
