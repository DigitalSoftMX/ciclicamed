import { Anexo39Data } from '@data/Medical/Attachments/MaternoFetal/Anexo39.data';
import { Anexo39 } from '@interface/Medical/Attachtments/MaternoFetal/options/Anexo39.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
export default defineComponent({
    name: 'ColposcopiaComponent',
    props: {
        modelValue: {
            type: Object as PropType<Anexo39>,
            default: Anexo39Data
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
    },
    data() {
        return {
            formData: this.modelValue,
        }
    },
    methods: {},
    watch: {
        modelValue:
        {
            handler() {
                this.formData = this.modelValue;
            },
            deep: true
        },
        formData:
        {
            handler() {
                this.$emit('update:modelValue', this.formData);
            },
            deep: true
        }
    }
})
