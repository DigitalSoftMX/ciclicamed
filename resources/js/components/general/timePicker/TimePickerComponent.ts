import { defineComponent } from '@vue/runtime-core';
import moment from 'moment';
import { PropType } from 'vue';

export default defineComponent({
    emits: ['update:modelValue', 'onChange'],
    props: {
        hourRange: {
            type: Array as PropType<string[]>,
            default: ['00-23']
        },
        minuteRange: {
            type: Array as PropType<string[]>,
            default: ['00-59']
        },
        modelValue: {
            type: String,
            default: moment().format('YYYY-MM-DD HH:mm:00')
        },
    },
    data() {
        return {
            hourEnabled: [] as number[],
            minuteEnabled: [] as number[],
            hourSelected: '',
            minuteSelected: '',
            date: ''
        };
    },
    mounted() {
        this.hourEnabled = this.orderNumbers(this.hourRange);
        this.minuteEnabled = this.orderNumbers(this.minuteRange);
    },
    watch: {
        hourRange()
        {
            this.hourEnabled = this.orderNumbers(this.hourRange);
        },
        minuteRange()
        {
            this.minuteEnabled = this.orderNumbers(this.minuteRange);
        },
        modelValue() {
            this.hourSelected = this.convertToString(moment(this.modelValue).hours());
            this.minuteSelected = this.convertToString(moment(this.modelValue).minutes());
            this.date = moment(this.modelValue).format('YYYY-MM-DD');
        }
    },
    methods: {
        orderNumbers(range: string[]): number[]
        {
            const rangeEnabled: number[] = [];
            range.map(hour => {
                const time = hour.split('-');
                for(var i = Number(time[0]); i <= Number(time[1]); i++)
                {
                    rangeEnabled.push(i);
                }
            });
            return rangeEnabled.sort((a, b) => a - b);
        },
        convertToString(number: number): string
        {
            return number < 10 ? `0${number}` : number.toString();
        },
        updateTime(event: Event, isHourUpdated: boolean)
        {
            
            const time = (event.target as HTMLSelectElement);
            this.hourSelected = isHourUpdated ? time.value: this.hourSelected;
            this.minuteSelected = !isHourUpdated ? time.value: this.minuteSelected;
            const dateTime = moment(this.date)
                                .set('hours', Number(this.hourSelected))
                                .set('minutes', Number(this.minuteSelected))
                                .format('YYYY-MM-DD HH:mm:00');
            this.$emit('update:modelValue', dateTime);
            this.$emit('onChange', isHourUpdated);
        },
    },
})