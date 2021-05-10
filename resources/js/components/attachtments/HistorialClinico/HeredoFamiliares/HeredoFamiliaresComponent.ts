import { HeredoFamiliaresData } from '../../../../defaultData/Attachments/HistorialClinico/HeredoFamiliares.data';
import { HeredoFamiliares } from '@/resources/js/interfaces/Attachtments/HistorialClinico/options/HeredoFamiliares.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    props: {
        heredoFamiliaresData: {
            type: Object as PropType<HeredoFamiliares>,
            default: HeredoFamiliaresData
        },
    },
    data(){
        return {
            heredoFamiliaresDataCopy: Object.assign({}, this.$props.heredoFamiliaresData)
        }
    },
    setup() {
    },
    methods: {
        test()
        {
            console.log(this.heredoFamiliaresDataCopy)
        }
    }

})