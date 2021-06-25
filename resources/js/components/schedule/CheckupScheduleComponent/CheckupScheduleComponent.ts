import { CheckupListData } from '@data/Checkup/CheckupList.data';
import { CheckupConvenioInstitucional } from '@data/Checkup/options/CheckupConvenioInstitucional.data';
import { CheckupDiagnosticoPrenatal } from '@data/Checkup/options/CheckupDiagnosticoPrenatal.data';
import { CheckupMatureData } from '@data/Checkup/options/CheckupMature.data';
import { CheckupMom } from '@data/Checkup/options/CheckupMom.data';
import { CheckupMujerCiclicaData } from '@data/Checkup/options/CheckupMujerCiclica.data';
import { CheckupTeenData } from '@data/Checkup/options/CheckupTeen.data';
import { SelectData } from '@data/General/SelectSelected.data';
import { CheckupCategory } from '@interface/Checkup/CheckupCategory.interface';
import { Select } from '@interface/General/Select.interface';
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { PropType } from 'vue';

export default defineComponent({
    name: 'CheckupScheduleComponent',
    components: {
        SuccessAlertComponent: defineAsyncComponent(() => import('@component/general/alert/SuccessAlertComponent.vue')),
        SelectComponent: defineAsyncComponent(() => import('@component/general/select/SelectComponent.vue')),
        Timepicker: defineAsyncComponent(() => import('@component/general/timePicker/TimePickerComponent.vue'))
    },
    props: {
        branches: {
            type: Array as PropType<Select[]>,
            default: []
        },
        patients: {
            type: Array as PropType<Select[]>,
            default: []
        }
    },
    data() {
        return {
            categoryList: [] as Select[],
            categorySelected: SelectData,
            checkupData: CheckupListData,
            patientSelected: SelectData,
            branchesSelected: [] as Select[],
            isButtonDisabled: true
        }
    },
    mounted() {
        this.getCategories();
    },
    watch: {
        categorySelected:
        {
            handler()
            {
                switch(this.categorySelected.text)
                {
                    case 'Mature':
                        this.checkupData.checkupList = CheckupMatureData;
                        break;
                    case 'Mujer cíclica':
                        this.checkupData.checkupList = CheckupMujerCiclicaData;
                        break;
                    case 'Teen':
                        this.checkupData.checkupList = CheckupTeenData;
                        break;
                    case 'Mom':
                        this.checkupData.checkupList = CheckupMom;
                        break;
                    case 'Diagnóstico prenatal':
                        this.checkupData.checkupList = CheckupDiagnosticoPrenatal;
                        break;
                    case 'Convenio institucional':
                        this.checkupData.checkupList = CheckupConvenioInstitucional;
                        break;
                }
                this.branchesSelected = [];
                this.checkupData.checkupcategory_id = this.categorySelected.childID;
                this.checkupData.name = this.categorySelected.text;
            },
            deep: true
        },
        patientSelected:
        {
            handler()
            {
                this.checkupData.patient_id = this.patientSelected.childID;
            },
            deep: true
        },
        branchesSelected:
        {
            handler()
            {
                this.branchesSelected.map((item, index) => this.checkupData.checkupList[index].branch_id = item.childID);
            },
            deep: true
        },
        checkupData:
        {
            handler()
            {
                const incorrectScheduled = this.checkupData.checkupList.filter(item => item.branch_id === -1 && !item.name.includes('opcional') && !item.name.includes('50 años')).length;
                this.isButtonDisabled = this.checkupData.checkupList.length > 0 && this.checkupData.patient_id > 0 && incorrectScheduled === 0 ? false : true;
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
        },
        updateDate(datetime: string, index: number)
        {
            const startTime = moment(this.checkupData.checkupList[index].consult_schedule_start);
            const finishTime = moment(this.checkupData.checkupList[index].consult_schedule_finish);
            this.checkupData.checkupList[index].consult_schedule_start = moment(datetime).set('hours', startTime.hours()).set('minutes', startTime.minutes()).format('YYYY-MM-DD HH:mm:00');
            this.checkupData.checkupList[index].consult_schedule_finish = moment(datetime).set('hours', finishTime.hours()).set('minutes', finishTime.minutes()).format('YYYY-MM-DD HH:mm:00');
        },
        formatDate(index: number)
        {
            return moment(this.checkupData.checkupList[index].consult_schedule_start).format('YYYY-MM-DD');
        },
        saveCheckupData()
        {
            console.log(this.checkupData)
            axios.post(`/checkup`, {
                data: this.checkupData
            })
            .then(response => {
                $('#ckpscCheckups').modal('hide');
                $('#ckscSuccess').modal('show');
                this.clearData();
            })
            .catch(error => {
                console.log(error)
            })
        },
        clearData()
        {
            this.categorySelected = SelectData,
            this.checkupData = CheckupListData,
            this.checkupData.checkupList = [];
            this.patientSelected = SelectData,
            this.branchesSelected = [],
            this.isButtonDisabled = true
        }
    },
})