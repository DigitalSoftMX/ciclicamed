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
    emits: ['scheduleCanceled', ''],
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
            isCancelOptionEnabled: false as boolean,
            isEditOptionEnabled: false as boolean
        };
    },
    computed: {
        isStartScheduleEnabled(): boolean
        {
            switch(this.role)
            {
                case 'Doctor':
                    return moment().isAfter(moment(this.schedule.consult_schedule_start)) && this.schedule.status!.name !== 'Finalizado';
                case 'Administrador':
                    return true;
                default:
                    return false;
            }
        },
        isConfirmScheduleEnabled(): boolean
        {
            if(this.role.includes('Asistente' || 'Administrador'))
            {
                return true;
            }
            return false;
        }
    },
    watch: {
        schedule:
        {
            handler()
            {
                switch(this.role)
                {
                    case 'Administrador':
                        break;
                    case 'Asistente':
                        break;
                    case 'Enfermera':
                        break;
                    case 'Doctor':
                        break;
                    default: 
                        this.isCancelOptionEnabled = false;
                        this.isEditOptionEnabled = false;
                        break;
                }
            },
            deep: true,
        }
    },
    methods: {
        startSchedule()
        {
            axios.post(`/consultas/${this.schedule.id}/iniciar`)
            .then(response => {
                const url = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content
                window.location.href = `${url}/app/consulta`;
            })
            .catch(error => {
                console.log(error)
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
            const child = this.$parent?.$parent?.$refs.openLateralSchedule as DefineComponent;
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
