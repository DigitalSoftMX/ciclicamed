import {
    defineComponent
} from '@vue/runtime-core';
import Vue from 'vue';
import { DefineComponent, PropType } from 'vue';
import MedicamentComponent from './medicament/MedicamentComponent.vue';

export default defineComponent({
    components: {
        MedicamentComponent: require('./medicament/MedicamentComponent.vue').default
    },
    emits: [],
    props: {
    },
    data() {
        return {
            medicamentList: [] as String[]
        };
    },
    mounted() {
    },
    watch: {
    },
    methods: {
       addMedicament()
       {
           this.medicamentList.push('a');
       }
    },
})
