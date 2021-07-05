import { MaternoFetalCuestionarioData } from '@data/Medical/Attachments/MaternoFetal/MaternoFetalCuestionario.data';
import { MaternoFetalCuestionario } from '@interface/Medical/Attachtments/MaternoFetal/options/MaternoFetalCuestionario.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    name: 'ColposcopiaComponent',
    props: {
        modelValue: {
            type: Object as PropType<MaternoFetalCuestionario>,
            default: MaternoFetalCuestionarioData
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
