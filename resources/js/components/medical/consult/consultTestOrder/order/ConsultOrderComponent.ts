import {
    defineComponent
} from '@vue/runtime-core';
import Vue from 'vue';
import {
    DefineComponent,
    PropType
} from 'vue';
import axios from 'axios';
import { Test } from '@interface/Medical/Test.interface';
import { OrderData } from '@data/Medical/Order.data';
import { TestOrder } from '@interface/Medical/TestOrder.interface';

export default defineComponent({
    components: {},
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
            type: Number as PropType < Number > ,
            default: -1
        }
    },
    watch: {
    },
    data() {
        return {
            orderDataCopy: Object.assign({}, this.orderData),
            orderSelected: this.orderList.findIndex(order => order.id === this.orderData.order.product_id) ?? 0,
            id: Math.floor(Math.random() * (50 - 1 + 1)) + 1
        };
    },
    mounted() {
        const self = this;
        $(`#ocOrder${self.id}`).select2()
        $(`#ocOrder${self.id}`).on('select2:select', function (e) {
            self.orderSelected = self.orderList.findIndex(order => order.id === Number(e.params.data.id));
            self.orderDataCopy.order.product_id = self.orderList[self.orderSelected].id;
            self.$emit('ocChange', self.orderIndex, self.orderDataCopy);
        });
        $(`#ocOrder${self.id}`).val(this.orderDataCopy.order.product_id).trigger('change');
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
