import { MaternoFetalData } from '@data/Medical/Attachments/MaternoFetal/MaternoFetal.data';
import { MaternoFetal } from '@interface/Medical/Attachtments/MaternoFetal/MaternoFetal.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        CuestionarioCalculoRiesgoComponent: require('@component/medical/attachments/MaternoFetal/CuestionarioCalculoRiesgo/CuestionarioCalculoRiesgoComponent.vue').default,
        ResultadoCalculoRiesgoComponent: require('@component/medical/attachments/MaternoFetal/ResultadoCalculoRiesgo/ResultadoCalculoRiesgoComponent.vue').default,
    },
    props: {
        modelValue: {
            type: Object as PropType<MaternoFetal>,
            default: MaternoFetalData
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
