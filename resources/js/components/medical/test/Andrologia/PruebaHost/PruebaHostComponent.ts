import { PruebaHOSTData } from '@data/Medical/Test/Andrologia/PruebaHOST.data';
import { PruebaHOST } from '@interface/Medical/Test/Andrologia/PruebaHOST.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: ['update:modelValue'],
    props: {
        disabled: {
            type: Boolean,
            default: true
        },
        modelValue: {
            type: Object as PropType<PruebaHOST>,
            default: PruebaHOSTData
        }
    },
    data() {
        return {
            formData: this.modelValue,
        };
    },
    mounted() {
    },
    watch: {
        modelValue: {
            handler()
            {
                this.formData = this.modelValue;
            },
            deep: true
        },
        formData: {
            
            handler(newValue)
            {
                console.log(this.formData)
                this.$emit('update:modelValue', newValue);
            },
            deep: true
        }
    },
    methods: {
    },
})