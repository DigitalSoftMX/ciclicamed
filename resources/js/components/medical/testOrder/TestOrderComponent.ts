import {
    defineComponent
} from '@vue/runtime-core';
import Vue from 'vue';
import { DefineComponent, PropType } from 'vue';
import axios from 'axios';

export default defineComponent({
    components: {
        OrderComponent: require('./order/OrderComponent.vue').default
    },
    emits: [],
    props: {
    },
    data() {
        return {
            orderDataList: [] as any,
            orderComponentList: [] as Number[],
            orderList: [] as any
        };
    },
    mounted() {
        this.getTestList();
    },
    watch: {
    },
    methods: {
       addMedicament()
       {
           this.orderDataList.push(0);
           this.orderComponentList.push(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
       },
       getTestList(): void
        {
            axios.get(`/productos/estudios`)
                .then(response => {
                    this.orderList = [{
                        id: 0,
                        name: 'Seleccione un estudio',
                        order_annotations: []
                    }, ...response.data];
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteOrderComponent(index: number)
        {
            this.orderDataList.splice(index, 1);
            this.orderComponentList.splice(index, 1);
        },
        updateOrderSelected(index: number, value: number)
        {
            this.orderDataList[index] = value;
            console.log(this.orderDataList)
        }
    },
})
