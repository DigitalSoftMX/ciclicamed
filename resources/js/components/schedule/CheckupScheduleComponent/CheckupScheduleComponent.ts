import { CheckupConvenioInstitucional } from '@data/Checkup/options/CheckupConvenioInstitucional.data';
import { CheckupDiagnosticoPrenatal } from '@data/Checkup/options/CheckupDiagnosticoPrenatal.data';
import { CheckupMatureData } from '@data/Checkup/options/CheckupMature.data';
import { CheckupMom } from '@data/Checkup/options/CheckupMom.data';
import { CheckupMujerCiclicaData } from '@data/Checkup/options/CheckupMujerCiclica.data';
import { CheckupTeenData } from '@data/Checkup/options/CheckupTeen.data';
import { SelectData } from '@data/General/SelectSelected.data';
import { CheckupCategory } from '@interface/Checkup/CheckupCategory.interface';
import { CheckupSelect } from '@interface/Checkup/CheckupSelect.interface';
import { Select } from '@interface/General/Select.interface';
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import $ from 'jquery';
import { PropType } from 'vue';

export default defineComponent({
    name: 'CheckupScheduleComponent',
    components: {
        SelectComponent: defineAsyncComponent(() => import('@component/general/select/SelectComponent.vue')),
        Timepicker: defineAsyncComponent(() => import('@component/general/timePicker/TimePickerComponent.vue'))
    },
    props: {
        branchesList: {
            type: Array as PropType<Select[]>,
            default: []
        }
    },
    data() {
        return {
            categoryList: [] as Select[],
            categorySelected: SelectData,
            checkupData: [] as CheckupSelect[]
        }
    },
    mounted() {
        this.getCategories();
        $('#ckpscCheckups').modal('show')
    },
    watch: {
        categorySelected:
        {
            handler()
            {
                switch(this.categorySelected.text)
                {
                    case 'Mature':
                        this.checkupData = CheckupMatureData;
                        break;
                    case 'Mujer cíclica':
                        this.checkupData = CheckupMujerCiclicaData;
                        break;
                    case 'Teen':
                        this.checkupData = CheckupTeenData;
                        break;
                    case 'Mom':
                        this.checkupData = CheckupMom;
                        break;
                    case 'Diagnóstico prenatal':
                        this.checkupData = CheckupDiagnosticoPrenatal;
                        break;
                    case 'Convenio institucional':
                        this.checkupData = CheckupConvenioInstitucional;
                        break;
                }
            },
            deep: true
        }
    },
    methods: {
        getCategories()
        {
            axios.get<CheckupCategory[]>(`/checkup/categorias`)
            .then(response => {
                this.categoryList = response.data.map(item => {
                    return {
                        id: item.id,
                        text: item.name,
                        childID: item.id
                    }
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
})