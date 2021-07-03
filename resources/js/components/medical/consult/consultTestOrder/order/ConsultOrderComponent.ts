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
            order: this.modelValue
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
