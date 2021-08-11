import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
import 'bootstrap';

/** 
 * @description Componente que se utiliza para el login del usuario, mediante una página normal
 * @class LoginComponent
 * @example <login-component></login-component>
*/
export default defineComponent({
    /** 
     * {@link SuccessAlertComponent}
     * @member LoginComponent.components
    */
    components: {
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    /**
    * Variables del componente
    * @member LoginComponent.data
    * @property {string} email Correo del usuario
    * @property {string} password Contraseña del usuario
    * @property {string} url Guarda la URL actual de la carpeta donde se encuentra alojado (local o en servidor)
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    */
    data() {
        return {
            email: '',
            password: '',
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content,
            errors: []
        };
    },
    mounted() {
    },
    methods: {
        /** 
         * Envía el usuario y contraseña al servidor para login. Si la petición es procesada correctamente muestra el componente {@link SuccessAlertComponent} con un
         * mensaje de bienvenida y redirecciona a la página de inicio para cada rol, en caso contrario muestra el componente {@link ErrorAlertComponent} con el mensaje
         * de error proporcionado por el servidor, el cual se asigna a la variable errors
         * @function LoginComponent.login
        */
        login()
        {
            const header = {
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            }
            axios.post('/login', {
                email: this.email,
                password: this.password
            }, header)
            .then(response => {
                $('#logcSuccessAlert').modal('show');
                setInterval(() => {
                    window.location.replace(`${this.url}/app/inicio`);
                }, 2000)
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#logcErrorAlert').modal('show');
            })
        },
        /** 
         * Redirecciona a la página de registro
         * @function LoginComponent.redirectToSignup
        */
        redirectToSignup()
        {
            window.location.replace(`${this.url}/register`);
        },
        /** 
         * Redirecciona a la página de restablecer contraseña
         * @function LoginComponent.redirectToResetPassword
        */
        redirectToResetPassword()
        {
            window.location.replace(`${this.url}/restaurar-contrasena`);
        }
    },
})
