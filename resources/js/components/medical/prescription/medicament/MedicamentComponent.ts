import {
    defineComponent
} from '@vue/runtime-core';
import Vue from 'vue';
import { DefineComponent, PropType } from 'vue';
import axios from 'axios';
import { Prescription } from '@/resources/js/interfaces/Medical/Prescription/Prescription.interface';

export default defineComponent({
    components: {
    },
    emits: [],
    props: {
        medicamentList: {
            type: Array as PropType<any[]>,
            default: []
        },
    },
    data() {
        return {
            id: Math.floor(Math.random() * (50 - 1 + 1)) + 1,
            medicamentSelected: 0,
            medicamentData: {} as Prescription
        };
    },
    mounted() {
        const self = this;
        $(`#mcMedicamento${self.id}`).select2()
        $(`#mcMedicamento${self.id}`).on('select2:select', function (e) {
            self.medicamentSelected = self.medicamentList.findIndex(medicament => medicament.id === Number(e.params.data.id));
            self.medicamentData.medicament_id = self.medicamentList[self.medicamentSelected].id;
        });
    },
    watch: {
    },
    methods: {
    },
})
