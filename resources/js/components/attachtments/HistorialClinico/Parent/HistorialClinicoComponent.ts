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
        HeredoFamiliaresComponent: require('../HeredoFamiliares/Parent/HeredoFamiliaresComponent.vue').default,
        PersonalesNoPatologicosComponent: require('../PersonalesNoPatologicos/Parent/PersonalesNoPatologicosComponent.vue').default,
        PersonalesPatologicosComponent: require('../PersonalesPatologicos/Parent/PersonalesPatologicosComponent.vue').default,
        GinecoObstetrosComponent: require('../GinecoObstetros/Parent/GinecoObstetrosComponent.vue').default,
        TratamientoComponent: require('../Tratamiento/TratamientoComponent.vue').default,
    },
    props:{},
    data(){
        return {}
    },
    methods: {}
})
