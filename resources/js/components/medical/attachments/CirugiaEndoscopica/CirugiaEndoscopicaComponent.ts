import { CirugiaEndoscopicaData } from '@data/Medical/Attachments/CirugiaEndoscopica.data';
import { CirugiaEndoscopica } from '@interface/Medical/Attachtments/CirugiaEndoscopica.interface';
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
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        formData: {
            type: Object as PropType<CirugiaEndoscopica>,
            default: CirugiaEndoscopicaData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
