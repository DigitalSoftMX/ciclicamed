<template>
    <div class="row justify-content-center">
        <div class="col-xl-6 col-sm-6 col-10">
            <div class="mt-40 mb-50">
                <div class="account-profile d-flex align-items-center mb-4 ">
                    <div class="ap-img pro_img_wrapper">
                        <input id="file-upload" type="file" name="fileUpload" class="d-none">
                        <!-- Profile picture image-->
                        <label for="file-upload">
                            <img class="ap-img__main rounded-circle wh-120 bg-lighter d-flex" :src="getImage()"
                                alt="profile">
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
                        <div class="col p-0 d-flex justify-content-between">
                            <div class="form-group mb-25">
                                <label for="name1">Nombre(s)</label>
                                <input type="text" class="form-control" id="name1" placeholder="Nombre(s)"
                                    :value="user.first_name">
                            </div>
                            <div class="form-group mb-25">
                                <label for="name2">Apellidos</label>
                                <input type="text" class="form-control" id="name2" placeholder="Apellidos"
                                    :value="user.last_name">
                            </div>
                        </div>

                        <div class="form-group mb-25">
                            <label for="name2">Correo electrónico</label>
                            <input type="email" class="form-control" id="name3" placeholder="ejemplo@correo.com"
                                :value="user.email">
                        </div>

                        <div class="col p-0 d-flex justify-content-between">
                            <div class="form-group mb-25">
                                <label for="phoneNumber5">Teléfono de Casa</label>
                                <input type="tel" class="form-control" id="phoneNumber5" placeholder="1234567890"
                                    :value="user.phone">
                            </div>
                            <div class="form-group mb-25">
                                <label for="phoneNumber5">Celular</label>
                                <input type="tel" class="form-control" id="phoneNumber5" placeholder="1234567890"
                                    :value="user.celular">
                            </div>
                        </div>

                        <div class="form-group mb-25">
                            <label for="name2">Dirección</label>
                            <textarea type="email" class="form-control" id="name3" placeholder="Dirección"
                                :value="user.address"></textarea>
                        </div>

                        <div class="form-group mb-25">
                            <label for="phoneNumber5">Sexo</label>
                            <select name="select-search" id="select-search" class="form-control ">
                                <option value="0">Hombre</option>
                                <option value="01">Mujer</option>
                            </select>
                        </div>






                        <div class="button-group d-flex pt-25 justify-content-end">
                            <button
                                class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
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
    export default {
        props: ['user', 'category', 'photo'],

        methods: {
            getImage() {
                return this.$props.photo;
            },
            
        }
    }

</script>
