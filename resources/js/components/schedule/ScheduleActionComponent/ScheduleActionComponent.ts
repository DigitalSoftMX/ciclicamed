import {
    defineComponent
} from '@vue/runtime-core';
import moment from 'moment';
import { DefineComponent, PropType } from 'vue';
moment.locale('es');
import axios from 'axios';
import { Schedule } from '../../../interfaces/Schedule/Schedule.interface';
import { ScheduleData } from '../../../defaultData/Schedule/Schedule.data';
import { AlertError } from '../../../interfaces/Alert/Error/AlertError.interface';
require('bootstrap');

export default defineComponent({
    components: {
        'LateralScheduleComponent': require('../LateralScheduleComponent/LateralScheduleComponent.vue').default,
        'SuccessAlertComponent': require('../../alert/SuccessAlertComponent.vue').default,
        'ErrorAlertComponent': require('../../alert/ErrorAlertComponent.vue').default
    },
    emits: ['scheduleCanceled', ''],
    props: {
        schedule: {
            type: Object as PropType<Schedule>,
            default: () => ScheduleData
        },
    },
    data() {
        return {
            errors: {} as AlertError,
            isCancelOptionEnabled: false as boolean,
            isEditOptionEnabled: false as boolean
        };
    },
    mounted() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
    },
    watch: {
        schedule()
        {
            console.log(this.schedule)
            this.showCancelOption();
            this.showEditOption();
        }
    },
    methods: {
        formatScheduleTime(datetime: string): string {
            return moment(datetime).format('hh:mm A');
        },
        formatScheduleDate(datetime: string): string {
            return moment(datetime).format('D [de] MMMM [del] YYYY');
        },
        openLateralSchedule()
        {
            const child = this.$parent?.$refs.openLateralSchedule as DefineComponent;
            child.openLateralSchedule()
        },
        deleteSchedule()
        {
            axios.delete<Schedule>(`/consultas/${this.schedule.id}`,)
            .then(response => {
                this.$emit('scheduleCanceled', response.data);
                $('#actionConsultSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#actionConsultError').modal('show');
            })
        },
        showCancelOption()
        {
            const estados: string[] = ['Agendado', 'Confirmado', 'Ausente'];
            this.isCancelOptionEnabled = moment(this.schedule.consult_schedule_start).diff(moment()) > 0 && estados.includes(this.schedule.status!.name);
        },
        showEditOption()
        {
            const estados: string[] = ['Agendado', 'Confirmado', 'Ausente', 'Cancelado'];
            this.isEditOptionEnabled = moment(this.schedule.consult_schedule_start).diff(moment()) > 0 && estados.includes(this.schedule.status!.name);
        }
    },
})
