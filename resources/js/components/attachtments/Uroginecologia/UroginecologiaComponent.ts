import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
import { Uroginecologia } from '@/resources/js/interfaces/Attachtments/Uroginecologia.interface';
import { UroginecologiaData } from '../../../defaultData/Attachments/Uroginecologia.data';

export default defineComponent({
    name: 'ColposcopiaComponent',
    components: {
    },
    props:{
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
