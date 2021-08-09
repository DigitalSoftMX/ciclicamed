import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { BranchPaginationData } from '@data/Branch/BranchPagination.data';
import { BranchPagination } from '@interface/Branch/BranchPagination.interface';
import { Branch } from '@interface/Branch/Branch.interface';
import BranchTableModalComponent from './BranchTableModal/BranchTableModalComponent';
import { BranchData } from '@data/Branch/Branch.data';
import 'bootstrap';

/** 
 * @description Componente que muestra la lista de sucursales registradas en el sistema mediante el uso de una tabla paginada
 * @class BranchTableComponent
 * @example <branch-table-component></branch-table-component>
*/
export default defineComponent({
    /** 
     * {@link BranchTableModalComponent}
     * @member BranchTableComponent.components
    */
    components: {
        BranchTableModalComponent
    },
    /**
    * Variables del componente
    * @member BranchTableComponent.data
    * @property {BranchPagination} branchData Guarda la información de las sucursales que retorna el backend en paginación
    * @property {number} paginationPages Guarda el número de páginas de branchData para mostrar el número de páginas en la paginación de la tabla
    * @property {number} paginationActive Guarda el número de página activa de la tabla
    * @property {string} query Guarda la búsqueda realizada en el input de búsqueda de la tabla
    * @property {boolean} activateSearch Activa o no la búsqueda desde el input de búsqueda de la tabla
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
    * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {Branch} branchSelected Guarda la información de la sucursal seleccionada en la tabla
    * @property {boolean} isNew Permite al componente {@link BranchTableModalComponent} saber si la variable branchSelected es nueva
     */
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
    /** 
     * Al iniciar el componente, se obtienen los datos de la sucursal mediante la función {@link BranchTableComponent.getBranchData}
     * @member BranchTableComponent.mounted
    */
    mounted() {
        this.getBranchData(1);
    },
    methods: {
        /** 
         * Crea una nueva sucursal.
         * A la variable branchSelected se le asignan datos predefinidos mediante la constante {@link BranchData} y se indica que es una nueva sucursal mediante la asignación true de la variable isNew.
         * Una vez asignados las anteriores variables se muestra el componente {@link BranchTableModalComponent}
         * @function BranchTableComponent.createBranch
        */
        createBranch()
        {
            this.branchSelected = BranchData;
            this.isNew = true;
            $('#brtmcBranchModal').modal('show');
        },
        /** 
         * Modifica los datos de una sucursal seleccionada.
         * Cuando se selecciona una sucursal, se asigna la variable branchSelected con los datos de la sucursal y se indica que dichos datos no son nuevos mediante la asignación false de la variable isNew.
         * Una vez asignados las anteriores variables se muestra el componente {@link BranchTableModalComponent} 
         * @param {Branch} branch Sucursal seleccionada
         * @function BranchTableComponent.editBranch
        */
        editBranch(branch: Branch)
        {
            this.branchSelected = branch;
            this.isNew = false;
            $('#brtmcBranchModal').modal('show');
        },
        /** 
         * Habilita una sucursal para su uso dentro del sistema.
         * Realizar una petición HTTP a la URI /sucursales/{id}/habilitar. Si la petición es correcta se asigna al objecto successAlert un título y un mensaje de éxito y se muestra
         * el componente {@link SuccessAlertComponent}. En caso de error, se asigna a la variable errors los errores del backend y se muestra el componente {@link ErrorAlertComponent}
         * @param {Branch} branch Sucursal seleccionada
         * @function BranchTableComponent.enableBranch
        */
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
        /** 
         * Deshabilita una sucursal para su uso dentro del sistema.
         * Realizar una petición HTTP a la URI /sucursales/{id}/deshabilitar. Si la petición es correcta se asigna al objecto successAlert un título y un mensaje de éxito y se muestra
         * el componente {@link SuccessAlertComponent}. En caso de error, se asigna a la variable errors los errores del backend y se muestra el componente {@link ErrorAlertComponent}
         * @param {Branch} branch Sucursal seleccionada
         * @function BranchTableComponent.disableBranch
        */
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
        /** 
         * Obtiene las sucursales registradas en el sistema utilizando la paginación provista por el backend.
         * Antes de realizar la petición al servidor con las sucursales, se habilita la animación de carga con la asignación true de la variable loading, se verifica que la página guardada en la variable page sea mayor o igual a 1,
         * que la página sea menor o igual a la última página de la paginación guardada en la variable
         * branchData y que la página no sea la misma que la de la variable paginationActive.
         * Si la comprobación es exitosa se realiza una petición HTTP a la URI /sucursales/admin con el parámetro de la página. Si la petición es correcta se asigna la variable branchData con la respuesta
         * del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor y se deshabilita la animación de carga mediante la asignación false de la variable loading,
         * en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @param {number} page Número de la página
         * @function BranchTableComponent.getBranchData
        */
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
                    this.loading = false;
                })
            }
        },
        /** 
         * Obtiene las sucursales registradas en el sistema que coincidan con la búsqueda realizada por el usuario.
         * Antes de realizar la petición al servidor con las sucursales, se habilita la animación de carga con la asignación true de la variable loading,
         * se asigna a la variable queryPagination el valor de la variable paginationActive si la variable query está vacío, en caso contrario se le asigna el 0.
         * Si la variable activateSeach es true o la longitud de la variable query es mayor a 0, se realizar una llamada a la URI /sucursales/admin con el parámetro de la página y el contenido de la búsqueda.
         * Si la petición es correcta se asigna la variable branchData con la respuesta del servidor, se asigna a la variabler paginationPages con los datos de la paginación provista por el servidor
         * y se deshabilita la animación de carga mediante la asignación false de la variable loading, en caso contrario solo se deshabilita la animación de la carga mediante la asignación false de la variable loading
         * @function BranchTableComponent.getBranchDataQuery
        */
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
                    this.loading = false;
                })
            }
            this.activateSearch = this.query === '' ? false : true;
        },
    },
})