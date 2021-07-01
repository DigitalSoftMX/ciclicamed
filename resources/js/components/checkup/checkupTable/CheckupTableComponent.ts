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
import { defineAsyncComponent } from 'vue';
import { CheckupData } from '@data/Checkup/Checkup.data';
import $ from 'jquery';
require('bootstrap');

export default defineComponent({
    components: {
        CheckupInfoComponent: defineAsyncComponent(() => import('@component/checkup/checkupInfo/CheckupInfoComponent.vue')),
        SuccessAlertComponent: defineAsyncComponent(() => import('@component/general/alert/SuccessAlertComponent.vue')),
        ConfirmationAlertComponent: defineAsyncComponent(() => import('@component/general/alert/ConfirmationAlertComponent/ConfirmationAlertComponent.vue')),
        EmptyErrorComponent: defineAsyncComponent(() => import('@component/general/error/EmptyErrorComponent.vue')),
        CheckupSheduleComponent: defineAsyncComponent(() => import('@component/schedule/CheckupScheduleComponent/CheckupScheduleComponent.vue'))
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
            checkupInfoSelected: CheckupData,
            checkupIDSelected: 0,
            branchesList: [] as Select[],
            successAlert: {
                title: '',
                message: ''
            },
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
                    console.log(response.data)
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
        getCheckupDataByID(id: number, category: string)
        {
            axios.get<Checkup>(`/checkup/${id}`)
            .then(response => {
                console.log(response.data)
                this.checkupInfoSelected = response.data;
                this.checkupSelected = setCheckupData(response.data, this.checkupSelected, id);
                category === 'show' ? $('#ckpscCheckupInfo').modal('show') : $('#ckpscCheckups').modal('show');
            })
            .catch(error => {
                console.log(error)
            })
        },
        showCancelConfirm(id: number)
        {
            this.checkupIDSelected = id;
            $('#cktcConfirmation').modal('show');
        },
        cancelCheckup()
        {
            axios.delete<Checkup>(`/checkup/${this.checkupIDSelected}`)
            .then(response => {
                this.successAlert.title = 'Checkup cancelado';
                this.successAlert.message = 'Checkup cancelado correctamente';
                this.checkupData.data = this.checkupData.data.filter(item => item.id !== this.checkupIDSelected);
                $('#cktcSuccess').modal('show');
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

export function setCheckupData(checkup: Checkup, checkupSelected: CheckupList, checkupID: number): CheckupList
{
    checkupSelected.patient_id = checkup.patient_id;
    checkupSelected.name = checkup.category!.name;
    checkupSelected.checkupcategory_id = checkup.category!.id;
    checkupSelected.checkupList = setCheckupList(checkup.category!.name);
    checkupSelected.checkup_id = checkupID;
    checkup.consults!.map(item => {
        let index = -1;
        if(item.test_scheduled! === null)
        {
            index = checkupSelected.checkupList.findIndex(data => data.medicalspecialty_id === item.medicalspecialty_id);
        } else {
            index = checkupSelected.checkupList.findIndex(data => data.code === item.test_scheduled!.order!.product.product_code && item.consult_reason.includes(data.name));
        }
        checkupSelected.checkupList[index].branch_id = item.branch_id;
        checkupSelected.checkupList[index].medicalconsult_id = item.id;
        checkupSelected.checkupList[index].consult_schedule_start = item.consult_schedule_start;
        checkupSelected.checkupList[index].consult_schedule_finish = item.consult_schedule_finish;
    });
    // checkupSelected.checkupList = checkupSelected.checkupList.filter(item => moment(item.consult_schedule_start).isAfter(moment()));
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