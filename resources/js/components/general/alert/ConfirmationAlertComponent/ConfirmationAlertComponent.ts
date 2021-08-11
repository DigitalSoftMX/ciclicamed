import { defineComponent } from '@vue/runtime-core';
import $ from 'jquery';

/** 
 * @description Componente que muestra un mensaje de confirmacion, mediante el uso de un modal
 * @class ConfirmationAlertComponent
 * @example <confirmation-alert-component :id="" :title=""></confirmation-alert-component>
*/
export default defineComponent({
    /** 
     * Eventos del componente
     * @member ConfirmationAlertComponent.emits
     * @property {string} confirmAction Evento que se lanza cuando se confirma la acción del modal
    */
    emits: [`confirmAction`],
    /** 
     * Propiedades que recibe el componente 
     * @member ConfirmationAlertComponent.props
     * @property {string} id (Obligatorio) ID del componente
     * @property {string} title (Obligatorio) Título del modal del componente
    */
    props: {
        id: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    methods: {
        /** 
         * Cierra el modal
         * @function ConfirmationAlertComponent.closeAlert
        */
        closeAlert()
        {
            $(`#${this.id}`).modal('hide');
        },
        /** 
         * Envía en evento al componente padre junto con el id del componente, en caso de que se confirme la acción que muestre el modal. Después de
         * enviar el evento cierra el componente
         * @function ConfirmationAlertComponent.confirmAction
        */
        confirmAction()
        {
            this.$emit('confirmAction', this.id);
            this.closeAlert();
        }
    },
})
