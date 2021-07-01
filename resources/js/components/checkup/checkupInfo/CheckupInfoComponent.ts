import { CheckupData } from '@data/Checkup/Checkup.data';
import { CheckupListData } from '@data/Checkup/CheckupList.data';
import { Checkup } from '@interface/Checkup/Checkup.interface';
import { CheckupList } from '@interface/Checkup/CheckupList.interface';
import { Consult } from '@interface/Medical/Consult.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    name: 'CheckupInfoComponent',
    components: {
    },
    props: {
        checkupData: {
            type: Object as PropType<Checkup>,
            default: CheckupData
        },
    },
    data() {
        return {
        }
    },
    computed:
    {
        consults(): Consult[]
        {
            return this.checkupData.consults!;
        }
    },
    mounted() {
    },
    watch: {
    },
    methods: {
        showNameInfo(consult: Consult): string
        {
            return consult.test_scheduled === null ? consult.consult_reason.split(' ', 3).join(' ') : consult.test_scheduled!.order.product.name;
        },
        showCategoryInfo(consult: Consult): string
        {
            return consult.test_scheduled === null ? 'Consulta' : consult.test_scheduled!.order!.product.product_code!.includes('IMA') ? 'Imagenología': 'Laboratorio';
        },
        showStatusInfo(consult: Consult): string
        {
            return consult.test_scheduled === null ? consult.status!.name : consult.test_scheduled!.status!.name;
        }
    },
})