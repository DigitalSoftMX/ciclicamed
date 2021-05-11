import { GinecoObstetrosData } from '../../../../defaultData/Attachments/HistorialClinico/GinecoObstetros.data';
import { GinecoObstetros } from '@/resources/js/interfaces/Attachtments/HistorialClinico/options/GinecoObstetros.interface';
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
    props: {
        formData: {
            type: Object as PropType<GinecoObstetros>,
            default: GinecoObstetrosData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
