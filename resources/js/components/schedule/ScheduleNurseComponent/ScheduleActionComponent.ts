import { defineComponent } from '@vue/runtime-core';
import moment from 'moment';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';
moment.locale('es');
import axios from 'axios';
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { AlertError } from '@interface/General/Alert/Error/AlertError.interface';
import $ from 'jquery';
import { Role } from '@interface/User/Role.interface';
import { CitasSubsecuentesData } from '@data/Medical/Attachments/CitasSubsecuentes.data';

export default defineComponent({
    components: {
        'LateralScheduleComponent': require('@component/schedule/LateralScheduleComponent/LateralScheduleComponent.vue').default,
        'SuccessAlertComponent': require('@component/general/alert/SuccessAlertComponent.vue').default,
        'ErrorAlertComponent': require('@component/general/alert/ErrorAlertComponent.vue').default
    },
    emits: ['scheduleCanceled', 'scheduleUpdated'],
    props: {
        schedule: {
            type: Object as PropType<Schedule>,
            default: ScheduleData
        },
        role: {
            type: String as PropType<String>,
            default: ''
        },
        employeeID: {
            type: Number as PropType<Number>,
            default: -1
        }
    },
    data() {
        return {
            errors: {} as AlertError,
            successAlert: {
                title: '',
                message: ''
            },
            formData: CitasSubsecuentesData
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
})
