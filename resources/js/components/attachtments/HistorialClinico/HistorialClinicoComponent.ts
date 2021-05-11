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
        HeredoFamiliaresComponent: require('./HeredoFamiliares/HeredoFamiliaresComponent.vue').default,
        PersonalesNoPatologicosComponent: require('./PersonalesNoPatologicos/PersonalesNoPatologicosComponent.vue').default,
        PersonalesPatologicosComponent: require('./PersonalesPatologicos/PersonalesPatologicosComponent.vue').default,
        GinecoObstetrosComponent: require('./GinecoObstetros/GinecoObstetrosComponent.vue').default,
        TratamientoComponent: require('./Tratamiento/TratamientoComponent.vue').default,
    },
    props:{},
    data(){
        return {}
    },
    methods: {}
})
