import {
    defineComponent
} from '@vue/runtime-core';
import { DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        ProductTableComponent: require('../../components/dataTable/productTable/ProductTableComponent.vue').default
    },
    emits: [],
    props: {
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    watch: {

    },
    methods: {
        
    },
})