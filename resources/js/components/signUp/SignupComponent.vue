<template>
    <div class="row mx-0 bg-white">
        <div class="col-7 login-splash"></div>
        <div class="col-12 col-md-5 login-container overflow-auto">
            <div class="card-body align-self-center">
                <div class="card border-0 shadow-none">
                    <div class="card-body">
                        <div class="text-center mb-25">
                            <img-component url="/img/login/logo.png"  alt="Ciclica" cssClass="login-logo mb-25"></img-component>
                            <h2>Registrarse</h2>
                        </div>
                        <div>
                            <div class="form-group mb-20">
                                <label for="username">Nombre(s)</label>
                                <input type="email" class="form-control form-control-lg" v-model="patient.first_name"
                                    placeholder="Nombre(s)" name="email" required>
                            </div>

                            <div class="form-group mb-20">
                                <label for="password-field">Apellidos</label>
                                <div class="position-relative">
                                    <input type="text" class="form-control form-control-lg"
                                        v-model="patient.last_name" placeholder="Apellidos">
                                </div>
                            </div>

                            <div class="form-group mb-20">
                                <label for="password-field">Sexo</label>
                                <div class="radio-horizontal-list d-flex justify-content-between justify-content-md-start">
                                    <div class="radio-theme-default custom-radio ">
                                        <input class="radio" type="radio" v-model="patient.gender" value="0"
                                            id="sucMasculino">
                                        <label for="sucMasculino">
                                            <span class="radio-text">Masculino</span>
                                        </label>
                                    </div>
                                    <div class="radio-theme-default custom-radio ">
                                        <input class="radio" type="radio" v-model="patient.gender" value="1"
                                            id="sucFemenino">
                                        <label for="sucFemenino">
                                            <span class="radio-text">Femenino</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-20">
                                <label for="password-field">Fecha de nacimiento</label>
                                <div class="position-relative">
                                    <input type="date" class="form-control form-control-lg"
                                        v-model="patient.birthday" placeholder="Apellidos">
                                </div>
                            </div>

                            <div class="form-group mb-20">
                                <label for="password-field">Dirección</label>
                                <div class="position-relative">
                                    <textarea class="form-control form-control-lg"
                                        v-model="patient.address" placeholder="Dirección" maxlength="255"></textarea>
                                </div>
                            </div>

                            <div class="form-group mb-20">
                                <label for="password-field">Teléfono de casa</label>
                                <div class="position-relative">
                                    <input type="text" class="form-control form-control-lg"
                                        v-model="patient.phone" placeholder="Teléfono de casa" maxlength="10">
                                </div>
                            </div>
                            <div class="form-group mb-20">
                                <label for="password-field">Celular</label>
                                <div class="position-relative">
                                    <input type="text" class="form-control form-control-lg"
                                        v-model="patient.cellphone" placeholder="Celular" maxlength="10">
                                </div>
                            </div>

                            <div class="form-group mb-20">
                                <label for="password-field">Correo electrónico</label>
                                <div class="position-relative">
                                    <input type="text" class="form-control form-control-lg"
                                        v-model="user.email" placeholder="Correo electrónico">
                                </div>
                            </div>

                            <div class="form-group mb-20">
                                <label for="password-field">Confirmar correo electrónico</label>
                                <div class="position-relative">
                                    <input type="text" class="form-control form-control-lg"
                                        v-model="user.confirmEmail" placeholder="Confirmar correo electrónico">
                                </div>
                            </div>

                            <div class="form-group mb-20">
                                <label for="password-field">Contraseña</label>
                                <div class="position-relative">
                                    <input type="password" class="form-control form-control-lg"
                                        v-model="user.password" placeholder="Contraseña">
                                </div>
                            </div>

                            <div class="form-group mb-30">
                                <label for="password-field">Confirmar contraseña</label>
                                <div class="position-relative">
                                    <input type="password" class="form-control form-control-lg"
                                        v-model="user.confirmPassword" placeholder="Confirmar contraseña">
                                </div>
                            </div>

                            <div class="form-group mb-30">
                                <label for="password-field">Subir fotografía</label>
                                <div class="atbd-tag-wrap">
                                    <div class="atbd-upload">
                                        <div class="atbd-upload__button">
                                            <a href="javascript:void(0)"
                                                class="btn btn-lg btn-outline-lighten btn-upload w-100"
                                                @click="openSelectFile"> <svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-upload">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="17 8 12 3 7 8"></polyline>
                                                    <line x1="12" y1="3" x2="12" y2="15"></line>
                                                </svg>Examinar</a>
                                            <input type="file" name="sucPhoto" class="upload-one" id="sucPhoto" accept=".jpg, .jpeg, .png, .bmp, .svg')" @change="selectFile($event)">
                                        </div>
                                        <div class="atbd-upload__file" v-if="patient.photo.name">
                                            <ul>
                                                <li>
                                                    <span class="name-text">{{patient.photo.name}}</span>
                                                    <img-component url="/svg/delete.svg"  alt="Eliminar" @click="cleanPhotoSelected"></img-component>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between flex-column-reverse flex-xl-row">
                                <button
                                    class="btn btn-default btn-squared lh-normal px-50 py-15 signIn-createBtn btn-outline-primary w-100 mb-25 mb-xl-0"
                                    @click="redirectToLogin">
                                    Cancelar
                                </button>
                                <div class="w-50"></div>
                                <button
                                    class="btn btn-primary btn-default btn-squared lh-normal mb-25 mb-xl-0 px-50 py-15 signIn-createBtn w-100"
                                    @click="register">
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component id="sucSuccessAlert" title="Usuario creado" message="Se ha enviado un mensaje de confirmación a su correo. Debe confirmar su cuenta para poder ingresar"></success-alert-component>
    <error-alert-component :id="'sucErrorAlert'" :errors="errors" :title="'Error al crear el usuario'">
    </error-alert-component>
</template>

<script lang="ts" src="./SignupComponent.ts"></script>

<style scoped>
    @import './SignupComponent.scss';

</style>
