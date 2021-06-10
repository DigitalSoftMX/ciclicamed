import { defineComponent } from '@vue/runtime-core';
import moment from 'moment';
import { PropType } from 'vue';

export default defineComponent({
    emits: ['update:modelValue'],
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
            default: moment().format('MM/DD/YY LT')
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
        console.log(this.modelValue)
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
            console.log(this.modelValue)
            this.hourSelected = this.convertToString(moment(this.modelValue).hours());
            this.minuteSelected = this.convertToString(moment(this.modelValue).minutes());
            this.date = moment(this.modelValue).format('MM/DD/YY');
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
        updateHour(event: Event)
        {
            const time = (event.target as HTMLSelectElement);
            this.hourSelected = time.value;
            const dateTime = moment(`${this.date} ${this.hourSelected}:${this.minuteSelected}`, 'MM/DD/YY HH:mm').format('MM/DD/YY LT');
            this.$emit('update:modelValue', dateTime);
        },
        updateMinute(event: Event)
        {
            const time = (event.target as HTMLSelectElement);
            this.minuteSelected = time.value;
            const dateTime = moment(`${this.date} ${this.hourSelected}:${this.minuteSelected}`, 'MM/DD/YY HH:mm').format('MM/DD/YY LT');
            this.$emit('update:modelValue', dateTime);
            console.log(this.minuteSelected)
        }
    },
})