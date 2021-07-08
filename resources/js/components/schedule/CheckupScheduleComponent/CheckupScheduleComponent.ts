import { CheckupListData } from '@data/Checkup/CheckupList.data';
import { CheckupConvenioInstitucional } from '@data/Checkup/options/CheckupConvenioInstitucional.data';
import { CheckupDiagnosticoPrenatal } from '@data/Checkup/options/CheckupDiagnosticoPrenatal.data';
import { CheckupMatureData } from '@data/Checkup/options/CheckupMature.data';
import { CheckupMom } from '@data/Checkup/options/CheckupMom.data';
import { CheckupMujerCiclicaData } from '@data/Checkup/options/CheckupMujerCiclica.data';
import { CheckupTeenData } from '@data/Checkup/options/CheckupTeen.data';
import { SelectData } from '@data/General/SelectSelected.data';
import { CheckupCategory } from '@interface/Checkup/CheckupCategory.interface';
import { CheckupList } from '@interface/Checkup/CheckupList.interface';
import { Select } from '@interface/General/Select.interface';
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { PropType } from 'vue';
export default defineComponent({
    name: 'CheckupScheduleComponent',
    components: {
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        SelectComponent: require('@component/general/select/SelectComponent.vue').default,
        Timepicker: require('@component/general/timePicker/TimePickerComponent.vue').default
    },
    props: {
        branches: {
            type: Array as PropType<Select[]>,
            default: []
        },
        patients: {
            type: Array as PropType<Select[]>,
            default: []
        },
        checkupData: {
            type: Object as PropType<CheckupList>,
            default: CheckupListData
        },
        enableOptions:
        {
            type: Boolean,
            default: true
        },
        patientID: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            categoryList: [] as CheckupCategory[],
            categorySelected: 0,
            checkupDataCopy: this.checkupData,
            branchesSelected: [] as number[],
            isButtonDisabled: true,
            successAlert: {
                title: '',
                message: ''
            },
            isCheckupNew: true
        }
    },
    computed: {
        title(): string
        {
            return this.enableOptions ? 'Crear checkup' : `Editar checkup ${this.checkupData.name}`;
        }
    },
    mounted() {
        this.getCategories();
        this.checkupDataCopy.patient_id = this.patientID;
    },
    watch: {
        patientID()
        {
            this.checkupDataCopy.patient_id = this.patientID;
        },
        categorySelected:
        {
            handler()
            {
                switch(this.categoryList[this.categorySelected -1].name)
                {
                    case 'Mature':
                        this.checkupDataCopy.checkupList = CheckupMatureData.filter(item => item.code !== "CON");
                        break;
                    case 'Mujer cíclica':
                        this.checkupDataCopy.checkupList = CheckupMujerCiclicaData.filter(item => item.code !== "CON");
                        break;
                    case 'Teen':
                        this.checkupDataCopy.checkupList = CheckupTeenData.filter(item => item.code !== "CON");
                        break;
                    case 'Mom':
                        this.checkupDataCopy.checkupList = CheckupMom.filter(item => item.code !== "CON");
                        break;
                    case 'Diagnóstico prenatal':
                        this.checkupDataCopy.checkupList = CheckupDiagnosticoPrenatal.filter(item => item.code !== "CON");
                        break;
                    case 'Convenio institucional':
                        this.checkupDataCopy.checkupList = CheckupConvenioInstitucional.filter(item => item.code !== "CON");
                        break;
                }
                this.branchesSelected = [];
                this.checkupDataCopy.checkupcategory_id = this.categorySelected;
                this.checkupDataCopy.name = this.categoryList[this.categorySelected -1].name;
            },
            deep: true
        },
        branchesSelected:
        {
            handler()
            {
                this.branchesSelected.map((item, index) => this.checkupDataCopy.checkupList[index].branch_id = item);
            },
            deep: true
        },
        checkupData:
        {
            handler()
            {
                this.checkupDataCopy = this.checkupData;
                this.branchesSelected = this.checkupData.checkupList!.map(item => item.branch_id);
                this.isCheckupNew = this.checkupData.checkup_id > 0 ? false : true;
            },
            deep: true
        },
        checkupDataCopy:
        {
            handler()
            {
                const incorrectScheduled = this.checkupDataCopy.checkupList.filter(item => item.branch_id === -1 && !item.name.includes('opcional') && !item.name.includes('50 años')).length;
                this.isButtonDisabled = this.checkupDataCopy.checkupList.length > 0 && this.checkupDataCopy.patient_id > 0 && incorrectScheduled === 0 ? false : true;
            },
            deep: true
        }
    },
    methods: {
        getCategories()
        {
            axios.get<CheckupCategory[]>(`/checkup/categorias`)
            .then(response => {
                this.categoryList = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        },
        updateDate(datetime: string, index: number)
        {
            const startTime = moment(this.checkupDataCopy.checkupList[index].consult_schedule_start);
            const finishTime = moment(this.checkupDataCopy.checkupList[index].consult_schedule_finish);
            this.checkupDataCopy.checkupList[index].consult_schedule_start = moment(datetime).set('hours', startTime.hours()).set('minutes', startTime.minutes()).format('YYYY-MM-DD HH:mm:00');
            this.checkupDataCopy.checkupList[index].consult_schedule_finish = moment(datetime).set('hours', finishTime.hours()).set('minutes', finishTime.minutes()).format('YYYY-MM-DD HH:mm:00');
        },
        formatDate(index: number)
        {
            return moment(this.checkupDataCopy.checkupList[index].consult_schedule_start).format('YYYY-MM-DD');
        },
        uploadCheckupData()
        {
            this.isCheckupNew ? this.saveCheckupData() : this.updateCheckupData();
        },
        saveCheckupData()
        {
            axios.post(`/checkup`, {
                data: this.checkupDataCopy
            })
            .then(response => {
                this.successAlert.title = "Checkup creado";
                this.successAlert.message = "El checkup se ha creado correctamente";
                $('#ckpscCheckups').modal('hide');
                $('#ckscSuccess').modal('show');
                this.clearData();
            })
            .catch(error => {
                console.log(error)
            })
        },
        updateCheckupData()
        {
            axios.patch(`/checkup`, {
                data: this.checkupDataCopy
            })
            .then(response => {
                this.successAlert.title = "Checkup actualizado";
                this.successAlert.message = "El checkup se ha actualizado correctamente";
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
            this.categorySelected = 1,
            this.checkupDataCopy = CheckupListData,
            this.checkupDataCopy.checkupList = [];
            this.branchesSelected = [],
            this.isButtonDisabled = true
        }
    },
})