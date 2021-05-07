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
            prescriptionList: [] as String[],
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
           this.prescriptionList.push('a');
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
    },
})
