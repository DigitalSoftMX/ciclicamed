import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'HistorialClinicoComponent',
    components: {
        TipoSangreComponent: require('../Options/TipoSangreComponent.vue').default,
        PersonalesNoPatologicosOptionsComponent: require('../Options/PersonalesNoPatologicosOptionsComponent.vue').default,
    },
    props:{},
    data(){
        return {}
    },
    methods: {}
})
