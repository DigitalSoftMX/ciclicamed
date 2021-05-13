import {
    defineComponent
} from '@vue/runtime-core';

export default defineComponent({
    components: {
        CuestionarioCalculoRiesgoComponent: require('./CuestionarioCalculoRiesgo/CuestionarioCalculoRiesgoComponent.vue').default,
        ResultadoCalculoRiesgoComponent: require('./ResultadoCalculoRiesgo/ResultadoCalculoRiesgoComponent.vue').default,
    },
    emits: [],
    props: {
    },
    data() {
        return {}
    },
    mounted() {
    },
    methods: {
    },
})
