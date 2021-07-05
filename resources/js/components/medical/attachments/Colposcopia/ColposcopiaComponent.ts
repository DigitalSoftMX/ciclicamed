import { ColposcopiaData } from '@data/Medical/Attachments/Colposcopia.data';
import { Colposcopia } from '@interface/Medical/Attachtments/Colposcopia.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    name: 'ColposcopiaComponent',
    props: {
        modelValue: {
            type: Object as PropType<Colposcopia>,
            default: ColposcopiaData
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
