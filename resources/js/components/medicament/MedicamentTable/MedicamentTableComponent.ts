import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import MedicamentTableModalComponent from './medicamentTableModal/MedicamentTableModalComponent';
import { MedicamentPaginationData } from '@data/Medical/MedicamentPagination.data';
import { MedicamentData } from '@data/Medical/Medicament.data';
import { Medicament } from '@interface/Medical/Medicament.interface';
import { MedicamentPagination } from '@interface/Medical/MedicamentPagination.interface';

export default defineComponent({
    components: {
        MedicamentTableModalComponent
    },
    emits: [],
    props: {
    },
    data() {
        return {
            medicamentData: MedicamentPaginationData,
            paginationPages: 0,
            paginationActive: 0,
            query: '',
            activateSearch: true,
            loading: true,
            successAlert: {
                title: '',
                message: ''
            },
            confirmationAlert: {
                title: '',
                message: ''
            },
            errors: [],
            medicamentSelected: MedicamentData,
            isNew: false
        };
    },
    mounted() {
        this.getMedicamentData(1);
    },
    watch: {
        
    },
    methods: {
        createMedicament()
        {
            this.medicamentSelected = MedicamentData;
            this.isNew = true;
            $('#brtmcBranchModal').modal('show');
        },
        editMedicament(medicament: Medicament)
        {
            this.medicamentSelected = medicament;
            this.isNew = false;
            $('#brtmcBranchModal').modal('show');
        },
        getMedicamentData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.medicamentData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<MedicamentPagination>(`/productos/medicamentos/admin?page=${this.paginationActive}`)
                .then(response => {
                    this.medicamentData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
                })
            }
        },
        getMedicamentDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<MedicamentPagination>(`/productos/medicamentos/admin`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.medicamentData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})