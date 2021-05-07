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
            orderTestList: [] as String[],
            testList: [] as any
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
           this.orderTestList.push('a');
       },
       getTestList(): void
        {
            axios.get(`/productos/estudios`)
                .then(response => {
                    this.testList = [{
                        id: 0,
                        name: 'Seleccione un estudio',
                        order_annotations: []
                    }, ...response.data];
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
})
