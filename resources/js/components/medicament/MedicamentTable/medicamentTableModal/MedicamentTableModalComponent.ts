import { MedicamentData } from '@data/Medical/Medicament.data';
import { Medicament } from '@interface/Medical/Medicament.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

/** 
 * @description Componente que muestra los datos de un medicamento, mediante el uso de un formulario dentro de un modal
 * @class MedicamentTableModalComponent
 * @example <medicament-table-modal-component :medicamentData="" isNew=""></medicament-table-modal-component>
*/
export default defineComponent({
    /** 
     * Propiedades que recibe el componente 
     * @member MedicamentTableModalComponent.props
     * @property {Medicament} medicamentData (Obligatorio) Datos del medicamento seleccionado
     * @property {boolean} isNew (Obligatorio) Indica si los datos del medicamento son para crear o editar
    */
    props: {
        medicamentData: {
            type: Object as PropType<Medicament>,
            default: MedicamentData
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    /** 
     * Variables a observar por el componente
     * @member MedicamentTableModalComponent.watch
     * @property {Medicament} medicamentData Al actualizar la variable, se asigna a la variable form los datos del medicamento para su modificación
    */
    watch: {
        medicamentData:
        {
            handler()
            {
                this.form = this.medicamentData;
            },
            deep:true
        },
    },
    /**
    * Variables del componente
    * @member MedicamentTableModalComponent.data
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
    * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
    * @property {Medicament} form Guarda una copia del medicamento seleccionado para su modificación
    */
    data() {
        return {
            errors: [],
            successAlert: {
                title: '',
                message: ''
            },
            form: this.medicamentData
        };
    },
    methods: {
        /** 
         * Envía el nuevo medicamento creado al servidor. En caso de que la petición se procese correctamente, se asigna al objeto successAlert un mensaje de éxito, a lo
         * cual se procede a mostrar el componente {@link SuccessAlertComponent}. En caso contrario se asigna a la variable errors, los errores retornados por el servidor
         * y se muestra el componente {@link ErrorAlertComponent}
         * @function MedicamentTableModalComponent.createMedicament
        */
        createMedicament()
        {
            axios.post(`/productos/medicamentos`, {
                medicament: this.form
            })
            .then(response => {
                this.successAlert.title = 'Medicamento creado';
                this.successAlert.message = 'Medicamento creado correctamente';
                $('#metmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#metmcError').modal('show');
            })
        },
        /** 
         * Envía el medicamento modificado al servidor. En caso de que la petición se procese correctamente, se asigna al objeto successAlert un mensaje de éxito, a lo
         * cual se procede a mostrar el componente {@link SuccessAlertComponent}. En caso contrario se asigna a la variable errors, los errores retornados por el servidor
         * y se muestra el componente {@link ErrorAlertComponent}
         * @function MedicamentTableModalComponent.updateMedicament
        */
        updateMedicament()
        {
            axios.post(`/productos/medicamentos/${this.form.id}`, {
                medicament: this.form
            })
            .then(response => {
                this.successAlert.title = 'Medicamento actualizado';
                this.successAlert.message = 'Medicamento actualizado correctamente';
                $('#metmcSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#metmcError').modal('show');
            })
        }
    }
})