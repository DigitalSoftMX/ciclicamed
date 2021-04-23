<template>
    <div class="row justify-content-center">
        <div class="col-sm-6 col-10">
            <div class="mt-40 mb-50">

                <div class="account-profile d-flex align-items-center mb-4 ">
                    <div class="ap-img pro_img_wrapper">
                        <input id="file-upload" type="file" name="fileUpload" class="d-none">
                        <label for="file-upload">
                            <img class="ap-img__main rounded-circle wh-120 d-flex bg-opacity-primary" :src="`/images/users/${userForm.photo}`"
                                alt="profile" onerror="this.onerror=null;this.src='/svg/person.svg';">
                            <span class="cross" id="remove_pro_pic">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-camera">
                                    <path
                                        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z">
                                    </path>
                                    <circle cx="12" cy="13" r="4"></circle>
                                </svg>
                            </span>
                        </label>
                    </div>
                    <div class="account-profile__title">
                        <h6 class="fs-15 ml-20 fw-500 text-capitalize">Cambiar fotografía</h6>
                    </div>
                </div>
                
                <div class=" Vertical-form">

                    <div class="form-group mb-25">
                        <label for="firstName">Nombre(s)</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/person.svg" alt="Person logo">
                            </span>
                            <input type="text" class="form-control" id="firstName" placeholder="Nombre(s)"
                                maxlength="100" v-model="userForm.first_name"
                                @keyup="checkProfileData(); updateCharacter('first_name')">
                        </div>
                        <div class="float-right">
                            {{ `${getCharacters('first_name')}/100` }}
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <label for="lastName">Apellidos</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/person.svg" alt="Person logo">
                            </span>
                            <input type="text" class="form-control" id="lastName" placeholder="Apellidos"
                                maxlength="100" v-model="userForm.last_name"
                                @keyup="checkProfileData(); updateCharacter('last_name')">
                        </div>
                        <div class="float-right">
                            {{ `${getCharacters('last_name')}/100` }}
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <label for="email">Correo electrónico</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/email.svg" alt="Email logo">
                            </span>
                            <input type="email" class="form-control" id="name3" placeholder="ejemplo@correo.com"
                                maxlength="100" v-model="userForm.email"
                                @keyup="checkProfileData(); updateCharacter('email')">
                        </div>
                        <div class="float-right">
                            {{ `${getCharacters('email')}/100` }}
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <label for="phoneNumber5">Teléfono de Casa</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/phone.svg" alt="Phone logo">
                            </span>
                            <input type="tel" class="form-control" id="phone" placeholder="1234567890" maxlength="10"
                                v-model="userForm.phone" @keyup="checkProfileData(); updateCharacter('phone')">
                        </div>
                        <div class="float-right">
                            {{ `${getCharacters('phone')}/10` }}
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <label for="phoneNumber5">Celular</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/cellphone.svg" alt="Cellphone logo">
                            </span>
                            <input type="tel" class="form-control" id="cellphone" placeholder="1234567890"
                                maxlength="10" v-model="userForm.cellphone"
                                @keyup="checkProfileData(); updateCharacter('cellphone')">
                        </div>
                        <div class="float-right">
                            {{ `${getCharacters('cellphone')}/10` }}
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <label for="name2">Dirección</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/address.svg" alt="Address logo">
                            </span>
                            <textarea type="text" class="form-control" id="address" placeholder="Dirección"
                                v-model="userForm.address" @keyup="checkProfileData(); updateCharacter('address')"
                                maxlength="255"></textarea>
                        </div>
                        <div class="float-right">
                            {{ `${getCharacters('address')}/255` }}
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <label for="name2">Sexo</label>
                        <div class="radio-horizontal-list d-flex">
                            <div class="input-group-prepend r-3 rounded px-2 ">
                                <img src="/svg/gender.svg" alt="Calendar logo">
                            </div>
                            <div class="d-flex px-4">
                                <div class="radio-theme-default custom-radio ">
                                    <input class="radio" type="radio" name="gender" value="0" id="radio-vl1"
                                        v-model="userForm.gender" @change="checkProfileData('gender')">
                                    <label for="radio-vl1">
                                        <span class="radio-text">Hombre</span>
                                    </label>
                                </div>
                                <div class="radio-theme-default custom-radio ">
                                    <input class="radio" type="radio" name="gender" value="1" id="radio-vl2"
                                        v-model="userForm.gender" @change="checkProfileData('gender')">
                                    <label for="radio-vl2">
                                        <span class="radio-text">Mujer</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <label>Fecha de nacimiento</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/calendar.svg" alt="Birthday logo">
                            </span>
                            <input type="text" class="form-control form-control-lg " id="birthday"
                                placeholder="dd/mm/aaaa" :value="getBirthday()" @click="checkProfileData('birthday')"
                                maxlength="10" readonly>
                        </div>
                    </div>

                    <div class="button-group d-flex pt-25 justify-content-end">
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                            v-on:click="updateProfile()" :disabled="isButtonDisabled">
                            Actualizar datos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Modal de error-->
    <error-alert-component :id="'profileError'" :errors="errors" :title="'Error al actualizar los datos del perfil'">
    </error-alert-component>
    <!--Modal de exito-->
    <success-alert-component :id="'profileSuccess'" :message="successMessage" :title="'Datos del perfil actualizados'">
    </success-alert-component>
</template>

<script>
    require('jquery-ui');
    import $ from 'jquery';
    import axios from "axios";
    import moment from 'moment';
    import ErrorAlertComponent from '../alert/ErrorAlertComponent.vue';
    import SuccessAlertComponent from '../alert/SuccessAlertComponent.vue';
    import datepickerFactory from 'jquery-datepicker';
    datepickerFactory($);

    export default {
        components: {
            ErrorAlertComponent,
            SuccessAlertComponent
        },
        props: ['user'],
        emits: ['updateUser'],
        data: function () {
            return {
                userForm: Object.assign({}, this.$props.user),
                successMessage: null,
                errors: [],
                isButtonDisabled: true,
                birthday: null,
                formCharacters: {}
            }
        },
        mounted() {
        },
        methods: {
            getBirthday() {
                moment.locale('es');
                return moment(this.userForm.birthday).calendar();
            },
            updateProfile() {
                this.userForm.birthday = moment($("#birthday").datepicker('getDate')).format('YYYY-MM-DD');
                axios.post(`/pacientes/${this.userForm.id}`, {
                        data: {
                            ...this.userForm
                        },
                        _method: 'patch'
                    })
                    .then(response => {
                        this.successMessage = 'Los datos del perfil se han actualizado correctamente';
                        $('#profileSuccess').modal('show');
                        this.$emit('updateUser', this.userForm);
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                        $('#profileError').modal('show');
                        this.userForm = Object.assign({}, this.$props.user);
                    })
                    this.isButtonDisabled = true;
            },
            checkProfileData(data = null) {
                switch (data) {
                    case 'birthday':
                        this.userForm.birthday = moment($("#birthday").datepicker('getDate')).format('YYYY-MM-DD');
                        break;
                    case 'gender':
                        this.userForm.gender = Number(this.userForm.gender);
                        break;
                }
                const isDataEqual = JSON.stringify(this.$props.user) === JSON.stringify(this.userForm);
                this.isButtonDisabled = isDataEqual;
            },
            updateCharacter(key) {
                this.formCharacters[key] = this.userForm[key].length;
            },
            getCharacters(key) {
                return this.formCharacters[key] === undefined ? this.userForm[key].length : this.formCharacters[key];
            }
        }
    }

</script>
