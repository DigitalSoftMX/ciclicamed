import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { BranchPaginationData } from '@data/Branch/BranchPagination.data';
import { BranchPagination } from '@interface/Branch/BranchPagination.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import BranchTableModalComponent from './BranchTableModal/BranchTableModalComponent';
import { BranchData } from '@data/Branch/Branch.data';

export default defineComponent({
    components: {
        BranchTableModalComponent
    },
    emits: [],
    props: {
    },
    data() {
        return {
            branchData: BranchPaginationData,
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
            branchSelected: BranchData,
            isNew: false
        };
    },
    mounted() {
        this.getBranchData(1);
    },
    watch: {
        
    },
    methods: {
        createBranch()
        {
            this.branchSelected = BranchData;
            this.isNew = true;
            $('#brtmcBranchModal').modal('show');
        },
        editBranch(branch: Branch)
        {
            this.branchSelected = branch;
            this.isNew = false;
            $('#brtmcBranchModal').modal('show');
        },
        enableBranch(branch: Branch)
        {
            axios.post(`/sucursales/${branch.id}/habilitar`)
            .then(response => {
                this.successAlert.title = 'Sucursal modificada correctamente';
                this.successAlert.message = 'La sucursal ha sido habilitada correctamente';
                $('#brtcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.error;
                $('#brtcError').modal('show');
            })
        },
        disableBranch(branch: Branch)
        {
            axios.post(`/sucursales/${branch.id}/deshabilitar`)
            .then(response => {
                this.successAlert.title = 'Sucursal modificada correctamente';
                this.successAlert.message = 'La sucursal ha sido deshabilitada correctamente';
                $('#brtcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.error;
                $('#brtcError').modal('show');
            })
        },
        getBranchData(page: number)
        {
            this.loading = true;
            if(page >= 1 && page <= this.branchData.pagination.last_page && page !== this.paginationActive)
            {
                this.paginationActive = page;
                axios.get<BranchPagination>(`/sucursales/admin?page=${this.paginationActive}`)
                .then(response => {
                    this.branchData = response.data;
                    this.paginationPages = response.data.pagination.last_page;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
                })
            }
        },
        getBranchDataQuery()
        {
            this.loading = true;
            const queryPagination = this.query === '' ? this.paginationActive : 0;
            if(this.activateSearch || this.query.length > 0)
            {
                axios.get<BranchPagination>(`/sucursales/admin`, {
                    params: {
                        page: queryPagination,
                        query: this.query
                    }
                })
                .then(response => {
                    this.branchData = response.data;
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