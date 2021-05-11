import { CirugiaEndoscopicaData } from '../../../defaultData/Attachments/CirugiaEndoscopica/CirugiaEndoscopica.data';
import { CirugiaEndoscopica } from '@/resources/js/interfaces/Attachtments/CirugiaEndoscopica/CirugiaEndoscopica.interface';
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
