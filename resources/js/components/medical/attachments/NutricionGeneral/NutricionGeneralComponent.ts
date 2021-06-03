import { NutricionGeneralData } from '@data/Medical/Attachments/Nutricion/NutricionGeneral.data';
import { NutricionGeneral } from '@interface/Medical/Attachtments/Nutricion/NutricionGeneral.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

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
