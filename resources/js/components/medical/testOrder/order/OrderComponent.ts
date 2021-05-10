import {
    defineComponent
} from '@vue/runtime-core';
import Vue from 'vue';
import {
    DefineComponent,
    PropType
} from 'vue';
import axios from 'axios';

export default defineComponent({
    components: {},
    emits: ['ocDelete', 'ocChange'],
    props: {
        orderList: {
            type: Array as PropType < any[] > ,
            default: []
        },
        orderIndex: {
            type: Number as PropType < Number > ,
            default: -1
        }
    },
    data() {
        return {
            orderSelected: 0,
            id: Math.floor(Math.random() * (50 - 1 + 1)) + 1
        };
    },
    mounted() {
        const self = this;
        $(`#ocOrder${self.id}`).select2()
        $(`#ocOrder${self.id}`).on('select2:select', function (e) {
            self.orderSelected = self.orderList.findIndex(order => order.id === Number(e.params.data.id));
            self.$emit('ocChange', self.orderIndex, self.orderSelected);
        });
    },
    watch: {},
    methods: {
        deleteOrder() {
            this.$emit('ocDelete', this.orderIndex)
        },
    },
})
