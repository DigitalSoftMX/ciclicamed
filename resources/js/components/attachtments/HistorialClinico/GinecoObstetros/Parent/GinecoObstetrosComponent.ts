import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'PersonalesPatologicosComponent',
    components: {
        GinecoObstetrosUnoComponent: require('../Options/GinecoObstetrosUnoComponent.vue').default,
        GinecoObstetrosDosComponent: require('../Options/GinecoObstetrosDosComponent.vue').default
    },
    data(){
        return {}
    },
    methods: {}
})
