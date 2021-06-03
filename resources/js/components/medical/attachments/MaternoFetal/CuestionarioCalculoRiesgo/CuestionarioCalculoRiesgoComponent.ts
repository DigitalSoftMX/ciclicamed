import { MaternoFetalCuestionarioData } from '@data/Medical/Attachments/MaternoFetal/MaternoFetalCuestionario.data';
import { MaternoFetalCuestionario } from '@interface/Medical/Attachtments/MaternoFetal/options/MaternoFetalCuestionario.interface';
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
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
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
