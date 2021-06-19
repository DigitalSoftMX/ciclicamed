import { InterpretacionUltrasonidosData } from '@data/Medical/Test/Imagenologia/InterpretacionUltrasonidos.data';
import { InterpretacionUltrasonidos } from '@interface/Medical/Test/Imagenologia/InterpretacionUltrasonidos.interface';
import {  defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: ['update:modelValue'],
    props: {
        disabled: {
            type: Boolean,
            default: true
        },
        modelValue: {
            type: Object as PropType<InterpretacionUltrasonidos>,
            default: InterpretacionUltrasonidosData
        }
    },
    data() {
        return {
            formData: this.modelValue
        };
    },
    mounted() {
    },
    watch: {
        modelValue: {
            handler()
            {
                this.formData = this.modelValue;
            },
            deep: true
        },
        formData: {
            
            handler(newValue)
            {
                this.$emit('update:modelValue', newValue);
            },
            deep: true
        }
    },
    methods: {
    },
})