import { TratamientosData } from '../../../../defaultData/Attachments/HistorialClinico/Tratamientos.data';
import { Tratamientos } from '@/resources/js/interfaces/Attachtments/HistorialClinico/options/Tratamientos.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'PersonalesPatologicosComponent',
    components: {
    },
    props:{
        formData: {
            type: Object as PropType<Tratamientos>,
            default: TratamientosData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
