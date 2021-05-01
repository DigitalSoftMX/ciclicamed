import {
    defineComponent
} from '@vue/runtime-core';

export default defineComponent({
    components: {
        CuestionarioCalculoRiesgoComponent: require('../Options/CuestionarioCalculoRiesgoComponent.vue').default,
        ResultadoCalculoRiesgoComponent: require('../Options/ResultadoCalculoRiesgoComponent.vue').default,
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
