import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { defineAsyncComponent } from 'vue';
import 'bootstrap';

export default defineComponent({
    components: {
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default
    },
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
    mounted() {
    },
    methods: {
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
        redirectToLogin()
        {
            window.location.replace(`/`);
        },
        openSelectFile()
        {
            document.getElementById('sucPhoto')?.click();
        },
        selectFile(event: Event) {
            const file = (event.target as HTMLInputElement).files![0] || [];
            this.patient.photo = file;
        },
        cleanPhotoSelected()
        {
            this.patient.photo = {} as File;
            (document.getElementById('sucPhoto') as HTMLInputElement).value = '';
            console.log(this.patient.photo)
        }
    },
})
