import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
import 'bootstrap';

export default defineComponent({
    components: {
        SuccessAlertComponent: defineAsyncComponent(() => import('@component/general/alert/SuccessAlertComponent.vue')),
    },
    data() {
        return {
            email: '',
            password: ''
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
                    window.location.replace(`/app/inicio`);
                }, 2000)
            })
            .catch(error => {
                console.log(error)
            })
        },
        redirectToSignup()
        {
            window.location.replace(`/register`);
        }
    },
})
