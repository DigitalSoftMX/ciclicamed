import { defineComponent } from '@vue/runtime-core';
import moment from 'moment';
import { DefineComponent, PropType } from 'vue';
moment.locale('es');
import axios from 'axios';
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { AlertError } from '@interface/General/Alert/Error/AlertError.interface';
import $ from 'jquery';

/**
 * @description Componente que datos básicos de la cita seleccionada, mediante el uso de un modal
 * @class ScheduleActionComponent
 * @example <schedule-action-component :schedule="" role="" :employeeID=""></schedule-action-component>
*/
export default defineComponent({
    /**
     * {@link LateralScheduleComponent}, {@link SuccessAlertComponent}, {@link ErrorAlertComponent}
     * @member ScheduleActionComponent.components
    */
    components: {
        'LateralScheduleComponent': require('@component/schedule/LateralScheduleComponent/LateralScheduleComponent.vue').default,
        'SuccessAlertComponent': require('@component/general/alert/SuccessAlertComponent.vue').default,
        'ErrorAlertComponent': require('@component/general/alert/ErrorAlertComponent.vue').default
    },
    /**
     * Eventos del componente
     * @member ScheduleActionComponent.emits
     * @property {Schedule} scheduleCanceled Evento que se emite se cancela una consulta junto con los datos de la consulta
     * @property {null} scheduleUpdated Evento que se emite cuando se actualiza una consulta
    */
    emits: ['scheduleCanceled', 'scheduleUpdated'],
    /**
      * Propiedades que recibe el componente
      * @member ScheduleActionComponent.props
      * @property {Schedule} schedule (Obligatorio) Cita médica seleccionada
      * @property {string} role Rol del usuario logueado actualmente
      * @property {string} employeeID ID del empleado logueado actualmente
    */
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
    /**
    * Variables del componente
    * @member ScheduleActionComponent.data
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
    * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
    */
    data() {
        return {
            errors: {} as AlertError,
            successAlert: {
                title: '',
                message: ''
            }
        };
    },
    /**
     * Propiedades computadas del componente
     * @member ScheduleActionComponent.computed
     * @property {string} scheduleStatus Retorna el estado de la consulta seleccionada. Si el estado de la consulta esta confirmada, verifica si el paciente
     * ya esta en sucursal, en caso de que se cumpla esta condición, retorna 'Paciente en sucursal', en caso contrario retorna el estado de la consulta
     * devuelto por el servidor
     * @property {boolean} isAssistantOptionEnabled Habilita el boton de marcar asistencia. En caso del rol asistente, verifica si la fecha de la cita es del presente día,
     * si la cita esta confirmada y que no se haya marcado con anteriorad la asistencia del paciente para esta cita
     * @property {boolean} isCancelOptionEnabled Habilita el boton de cancelar cita. En caso del rol asistente, verifica que el estado de la cita sea  'Agendado' || 'Confirmado' || 'Ausente'
     * @property {boolean} isEditOptionEnabled Habilita el boton de editar cita. En caso del rol asistente, verifica que el estado de la cita sea 'Agendado' || 'Ausente'
     * @property {boolean} showScheduleOption Habilita la sección de los botones de marcar asistencia, confirmar cita y e inicia cita. De acuerdo al rol del usuario logueado
     * actualmente, verifica que la condición de ese rol se cumpla
     * @property {boolean} isStartScheduleEnabled Habilita el boton de inciar cita. En caso del doctor verifica que la cita que seleccinó sea una cita que le pertenezca, en caso
     * de que sea correcto, verifica que la hora actual sea al menos 60 minutos antes de la cita, además de que la enfermera ya haya tomado los signos vitales. En caso de la
     * enfermera, verifica que el paciente ya este en la clinica y que no se haya finalizado la toma de signos vitales
     * @property {boolean} isConfirmScheduleEnabled Habilita el boton de confirmar cita. En caso del rol asistente, verifica que el estado de la cita sea Agendado
    */
    computed: {
        scheduleStatus(): string
        {
            if(this.schedule.status!.name === 'Confirmado')
            {
                return this.schedule.assistant_start_at! ? 'Paciente en sucursal' : this.schedule.status!.name;
            }
            return this.schedule.status!.name;
        },
        isAssistantOptionEnabled(): boolean
        {
            switch(this.role)
            {
                case 'Asistente':
                    return moment().isSame(moment(this.schedule.consult_schedule_start), 'day') && this.schedule.status!.name === 'Confirmado' && !this.schedule.assistant_start_at;
                case 'Administrador':
                    return true;
                default:
                    return false;
            }
        },
        isCancelOptionEnabled(): boolean
        {
            switch(this.role)
            {
                case 'Doctor':
                    return false;
                case 'Paciente':
                    return false;
                case 'Administrador':
                    return true;
                default:
                    return this.schedule.status!.name.includes('Agendado' || 'Confirmado' || 'Ausente') && this.role.includes('Asistente' || 'Administrador');
            }
        },
        isEditOptionEnabled(): boolean
        {
            switch(this.role)
            {
                case 'Doctor':
                    return false;
                case 'Paciente':
                    return false;
                case 'Administrador':
                    return true;
                default:
                    return this.schedule.status!.name?.includes('Agendado' || 'Ausente') && this.role.includes('Asistente' || 'Administrador');
            }
        },
        showScheduleOption(): boolean
        {
            switch(this.role)
            {
                case 'Doctor':
                    return this.isStartScheduleEnabled;
                case 'Asistente' :
                    return this.isConfirmScheduleEnabled || this.isAssistantOptionEnabled;
                case 'Enfermera':
                    return this.isStartScheduleEnabled;
                case 'Imagenologia':
                    return this.isStartScheduleEnabled;
                case 'Laboratorio':
                    return this.isStartScheduleEnabled;
                case 'Administrador':
                    return true;
                case 'Paciente':
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
                    if(this.employeeID === this.schedule.doctor_id)
                    {
                        // console.log('Entro Doctor'+ this.employeeID + '-' + this.schedule.doctor_id);
                        if (this.schedule.nurse_finish_at && this.schedule.status!.name === 'Finaliza Signos') {
                            this.schedule.status!.name = 'Finaliza Signos Vitales'
                        }
                        var minutes = moment(this.schedule.consult_schedule_start).subtract(60, 'minutes');
                        moment().isSameOrAfter(minutes) && this.schedule.status!.name === 'Finaliza Signos Vitales';
                        return true
                    }
                    return false;
                case 'Enfermera':
                    return this.schedule.assistant_start_at && !this.schedule.nurse_finish_at ? true : false;
                // case 'Imagenologia':
                //     return moment().isAfter(moment(this.schedule.consult_schedule_start)) && this.schedule.status!.name !== 'Finalizado';
                // case 'Laboratorio':
                //     return moment().isAfter(moment(this.schedule.consult_schedule_start)) && this.schedule.status!.name !== 'Finalizado';
                case 'Administrador':
                    return true;
                default:
                    return false;
            }
        },
        /**
         * Muestra el boton de Confirmar cita Solo par aAsistente y Administrador
         * @function ScheduleActionComponent.isConfirmScheduleEnabled
         * @returns {boolean} true o false
         */
        isConfirmScheduleEnabled(): boolean
        {
            switch(this.role)
            {
                case 'Asistente':
                    return this.schedule.status!.name == 'Agendado' ? true : false;
                case 'Administrador':
                    return this.schedule.status!.id <= 1 ? true : false;
                default:
                    return false;
            }
        },
        isFullFormat():boolean{
            if(this.role=='Paciente' && this.schedule.medicalspecialty_id==3){
                return true;
            }
            return false;
        }
    },
    methods: {
        /**
         * Indica al servidor que se debe de marcar la asistencia del paciente a sus cita. En caso de que la petición sea correcta, se asigna al objecto successAlert
         * el mensaje de éxito, a lo cual se procede a ocultar este componente y finalmente se muestra el componente {@link SuccessAlertComponent}. En caso contrario, se
         * asigna a la variable errors, los errores devueltos por el servidor, a lo cual se muestra el componente {@link ErrorAlertComponent}
         * @function ScheduleActionComponent.startAssistance
        */
        startAssistance()
        {
            axios.post(`/consultas/${this.schedule.id}/asistencia`)
            .then(response => {
                console.log('Exito '+ response.data.datas);
                this.successAlert.message = 'Se ha iniciado la asistencia';
                this.successAlert.title = 'Asistencia iniciada';
                $('#schedule-action').modal('hide');//Oculta modal ScheduleAcionConponenet
                $('#actionConsultSuccess').modal('show');
                this.$emit('scheduleUpdated');//Actualizacion de agenda checar en los demas estatus
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#actionConsultError').modal('show');
            })
        },
        /**
         * Indica al servidor que se confirma la cita seleccionada. En caso de que la petición sea correcta, se asigna al objecto successAlert
         * el mensaje de éxito, a lo cual se procede a ocultar este componente y finalmente se muestra el componente {@link SuccessAlertComponent}
         * @function ScheduleActionComponent.confirmSchedule
        */
        confirmSchedule()
        {
            axios.post(`/consultas/${this.schedule.id}/confirmar`)
            .then(response => {
                console.log('Exito '+ response.data.datas);
                this.successAlert.message = 'Se confirmado la cita correctamente';
                this.successAlert.title = 'Datos de la consulta actualizados';
                $('#schedule-action').modal('hide');
                $('#actionConsultSuccess').modal('show');
                this.$emit('scheduleUpdated');//Actualizacion de agenda checar en los demas estatus
            })
            .catch(error => {
                // console.log('Error confirmSchedule ' + error.response.data.errors);
            })
        },
        /**
         * Inicia la cita médica seleccionada (rol doctor, administrador). En caso de que la petición sea correcta, se redirige a la página de la consulta.
         * En caso contrario, se asigna a la variable errors, los errores devueltos por el servidor, a lo cual se muestra el componente {@link ErrorAlertComponent}
         * @function ScheduleActionComponent.startSchedule
        */
        startSchedule()
        {
            axios.post(`/consultas/${this.schedule.id}/iniciar`)
            .then(response => {
                console.log('Exito ', response.data.datas);
                const url = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content
                window.location.href = `${url}/app/consulta`;
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#actionConsultError').modal('show');
            })
        },
        /**
         * Inicia la cita médica seleccionada (rol enfermera y administrador).
        */
        startScheduleNurse()
        {
            axios.post(`/consultas/${this.schedule.id}/signosvitales`)
            .then(response => {
                console.log('Exito ', response.data.datas);
                const url = (document.head.querySelector('meta[name="api-base-url"]') as any)!.content
                window.location.href = `${url}/app/consulta`;
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#actionConsultError').modal('show');
            })
        },
        /**
         * Retorna la hora de la cita seleccionada
         * @function ScheduleActionComponent.formatScheduleTime
         * @param {string} datetime Fecha de la cita
         * @returns {string}
        */
        formatScheduleTime(datetime: string): string {
            return moment(datetime).format('hh:mm a');//12 horas ejemplo 07:30 am
        },
        /**
         * Retorna la hora de la cita en formato 24 horas
         * @function ScheduleActionComponent.formatScheduleTime24
         * @param {string} datetime Fecha de la cita
         * @returns {string}
         */
        formatScheduleTime24(datetime: string): string {
            return moment(datetime).format('HH:mm');
        },
        /**
         * Retorna la fecha de la cita seleccionada en un formato local
         * @function ScheduleActionComponent.formatScheduleTime
         * @param {string} datetime Fecha de la cita
         * @returns {string}
        */
        formatScheduleDate(datetime: string): string {
            return moment(datetime).format('D [de] MMMM [del] YYYY');
        },
        /**
         * Abre el componente {@link LateralScheduleComponent}
         * @function ScheduleActionComponent.openLateralSchedule
        */
        openLateralSchedule()
        {
            const child = this.$parent?.$refs.openLateralSchedule as DefineComponent;
            child.openLateralSchedule()
        },
        /**
         * Cancela la cita seleccionada. En caso de que la petición sea correcta, se asigna al objecto successAlert
         * el mensaje de éxito, a lo cual se procede enviar un envento scheduleCanceled con los datos de la consulta cancelada, para
         * finalmente mostrar el componente {@link SuccessAlertComponent}. En caso contrario, se
         * asigna a la variable errors, los errores devueltos por el servidor, a lo cual se muestra el componente {@link ErrorAlertComponent}
         * @function ScheduleActionComponent.deleteSchedule
        */
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
