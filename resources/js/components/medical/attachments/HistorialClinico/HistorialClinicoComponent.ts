
import { HistorialClinicoData } from '@data/Medical/Attachments/HistorialClinico/HistorialClinico.data';
import { HistorialClinico } from '@interface/Medical/Attachtments/HistorialClinico/HistorialClinico.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
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
        },
        edit: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
        patient: {
            type: Number as PropType<Number>,
            default: 0
        }
    },
    data(){
        return {
            formData: this.modelValue,
            errors: []
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
    methods: {
        updateHistorial()
        {
            axios.post(`/pacientes/${this.patient}/historial`, {
                historial: {
                    type: 'form',
                    form: this.formData
                }
            })
            .then(response => {
                console.log(this.patient, response.data)
                $('#hisccSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.error;
                $('#hisccError').modal('show');
            })
        }
    }
})
