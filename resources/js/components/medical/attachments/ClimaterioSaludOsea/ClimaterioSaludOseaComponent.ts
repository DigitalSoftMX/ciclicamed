import { ClimaterioSaludOseaData } from '@data/Medical/Attachments/ClimaterioSaludOsea.data';
import { ClimaterioSaludOsea } from '@interface/Medical/Attachtments/ClimaterioSaludOsea.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    name: 'ClimaterioSaludOseaComponent',
    props: {
        modelValue: {
            type: Object as PropType<ClimaterioSaludOsea>,
            default: ClimaterioSaludOseaData
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
