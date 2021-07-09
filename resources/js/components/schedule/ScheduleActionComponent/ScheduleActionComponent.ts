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
            }
        };
    },
    computed: {
        isCancelOptionEnabled(): boolean
        {
            return this.schedule.status!.name.includes('Agendado' || 'Confirmado' || 'Ausente') && this.role.includes('Asistente' || 'Administrador');
        },
        isEditOptionEnabled(): boolean
        {
            return this.schedule.status!.name.includes('Agendado' || 'Ausente') && this.role.includes('Asistente' || 'Administrador');
        },
        showScheduleOption(): boolean
        {
            switch(this.role)
            {
                case 'Doctor':
                    return this.isStartScheduleEnabled;
                case 'Asistente' :
                    return this.isConfirmScheduleEnabled;
                case 'Enfermera':
                    return this.isStartScheduleEnabled && !this.schedule.nurse_finish_at;
                case 'Imagenologia':
                    return this.isStartScheduleEnabled;
                case 'Laboratorio':
                    return this.isStartScheduleEnabled;
                case 'Administrador':
                    return true;
                default:
                    return false;
            }
        },
        isStartScheduleEnabled(): boolean
        {
            switch(this.role)
            {
                case 'Doctor':
                    return moment().isAfter(moment(this.schedule.consult_schedule_start)) && this.schedule.status!.name !== 'Finalizado';
                case 'Enfermera':
                    return moment().isAfter(moment(this.schedule.consult_schedule_start)) && this.schedule.status!.name !== 'Finalizado';
                case 'Imagenologia':
                    return moment().isAfter(moment(this.schedule.consult_schedule_start)) && this.schedule.status!.name !== 'Finalizado';
                case 'Laboratorio':
                    return moment().isAfter(moment(this.schedule.consult_schedule_start)) && this.schedule.status!.name !== 'Finalizado';
                case 'Administrador':
                    return true;
                default:
                    return false;
            }
        },
        isConfirmScheduleEnabled(): boolean
        {
            return (this.role === 'Asistente' && this.schedule.status!.name === 'Agendado') || this.role === 'Administrador' ? true : false;
        }
    },
    watch: {
    },
    methods: {
        confirmSchedule()
        {
            axios.post(`/consultas/${this.schedule.id}/confirmar`)
            .then(response => {
                this.$emit('scheduleUpdated');
                this.successAlert.message = 'Se confirmado la cita correctamente';
                this.successAlert.title = 'Datos de la consulta actualizados';
                $('#schedule-action').modal('hide');
                $('#actionConsultSuccess').modal('show');
            })
            .catch(error => {
                console.log(error)
            })
        },
        startSchedule()
        {
            axios.post(`/consultas/${this.schedule.id}/iniciar`)
            .then(response => {
                const url = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content
                window.location.href = `${url}/app/consulta`;
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#actionConsultError').modal('show');
            })
        },
        formatScheduleTime(datetime: string): string {
            return moment(datetime).format('hh:mm');
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
                this.successAlert.message = 'Se ha cancelado la cita correctamente';
                this.successAlert.title = 'Datos de la consulta actualizados';
                this.$emit('scheduleCanceled', response.data);
                $('#actionConsultSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#actionConsultError').modal('show');
            })
        },
    },
})
