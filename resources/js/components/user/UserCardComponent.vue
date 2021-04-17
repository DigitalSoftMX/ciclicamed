<template>
    <div class="card-body  pt-sm-30 px-25">
        <div class="account-profile border-bottom text-center">

            <div class="ap-img w-100 d-flex justify-content-center">
                <!-- Profile picture image-->
                <img class="ap-img__main rounded-circle mb-3 wh-120 d-flex bg-opacity-primary" :src="getImage()"
                    alt="profile" onerror="this.onerror=null;this.src='/svg/person.svg';">
            </div>

            <div class="ap-nameAddress pb-3 pt-1">
                <h5 class="ap-nameAddress__title text-capitalize">{{ `${user.first_name} ${user.last_name}` }}</h5>
                <p class="ap-nameAddress__subTitle fs-14 m-0 text-capitalize">{{ category.name }}</p>
                <p class="ap-nameAddress__subTitle fs-14 m-0"> {{ user.email }} </p>
            </div>
        </div>

        <div class="edit-profile__body pt-3">

            <div class="text-center mb-3">
                <label>Cambiar contraseña</label>
            </div>

            <div v-bind:class="{'was-validated': this.error}">
                <div class="form-group mb-15 align-items-start">
                    <label for="password">Nueva contraseña</label>
                    <div class="position-relative">
                        <input id="password" type="password" class="form-control password-text" required name="password"
                            placeholder="Contraseña" v-model="_password">
                    </div>
                </div>

                <div class="form-group mb-25">
                    <label for="confirmPassword">Confirmar contraseña</label>
                    <div class="position-relative">
                        <input id="confirmPassword" type="password" class="form-control password-text" required
                            name="password_confirmation" placeholder="Confirmar contraseña" v-model="_confirmPassword"
                            @keyup="checkPassword()">
                    </div>
                </div>

                <div class="button-group d-flex justify-content-end">
                    <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                        v-on:click="changePassword()">
                        Cambiar contraseña
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal de error -->
    <div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-sm modal-info" role="document">
            <div class="modal-content modal-bg-danger modal-colored">
                <div class="modal-header ">
                    <h6 class="modal-title">Error al actualizar la contraseña</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img src="/svg/close.svg" alt="Alert logo" style="filter: invert(1);">
                    </button>
                </div>
                <div class="modal-body mb-3">
                    <div class="modal-info-body d-flex">
                        <div class="modal-info-icon danger">
                            <img src="/svg/close.svg" alt="Alert logo" style="filter: invert(1);">
                        </div>
                        <div v-for="error in errors" :key="error">
                            <div class="modal-info-text text-white" v-for="errorInfo in error" :key="errorInfo">
                                {{ errorInfo }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import $ from 'jquery';
    require('../../../../public/vendor_assets/js/bootstrap/bootstrap.min');
    const Swal = require('sweetalert2');

    export default {
        props: ['user', 'category', 'photo'],
        data: function () {
            return {
                _password: null,
                _confirmPassword: null,
                error: false,
                errors: []
            }
        },
        methods: {
            getImage() {
                return this.$props.photo;
            },
            changePassword() {


                axios.put('/usuarios/1', {
                        email: 'exampleexample.com'
                    })
                    .then(response => {
                        this._password = null;
                        console.log(response)
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                        $('#errorModal').modal('show')
                        console.log(error.response.data.errors)
                    })
            },
            checkPassword() {
                this.error = this._password == this._confirmPassword ? true : false;
            }
        }
    }

</script>
