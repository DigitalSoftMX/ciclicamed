import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
import { MaternoFetalResultados } from '@/resources/js/interfaces/Attachtments/MaternoFetal/options/MaternoFetalResultados.interface';
import { MaternoFetalResultadosData } from '../../../../defaultData/Attachments/MaternoFetal/MaternoFetalResultados.data';

export default defineComponent({
    name: 'ColposcopiaComponent',
    components: {
    },
    props:{
        formData: {
            type: Object as PropType<MaternoFetalResultados>,
            default: MaternoFetalResultadosData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
