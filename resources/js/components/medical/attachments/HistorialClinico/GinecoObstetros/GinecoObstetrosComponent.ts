import { GinecoObstetrosData } from '@data/Medical/Attachments/HistorialClinico/options/GinecoObstetros.data';
import { GinecoObstetros } from '@interface/Medical/Attachtments/HistorialClinico/options/GinecoObstetros.interface';
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
            formDataCopy: Object.assign({}, this.$props.formData),
            disabled: {
                type: Boolean as PropType<Boolean>,
                default: true
            },
        }
    },
    methods: {},
    watch: {
        formData()
        {
            this.formDataCopy = Object.assign({}, this.$props.formData);
        }
    }
})
