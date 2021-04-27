import {
    defineComponent
} from '@vue/runtime-core';
import moment from 'moment';
import { DefineComponent, PropType } from 'vue';
moment.locale('es');
import { Schedule } from '../../../interfaces/Schedule/Schedule.interface';
import { ScheduleData } from '../../../defaultData/Schedule/Schedule.data';

export default defineComponent({
    components: {
        'LateralScheduleComponent': require('../LateralScheduleComponent/LateralScheduleComponent.vue').default
    },
    props: {
        schedule: {
            type: Object as PropType<Schedule>,
            default: () => ScheduleData
        }
    },
    data() {
        return {
        };
    },
    mounted() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
    },
    methods: {
        formatScheduleTime(datetime: string): string {
            return moment(datetime, 'YYYY-MM-DD HH:mm A').format('hh:mm A');
        },
        formatScheduleDate(datetime: string): string {
            return moment(datetime, 'YYYY-MM-DD HH:mm A').format('D [de] MMMM [del] YYYY');
        },
        openLateralSchedule()
        {
            const child = this.$refs.openLateralSchedule as DefineComponent;
            child.openLateralSchedule()
        }
    },
})
