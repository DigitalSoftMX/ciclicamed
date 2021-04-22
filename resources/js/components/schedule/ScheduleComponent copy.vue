<template>
    <div class="card">
        <div class="card-body no-top">
            <div id='full-calendar'></div>
        </div>
        <new-schedule-component></new-schedule-component>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    import {
        Calendar
    } from '@fullcalendar/core'
    import $ from 'jquery';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import listPlugin from '@fullcalendar/list';
    import interactionPlugin from '@fullcalendar/interaction';
    import NewScheduleComponent from './NewScheduleComponent';
    import Echo from 'laravel-echo'
    require('pusher-js')

    export default {
        components: {
            NewScheduleComponent
        },
        data: function () {
            return {
                url: `/agenda/paciente/1`,
                schedules: [],
            }
        },
        mounted() {
            const that = this;
            const el = document.getElementById('full-calendar');
            const calendar = new Calendar(el, {
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
                    $('#schedule-modal').modal('show');
                },
                eventClick: function (data) {
                    console.log(data.event)
                },
            });
            calendar.setOption('locale', 'es');
            calendar.render();
            new ResizeObserver(() => calendar.updateSize()).observe(app);
            that.getSchedules(calendar);
            that.listenNewSchedules(calendar);
        },
        methods: {
            getSchedules(calendar) {
                axios.get(this.url)
                    .then(response => {
                        this.schedules = Object.assign({}, response.data);
                        this.renderNewSchedules(calendar);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            renderNewSchedules(calendar) {
                Object.values(this.schedules).map(schedule => {
                    calendar.addEvent({
                        id: schedule.id,
                        title: `${schedule.doctor.first_name} ${schedule.doctor.last_name}`,
                        start: new Date(schedule.consult_schedule_start),
                        end: new Date(schedule.consult_schedule_finish),
                        textColor: '#000000',
                        borderColor: schedule.status.color,
                        backgroundColor: schedule.status.color,
                        display: 'block',
                    })
                });
            },
            listenNewSchedules(calendar) {
                window.Echo = new Echo({
                    broadcaster: 'pusher',
                    key: process.env.MIX_PUSHER_APP_KEY,
                    wsHost: window.location.hostname,
                    wsPort: 6001,
                    disableStats: true,
                    forceTLS: false
                })
                window.Echo.channel('home').listen('ScheduleEvent', (e) => {
                    console.log(e)
                    this.schedules = Object.assign({}, e.message);
                    Object.values(this.schedules).map(schedule => {
                        console.log(schedule.id)
                        calendar.addEvent({
                            id: schedule.id,
                            title: `${schedule.doctor.first_name} ${schedule.doctor.last_name}`,
                            start: new Date(schedule.consult_schedule_start),
                            end: new Date(schedule.consult_schedule_finish),
                            textColor: '#000000',
                            borderColor: schedule.status.color,
                            backgroundColor: schedule.status.color,
                            display: 'block',
                        })
                    });
                })
            }
        }
    }

</script>

<style>
    .fc-list-event-dot {
        width: 2px !important;
        height: 2px !important;
    }

    .fc-event-title {
        color: #fff !important;
    }

    .fc-event-time {
        color: #fff !important;
    }

    .fc-header-toolbar {
        background-color: #60269E !important;
        padding: 1.56rem !important;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .fc-toolbar-title {
        color: #fff !important;
        font-weight: 600 !important;
        font-size: 1.2em !important;
        padding: 15px 0 !important;
    }

    .no-top {
        padding: 0 !important;
    }

    .fc-view-harness {
        margin: 0 1.56rem !important;
        margin-bottom: 1.56rem !important;
    }

    .fc-prev-button {
        background-color: #844cc4 !important;
        border: none !important;
        border-right: none !important;
        border-radius: 4px 0 0 4px !important;
    }

    .fc-prev-button:hover {
        background-color: #c5a4e2 !important;
    }

    .fc-icon-chevron-left {
        color: #fff !important;
        font-size: 1.5em !important;
        font-weight: 600 !important;
    }

    .fc-next-button {
        background-color: #844cc4 !important;
        border: none !important;
        border-left: none !important;
        border-radius: 0 4px 4px 0 !important;
    }

    .fc-next-button:hover {
        background-color: #c5a4e2 !important;
    }

    .fc-icon-chevron-right {
        color: #fff !important;
        font-size: 1.5em !important;
        font-weight: 600 !important;
    }

    .fc-dayGridMonth-button {
        background-color: #844cc4 !important;
        border: none !important;
        border-radius: 4px 0 0 4px !important;
        font-size: 0.9em !important;
        font-weight: 600 !important;
        color: #fff !important;
    }

    .fc-timeGridDay-button {
        background-color: #844cc4 !important;
        border: none !important;
        border-radius: 0 !important;
        font-size: 0.9em !important;
        font-weight: 600 !important;
        color: #fff !important;
    }

    .fc-timeGridWeek-button {
        background-color: #844cc4 !important;
        border: none !important;
        border-radius: 0 !important;
        font-size: 0.9em !important;
        font-weight: 600 !important;
        color: #fff !important;
    }

    .fc-listDay-button {
        background-color: #844cc4 !important;
        border: none !important;
        border-radius: 0 4px 4px 0 !important;
        font-size: 0.9em !important;
        font-weight: 600 !important;
        color: #fff !important;
    }

    .fc-button-active {
        background-color: #c5a4e2 !important;
        color: #4A148C !important;
    }

    .fc-toolbar-chunk {
        margin-top: 0 !important;
    }

</style>
