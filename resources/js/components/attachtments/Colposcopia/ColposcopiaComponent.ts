import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
import { Colposcopia } from '@/resources/js/interfaces/Attachtments/Colposcopia.interface';
import { ColposcopiaData } from '../../../defaultData/Attachments/Colposcopia.data';

export default defineComponent({
    name: 'ColposcopiaComponent',
    components: {
    },
    props:{
        formData: {
            type: Object as PropType<Colposcopia>,
            default: ColposcopiaData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
