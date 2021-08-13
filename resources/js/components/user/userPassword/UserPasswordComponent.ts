import { Employee } from '@interface/Employee/Employee.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import $ from 'jquery';
import { PropType } from 'vue';

/** 
 * @description Componente que cambia la contraseña del usuario logueado
 * @class UserPasswordComponent
 * @example <user-password-component :userID="" :userCategory=""></signup-component>
*/
export default defineComponent({
    /** 
     * {@link SuccessAlertComponent}, {@link ErrorAlertComponent} 
     * @member UserPasswordComponent.components
    */
    components: {
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    /** 
     * Propiedades que recibe el componente 
     * @member UserPasswordComponent.props
     * @property {number} userData (Obligatorio ) Datos del usuario logueado actualmente
    */
    props: {
        userData: {
            type: Object as PropType<Patient | Employee>,
            default: 1
        }
    },
    /**
    * Variables del componente
    * @member UserPasswordComponent.data
    * @property {string} password Guarda la nueva contraseña
    * @property {string} confirmPassword Guarda la confirmación de la nueva contraseña
    * @property {boolean} isButtonDisabled Habilita o deshabilita el boton para actualizar la contraseña
    * @property {boolean} passwordIsValid Indica si la contraseña y la confirmación de la contraseña es la misma
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {string} successMessage Mensaje de éxito
    */
    data() {
        return {
            password: '',
            confirmPassword: '',
            isButtonDisabled: true,
            passwordIsValid: false,
            errors: [],
            successMessage: ''
        };
    },
    methods: {
        /** 
         * Actualiza la contraseña del usuario logueado. En caso de que la petición sea procesada correctamente,
         * se muestra el componente {@link SuccessAlertComponent}. En caso contrario, se asigna a la variable
         * errors, los errores devueltos por el servidor y se muestra el componente {@link ErrorAlertComponent}. Finalmente, vacía la contraseña
         * @function UserPasswordComponent.changePassword
        */
        changePassword() {
            axios.post(`/usuarios/${this.userData.id}/password`, {
                password: this.password,
                confirmPassword: this.confirmPassword,
                _method: 'patch'
            })
            .then(response => {
                this.successMessage = 'La contraseña se ha actualizado correctamente';
                $('#passwordSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#passwordWrong').modal('show');
            })
            this.password = '';
            this.confirmPassword = '';
            this.isButtonDisabled = true;
        },
        /** 
         * Verifica que la contraseña y la confirmación de la contraseña sea la misma
         * @function UserPasswordComponent.checkPassword
        */
        checkPassword() {
            const isValid = this.password == this.confirmPassword && this.password !== '' ? true : false;
            this.passwordIsValid = isValid;
            this.isButtonDisabled = !isValid;
        },
    },
})