import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Test } from '@interface/Medical/Test.interface';
import { ConsultPagination } from '@interface/Medical/ConsultPagination.interface';
import { ConsultPaginationData } from '@data/Medical/ConsultPagination.data';
import { Patient } from '@interface/Patient/Patient.interface';
import { Consult } from '@interface/Medical/Consult.interface';

export default defineComponent({
    components: {
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
            consultData: ConsultPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true
        };
    },
    mounted() {
        this.getUserData(1);
    },
    computed: {
        showSupplierCode(): boolean
        {
            return this.consultData.data.filter(item => item.test_scheduled!.order!.product.supplier_code).length > 0;
        }
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
        getUserData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.consultData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<ConsultPagination>(`/consultas/muestras?page=${this.paginationActive}`)
                .then(response => {
                    console.log(response.data)
                    this.consultData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error)
                    this.loading = false;
                })
            }
        },
        getUserDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<ConsultPagination>(`/consultas/muestras`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.consultData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error)
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})