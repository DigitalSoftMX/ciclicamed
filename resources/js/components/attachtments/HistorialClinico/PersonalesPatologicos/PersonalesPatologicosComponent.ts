import { PersonalesPatologicosData } from '../../../../defaultData/Attachments/HistorialClinico/PersonalesPatologicos.data';
import { PersonalesPatologicos } from '@/resources/js/interfaces/Attachtments/HistorialClinico/options/PersonalesPatologicos.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'PersonalesPatologicosComponent',
    components: {
    },
    props:{
        formData: {
            type: Object as PropType<PersonalesPatologicos>,
            default: PersonalesPatologicosData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
