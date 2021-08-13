import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import 'bootstrap';

/** 
 * @description Componente de la página de registro de nuevo paciente
 * @class SignupComponent
 * @example <signup-component></signup-component>
*/
export default defineComponent({
    /** 
     * {@link SuccessAlertComponent}, {@link ErrorAlertComponent} 
     * @member SignupComponent.components
    */
    components: {
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default
    },
    /**
    * Variables del componente
    * @member SignupComponent.data
    * @property {Object} user Guarda la información del nuevo usuario
    * @property {Object} patient Guarda la información del nuevo paciente
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    */
    data() {
        return {
            user: {
                email: '',
                confirmEmail: '',
                password: '',
                confirmPassword: ''
            },
            patient: {
                first_name: '',
                last_name: '',
                gender: 0,
                birthday: '',
                address: '',
                phone: '',
                cellphone: '',
                photo: {} as File
            },
            errors: []
        };
    },
    methods: {
        /** 
         * Registra en el servidor el nuevo paciente creado. En caso de que la petición sea procesada correctamente,
         * se muestra el componente {@link SuccessAlertComponent} y se vacía los datos del usuario y paciente. En caso contrario, se asigna a la variable
         * errors, los errores devueltos por el servidor y se muestra el componente {@link ErrorAlertComponent}
         * @function SignupComponent.register
        */
        register()
        {
            var formData = new FormData();
            formData.append('email', this.user.email);
            formData.append('confirmEmail', this.user.confirmEmail);
            formData.append('password', this.user.password);
            formData.append('confirmPassword', this.user.confirmPassword);

            formData.append('first_name', this.patient.first_name);
            formData.append('last_name', this.patient.last_name);
            formData.append('gender', this.patient.gender.toString());
            formData.append('birthday', this.patient.birthday);
            formData.append('address', this.patient.address);
            formData.append('phone', this.patient.phone);
            formData.append('cellphone', this.patient.cellphone);
            formData.append('photo', this.patient.photo);

            axios.post('/register', formData, {headers: { "Content-Type": "multipart/form-data" }},)
            .then(response => {
                $('#sucSuccessAlert').modal('show');
                this.user = {
                    email: '',
                    confirmEmail: '',
                    password: '',
                    confirmPassword: ''
                };
                this.patient = {
                    first_name: '',
                    last_name: '',
                    gender: 0,
                    birthday: '',
                    address: '',
                    phone: '',
                    cellphone: '',
                    photo: {} as File
                }
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#sucErrorAlert').modal('show');
            })
        },
        /** 
         * Redirecciona a la página de inicio
         * @function SignupComponent.redirectToLogin
        */
        redirectToLogin()
        {
            window.location.replace(`/`);
        },
        /** 
         * Abre el input que permite selecciona la foto del paciente
         * @function SignupComponent.openSelectFile
        */
        openSelectFile()
        {
            document.getElementById('sucPhoto')?.click();
        },
        /** 
         * Asigna a la variable patient.photo la foto seleccionada por el usuario
         * @function SignupComponent.selectFile
         * @param {Event} event Evento del input del html
        */
        selectFile(event: Event) {
            const file = (event.target as HTMLInputElement).files![0] || [];
            this.patient.photo = file;
        },
        /** 
         * Elimina la foto de la variable patient.photo
         * @function SignupComponent.cleanPhotoSelected
        */
        cleanPhotoSelected()
        {
            this.patient.photo = {} as File;
            (document.getElementById('sucPhoto') as HTMLInputElement).value = '';
        }
    },
})
