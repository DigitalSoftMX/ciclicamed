import { UroginecologiaData } from '@data/Medical/Attachments/Uroginecologia.data';
import { Uroginecologia } from '@interface/Medical/Attachtments/Uroginecologia.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
export default defineComponent({
    name: 'ColposcopiaComponent',
    props: {
        modelValue: {
            type: Object as PropType<Uroginecologia>,
            default: UroginecologiaData
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
