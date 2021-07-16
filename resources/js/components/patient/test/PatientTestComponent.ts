import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent } from 'vue';
import $ from 'jquery';
import moment from 'moment';
import { Consult } from '@interface/Medical/Consult.interface';
import { ConsultPagination } from '@interface/Medical/ConsultPagination.interface';
import axios from 'axios';
import { ConsultPaginationData } from '@data/Medical/ConsultPagination.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import TestTableModalComponent from '@component/medical/test/testTable/testTableModal/TestTableModalComponent';
import { TestData } from '@data/Medical/Test.data';
require('daterangepicker'); 
require('bootstrap');

export default defineComponent({
    components: {
        TestTableModalComponent,
        PatientTestFileModalComponent: require('@component/patient/test/testFileModal/PatientTestFileModalComponent.vue').default
    },
    props: {
        patientID: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            prescriptionsData: ConsultPaginationData,
            enableEmptyData: false,
            prescriptions: [] as Prescription[],
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            results: {},
            productSelected: '',
            testSelected: TestData
        };
    },
    mounted() {
        const that = this;
        $("#search").daterangepicker({
            showDropdowns: true,
            minYear: 1930,
            maxYear: moment().endOf("year").year(),
            ranges: {
                'Hoy': [moment(), moment()],
                'Últimos 7 dias': [moment().subtract(6, 'days'), moment()],
                'Últimos 30 dias': [moment().subtract(29, 'days'), moment()],
                'Este mes': [moment().startOf('month'), moment().endOf('month')],
                'Último mes': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month')
                    .endOf('month')
                ],
                'Este año': [moment().startOf('year'), moment().endOf('year')],
                'Todos': [moment().year(1930).startOf('year'), moment().endOf('year')],
            },
            locale: {
                cancelLabel: 'Cancelar',
                applyLabel: 'Seleccionar',
                "customRangeLabel": "Seleccionar otra fecha",
            }
        });
        this.getPrescriptionsData(1);
    },
    methods: {
        getDateFormatted(date: string) {
            moment.locale('es');
            return moment(date).format('D MMMM YYYY');
        },
        showFileResults(consult: Consult) {
            this.productSelected = consult.test_scheduled?.order.product.product_code!;
            this.results = consult.test_scheduled!.result!.results;
            $('#pattcFileTest').modal('show');
        },
        getTestOrders(consult: Consult)
        {
            this.testSelected = consult.test_scheduled!;
            $('#testTableModal').modal('show');
        },
        getPrescriptionsData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.prescriptionsData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<ConsultPagination>(`/pacientes/${this.patientID}/estudios?page=${this.paginationActive}`)
                .then(response => {
                    console.log(response.data)
                    this.prescriptionsData = response.data;
                    this.prescriptionsData.data = response.data.data.filter(item => item.test_scheduled?.order);
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error)
                    this.loading = false;
                })
            }
        },
        getPrescriptionsDataQuery()
        {
            if(this.activateSearch || this.query.length > 0)
            {
                this.loading = true;
                const queryPagination = this.query === '' ? this.paginationActive : 0;
                axios.get<ConsultPagination>(`/pacientes/${this.patientID}/estudios`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.prescriptionsData = response.data;
                    this.prescriptionsData.data = response.data.data.filter(item => item.test_scheduled?.order);
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
    }
})