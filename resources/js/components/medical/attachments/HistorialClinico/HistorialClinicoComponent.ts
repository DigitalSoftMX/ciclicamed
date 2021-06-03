
import { HistorialClinicoData } from '@data/Medical/Attachments/HistorialClinico/HistorialClinico.data';
import { HistorialClinico } from '@interface/Medical/Attachtments/HistorialClinico/HistorialClinico.interface';
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
    props:{
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        formData: {
            type: Object as PropType<HistorialClinico>,
            default: HistorialClinicoData
        }
    },
    data(){
        return {
        }
    },
    methods: {}
})
