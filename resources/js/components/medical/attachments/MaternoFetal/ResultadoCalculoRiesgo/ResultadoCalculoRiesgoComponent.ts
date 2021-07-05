import { MaternoFetalResultadosData } from '@data/Medical/Attachments/MaternoFetal/MaternoFetalResultados.data';
import { MaternoFetalResultados } from '@interface/Medical/Attachtments/MaternoFetal/options/MaternoFetalResultados.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
export default defineComponent({
    name: 'ColposcopiaComponent',
    props: {
        modelValue: {
            type: Object as PropType<MaternoFetalResultados>,
            default: MaternoFetalResultadosData
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
