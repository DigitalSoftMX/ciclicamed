import { OrderData } from '@data/Medical/Order.data';
import { TestData } from '@data/Medical/Test.data';
import { Order } from '@interface/Medical/Order.interface';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Test } from '@interface/Medical/Test.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    props: {
        test: {
            type: Object as PropType<Test>,
            default: TestData
        }
    },
    data() {
        return {
            annotations: this.test.order.product.order_annotations!
        };
    },
    watch: {
        test: {
            handler()
            {
                this.annotations = this.test.order.product.order_annotations!
            },
            deep: true
        }
    },
    mounted() {
    },
    methods: {
    }
})