import { Sidebar } from '@interface/General/Sidebar.interface';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, Prop, PropType } from 'vue';

export default defineComponent({
    components: {

    },
    props: {
        title: {
            type: String,
            default: ''
        },
        items: {
            type: Array as PropType<Sidebar[]>,
            default: []
        }
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