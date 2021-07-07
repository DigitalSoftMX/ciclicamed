
import { HistorialClinicoData } from '@data/Medical/Attachments/HistorialClinico/HistorialClinico.data';
import { HistorialClinico } from '@interface/Medical/Attachtments/HistorialClinico/HistorialClinico.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType,
    watch
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
    emits: ['update:modelValue'],
    props:{
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        modelValue: {
            type: Object as PropType<HistorialClinico>,
            default: HistorialClinicoData
        }
    },
    data(){
        return {
            formData: this.modelValue
        }
    },
    watch:
    {
        modelValue:
        {
            handler()
            {
                this.formData = this.modelValue;
            },
            deep: true
        },
        formData:
        {
            handler()
            {
                this.$emit('update:modelValue', this.formData)
            },
            deep: true
        }
    },
    methods: {}
})
