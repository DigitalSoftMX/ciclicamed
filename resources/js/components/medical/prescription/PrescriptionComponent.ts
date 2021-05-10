import {
    defineComponent
} from '@vue/runtime-core';
import Vue from 'vue';
import { DefineComponent, PropType } from 'vue';
import axios from 'axios';

export default defineComponent({
    components: {
        MedicamentComponent: require('./medicament/MedicamentComponent.vue').default
    },
    emits: [],
    props: {
    },
    data() {
        return {
            medicamentList: [] as String[],
            prescriptionDataList: [] as any,
            prescriptionList: [] as Number[],
        };
    },
    mounted() {
        this.getMedicamentList();
    },
    watch: {
    },
    methods: {
       addPrescription()
       {
           this.prescriptionList.push(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
       },
       getMedicamentList(): void
        {
            axios.get(`/productos/medicamentos`)
                .then(response => {
                    this.medicamentList = [{
                        id: 0,
                        name: 'Seleccione un medicamento',
                    }, ...response.data];
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteMedicamentComponent(index: number)
        {
            this.prescriptionDataList.splice(index, 1);
            this.prescriptionList.splice(index, 1);
        },
        updateMedicamentSelected(index: number, value: number)
        {
            this.prescriptionDataList[index] = value;
            console.log(value)
        }
        
    },
})
