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
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Object as PropType<GinecoObstetros>,
            default: GinecoObstetrosData
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
    },
    data(){
        return {
            formData: this.modelValue,
        }
    },
    methods: {},
    watch: {
        modelValue: 
        {
            handler()
            {
                this.formData = this.modelValue;
            },
            deep: true
        },
        formData:
        {
            handler()
            {
                this.$emit('update:modelValue', this.formData);
            },
            deep: true
        }
    }
})
