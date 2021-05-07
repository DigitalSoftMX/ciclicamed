import {
    defineComponent
} from '@vue/runtime-core';
import { DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        PatientProfileComponent: require('./patientProfile/PatientProfileComponent.vue').default,
        AttachmentComponent: require('./attachment/AttachmentComponent.vue').default,
        HistorialClinicoComponent: require('../../attachtments/HistorialClinico/Parent/HistorialClinicoComponent.vue').default,
        CitasSubsecuentesComponent: require('../../attachtments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        PrescriptionComponent: require('../prescription/PrescriptionComponent.vue').default,
        TestOrderComponent: require('../testOrder/TestOrderComponent.vue').default
    },
    emits: [],
    props: {
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    watch: {
    },
    methods: {
       
    },
})
