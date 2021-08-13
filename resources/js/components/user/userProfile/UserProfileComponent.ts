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

/** 
 * @description Componente que permite crear o editar un usuario, mediante un formulario en un modal
 * @class UserProfileComponent
 * @example <user-profile-component :userID="" :userCategory=""></signup-component>
*/
export default defineComponent({
    /** 
     * {@link https://element-plus.org/#/es/component/progress}, {@link SuccessAlertComponent}, {@link ErrorAlertComponent} 
     * @member UserProfileComponent.components
    */
    components: {
        ElProgress,
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    /** 
     * Eventos del componente
     * @member UserProfileComponent.emits
     * @property {Patient|Employee} updateUser Evento que se lanza cuando se actualiza el usuario
     * @property {Patient|Employee} updatePhoto Evento que se lanza cuando se actualiza la foto del usuario
    */
    emits: ['updateUser', 'updatePhoto'],
    /** 
     * Propiedades que recibe el componente 
     * @member UserProfileComponent.props
     * @property {number} id (Obligatorio ) ID del componente
     * @property {number} userID (Obligatorio ) ID del usuario seleccionado
     * @property {string} userCategory (Obligatorio) Categoría del usuario seleccionado (empleados, pacientes)
     * @property {Patient|Employee} userData (Obligatorio) Datos del usuario seleccionado
     * @property {boolean} disabled (Obligatorio) Habilita o deshabilita el formulario
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
     * @property {boolean} isNew (Obligatorio) Indica si los datos del usuario seleccionado son nuevos o existentes
    */
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
    /**
    * Variables del componente
    * @member UserProfileComponent.data
    * @property {Patient|Employee} userForm Guarda la copia de datos del usuario seleccionado
    * @property {File} photo Guarda la foto seleccionada
    * @property {string} successMessage Guarda mensaje de éxito
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {number[]} formCharacters Guarda la longitud de caracteres de cada uno de los inputs del formulario
    * @property {string} path Guarda la URL base de donde se aloja el proyecto (local o servidor)
    * @property {string} patientCode Guarda el código de paciente
    * @property {number} uploadPercentage Guarda el porcentaje de subida
    * @property {boolean} loading Habilita o deshabilita la animación de carga al crear o modificar el usuario
    */
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
    /** 
     * Variables a observar por el componente
     * @member UserProfileComponent.watch
     * @property {string} patientCode Al actualizar el código del paciente, éste se asigna a la variable userForm.patient_code
     * @property {string} userData Al actualizar la variable, crea una copia en la variable userForm (para modificar los datos del usuario) y asigna a la variable
     * patientCode el código de paciente (si aplica)
    */
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
    /**
    * Propiedades computadas del componente 
    * @member UserProfileComponent.computed
    * @property {boolean} disablePatientCode Habilita o deshabilita el código del paciente si el usuario es paciente o no
    * @property {string} fullName Concatena el nombre completo del 
    */
    computed: {
        disablePatientCode(): boolean
        {
            return this.roles.includes('Paciente') ? true : false;
        }
    },
    methods: {
        /** 
         * Crea un nuevo usuario en el servidor, dependiendo a la categoría a la que pertenezcan (empleados, pacientes).
         * En caso de que la petición sea procesada correctamente,se muestra el componente {@link SuccessAlertComponent} junto con el mensaje de éxito de la
         * variable successMessage. En caso contrario se asigna a la variable errors los errores que retorna en el servidor y se muestra en el componente
         * {@link ErrorAlertComponent}. Mientras se sube el usuario al sistema, se actualiza el porcentaje al asignar a la variable uploadPercentage el porcentaje en proceso
         * @function UserProfileComponent.createUser
        */
        createUser() {
            const self = this;
            var formData = new FormData();
            
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
        /** 
         * Actualiza el usuario en el servidor, dependiendo a la categoría a la que pertenezcan (empleados, pacientes).
         * En caso de que la petición sea procesada correctamente,se muestra el componente {@link SuccessAlertComponent} junto con el mensaje de éxito de la
         * variable successMessage, además de emitir un evento updateUser con los datos del usuario actualizado.
         * En caso contrario se asigna a la variable errors los errores que retorna en el servidor y se muestra en el componente
         * {@link ErrorAlertComponent}. Mientras se sube el usuario al sistema, se actualiza el porcentaje al asignar a la variable uploadPercentage el porcentaje en proceso
         * @function UserProfileComponent.updateProfile
        */
        updateProfile() {
            const self = this;
            var formData = new FormData();
            
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
        /** 
         * Asigna los datos necesarios de acuerdo a la información que se desea mostrar, si es birthday se muestra la fecha de nacimiento, en caso de gender
         * retorna el número 0 o 1 (masculino, femenino)
         * @function UserProfileComponent.checkProfileData
         * @param {string} data Tipo de dato a mostrar
        */
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
        /** 
         * Actualiza y asigna a la variable formCharacters la longitud actual del input a actualizar
         * @function UserProfileComponent.updateCharacter
         * @param {string} key Key del objeto formCharacters
        */
        updateCharacter(key: string) {
            if(key === 'email')
            {
                return this.formCharacters['email'] = this.userForm.user.email.length;
            }
            this.formCharacters[key] = Object.keys(this.userForm).find(item => item === key)?.length;
        },
        /** 
         * Obtiene la longitud de un input que este en la variable formCharacters
         * @function UserProfileComponent.getCharacters
         * @param {string} key Key del objeto formCharacters
        */
        getCharacters(key: string) {
            if(key === 'email')
            {
                return this.formCharacters['email'] = this.userForm.user.email.length;
            }
            return this.formCharacters[key] === undefined ? Object.keys(this.userForm).find(item => item === key)?.length : this.formCharacters[key];
        },
        /** 
         * Selecciona la foto de perfil del usuario
         * @function UserProfileComponent.selectFile
         * @param {Event} event Evento del input html de la foto
        */
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
        /** 
         * Limpia la foto de perfil del usuario
         * @function UserProfileComponent.cleanPhotoSelected
        */
        cleanPhotoSelected()
        {
            this.photo = {} as File;
            (document.getElementById('file-upload') as HTMLInputElement).value = '';
        }
    },
})