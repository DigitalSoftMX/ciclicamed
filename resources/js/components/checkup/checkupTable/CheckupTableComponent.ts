import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Test } from '@interface/Medical/Test.interface';
import { CheckupPaginationData } from '@data/Checkup/CheckupPagination.data';
import { CheckupPagination } from '@interface/Checkup/CheckupPagination.interface';
import { Checkup } from '@interface/Checkup/Checkup.interface';
import { CheckupListData } from '@data/Checkup/CheckupList.data';
import { CheckupMatureData } from '@data/Checkup/options/CheckupMature.data';
import { CheckupMujerCiclicaData } from '@data/Checkup/options/CheckupMujerCiclica.data';
import { CheckupTeenData } from '@data/Checkup/options/CheckupTeen.data';
import { CheckupMom } from '@data/Checkup/options/CheckupMom.data';
import { CheckupDiagnosticoPrenatal } from '@data/Checkup/options/CheckupDiagnosticoPrenatal.data';
import { CheckupConvenioInstitucional } from '@data/Checkup/options/CheckupConvenioInstitucional.data';
import { CheckupItem } from '@interface/Checkup/CheckupItem.interface';
import { CheckupList } from '@interface/Checkup/CheckupList.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import { Select } from '@interface/General/Select.interface';

export default defineComponent({
    components: {
        CheckupSheduleComponent: require('@component/schedule/CheckupScheduleComponent/CheckupScheduleComponent.vue').default
    },
    emits: [],
    props: {
        title: {
            type: String,
            default: 'Checkup pendientes'
        },
        role: {
            type: String,
            default: 'Administrador'
        }
    },
    data() {
        return {
            checkupData: CheckupPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            checkupSelected: CheckupListData,
            branchesList: [] as Select[],
            options: [{country: 'Canada', code: 'CA'},]
        };
    },
    mounted() {
        this.getCheckupData(1);
        this.getBranchesList();
    },
    watch: {

    },
    methods: {
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        formatPatientName(test: Test)
        {
            return `${test.patient!.first_name} ${test.patient!.last_name}`;
        },
        getCheckupData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.checkupData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<CheckupPagination>(`/checkup/pendientes?page=${this.paginationActive}`)
                .then(response => {
                    this.checkupData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error)
                    this.loading = false;
                })
            }
        },
        getCheckupDataQuery()
        {
            if(this.activateSearch || this.query.length > 0)
            {
                this.loading = true;
                const queryPagination = this.query === '' ? this.paginationActive : 0;
                axios.get<CheckupPagination>(`/checkup/pendientes`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.checkupData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error)
                    this.loading = false;
                })
                this.activateSearch = this.query === '' ? false : true;
            }
        },
        getCheckupDataByID(id: number)
        {
            console.log(id)
            axios.get<Checkup>(`/checkup/${id}`)
            .then(response => {
                this.checkupSelected = setCheckupData(response.data, this.checkupSelected);
                $('#ckpscCheckups').modal('show');
            })
            .catch(error => {
                console.log(error)
            })
        },
        getBranchesList(): void
        {
            axios.get<Branch[]>(`/sucursales`)
            .then(response => {
                this.branchesList = response.data.map(branch => {
                    return {
                        id: branch.id,
                        childID: branch.id, 
                        text: branch.name,
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },
    },
})

export function setCheckupData(checkup: Checkup, checkupSelected: CheckupList): CheckupList
{
    checkupSelected.patient_id = checkup.patient_id;
    checkupSelected.name = checkup.category!.name;
    checkupSelected.checkupcategory_id = checkup.category!.id;
    checkupSelected.checkupList = setCheckupList(checkup.category!.name);
    checkup.consults!.map(item => {
        const index = checkupSelected.checkupList.findIndex(data => data.code === item.test_order_scheduled!.product.product_code && item.consult_reason.includes(data.name));
        checkupSelected.checkupList[index].branch_id = item.branch_id;
        checkupSelected.checkupList[index].medicalconsult_id = item.id;
        checkupSelected.checkupList[index].consult_schedule_start = item.consult_schedule_start;
        checkupSelected.checkupList[index].consult_schedule_finish = item.consult_schedule_finish;
    });
    return checkupSelected;
}

export function setCheckupList(category: string): CheckupItem[]
{
    switch(category)
    {
        case 'Mature':
            return CheckupMatureData;
        case 'Mujer cíclica':
            return CheckupMujerCiclicaData;
        case 'Teen':
            return CheckupTeenData;
        case 'Mom':
            return CheckupMom;
        case 'Diagnóstico prenatal':
            return CheckupDiagnosticoPrenatal;
        case 'Convenio institucional':
            return CheckupConvenioInstitucional;
        default:
            return [];
    }
}