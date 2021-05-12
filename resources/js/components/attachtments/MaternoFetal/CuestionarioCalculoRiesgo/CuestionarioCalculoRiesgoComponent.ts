import { MaternoFetalCuestionarioData } from '../../../../defaultData/Attachments/MaternoFetal/MaternoFetalCuestionario.data';
import { MaternoFetalCuestionario } from '@/resources/js/interfaces/Attachtments/MaternoFetal/options/MaternoFetalCuestionario.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'ColposcopiaComponent',
    components: {
    },
    props:{
        formData: {
            type: Object as PropType<MaternoFetalCuestionario>,
            default: MaternoFetalCuestionarioData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
