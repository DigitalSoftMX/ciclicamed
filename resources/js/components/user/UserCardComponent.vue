<template>
    <div class="card-body text-center pt-sm-30 px-25">
        <div class="account-profile">

            <div class="ap-img w-100 d-flex justify-content-center">
                <!-- Profile picture image-->
                <img class="ap-img__main rounded-circle mb-3  wh-120 d-flex bg-opacity-primary"
                    :src="getImage()" alt="profile">
            </div>
            
            <div class="ap-nameAddress pb-3 pt-1">
                <h5 class="ap-nameAddress__title text-capitalize">{{ `${user.first_name} ${user.last_name}` }}</h5>
                <p class="ap-nameAddress__subTitle fs-14 m-0 text-capitalize">{{ category.name }}</p>
                <p class="ap-nameAddress__subTitle fs-14 m-0"> {{ user.email }} </p>
            </div>
            <div class="ap-button button-group d-flex justify-content-center flex-wrap">
                <button class="btn btn-primary btn-default btn-squared text-capitalize  px-25">
                    Editar perfil
                </button>

                <button class="btn btn-primary btn-default btn-squared text-capitalize  px-25">
                    Cambiar contraseña
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['user', 'category', 'photo'],

        methods: {
            getImage () {
                return this.$props.photo;
            }
        }
    }
</script>
