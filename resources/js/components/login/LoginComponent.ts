import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
import 'bootstrap';

export default defineComponent({
    components: {
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
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
        redirectToSignup()
        {
            window.location.replace(`${this.url}/register`);
        },
        redirectToResetPassword()
        {
            window.location.replace(`${this.url}/restaurar-contrasena`);
        }
    },
})
