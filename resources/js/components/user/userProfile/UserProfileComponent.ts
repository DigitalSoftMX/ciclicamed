import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
require('jquery-ui-bundle');
import $ from 'jquery';
import { Patient } from '@interface/Patient/Patient.interface';
import { Employee } from '@interface/Employee/Employee.interface';
import { PropType } from 'vue';
import cloneDeep from 'lodash/cloneDeep';
require('bootstrap');
// import datepickerFactory from 'jquery-datepicker';
    // datepickerFactory($);

export default defineComponent({
    components: {
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    emits: ['updateUser', 'updatePhoto'],
    props: {
        userID: {
            type: Number,
            default: 1
        },
        userCategory: {
            type: String,
            default: 'pacientes'
        },
        userData: {
            type: Object as PropType<Patient | Employee>,
            default: {}
        }
    },
    data() {
        return {
            userForm: cloneDeep(this.userData),
            photo: {} as File,
            successMessage: '',
            errors: [],
            isButtonDisabled: true,
            formCharacters: [] as any
        };
    },
    mounted() {
        const self = this;
        $("#birthday").datepicker({
            changeMonth: true,
            changeYear: true,
            // container: "#container",
            dateFormat: "dd/mm/yy",
            yearRange: `1930:${new Date().getFullYear().toString()}`,
            onSelect() {
                self.checkProfileData('birthday')
            }
        });
    },
    computed: {
        fullName(): string
        {
            return `${this.userData.first_name} ${this.userData.last_name}`;
        },
        birthday(): string
        {
            return moment(this.userData.birthday).format('DD-MM-YYYY');
        }
    },
    methods: {
        formatDate(birthday: string)
        {
            return moment(birthday).format('DD-MM-YYYY');
        },
        updateProfile() {
            var formData = new FormData();
            this.userForm.birthday = moment($("#birthday").datepicker('getDate')).format('YYYY-MM-DD');
            
            formData.append('email', this.userForm.user.email);
            formData.append('first_name', this.userForm.first_name);
            formData.append('last_name', this.userForm.last_name);
            formData.append('gender', this.userForm.gender!.toString());
            formData.append('birthday', this.userForm.birthday!);
            formData.append('address', this.userForm.address!);
            formData.append('phone', this.userForm.phone!);
            formData.append('cellphone', this.userForm.cellphone!);
            formData.append('_method', 'PATCH')

            if(this.photo.size > 0)
            {
                formData.append('photo', this.photo);
            }

            axios.post(`/${this.userCategory}/${this.userForm.id}`, formData, {headers: { "Content-Type": "multipart/form-data"}})
            .then(response => {
                this.successMessage = 'Los datos del perfil se han actualizado correctamente';
                $('#profileSuccess').modal('show');
                this.cleanPhotoSelected();
                this.$emit('updateUser', this.userForm);
            })
            .catch(error => {
                console.log(error)
                this.errors = error.response.data.errors;
                $('#profileError').modal('show');
                this.userForm = cloneDeep(this.userData);
            })
            this.isButtonDisabled = true;
        },
        checkProfileData(data: string = '') {
            switch (data) {
                case 'birthday':
                    this.userForm.birthday = moment($("#birthday").datepicker('getDate')).format('YYYY-MM-DD');
                    break;
                case 'gender':
                    this.userForm.gender = Number(this.userForm.gender);
                    break;
            }
            const isDataEqual = JSON.stringify(this.userData) === JSON.stringify(this.userForm);
            this.isButtonDisabled = isDataEqual;
        },
        updateCharacter(key: string) {
            if(key === 'email')
            {
                return this.formCharacters['email'] = this.userForm.user.email.length;
            }
            this.formCharacters[key] = Object.keys(this.userForm).find(item => item === key)?.length;
        },
        getCharacters(key: string) {
            if(key === 'email')
            {
                return this.formCharacters['email'] = this.userForm.user.email.length;
            }
            return this.formCharacters[key] === undefined ? Object.keys(this.userForm).find(item => item === key)?.length : this.formCharacters[key];
        },
        selectFile(event: Event) {
            const file = (event.target as HTMLInputElement).files![0] || [];
            this.photo= file;
            const input = (document.getElementById('upcImage') as HTMLImageElement);
            input.src = URL.createObjectURL(file);
            this.isButtonDisabled = false;
            this.$emit('updatePhoto', URL.createObjectURL(file));
        },
        cleanPhotoSelected()
        {
            this.photo = {} as File;
            (document.getElementById('file-upload') as HTMLInputElement).value = '';
        }
    },
})