import axios from 'axios';
import { Calendar } from '@fullcalendar/core'
import $ from 'jquery';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { defineComponent } from '@vue/runtime-core';
import interactionPlugin from '@fullcalendar/interaction';
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleData } from '@data/Schedule/Schedule.data';
import { DefineComponent } from 'vue';

export default defineComponent({
    name: 'ScheduleComponent',
    components: {
        ScheduleActionComponent: require('../ScheduleActionComponent/ScheduleActionComponent.vue').default,
        LateralScheduleComponent: require('../LateralScheduleComponent/LateralScheduleComponent.vue').default
    },
    props: {},
    data() {
        return {
            url: `consultas/pacientes/1`,
            schedules: [] as Schedule[],
            scheduleSelected: ScheduleData,
            calendar: Calendar as any,
            lateralMenu: null as any,
            scheduleSelectDate: {} as Date
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
            const scheduleEvent = this.calendar.getEventById( data.id );
            
            scheduleEvent.setDates( data.consult_schedule_start,  data.consult_schedule_finish );
            scheduleEvent.setProp( 'title', this.getScheduleTitle(data.type!.name, name) );
            scheduleEvent.setProp( 'borderColor', data.status?.color );
            scheduleEvent.setProp( 'borderColor', data.status?.color );
            scheduleEvent.setProp( 'backgroundColor', data.status?.color );
            this.scheduleSelected = ScheduleData;
        },

        createNewSchedule(data: Schedule)
        {
            console.log(data)
            this.addSchedule(data);
            this.scheduleSelected = ScheduleData;
            console.log(this.scheduleSelected)
        },

        addSchedule(schedule: Schedule)
        {
            const name = this.getNameSchedule(schedule);
            this.calendar.addEvent({
                id: schedule.id!.toString(),
                title: this.getScheduleTitle(schedule.type!.name, name),
                start: schedule.consult_schedule_start,
                end: schedule.consult_schedule_finish,
                textColor: '#000000',
                borderColor: schedule.status?.color,
                backgroundColor: schedule.status?.color,
                display: 'block',
            })
        }
    },
    mounted() {
        const self = this;
        this.lateralMenu = this.$refs.openLateralSchedule as DefineComponent;
        const el:HTMLElement = document.getElementById('full-calendar') ?? document.createElement('div', ) as HTMLDivElement;
        new ResizeObserver(() => this.calendar.updateSize()).observe(el);
        this.calendar = new Calendar(el, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
            initialView: 'dayGridMonth',
            displayEventTime: true,
            editable: false,
            displayEventEnd: true,
            progressiveEventRendering: true,
            headerToolbar: {
                left: 'dayGridMonth,timeGridWeek,timeGridDay,listDay',
                right: "prev,next",
                center: "title",
            },
            allDaySlot: false,
            buttonText: {
                today: 'Hoy',
                month: 'Mes',
                week: 'Semana',
                day: 'Día',
                list: 'Lista'
            },
            eventTimeFormat: {
                hour: 'numeric',
                minute: '2-digit',
                meridiem: 'short'
            },
            dateClick: function (data) {
                self.scheduleSelectDate = data.date;
                self.scheduleSelected = ScheduleData;
                self.lateralMenu.openLateralSchedule();
            },
            eventClick: function (data) {
                self.scheduleSelected = Object.values(self.schedules).filter(schedule => schedule[`id`] === Number(data.event.id))[0];
                $('#schedule-action').modal('show');
            },
        });
        this.calendar.setOption('locale', 'es');
        this.calendar.render();
        this.getSchedules();
    },
})