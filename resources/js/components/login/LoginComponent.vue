<template>
    <div class="row mx-0 bg-white">
        <div class="col-7 login-splash"></div>
        <div class="col-12 col-md-5 d-flex login-container">
            <div class="card-body align-self-center">
                <div class="card border-0 shadow-none">
                    <div class="card-body">
                        <div class="text-center mb-25">
                            <img-component url="/img/login/logo.png"  alt="Ciclica" cssClass="login-logo mb-25"></img-component>
                            <h2>Iniciar sesión</h2>
                        </div>
                        <div>
                            <div class="form-group mb-20">
                                <label for="username">Correo electrónico</label>
                                <input type="email" class="form-control form-control-lg" v-model="email" id="email"
                                    placeholder="Correo electrónico" name="email" required>
                            </div>

                            <div class="form-group mb-20">
                                <label for="password-field">Contraseña</label>
                                <div class="position-relative">
                                    <input id="password-field" type="password" class="form-control form-control-lg"
                                        v-model="password" name="password" placeholder="Contraseña"
                                        v-on:keyup.enter="login">
                                    <div class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2">
                                    </div>
                                </div>
                            </div>

                            <div class="signUp-condition signIn-condition">
                                <a @click="redirectToResetPassword" class="reset">¿Olvidó su
                                    contraseña?</a>
                            </div>

                            <div class="row mx-0 p-0">
                                <div class="col-12 mb-25 mb-md-0 col-md-6 px-0 px-md-3">
                                    <button
                                        class="btn btn-default btn-squared lh-normal px-50 py-15 signIn-createBtn btn-outline-primary w-100"
                                        @click="redirectToSignup">
                                        Crea cuenta
                                    </button>
                                </div>
                                <div class="col-12 mb-25 mb-md-0 col-md-6 px-0 px-md-3">
                                    <button
                                        class="btn btn-primary btn-default btn-squared lh-normal px-50 py-15 signIn-createBtn w-100"
                                        @click="login">
                                        Iniciar sesión
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component id="logcSuccessAlert" title="Login correcto" message="Bienvedido(a)"></success-alert-component>
    <error-alert-component id="logcErrorAlert" :errors="errors" :title="'Error al iniciar sesión'">
    </error-alert-component>
</template>

<script lang="ts" src="./LoginComponent.ts"></script>

<style scoped>
    @import './LoginComponent.scss';

</style>
