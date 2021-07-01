import { Employee } from '@interface/Employee/Employee.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import $ from 'jquery';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    emits: ['user', 'category'],
    props: {
        userData: {
            type: Object as PropType<Patient | Employee>,
            default: 1
        },
        userCategory: {
            type: String,
            default: 'paciente'
        }
    },
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
    mounted() {
    },
    computed: {
    },
    methods: {
        changePassword() {
            axios.post(`/pacientes/${this.userData.id}/password`, {
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
        //Extra functions
        checkPassword() {
            const isValid = this.password == this.confirmPassword && this.password !== '' ? true : false;
            this.passwordIsValid = isValid;
            this.isButtonDisabled = !isValid;
        },
    },
})