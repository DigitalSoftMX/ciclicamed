import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
import { NutricionPerinatal } from '@/resources/js/interfaces/Attachtments/Nutricion/NutricionPerinatal.interface';
import { NutricionPerinatalData } from '../../../../defaultData/Attachments/Nutricion/NutricionPerinatal.data';

export default defineComponent({
    name: 'NutricionPerinatalComponent',
    components: {
    },
    props:{
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
