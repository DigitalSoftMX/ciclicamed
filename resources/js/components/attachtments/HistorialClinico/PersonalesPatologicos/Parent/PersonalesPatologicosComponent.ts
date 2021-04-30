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
        PersonalesPatologicosOptionComponent: require('../Options/PersonalesPatologicosOptionComponent.vue').default
    },
    data(){
        return {}
    },
    methods: {}
})
