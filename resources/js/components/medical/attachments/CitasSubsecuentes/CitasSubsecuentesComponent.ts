import { CitasSubsecuentesData } from '@data/Medical/Attachments/CitasSubsecuentes.data';
import { CitasSubsecuentes } from '@interface/Medical/Attachtments/CitasSubsecuentes.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'CitasSubsecuentesComponent',
    components: {
    },
    props:{
        title: {
            type: String as PropType<String>,
            default: 'Cita actual'
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        formData: {
            type: Object as PropType<CitasSubsecuentes>,
            default: CitasSubsecuentesData
        },
    },
    watch: {
        formData()
        {
            this.formDataCopy = Object.assign({}, this.$props.formData);
        }
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
