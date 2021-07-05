import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, PropType } from 'vue';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { Clock } from '@interface/General/Clock.interface';
import { ClockData } from '@data/General/Clock.data';
require('bootstrap');

export default defineComponent({
    components: {
        PreregistrationComponent: defineAsyncComponent(() => import('@component/patient/preregistration/PreregistrationComponent.vue'))
    },
    emits: [],
    props: {
        lastDiagnostic: {
            type: String,
            default: ''
        },
        consultNote: {
            type: String,
            default: ''
        },
        patientData: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        clock: {
            type: Object as PropType<Clock>,
            default: ClockData
        }
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
        formatBirthDay()
        {
            return moment(this.patientData.birthday).format('DD/MM/YYYY');
        },
        openPreregistration() {
            $('#preregistration-modal').modal('show');
        }
    },
})
