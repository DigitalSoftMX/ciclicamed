import { MaternoFetalResultadosData } from '@data/Medical/Attachments/MaternoFetal/MaternoFetalResultados.data';
import { MaternoFetalResultados } from '@interface/Medical/Attachtments/MaternoFetal/options/MaternoFetalResultados.interface';
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
