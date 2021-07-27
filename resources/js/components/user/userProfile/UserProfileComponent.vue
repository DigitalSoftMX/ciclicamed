<template>
    <div class="card spin-embadded" v-bind:class="{'spin-active': loading}">
        <div class="card-body ">
            <div class="account-profile d-flex align-items-center mb-4 justify-content-center">
                <div class="ap-img pro_img_wrapper">
                    <input :id="id + 'file-upload'" type="file" name="fileUpload"
                        accept=".jpg, .jpeg, .png, .bmp, .svg')" class="d-none" @change="selectFile($event)"
                        :disabled="disabled">
                    <label :for="id + 'file-upload'">
                        <!-- <img :src="`/images/users/${userForm.photo}`" :alt="userForm.first_name" class="ap-img__main rounded-circle wh-120 d-flex bg-opacity-primary" :onerror="`this.src='/svg/person.svg';`"> -->

                        <img class="ap-img__main rounded-circle wh-120 d-flex bg-opacity-primary" :id="id + 'upcImage'"
                            :src="`${path}/images/users/${userForm.photo}`" alt="profile"
                            onerror="this.onerror=null;this.src='../svg/person.svg';">
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
                <div class="form-group mb-25" v-if="userCategory === 'pacientes'">
                    <label for="firstName">Código de paciente</label>
                    <div class="with-icon">
                        <span class="mr-5">
                            <img-component url="/svg/barcode.svg" alt="Código"></img-component>
                        </span>
                        <input type="text" class="form-control form-control-lg" :id="id + 'patientCode'"
                            placeholder="Código paciente" :disabled="disabled || disablePatientCode" maxlength="25"
                            v-model="patientCode">
                    </div>
                </div>

                <div class="form-group mb-25">
                    <label for="firstName">Nombre(s)</label>
                    <div class="with-icon">
                        <span class="mr-5">
                            <img-component url="/svg/person.svg" alt="Nombres"></img-component>
                        </span>
                        <input type="text" class="form-control form-control-lg" :id="id + 'firstName'"
                            placeholder="Nombre(s)" :disabled="disabled" maxlength="100" v-model="userForm.first_name"
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
                            <img-component url="/svg/person.svg" alt="Apellidos"></img-component>
                        </span>
                        <input type="text" class="form-control form-control-lg" :id="id + 'lastName'"
                            placeholder="Apellidos" :disabled="disabled" maxlength="100" v-model="userForm.last_name"
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
                            <img-component url="/svg/email.svg" alt="Correo"></img-component>
                        </span>
                        <input type="email" class="form-control form-control-lg" :id="id + 'name3'"
                            placeholder="ejemplo@correo.com" maxlength="100" v-model="userForm.user.email"
                            :disabled="disabled" @keyup="checkProfileData(); updateCharacter('email')">
                    </div>
                    <div class="float-right">
                        {{ `${getCharacters('email')}/100` }}
                    </div>
                </div>

                <div class="form-group mb-25">
                    <label for="phoneNumber5">Teléfono de Casa</label>
                    <div class="with-icon">
                        <span class="mr-5">
                            <img-component url="/svg/phone.svg" alt="Telefono"></img-component>
                        </span>
                        <input type="tel" class="form-control form-control-lg" :id="id + 'phone'"
                            placeholder="1234567890" :disabled="disabled" maxlength="10" v-model="userForm.phone"
                            @keyup="checkProfileData(); updateCharacter('phone')">
                    </div>
                    <div class="float-right">
                        {{ `${getCharacters('phone')}/10` }}
                    </div>
                </div>

                <div class="form-group mb-25">
                    <label for="phoneNumber5">Celular</label>
                    <div class="with-icon">
                        <span class="mr-5">
                            <img-component url="/svg/cellphone.svg" alt="Celular"></img-component>
                        </span>
                        <input type="tel" class="form-control form-control-lg" :id="id + 'cellphone'"
                            placeholder="1234567890" :disabled="disabled" maxlength="10" v-model="userForm.cellphone"
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
                            <img-component url="/svg/address.svg" alt="Direccion"></img-component>
                        </span>
                        <textarea type="text" class="form-control form-control-lg" :id="id + 'address'"
                            placeholder="Dirección" :disabled="disabled" v-model="userForm.address"
                            @keyup="checkProfileData(); updateCharacter('address')" maxlength="255"></textarea>
                    </div>
                    <div class="float-right">
                        {{ `${getCharacters('address')}/255` }}
                    </div>
                </div>

                <div class="form-group mb-25">
                    <label for="name2">Sexo</label>
                    <div class="radio-horizontal-list d-flex">
                        <div class="input-group-prepend r-3 rounded px-2 ">
                            <img-component url="/svg/gender.svg" alt="Sexo"></img-component>
                        </div>
                        <div class="d-flex px-4">
                            <div class="radio-theme-default custom-radio ">
                                <input class="radio" type="radio" name="gender" value="0" :id="id + 'radio-vl1'"
                                    :disabled="disabled" v-model="userForm.gender" @change="checkProfileData('gender')">
                                <label :for="id + 'radio-vl1'">
                                    <span class="radio-text">Hombre</span>
                                </label>
                            </div>
                            <div class="radio-theme-default custom-radio ">
                                <input class="radio" type="radio" name="gender" value="1" :id="id + 'radio-vl2'"
                                    :disabled="disabled" v-model="userForm.gender" @change="checkProfileData('gender')">
                                <label :for="id + 'radio-vl2'">
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
                            <img-component url="/svg/calendar.svg" alt="Calendario"></img-component>
                        </span>
                        <input type="text" class="form-control form-control-lg form-control form-control-lg-lg "
                            :disabled="disabled" :id="id + 'birthday'" placeholder="dd/mm/aaaa" :value="birthday"
                            maxlength="10" readonly>
                    </div>
                </div>

                <div class="button-group d-flex pt-25 justify-content-end" v-if="!disabled">
                    <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                        @click="createUser()" v-if="isNew">
                        Crear datos
                    </button>
                    <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                        @click="updateProfile()" v-else>
                        Actualizar datos
                    </button>
                </div>
            </div>
            <div class="loaded-spin text-center spin">
                <el-progress type="circle" :percentage="uploadPercentage" class="spin-center"></el-progress>
            </div>
        </div>

    </div>

    <!--Modal de error-->
    <error-alert-component :id="id + 'profileError'" :errors="errors"
        :title="'Error al actualizar los datos del perfil'">
    </error-alert-component>
    <!--Modal de exito-->
    <success-alert-component :id="id + 'profileSuccess'" :message="successMessage"
        :title="'Datos del perfil actualizados'">
    </success-alert-component>
</template>

<script lang="ts" src="./UserProfileComponent.ts"></script>

<style scoped>
    .spin {
        width: 100%;
        height: -webkit-fill-available;
        height: stretch;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .spin-center {
        top: 50%;
    }

</style>
