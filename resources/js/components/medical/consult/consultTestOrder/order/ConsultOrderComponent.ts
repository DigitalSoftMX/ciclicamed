import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import { Test } from '@interface/Medical/Test.interface';
import { OrderData } from '@data/Medical/Order.data';
import { TestOrder } from '@interface/Medical/TestOrder.interface';
import vSelect from "vue-select-3/src";

export default defineComponent({
    components: {
        vSelect
    },
    emits: ['ocDelete', 'ocChange'],
    props: {
        isUpdate: {
            type: Boolean,
            default: false
        },
        orderData: {
            type: Object as PropType<Test>,
            default: OrderData
        },
        orderList: {
            type: Array as PropType<TestOrder[]>,
            default: []
        },
        orderIndex: {
            type: Number as PropType<Number> ,
            default: -1
        },
    },
    watch: {
        orderDataCopy:
        {
            handler()
            {
                this.orderSelected = this.orderList.findIndex(order => order.id === this.orderDataCopy.order.product_id) ?? 0,
                this.$emit('ocChange', this.orderIndex, this.orderDataCopy);
            },
            deep: true
        }
    },
    data() {
        return {
            orderDataCopy: Object.assign({}, this.orderData),
            orderSelected: this.orderList.findIndex(order => order.id === this.orderData.order.product_id) ?? 0,
            id: Math.floor(Math.random() * (50 - 1 + 1)) + 1
        };
    },
    mounted() {
    },
    methods: {
        deleteOrder() {
            this.$emit('ocDelete', this.orderIndex)
        },
        updateOrderData()
        {
            this.$emit('ocChange', this.orderIndex, this.orderDataCopy);
        }
    },
})
