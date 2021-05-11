import { ClimaterioSaludOseaData } from '../../../defaultData/Attachments/ClimaterioSaludOsea/ClimaterioSaludOsea.data';
import { ClimaterioSaludOsea } from '@/resources/js/interfaces/Attachtments/ClimaterioSaludOsea/ClimaterioSaludOsea.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'ClimaterioSaludOseaComponent',
    components: {
    },
    props:{
        formData: {
            type: Object as PropType<ClimaterioSaludOsea>,
            default: ClimaterioSaludOseaData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
