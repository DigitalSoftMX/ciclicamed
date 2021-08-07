import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { BranchPaginationData } from '@data/Branch/BranchPagination.data';
import { BranchPagination } from '@interface/Branch/BranchPagination.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import BranchTableModalComponent from './BranchTableModal/BranchTableModalComponent';
import { BranchData } from '@data/Branch/Branch.data';
import 'bootstrap';

/** 
 * @description Componente que muestra la lista de sucursales registradas en el sistema
 * @class BranchTableComponent
 * @example <branch-table-component></branch-table-component>
 * @property {BranchPagination} branchData Guarda la información de las sucursales que retornar el backend en paginación
 * @property {number} paginationPages Guarda el número de páginas de branchData para mostrar el número de páginas en la paginación de la tabla
 * @property {number} paginationActive Guarda el número de página activa de la tabla
 * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
 * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
 * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
 * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
 * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
 * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
 * @property {Branch} branchSelected Guarda la información de la sucursal seleccionada en la tabla
 * @property {boolean} isNew Permite al componente {@link BranchTableModalComponent} saber si la variable {@link BranchTableComponent#branchSelected} es nueva
 * 
*/
export default defineComponent({
    /** 
     * {@link BranchTableModalComponent}
     * {@link BranchTableComponent}
     * @member {Object} BranchTableComponent.components
    */
    components: {
        BranchTableModalComponent
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
            errors: [],
            branchSelected: BranchData,
            isNew: false
        };
    },
    mounted() {
        this.getBranchData(1);
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
                    ;
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
                    ;
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})