import $ from 'jquery';
import { defineComponent } from '@vue/runtime-core';
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { DefineComponent, PropType } from 'vue';
import FullCalendar, { CalendarOptions } from '@fullcalendar/vue3';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarConfig } from '@config/FullCalendar.config';
import { FullCalendarBusinessHour } from '@interface/General/FullCalendarBusinessHour.interface';
import { Select } from '@interface/General/Select.interface';

/** 
 * @description Componente que muestra las agenda de citas médicas creadas, mediante un calendario
 * @class CalendarComponent
 * @example <calendar-component :schedules="" :businessHours="" role=""></calendar-component>
*/
export default defineComponent({
    name: 'CalendarComponent',
    /** 
     * {@link https://fullcalendar.io/|FullCalendar para Vue3} 
     * @member CalendarComponent.components
    */
    components: {
        FullCalendar,
    },
    /** 
     * Eventos del componente
     * @member CalendarComponent.emits
     * @property {FullCalendarData} onNewSchedule Evento que se emite cuando se crea una nueva cita médica con la información que provee FullCalendar al hacer click en una {@link https://fullcalendar.io/docs/dateClick|fecha} 
     * @property {FullCalendarData} onSelectedSchedule Evento que se emite cuando se selecciona una cita médica con la información que provee FullCalendar al hacer click en una {@link https://fullcalendar.io/docs/eventClick|cita} 
    */
    emits: ['onNewSchedule', 'onSelectedSchedule'],
    /** 
     * Propiedades que recibe el componente 
     * @member CalendarComponent.props
     * @property {Schedule[]} schedules (Obligatorio) Lista de citas médicas agendadas
     * @property {FullCalendarBusinessHour[]} businessHours (Opcional) Horario de trabajo del empleado seleccionado
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
    */
    props: {
        schedules: {
            type: Array as PropType<Schedule[]>,
            default: []
        },
        businessHours: {
            type: Array as PropType<FullCalendarBusinessHour[]>,
            default: []
        },
        role: {
            type: String as PropType<String>,
            default: ''
        },
    },
    /**
    * Variables del componente
    * @member CalendarComponent.data
    * @property {Object} calendarOptions Guarda la información de configuración de {@link https://fullcalendar.io/docs/vue|FullCalendar}
    * @property {Schedule[]} schedulesCopy Guarda una copia de las citas médicas creadas para su modificación
    * @property {FullCalendarBusinessHour[]} hoursEnabled Guarda una copia del horario de trabajo del empleado seleccionado
    */
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                allDaySlot: false,
                businessHours: [...this.businessHours],
                ...FullCalendarConfig,
                dateClick: this.fullcalendarDateClick,
                eventClick: this.fullcalendarEventClick
            },
            schedulesCopy: Object.assign([], ...this.schedules) as Schedule[],
            hoursEnabled: [] as FullCalendarBusinessHour[],
        }
    },
    /** 
     * Variables a observar por el componente
     * @member CalendarComponent.watch
     * @property {FullCalendarBusinessHour[]} businessHours Al actualizar el horario del trabajador seleccionado, se asigna a la opción de  FullCalendar (businessHour) los horarios
     * actualizados para que bloquee los dias y horas en las que no trabaje el empleado
     * @property {Schedule[]} schedules Al actualizar las citas médicas agendadas, se asigna una copia a la variable schedulesCopy, a lo cual se procede a
     * eliminar las {@link CalendarComponent.deleteAllEvents|citas antiguas} y agregando las {@link CalendarComponent.renderSchedules|nuevas citas}
    */
    watch: {
        businessHours()
        {
            this.calendarOptions.businessHours = [...this.businessHours];
        },
        schedules()
        {
            this.schedulesCopy = this.schedules;
            this.deleteAllEvents();
            this.renderSchedules();
        }
    },
    methods: {
        /** 
         * Elimina todas las citas médicas (eventos en FullCalendar) que se muestran en el calendario {@link https://fullcalendar.io/docs/Event-remove|más información}
         * @function CalendarComponent.deleteAllEvents
        */
        deleteAllEvents()
        {
            const calendar = this.$refs.fullCalendar as DefineComponent;
            const events = calendar.getApi().getEvents();
            events.forEach((event: any) => {
                event.remove();
            });
        },
        /** 
         * Recorre todas las citas médicas (eventos en FullCalendar) que están en la variable schedulesCopy y procede a {@link CalendarComponent.addSchedule|agregarlos al calendario}
         * @function CalendarComponent.renderSchedules
        */
        renderSchedules(): void {
            this.schedulesCopy.map(schedule => {
                this.addSchedule(schedule);
            });
        },
        /** 
         * Si detecta que la cita médica seleccionada tiene el nombre del doctor, procede a retonar el nombre completo del doctor, en caso contrario,
         * retorna el nombre completo del paciente
         * @param {Schedule} schedule Cita médica seleccionada
         * @function CalendarComponent.getNameSchedule
         * @returns {string}
        */
        getNameSchedule(schedule: Schedule): string {
            return schedule.doctor ? `doctor ${schedule.doctor!.first_name ?? ''} ${schedule.doctor!.last_name ?? ''} con paciente ${schedule.patient!.first_name ?? ''} ${schedule.patient!.last_name ?? ''}` :
                                     `${schedule.patient?.first_name ?? ''} ${schedule.patient?.last_name ?? ''}`;
        },
        /** 
         * Retorna el nombre que se va a mostrar en cada uno de las citas médicas (eventos en FullCalendar) de acuerdo a la categoría de la cita médica a la que pertenezca
         * @param {string} category Tipo de cita
         * @param {string} name Nombre del {@link CalendarComponent.getNameSchedule|usuario o paciente}
         * @function CalendarComponent.getScheduleTitle
         * @returns {string}
        */
        getScheduleTitle(category: string, name: string): string {
            switch (category) {
                case 'Primera cita':
                    return `Primera cita con ${name}`;
                case 'Cita médica':
                    return `Cita médica con ${name}`;
                case 'Toma de muestras':
                    return `Toma de muestras con ${name}`;
                case 'Estudio de laboratorio':
                    return `Estudio de laboratorio con ${name}`;
                case 'Estudio de imagenología':
                    return `Estudio de imagenología con ${name}`;
                case 'Checkup':
                    return `CheckUp con ${name}`;
                default:
                    return 'Cita'
            }
        },
        /** 
         * Agrega al calendario la cita médica seleccionada (evento en FullCalendar). Para realizarlo, primer obtiene {@link CalendarComponent.getNameSchedule|el nombre del paciente o doctor a mostrar en la cita},
         * agrega el título (title), color de borde (borderColor) y color de fondo (backgroundColor) predefinidos al evento. Después consulta el rol actual del usuario
         * logueado actualmente: en caso del paciente agrega datos predefinidos, en caso del doctor y predefinido, obtiene {@link CalendarComponent.getScheduleTitle|el nombre del tipo de cita},
         * el color de fondo y de borde (si no existe un color provisto por el servidor [de acuerdo al estado de la cita seleccionada] provee uno por defecto).
         * Al obtener los datos anteriores entonces agrega los datos del evento al calendario {@link CalendarComponent.addSchedule|más información}
         * @param {Schedule} schedule Cita médica seleccionada
         * @function CalendarComponent.addSchedule
        */
        addSchedule(schedule: Schedule)
        {
            const name = this.getNameSchedule(schedule);
            const calendar = this.$refs.fullCalendar as DefineComponent;
            var title = 'Consulta';
            var borderColor = '#60269E';
            var backgroundColor = '#60269E';
            switch(this.role)
            {
                case 'Paciente':
                    title = 'Consulta';
                    borderColor = '#60269E';
                    backgroundColor = '#60269E';
                    break;
                case 'Doctor':
                    title = this.getScheduleTitle(schedule.type?.name ?? '', name);
                    borderColor = !schedule.status?.color ? '#60269E' : schedule.status!.color;
                    backgroundColor = !schedule.status?.color ? '#60269E' : schedule.status!.color!;
                    if(schedule.status?.name === 'Confirmado')
                    {
                        borderColor = schedule.assistant_start_at ? '#FBC02D' : !schedule.status?.color ? '#60269E' : schedule.status!.color;
                        backgroundColor = schedule.assistant_start_at ? '#FBC02D' : !schedule.status?.color ? '#60269E' : schedule.status!.color!;
                    }
                    break;
                case 'Enfermera':
                    title = this.getScheduleTitle(schedule.type?.name ?? '', name);
                    borderColor = !schedule.status?.color ? '#60269E' : schedule.status!.color;
                    backgroundColor = !schedule.status?.color ? '#60269E' : schedule.status!.color!;
                    if(schedule.status?.name === 'Confirmado')
                    {
                        borderColor = schedule.assistant_start_at ? '#FBC02D' : !schedule.status?.color ? '#60269E' : schedule.status!.color;
                        backgroundColor = schedule.assistant_start_at ? '#FBC02D' : !schedule.status?.color ? '#60269E' : schedule.status!.color!;
                    }
                    break;
                default:
                    title = this.getScheduleTitle(schedule.type?.name ?? '', name);
                    borderColor = schedule.status!.color!;
                    backgroundColor = schedule.status!.color!;
                    if(schedule.status?.name === 'Confirmado')
                    {
                        borderColor = schedule.assistant_start_at ? '#FBC02D' : !schedule.status?.color ? '#60269E' : schedule.status!.color;
                        backgroundColor = schedule.assistant_start_at ? '#FBC02D' : !schedule.status?.color ? '#60269E' : schedule.status!.color!;
                    }
                    break;
                
            }
            calendar.getApi().addEvent({
                id: schedule.id!.toString(),
                title: title,
                start: schedule.consult_schedule_start,
                end: schedule.consult_schedule_finish,
                textColor: '#000000',
                borderColor: borderColor,
                backgroundColor: backgroundColor,
                display: 'block',
            })
        },
        /** 
         * Retorna el evento onNewSchedule con la información que provee FullCalendar al hacer click en una {@link https://fullcalendar.io/docs/dateClick|fecha} (solo roles: asistente, doctor y administrador)
         * @param {any} data Datos que provee FullCalendar al hacer click en una {@link https://fullcalendar.io/docs/dateClick|fecha}
         * @function CalendarComponent.fullcalendarDateClick
        */
        fullcalendarDateClick(data: any)
        {
            switch(this.role)
            {
                case 'Enfermera':
                    break;
                case 'Checkup':
                    break;
                case 'Caja':
                    break;
                case 'Laboratorio':
                    break;
                case 'Imagenologia':
                    break;
                default:
                    this.$emit('onNewSchedule', data.date);
                    break
            }
        },
        /** 
         * Retorna el evento onSelectedSchedule con la información de la cita médica seleccionada (todos los roles). Después muestra
         * el componente {@link ScheduleActionComponent}
         * @param {any} data Datos que provee FullCalendar al hacer click en una {@link https://fullcalendar.io/docs/eventClick|cita} 
         * @function CalendarComponent.fullcalendarEventClick
        */
        fullcalendarEventClick(data: any)
        {
            const schedule = Object.values(this.schedulesCopy).filter(schedule => schedule[`id`] === Number(data.event.id))[0];
            this.$emit('onSelectedSchedule', schedule);
            $('#schedule-action').modal('show');
        }
    },
})