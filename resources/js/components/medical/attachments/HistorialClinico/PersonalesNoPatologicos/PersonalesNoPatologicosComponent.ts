import { PersonalesNoPatologicosData } from '@data/Medical/Attachments/HistorialClinico/options/PersonalesNoPatologicos.data';
import { PersonalesNoPatologicos } from '@interface/Medical/Attachtments/HistorialClinico/options/PersonalesNoPatologicos.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'HistorialClinicoComponent',
    components: {
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Object as PropType<PersonalesNoPatologicos>,
            default: PersonalesNoPatologicosData
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
