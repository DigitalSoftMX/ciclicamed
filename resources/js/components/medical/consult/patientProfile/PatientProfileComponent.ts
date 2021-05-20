import {
    defineComponent
} from '@vue/runtime-core';
import { DefineComponent, PropType } from 'vue';
import { PatientData } from '../../../../defaultData/Patient/Patient.data';
import { Patient } from '@/resources/js/interfaces/Patient/Patient.interface';
import { Clock } from '@/resources/js/interfaces/other/Clock.interface';
import { ClockData } from '../../../../defaultData/other/Clock.data';
import moment from 'moment';

export default defineComponent({
    components: {
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
        }
    },
})
