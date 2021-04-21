<template>
    <div class="card">
        <div class="card-body no-top">
            <div id='full-calendar'></div>
        </div>
        <new-schedule-modal></new-schedule-modal>
    </div>
</template>

<script>
    import {
        Calendar,
    } from '@fullcalendar/core'
    import $ from 'jquery';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import listPlugin from '@fullcalendar/list';
    import interactionPlugin from '@fullcalendar/interaction';
    import NewScheduleModal from './NewScheduleModal.vue';

    export default {
        components: {
            NewScheduleModal
        },
        props: ['schedules'],
        data: function () {
            return {}
        },
        mounted() {
            const that = this;
            const el = document.getElementById('full-calendar');
            const calendar = new Calendar(el, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                editable: true,
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
                dateClick: function (data) {
                    $('#schedule-modal').modal('show');
                },
                events: Object.values(this.$props.schedules).map(schedule => {

                    return {
                        id: schedule.id,
                        title: `${schedule.doctor.first_name} ${schedule.doctor.last_name}`,
                        start: new Date(schedule.consult_schedule_start),
                        end: new Date(schedule.consult_schedule_finish),
                        textColor: '#000000',
                        className: that.getEventColor(schedule.status.color)
                    }
                })
            });
            calendar.setOption('locale', 'es');
            calendar.render();
        },
        methods: {
            getEventColor(color) {
                switch (color) {
                    case '#5E35B1':
                        return 'color1';
                    case '#43A047':
                        return 'color2';
                    case '#F4511E':
                        return 'color3';
                    case '#1E88E5':
                        return 'color4';
                    case '#546E7A':
                        return 'color5';
                    case '#212121':
                        return 'color6';
                }
            }
        }
    }

</script>

<style>
    .color1 {
        background-color: #5E35B1 !important;
    }

    .color2 {
        background-color: #43A047 !important;
    }

    .color3 {
        background-color: #F4511E !important;
    }

    .color4 {
        background-color: #1E88E5 !important;
    }

    .color5 {
        background-color: #546E7A !important;
    }

    .color5 {
        background-color: ##212121 !important;
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
