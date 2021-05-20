import { PersonalesNoPatologicosData } from '../../../../defaultData/Attachments/HistorialClinico/options/PersonalesNoPatologicos.data';
import { PersonalesNoPatologicos } from '@/resources/js/interfaces/Attachtments/HistorialClinico/options/PersonalesNoPatologicos.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'HistorialClinicoComponent',
    components: {
    },
    props:{
        formData: {
            type: Object as PropType<PersonalesNoPatologicos>,
            default: PersonalesNoPatologicosData
        },
    },
    data(){
        return {
            formDataCopy: Object.assign({}, this.$props.formData),
            disabled: {
                type: Boolean as PropType<Boolean>,
                default: true
            },
        }
    },
    methods: {
        test()
        {
            console.log(this.formDataCopy)
        }
    },
    watch: {
        formData()
        {
            this.formDataCopy = Object.assign({}, this.$props.formData);
        }
    }
})
