<template>
    <div class="row justify-content-center">
        <div class="col-sm-8 col-10">
            <div class="mt-40 mb-50">
                <div class="account-profile d-flex align-items-center mb-4 ">
                    <div class="ap-img pro_img_wrapper">
                        <input id="file-upload" type="file" name="fileUpload" class="d-none">
                        <!-- Profile picture image-->
                        <label for="file-upload">
                            <img class="ap-img__main rounded-circle wh-120 d-flex bg-opacity-primary" :src="getImage()"
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
                <div class="edit-profile__body">
                    <form>
                        <div class="form-group mb-25">
                            <label for="firstName">Nombre(s)</label>
                            <div class="position-relative d-flex">
                                <div class="input-group-prepend r-3 rounded px-2 ">
                                    <img src="/svg/person.svg" alt="Calendar logo">
                                </div>
                                <input type="text" class="form-control" id="firstName" placeholder="Nombre(s)" max="100"
                                    :value="user.first_name">
                            </div>
                        </div>

                        <div class="form-group mb-25">
                            <label for="lastName">Apellidos</label>
                            <div class="position-relative d-flex">
                                <div class="input-group-prepend r-3 rounded px-2 ">
                                    <img src="/svg/person.svg" alt="Calendar logo">
                                </div>
                                <input type="text" class="form-control" id="lastName" placeholder="Apellidos" max="100"
                                    :value="user.last_name">
                            </div>
                        </div>

                        <div class="form-group mb-25">
                            <label for="name2">Correo electrónico</label>
                            <div class="position-relative d-flex">
                                <div class="input-group-prepend r-3 rounded px-2 ">
                                    <img src="/svg/email.svg" alt="Calendar logo">
                                </div>
                                <input type="email" class="form-control" id="name3" placeholder="ejemplo@correo.com" max="100"
                                    :value="user.email">
                            </div>
                        </div>

                        <div class="form-group mb-25">
                            <label for="phoneNumber5">Teléfono de Casa</label>

                            <div class="position-relative d-flex">
                                <div class="input-group-prepend r-3 rounded px-2 ">
                                    <img src="/svg/phone.svg" alt="Calendar logo">
                                </div>
                                <input type="tel" class="form-control" id="phone" placeholder="1234567890" max="10"
                                    :value="user.phone">
                            </div>
                        </div>

                        <div class="form-group mb-25">
                            <label for="phoneNumber5">Celular</label>
                            <div class="position-relative d-flex">
                                <div class="input-group-prepend r-3 rounded px-2 ">
                                    <img src="/svg/cellphone.svg" alt="Calendar logo">
                                </div>
                                <input type="tel" class="form-control" id="cellphone" placeholder="1234567890" max="10"
                                    :value="user.cellphone">
                            </div>
                        </div>

                        <div class="form-group mb-25">
                            <label for="name2">Dirección</label>
                            <div class="position-relative d-flex">
                                <div class="input-group-prepend r-3 rounded px-2 ">
                                    <img src="/svg/address.svg" alt="Calendar logo">
                                </div>
                                <textarea type="email" class="form-control" id="address" placeholder="Dirección"
                                    :value="user.address"></textarea>
                            </div>
                        </div>

                        <div class="form-group mb-25">
                            <label for="name2">Sexo</label>
                            <div class="radio-horizontal-list d-flex">
                                <div class="input-group-prepend r-3 rounded px-2 ">
                                    <img src="/svg/gender.svg" alt="Calendar logo">
                                </div>
                                <div class="d-flex px-4">
                                    <div class="radio-theme-default custom-radio">
                                        <input class="radio" type="radio" name="radio-horizontal" value="0"
                                            id="genderMan" data-com.bitwarden.browser.user-edited="yes"
                                            :checked="getGender()">
                                        <label for="radio-vl1">
                                            <span class="radio-text">Hombre</span>
                                        </label>
                                    </div>
                                    <div class="radio-theme-default custom-radio ml-2">
                                        <input class="radio" type="radio" name="radio-horizontal" value="1"
                                            id="genderWoman" data-com.bitwarden.browser.user-edited="yes"
                                            :checked="!getGender()">
                                        <label for="radio-vl2">
                                            <span class="radio-text">Mujer</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="form-group mb-0 form-group-calender">
                            <label>Fecha de nacimiento</label>
                            <div class="position-relative d-flex">
                                <div class="input-group-prepend r-3 rounded px-2 ">
                                    <img src="/svg/calendar.svg" alt="Calendar logo">
                                </div>
                                <input type="text" class="form-control form-control-lg " id="birthday"
                                    placeholder="dd/mm/aaaa" :value="getBirthday()">
                            </div>
                        </div>

                        <div class="button-group d-flex pt-25 justify-content-end">
                            <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                                v-on:click="editUser()">
                                Actualizar datos
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import moment from 'moment';
    require('../../../../public/vendor_assets/js/daterangepicker');
    require('../../../../public/vendor_assets/js/jquery/jquery-ui');
    require('../../../../public/vendor_assets/js/jquery/jquery-datepicker-es')

    export default {
        props: ['user', 'category', 'photo'],

        mounted() {
            $("#birthday").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: "dd/mm/yy",
                yearRange: `1930:${new Date().getFullYear().toString()}`
            });
        },
        methods: {
            getImage() {
                return this.$props.photo;
            },
            getGender() {
                return this.$props.user.gender === 0 ? true : false;
            },
            getBirthday() {
                moment.locale('es');
                return moment(this.$props.user.birthday).calendar();
            }
        }
    }

</script>
