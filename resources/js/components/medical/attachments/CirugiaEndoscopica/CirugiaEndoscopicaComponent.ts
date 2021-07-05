import { CirugiaEndoscopicaData } from '@data/Medical/Attachments/CirugiaEndoscopica.data';
import { CirugiaEndoscopica } from '@interface/Medical/Attachtments/CirugiaEndoscopica.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    name: 'CitasSubsecuentesComponent',
    props: {
        modelValue: {
            type: Object as PropType<CirugiaEndoscopica>,
            default: CirugiaEndoscopicaData
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
