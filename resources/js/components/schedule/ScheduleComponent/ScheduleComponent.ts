import axios from 'axios';
import moment from 'moment';
import {
    Calendar
} from '@fullcalendar/core'
import $ from 'jquery';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {
    defineComponent
} from '@vue/runtime-core';
import mitt from 'mitt';
import { DefineComponent, PropType, ref } from 'vue';
import interactionPlugin from '@fullcalendar/interaction';
import { ScheduleData } from '../../../defaultData/Schedule/Schedule.data';
import { Schedule } from '../../../interfaces/Schedule/Schedule.interface';

export default defineComponent({
    name: 'ScheduleComponent',
    components: {
        'ScheduleActionComponent': require('../ScheduleActionComponent/ScheduleActionComponent.vue').default,
        'LateralScheduleComponent': require('../LateralScheduleComponent/LateralScheduleComponent.vue').default
    },
    props: {},
    emits: ['openLateralSchedule'],
    data() {
        return {
            url: `/consultas/pacientes/1`,
            schedules: [] as Schedule[],
            scheduleSelected: ScheduleData,
        }
    },
    methods: {
        getSchedules(calendar: Calendar): void {
            axios.get<Schedule[]>(this.url)
                .then(response => {
                    this.schedules = response.data;
                    this.renderSchedules(calendar);
                })
                .catch(error => {
                    console.log(error)
                })
        },

        renderSchedules(calendar:Calendar): void {
            this.schedules.map(schedule => {
                const name = this.getNameSchedule(schedule);
                calendar.addEvent({
                    id: schedule.id.toString(),
                    title: this.getScheduleTitle(schedule.type.name, name),
                    start: schedule.consult_schedule_start,
                    end: schedule.consult_schedule_finish,
                    textColor: '#000000',
                    borderColor: schedule.status.color,
                    backgroundColor: schedule.status.color,
                    display: 'block',
                })
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
        }
    },
    mounted() {
        const self = this;
        const el:HTMLElement = document.getElementById('full-calendar') ?? document.createElement('div', ) as HTMLDivElement;
        new ResizeObserver(() => calendar.updateSize()).observe(el);
        const calendar: Calendar = new Calendar(el, {
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
                const child = self.$refs.openLateralSchedule as DefineComponent;
                child.openLateralSchedule()
            },
            eventClick: function (data) {
                self.scheduleSelected = Object.values(self.schedules).filter(schedule => schedule[`id`] === Number(data.event.id))[0];
                $('#schedule-action').modal('show');
            },
        });
        calendar.setOption('locale', 'es');
        calendar.render();
        this.getSchedules(calendar);
    },
})