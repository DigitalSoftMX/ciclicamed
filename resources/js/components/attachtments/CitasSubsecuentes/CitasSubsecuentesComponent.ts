import { CitasSubsecuentesData } from '../../../defaultData/Attachments/CitasSubsecuentes.data';
import { CitasSubsecuentes } from '@/resources/js/interfaces/Attachtments/CitasSubsecuentes.interface';
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
            type: Object as PropType<CitasSubsecuentes>,
            default: CitasSubsecuentesData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
