import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent } from 'vue';
import $ from 'jquery';
import moment from 'moment';
import { Consult } from '@interface/Medical/Consult.interface';
import { ConsultPagination } from '@interface/Medical/ConsultPagination.interface';
import axios from 'axios';
import { ConsultPaginationData } from '@data/Medical/ConsultPagination.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
require('daterangepicker'); 
require('bootstrap');

export default defineComponent({
    components: {
        PrescriptionModalComponent: defineAsyncComponent(() => import('@component/patient/prescription/prescriptionModal/PrescriptionModalComponent.vue'))
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
        showMedicaments(consult: Consult) {
            this.prescriptions = consult.prescriptions!
            console.log(this.prescriptions)
            $('#medicamentsModal').modal('show');
        },
        getPrescriptionsData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.prescriptionsData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<ConsultPagination>(`/pacientes/${this.patientID}/recetas?page=${this.paginationActive}`)
                .then(response => {
                    console.log(response.data)
                    this.prescriptionsData = response.data;
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
                axios.get<ConsultPagination>(`/pacientes/${this.patientID}/recetas`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.prescriptionsData = response.data;
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