import { HeredoFamiliaresData } from '@data/Medical/Attachments/HistorialClinico/options/HeredoFamiliares.data';
import { HeredoFamiliares } from '@interface/Medical/Attachtments/HistorialClinico/options/HeredoFamiliares.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Object as PropType<HeredoFamiliares>,
            default: HeredoFamiliaresData
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