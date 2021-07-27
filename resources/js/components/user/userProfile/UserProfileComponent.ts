import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
require('jquery-ui-bundle');
import $ from 'jquery';
import { Patient } from '@interface/Patient/Patient.interface';
import { Employee } from '@interface/Employee/Employee.interface';
import { PropType } from 'vue';
import cloneDeep from 'lodash/cloneDeep';
import { ElProgress } from 'element-plus';
require('bootstrap');

// import datepickerFactory from 'jquery-datepicker';
// datepickerFactory($);

export default defineComponent({
    components: {
        ElProgress,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    emits: ['updateUser', 'updatePhoto'],
    props: {
        id: {
            type: String as PropType<String>,
            default: 'uspc'
        },
        userID: {
            type: Number,
            default: 0
        },
        userCategory: {
            type: String,
            default: ''
        },
        userData: {
            type: Object as PropType<Patient | Employee>,
            default: {}
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
        roles: {
            type: Array as PropType<String[]>,
            default: []
        },
        isNew: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
    },
    data() {
        return {
            userForm: cloneDeep(this.userData),
            photo: {} as File,
            successMessage: '',
            errors: [],
            formCharacters: [] as any,
            path: ((document.head.querySelector('meta[name="api-base-url"]') as any)!.content as string),
            patientCode: '',
            uploadPercentage: 0,
            loading: false,
        };
    },
    watch:
    {
        patientCode()
        {
            (this.userForm as Patient).patient_code = this.patientCode;
        },
        userData: {
            handler()
            {
                this.userForm = cloneDeep(this.userData);
                this.patientCode = (this.userForm as Patient).patient_code;
            },
            deep: true
        }
    },
    mounted() {
        const self = this;
        $(`#${this.id}birthday`).datepicker({
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
        disablePatientCode(): boolean
        {
            return this.roles.includes('Paciente') ? true : false;
        },
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
        createUser() {
            const self = this;
            var formData = new FormData();
            this.userForm.birthday = moment($("#birthday").datepicker('getDate')).format('YYYY-MM-DD');
            
            formData.append('patient_code', this.patientCode);
            formData.append('email', this.userForm.user.email);
            formData.append('first_name', this.userForm.first_name);
            formData.append('last_name', this.userForm.last_name);
            formData.append('gender', this.userForm.gender!.toString());
            formData.append('birthday', this.userForm.birthday!);
            formData.append('address', this.userForm.address!);
            formData.append('phone', this.userForm.phone!);
            formData.append('cellphone', this.userForm.cellphone!);
            formData.append('roles', JSON.stringify(this.roles));
            formData.append('_method', 'POST')

            if(this.photo.size > 0)
            {
                formData.append('photo', this.photo);
            }

            const config = {
                headers: { "Content-Type": "multipart/form-data"},
                onUploadProgress: function(progressEvent: any) {
                    self.uploadPercentage = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                }
            }
            this.loading = true;
            axios.post(`/${this.userCategory}`, formData, config)
            .then(response => {
                this.loading = false;
                this.uploadPercentage = 0;
                this.successMessage = 'El usuario se ha creado correctamente';
                $(`#${this.id}profileSuccess`).modal('show');
                this.cleanPhotoSelected();
            })
            .catch(error => {
                this.loading = false;
                this.uploadPercentage = 0;
                this.errors = error.response.data.errors;
                $(`#${this.id}profileError`).modal('show');
            })
        },
        updateProfile() {
            const self = this;
            var formData = new FormData();
            this.userForm.birthday = moment($("#birthday").datepicker('getDate')).format('YYYY-MM-DD');
            
            formData.append('patient_code', this.patientCode);
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

            const config = {
                headers: { "Content-Type": "multipart/form-data"},
                onUploadProgress: function(progressEvent: any) {
                    self.uploadPercentage = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                }
            }
            this.loading = true;
            axios.post(`/${this.userCategory}/${this.userForm.id}`, formData, config)
            .then(response => {
                this.loading = false;
                this.uploadPercentage = 0;
                this.successMessage = 'Los datos del perfil se han actualizado correctamente';
                $(`#${this.id}profileSuccess`).modal('show');
                this.cleanPhotoSelected();
                this.$emit('updateUser', this.userForm);
            })
            .catch(error => {
                this.loading = false;
                this.uploadPercentage = 0;
                this.errors = error.response.data.errors;
                $(`#${this.id}profileError`).modal('show');
            })
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
            if(!this.disabled)
            {
                const file = (event.target as HTMLInputElement).files![0] || [];
                this.photo= file;
                const input = (document.getElementById(`${this.id}upcImage`) as HTMLImageElement);
                input.src = URL.createObjectURL(file);
                this.$emit('updatePhoto', URL.createObjectURL(file));
            }
        },
        cleanPhotoSelected()
        {
            this.photo = {} as File;
            (document.getElementById('file-upload') as HTMLInputElement).value = '';
        }
    },
})