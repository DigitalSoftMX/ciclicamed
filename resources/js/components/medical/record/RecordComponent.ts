import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
require('../../../../../public/js/horizontal_timeline.2.0.min')

export default defineComponent({
    name: 'RecordComponent',
    components: {
    },
    props:{
    },
    mounted() {
        $('#example').horizontalTimeline();
    },
    data(){
        return {
        }
    },
    methods: {}
})
