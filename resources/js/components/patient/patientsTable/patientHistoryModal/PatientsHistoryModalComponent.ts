import HistorialClinicoComponent from '@component/medical/attachments/HistorialClinico/HistorialClinicoComponent';
import { HistorialClinicoData } from '@data/Medical/Attachments/HistorialClinico/HistorialClinico.data';
import { PatientData } from '@data/Patient/Patient.data';
import { PreregistrationData } from '@data/Patient/Preregistration.data';
import { HistorialClinico } from '@interface/Medical/Attachtments/HistorialClinico/HistorialClinico.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        HistorialClinicoComponent
    },
    emits: ['onRoleSelected'],
    props: {
        patient: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        edit: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    watch: {
        patient: 
        {
            handler()
            {
                this.getHistory();
            },
            deep: true
        }
    },
    data() {
        return {
            errors: [],
            historialClinico: HistorialClinicoData
        };
    },
    mounted() {
    },
    methods: {
        getHistory()
        {
            axios.get(`/pacientes/${this.patient.id}/historial`)
            .then(response => {
                this.historialClinico = response.data.data.form;
            })
            .catch(error => {
                
            })
        },
    }
})