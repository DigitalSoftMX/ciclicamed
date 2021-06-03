import { HeredoFamiliaresData } from '@data/Medical/Attachments/HistorialClinico/options/HeredoFamiliares.data';
import { HeredoFamiliares } from '@interface/Medical/Attachtments/HistorialClinico/options/HeredoFamiliares.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    props: {
        formData: {
            type: Object as PropType<HeredoFamiliares>,
            default: HeredoFamiliaresData
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
    setup() {
    },
    methods: {
    },
    watch: {
        formData()
        {
            this.formDataCopy = Object.assign({}, this.$props.formData);
        }
    }

})