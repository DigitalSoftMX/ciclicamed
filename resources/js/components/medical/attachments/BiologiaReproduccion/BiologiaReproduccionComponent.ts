import { BiologiaReproduccionData } from '@data/Medical/Attachments/BiologiaReproduccion.data';
import { BiologiaReproduccion } from '@interface/Medical/Attachtments/BiologiaReproduccion.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    name: 'BiologiaReproduccionComponent',
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Object as PropType<BiologiaReproduccion>,
            default: BiologiaReproduccionData
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
