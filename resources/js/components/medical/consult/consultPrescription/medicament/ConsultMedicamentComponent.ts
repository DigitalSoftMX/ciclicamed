import { PrescriptionData } from '@data/Medical/Prescription.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
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
        const self = this;
        $(`#mcMedicamento${self.id}`).select2()
        $(`#mcMedicamento${self.id}`).on('select2:select', function (e) {
            self.medicamentSelected = self.medicamentList.findIndex(medicament => medicament.id === Number(e.params.data.id));
            self.medicamentDataCopy.medicament_id = self.medicamentSelected;
            self.$emit('mcChange', self.medicamentIndex, self.medicamentDataCopy);
        });
        $(`#mcMedicamento${self.id}`).val(this.medicamentDataCopy.medicament_id).trigger('change');
    },
    watch: {
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
