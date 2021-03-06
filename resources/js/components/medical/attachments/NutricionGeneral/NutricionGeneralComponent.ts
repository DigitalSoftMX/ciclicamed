import { NutricionGeneralData } from '@data/Medical/Attachments/Nutricion/NutricionGeneral.data';
import { NutricionGeneral } from '@interface/Medical/Attachtments/Nutricion/NutricionGeneral.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    name: 'NutricionGeneralComponent',
    props: {
        modelValue: {
            type: Object as PropType<NutricionGeneral>,
            default: NutricionGeneralData
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
    mounted() {
    },
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
    },
    methods: {
        sumTotal(num1: number, num2: number, num3: number, num4: number)
        {
            return num1 + num2 + num3 + num4;
        }
    },
})
