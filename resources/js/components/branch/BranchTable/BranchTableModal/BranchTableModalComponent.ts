import { BranchData } from '@data/Branch/Branch.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

/** 
 * @description Componente muestra y envía los datos de una sucursal al backend mediante el uso de un modal
 * @class BranchTableModalComponent
 * @example <branch-table-modal-component :branchData="" :isNew=""></branch-table-modal-component>
*/
export default defineComponent({
    /** 
     * Propiedades que recibe el componente 
     * @member BranchTableModalComponent.props
     * @property {Branch} branchData (Obligatorio) Recibe los datos de una sucursal sea nueva o existente
     * @property {boolean} isNew (Obligatorio) Indica si los datos de la sucursal son para crear o editar
    */
    props: {
        branchData: {
            type: Object as PropType<Branch>,
            default: BranchData
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    /** 
     * Variables a observar por el componente
     * @member BranchTableModalComponent.watch
     * @property {Branch} branchData Al actualizar se asigna a la variable this.form los nuevos datos de branchData
    */
    watch: {
        branchData:
        {
            handler()
            {
                this.form = this.branchData;
            },
            deep:true
        },
    },
    /**
    * Variables del componente
    * @member BranchTableModalComponent.data
    * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
    * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {Branch} form Guarda la información de una sucursal
    */
    data() {
        return {
            errors: [],
            successAlert: {
                title: '',
                message: ''
            },
            form: this.branchData
        };
    },
    methods: {
        /** 
         * Crea una nueva sucursal.
         * Envía los datos de la nueva sucursal a la URI /sucursales guardada en la variable form. Si la petición es correcta se asigna al objecto successAlert un título y un mensaje de éxito y se muestra
         * el componente {@link SuccessAlertComponent}. En caso de error, se asigna a la variable errors los errores del backend y se muestra el componente {@link ErrorAlertComponent}
         * @function BranchTableComponent.createBranch
        */
        createBranch()
        {
            axios.post(`/sucursales`, {
                branch: this.form
            })
            .then(response => {
                this.successAlert.title = 'Sucursal creado';
                this.successAlert.message = 'Sucursal creado correctamente';
                $('#emtmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emtmcError').modal('show');
            })
        },
        /** 
         * Actualiza una sucursal existente.
         * Envía los datos de la sucursal a la URI /sucursales/{id} guardada en la variable form. Si la petición es correcta se asigna al objecto successAlert un título y un mensaje de éxito y se muestra
         * el componente {@link SuccessAlertComponent}. En caso de error, se asigna a la variable errors los errores del backend y se muestra el componente {@link ErrorAlertComponent}
         * @function BranchTableComponent.createBranch
        */
        updateBranch()
        {
            axios.post(`/sucursales/${this.form.id}`, {
                branch: this.form
            })
            .then(response => {
                this.successAlert.title = 'Sucursal actualizado';
                this.successAlert.message = 'Sucursal actualizado correctamente';
                $('#emtmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emtmcError').modal('show');
            })
        }
    }
})