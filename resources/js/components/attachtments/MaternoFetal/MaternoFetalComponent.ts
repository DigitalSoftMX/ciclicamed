import {
    defineComponent
} from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        CuestionarioCalculoRiesgoComponent: require('./CuestionarioCalculoRiesgo/CuestionarioCalculoRiesgoComponent.vue').default,
        ResultadoCalculoRiesgoComponent: require('./ResultadoCalculoRiesgo/ResultadoCalculoRiesgoComponent.vue').default,
    },
    emits: [],
    props: {
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
    },
    data() {
        return {}
    },
    mounted() {
    },
    methods: {
    },
})
