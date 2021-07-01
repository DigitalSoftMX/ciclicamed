<template>
    <div class="card">
        <div class="card-body pt-sm-30 px-25">
            <div class="account-profile border-bottom text-center">

                <div class="ap-img w-100 d-flex justify-content-center">
                    <img class="ap-img__main rounded-circle mb-3 wh-120 d-flex bg-opacity-primary"
                        :src="`/images/users/${userData.photo}`" alt="profile" id="upasscPhoto"
                        onerror="this.onerror=null;this.src='/svg/person.svg';">
                </div>

                <div class="ap-nameAddress pb-3 pt-1">
                    <h5 class="ap-nameAddress__title text-capitalize">
                        {{ `${userData.first_name} ${userData.last_name}` }}</h5>
                    <p class="ap-nameAddress__subTitle fs-14 m-0 text-capitalize">{{ userCategory }}</p>
                    <p class="ap-nameAddress__subTitle fs-14 m-0"> {{ userData.user.email }} </p>
                </div>
            </div>

            <div class="edit-profile__body pt-3">

                <div class="text-center mb-3">
                    <label>Cambiar contraseña</label>
                </div>

                <div v-bind:class="{'was-validated': this.passwordIsValid}">
                    <div class="form-group mb-15 align-items-start">
                        <label for="password">Nueva contraseña</label>
                        <div class="position-relative">
                            <input id="password" type="password" class="form-control password-text" required
                                name="password" placeholder="Contraseña" v-model="password" @keyup="checkPassword()">
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <label for="confirmPassword">Confirmar contraseña</label>
                        <div class="position-relative">
                            <input id="confirmPassword" type="password" class="form-control password-text" required
                                name="password_confirmation" placeholder="Confirmar contraseña"
                                v-model="confirmPassword" @keyup="checkPassword()">
                        </div>
                    </div>

                    <div class="button-group d-flex justify-content-end">
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                            :disabled="isButtonDisabled" v-on:click="changePassword()">
                            Cambiar contraseña
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Modal de error-->
    <error-alert-component :id="'passwordWrong'" :errors="errors" :title="'Error al actualizar la contraseña'">
    </error-alert-component>
    <!--Modal de exito-->
    <success-alert-component :id="'passwordSuccess'" :message="successMessage"
        :title="'Contraseña actualizada correctamente'"></success-alert-component>
</template>

<script lang="ts" src="./UserPasswordComponent.ts"></script>
