<template>
<div id='full-calendar'></div>
        <div ref="cal"></div>
</template>

<script> 
import { ref,defineComponent, onMounted} from 'vue';
import {Calendar} from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default defineComponent({
name:'myCalendar',
    setup(){
        const cal = ref(null);
        
        onMounted(()=>{
            const Tcalendar = new Calendar(cal.value, {
            themeSystem: 'bootstrap',
            plugins:
                [ dayGridPlugin, timeGridPlugin, listPlugin ],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: "today,prev,title,next",
                    right: "timeGridDay,timeGridWeek,dayGridMonth,listMonth",
                },
            allDaySlot: false,
            buttonText: {
                today: 'Hoy',
                month: 'Mes',
                week: 'Semana',
                day: 'Lista',
            }
            });
            
            Tcalendar.render();
        })
        return {
            cal,
        }
    }
})

</script>
