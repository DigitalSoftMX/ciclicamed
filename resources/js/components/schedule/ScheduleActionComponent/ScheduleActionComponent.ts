import {
    defineComponent
} from '@vue/runtime-core';
import moment from 'moment';
import { PropType } from 'vue';
moment.locale('es');
import { Schedule } from '../../../interfaces/Schedule/Schedule.interface';
import { DefaultScheduleActionComponentData } from './ScheduleActionComponent.data';

export default defineComponent({
    components: {},
    props: {
        schedule: {
            type: Object as PropType<Schedule>,
            default: () => DefaultScheduleActionComponentData
        }
    },
    data: function (props) {
        return {
            schedule: props.schedule?.branch
        };
    },
    mounted() {
        console.log(this.$props.schedule)
    },
    methods: {
        formatScheduleTime(datetime: Date): string {
            return moment(datetime).format('hh:mm A');
        },
        formatScheduleDate(datetime: Date): string {
            return moment(datetime).format('D [de] MMMM [del] YYYY');
        },
        getScheduleBranch(): string {
            return this.schedule.branch.name ?? 'data';
        }
    },
})
