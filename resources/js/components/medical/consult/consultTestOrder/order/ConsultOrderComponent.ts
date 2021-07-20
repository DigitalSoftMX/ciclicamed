import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import { Test } from '@interface/Medical/Test.interface';
import { OrderData } from '@data/Medical/Order.data';
import { TestOrder } from '@interface/Medical/TestOrder.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import { ElTimeSelect } from 'element-plus';

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
            type: Array as PropType<Branch[]>,
            default: []
        }
    },
    watch: {
        modelValue: {
            handler()
            {
                this.order = this.modelValue;
            },
            deep: true
        },
        medicament: {
            handler()
            {
                this.$emit('update:modelValue', this.order);
            },
            deep: true
        }
    },
    data() {
        return {
            order: this.modelValue,
            startTime: '07:00',
            finishTime: '21:00',
            startHour: '',
            finishHour: ''
        };
    },
    mounted() {
    },
    methods: {
        deleteThisComponent()
        {
            this.$emit('onDelete', this.id);
        }
    },
})
