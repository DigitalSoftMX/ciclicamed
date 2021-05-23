import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
import { NutricionGeneral } from '@/resources/js/interfaces/Attachtments/Nutricion/NutricionGeneral.interface';
import { NutricionGeneralData } from '../../../../defaultData/Attachments/Nutricion/NutricionGeneral.data';

export default defineComponent({
    name: 'NutricionPerinatalComponent',
    components: {
    },
    props:{
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        formData: {
            type: Object as PropType<NutricionGeneral>,
            default: NutricionGeneralData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
