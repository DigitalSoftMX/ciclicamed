import { NutricionPerinatalData } from '@data/Medical/Attachments/Nutricion/NutricionPerinatal.data';
import { NutricionPerinatal } from '@interface/Medical/Attachtments/Nutricion/NutricionPerinatal.interface';
import { defineComponent } from '@vue/runtime-core';
import moment from 'moment';
import { PropType } from 'vue';

export default defineComponent({
    name: 'NutricionPerinatalComponent',
    props: {
        modelValue: {
            type: Object as PropType<NutricionPerinatal>,
            default: NutricionPerinatalData
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
        calculateSDG(fum: string, date: string)
        {
            return moment(fum).diff(moment(date), 'days');
        },
        calculateTrimestre(fum: string, date: string)
        {
            return moment(fum).diff(moment(date), 'months');
        }
    },
})
