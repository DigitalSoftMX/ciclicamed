import {
    defineComponent
} from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        ConsultComponent: defineAsyncComponent(() => import('@component/medical/consult/ConsultComponent.vue'))
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
