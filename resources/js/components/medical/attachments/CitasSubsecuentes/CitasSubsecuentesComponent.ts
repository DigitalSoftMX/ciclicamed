import { CitasSubsecuentesData } from '@data/Medical/Attachments/CitasSubsecuentes.data';
import { CitasSubsecuentes } from '@interface/Medical/Attachtments/CitasSubsecuentes.interface';
import { defineComponent } from '@vue/runtime-core';
import { String } from 'lodash';
import { PropType } from 'vue';

export default defineComponent({
    name: 'CitasSubsecuentesComponent',
    props: {
        modelValue: {
            type: Object as PropType<CitasSubsecuentes>,
            default: CitasSubsecuentesData
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        title: {
            type: String,
            default: 'Cita actual'
        },
        role:{
            type: String,
            default: ''
        }
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
