import axios from 'axios';
import $ from 'jquery';
import { defineComponent } from '@vue/runtime-core';
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { DefineComponent } from 'vue';
import FullCalendar, { CalendarOptions } from '@fullcalendar/vue3';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarConfig } from '@config/FullCalendar.config';

export default defineComponent({
    name: 'ScheduleComponent',
    components: {
        FullCalendar,
        ScheduleActionComponent: require('../ScheduleActionComponent/ScheduleActionComponent.vue').default,
        LateralScheduleComponent: require('../LateralScheduleComponent/LateralScheduleComponent.vue').default,
        
    },
    props: {},
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                allDaySlot: false,
                ...FullCalendarConfig,
                dateClick: this.fullcalendarDateClick,
                eventClick: this.fullcalendarEventClick
            },
            url: `/consultas/pacientes/1`,
            schedules: [] as Schedule[],
            scheduleSelected: ScheduleData,
            scheduleSelectDate: {} as Date,
        }
    },
    methods: {
        getSchedules(): void {
            axios.get<Schedule[]>(this.url)
                .then(response => {
                    this.schedules = response.data;
                    this.renderSchedules();
                })
                .catch(error => {
                    console.log(error)
                })
        },

        renderSchedules(): void {
            this.schedules.map(schedule => {
                this.addSchedule(schedule);
            });
        },

        getNameSchedule(schedule: Schedule): string {
            return schedule.doctor ? `${schedule.doctor?.first_name ?? ''} ${schedule.doctor?.last_name ?? ''}` :
                                     `${schedule.patient?.first_name ?? ''} ${schedule.patient?.last_name ?? ''}`;
        },

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
                case 'Checkup':
                    return `CheckUp con ${name}`;
                default:
                    return 'Cita'
            }
        },

        updateSchedule(data: Schedule)
        {
            const name = this.getNameSchedule(data);
            this.schedules =  this.schedules.map(schedule => schedule.id === data.id ? {...schedule, ...data} : schedule);
            const calendar = this.$refs.fullCalendar as DefineComponent;
            const scheduleEvent = calendar.getApi().getEventById( data.id );
            
            scheduleEvent.setDates( data.consult_schedule_start,  data.consult_schedule_finish );
            scheduleEvent.setProp( 'title', this.getScheduleTitle(data.type!.name, name) );
            scheduleEvent.setProp( 'borderColor', data.status?.color );
            scheduleEvent.setProp( 'borderColor', data.status?.color );
            scheduleEvent.setProp( 'backgroundColor', data.status?.color );
            this.scheduleSelected = ScheduleData;
        },

        createNewSchedule(data: Schedule)
        {
            this.addSchedule(data);
            this.scheduleSelected = ScheduleData;
        },

        addSchedule(schedule: Schedule)
        {
            const name = this.getNameSchedule(schedule);
            const calendar = this.$refs.fullCalendar as DefineComponent;
            calendar.getApi().addEvent({
                id: schedule.id!.toString(),
                title: this.getScheduleTitle(schedule.type!.name, name),
                start: schedule.consult_schedule_start,
                end: schedule.consult_schedule_finish,
                textColor: '#000000',
                borderColor: schedule.status?.color,
                backgroundColor: schedule.status?.color,
                display: 'block',
            })
            
        },
        fullcalendarDateClick(data: any)
        {
            this.scheduleSelectDate = data.date;
            this.scheduleSelected = ScheduleData;
            const lateral = this.$refs.openLateralSchedule as DefineComponent;
            lateral.openLateralSchedule();
        },
        fullcalendarEventClick(data: any)
        {
            this.scheduleSelected = Object.values(this.schedules).filter(schedule => schedule[`id`] === Number(data.event.id))[0];
            $('#schedule-action').modal('show');
        }
    },
    mounted() {
        // const el:HTMLElement = document.getElementById('full-calendar') ?? document.createElement('div', ) as HTMLDivElement;
        // new ResizeObserver(() => this.calendar.updateSize()).observe(el);
        this.getSchedules();
    },
})