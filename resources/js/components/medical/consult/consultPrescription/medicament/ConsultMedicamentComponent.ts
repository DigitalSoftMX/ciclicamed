import { PrescriptionData } from '@data/Medical/Prescription.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import vSelect from "vue-select-3/src";

export default defineComponent({
    components: {
        vSelect,
    },
    emits: ['mcDelete', 'mcChange'],
    props: {
        isUpdate: {
            type: Boolean,
            default: false
        },
        medicamentData: {
            type: Object as PropType<Prescription>,
            default: PrescriptionData
        },
        medicamentList: {
            type: Array as PropType<any[]>,
            default: []
        },
        medicamentIndex: {
            type: Number as PropType < Number > ,
            default: -1
        }
    },
    data() {
        return {
            id: Math.floor(Math.random() * (50 - 1 + 1)) + 1,
            medicamentSelected: 0,
            medicamentDataCopy: Object.assign({}, this.medicamentData)
        };
    },
    mounted() {
    },
    watch: {
        medicamentDataCopy:
        {
            handler()
            {
                this.$emit('mcChange', this.medicamentIndex, this.medicamentDataCopy);
            },
            deep: true
        }
    },
    methods: {
        deleteMedicament() {
            this.$emit('mcDelete', this.medicamentIndex)
        },
        updateMedicamentData()
        {
            this.$emit('mcChange', this.medicamentIndex, this.medicamentDataCopy);
        }
    },
})
