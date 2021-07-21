import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import { Test } from '@interface/Medical/Test.interface';
import { OrderData } from '@data/Medical/Order.data';
import { TestOrder } from '@interface/Medical/TestOrder.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import { ElTimeSelect } from 'element-plus';
import { Select } from '@interface/General/Select.interface';
import moment from 'moment';
import { ConsultData } from '@data/Medical/Consult.data';
import cloneDeep from 'lodash/cloneDeep';

export default defineComponent({
    components: {
        ElTimeSelect
    },
    emits: ['update:modelValue', 'onDelete'],
    props: {
        isUpdate: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: Object as PropType<Test>,
            default: OrderData
        },
        orderList: {
            type: Array as PropType<TestOrder[]>,
            default: []
        },
        id: {
            type: Number as PropType<Number>,
            default: 0
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        branches: {
            type: Array as PropType<Select[]>,
            default: []
        }
    },
    computed:{
        disabledData(): boolean
        {
            return this.branchSelected <= 0 ? true : false;
        }
    },
    watch: {
        modelValue: {
            handler()
            {
                this.order = this.modelValue;
                if(!this.order.consult_scheduled)
                {
                    this.order.consult_scheduled = cloneDeep(ConsultData);
                }
                if(this.order.consult_scheduled.branch_id <= 0)
                {
                    this.startHour = '07:00';
                    this.finishHour = '07:00';
                    this.branchSelected = 0;
                    this.dateSelected = '';
                }
                if(this.dateSelected !== '')
                {
                    this.dateSelected =  moment(this.order.consult_scheduled.consult_schedule_start).format('YYYY-MM-DD');
                    this.startHour = moment(this.order.consult_scheduled.consult_schedule_start).format("HH:mm");
                    this.finishHour = moment(this.order.consult_scheduled.consult_schedule_finish).format("HH:mm");
                    this.branchSelected = this.order.consult_scheduled.branch_id;
                    this.dateSelected =  moment(this.order.consult_scheduled.consult_schedule_start).format('YYYY-MM-DD');
                }
            },
            deep: true
        },
        order: {
            handler()
            {
                this.$emit('update:modelValue', this.order);
            },
            deep: true
        },
        startHour()
        {
            console.log(this.startHour)
            this.order.consult_scheduled!.consult_schedule_start = moment(
                `${this.dateSelected} ${this.startHour}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
        },
        finishHour()
        {
            this.order.consult_scheduled!.consult_schedule_finish = moment(
                `${this.dateSelected} ${this.finishHour}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
        },
        dateSelected()
        {
            this.order.consult_scheduled!.consult_schedule_start = moment(
                `${this.dateSelected} ${this.startHour}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
            this.order.consult_scheduled!.consult_schedule_finish = moment(
                `${this.dateSelected} ${this.finishHour}:00`, 'YYYY-MM-DD HH:mm:00'
            ).format('YYYY-MM-DD HH:mm:00');
        },
        branchSelected()
        {
            this.order.consult_scheduled!.branch_id = this.branchSelected;
        }
    },
    data() {
        return {
            order: this.modelValue,
            startTime: '07:00',
            finishTime: '21:00',
            startHour: '07:00',
            finishHour: '07:00',
            branchSelected: 0,
            dateSelected: ''
        };
    },
    mounted() {
        if(!this.order.consult_scheduled)
        {
            this.order.consult_scheduled = cloneDeep(ConsultData);
        }
        if(this.order.consult_scheduled.branch_id > 0)
        {
            this.dateSelected =  moment(this.order.consult_scheduled.consult_schedule_start).format('YYYY-MM-DD');
            this.startHour = moment(this.order.consult_scheduled.consult_schedule_start).format("HH:mm");
            this.finishHour = moment(this.order.consult_scheduled.consult_schedule_finish).format("HH:mm");
            this.branchSelected = this.order.consult_scheduled.branch_id;
            this.dateSelected =  moment(this.order.consult_scheduled.consult_schedule_start).format('YYYY-MM-DD');
        }
    },
    methods: {
        deleteThisComponent()
        {
            this.$emit('onDelete', this.id);
        }
    },
})
