import { CalendarOptions } from "@fullcalendar/vue3";

export const FullCalendarConfig: CalendarOptions = {
    initialView: 'dayGridMonth',
    displayEventTime: true,
    editable: false,
    displayEventEnd: true,
    locale: 'es',
    height: 'auto',
    allDaySlot: false,
    progressiveEventRendering: true,
    headerToolbar: {
        left: 'dayGridMonth,timeGridWeek,timeGridDay,listDay',
        right: "prev,next",
        center: "title",
    },
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
    noEventsText: 'No hay citas programadas para hoy',
}