import { NutricionPerinatalData } from '@data/Medical/Attachments/Nutricion/NutricionPerinatal.data';
import { NutricionPerinatal } from '@interface/Medical/Attachtments/Nutricion/NutricionPerinatal.interface';
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
            type: Object as PropType<NutricionPerinatal>,
            default: NutricionPerinatalData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData)
        }
    },
    methods: {}
})
