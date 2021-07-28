import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { EmployeePagination } from '@interface/Employee/EmployeePagination.interface';
import { TestPaginationData } from '@data/Medical/TestPagination.data';
import { TestPagination } from '@interface/Medical/TestPagination.interface';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { Test } from '@interface/Medical/Test.interface';
import { PrescriptionPaginationData } from '@data/Medical/Prescription/PrescriptionPagination.data';
import { PrescriptionPagination } from '@interface/Medical/Prescription/PrescriptionPagination.interface';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { Consult } from '@interface/Medical/Consult.interface';

export default defineComponent({
    components: {
        PrescriptionModalComponent: require('@component/patient/prescription/prescriptionModal/PrescriptionModalComponent.vue').default
    },
    emits: [],
    props: {
        title: {
            type: String,
            default: ''
        },
        role: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            prescriptionData: PrescriptionPaginationData,
            prescriptions: [] as Prescription[],
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true
        };
    },
    mounted() {
        this.getPrescriptionsData(1);
    },
    watch: {

    },
    methods: {
        formatDate(date: string)
        {
            return moment(date).format('DD-MM-YYYY');
        },
        formatPatientName(consult: Consult)
        {
            return `${consult.patient!.first_name} ${consult.patient!.last_name}`;
        },
        getPrescriptionsData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.prescriptionData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<PrescriptionPagination>(`/consultas/recetas?page=${this.paginationActive}`)
                .then(response => {
                    this.prescriptionData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
            }
        },
        getPrescriptionsDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<PrescriptionPagination>(`/consultas/recetas`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.prescriptionData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
        getPrescriptions(consult: Consult)
        {
            this.prescriptions = consult.prescriptions!;
            $('#prestacoPrescriptions').modal('show');
        }
    },
})