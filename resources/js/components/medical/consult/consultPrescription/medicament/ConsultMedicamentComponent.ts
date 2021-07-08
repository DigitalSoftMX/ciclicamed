import { PrescriptionData } from '@data/Medical/Prescription.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { defineComponent } from '@vue/runtime-core';
import cloneDeep from 'lodash/cloneDeep';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: ['update:modelValue', 'onDelete'],
    props: {
        isUpdate: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: Object as PropType<Prescription>,
            default: PrescriptionData
        },
        medicamentList: {
            type: Array as PropType<any[]>,
            default: []
        },
        id: {
            type: Number as PropType<Number>,
            default: 0
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
    },
    data() {
        return {
            medicament: this.modelValue
        };
    },
    mounted() {
    },
    watch: {
        modelValue: {
            handler()
            {
                this.medicament = this.modelValue;
            },
            deep: true
        },
        medicament: {
            handler()
            {
                this.$emit('update:modelValue', this.medicament);
            },
            deep: true
        }
    },
    methods: {
        deleteThisComponent()
        {
            this.$emit('onDelete', this.id);
        }
    },
})
