import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { EmployeePagination } from '@interface/Employee/EmployeePagination.interface';
import { TestPaginationData } from '@data/Medical/TestPagination.data';
import { TestPagination } from '@interface/Medical/TestPagination.interface';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { Test } from '@interface/Medical/Test.interface';
import { CheckupPaginationData } from '@data/Checkup/CheckupPagination.data';
import { CheckupPagination } from '@interface/Checkup/CheckupPagination.interface';

export default defineComponent({
    components: {
    },
    emits: [],
    props: {
        testCategory: {
            type: String,
            default: 'laboratorio'
        },
        testStatus: {
            type: String,
            default: 'completados'
        },
        title: {
            type: String,
            default: 'Estudios pendientes'
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
            loading: true
        };
    },
    mounted() {
        this.getCheckupData(1);
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
        getCheckupDataByID()
        {
            
        }
    },
})