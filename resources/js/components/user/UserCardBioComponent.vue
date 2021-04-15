<template>
    <div class="user-info border-bottom">
        <div class="card-header border-bottom-0 pt-sm-25 pb-sm-0  px-md-25 px-3">
            <div class="profile-header-title">
                Información de contacto
            </div>
        </div>
        <div class="card-body pt-md-1 pt-0">
            <div class="user-content-info">
                <p class="user-content-info__item">
                    <img :src="'/svg/email.svg'" alt="Phone Logo" class="mr-2">
                    {{user.email}}
                </p>
                <p class="user-content-info__item">
                    <img :src="'/svg/phone.svg'" alt="Phone Logo" class="mr-2">
                    {{user.phone}}
                </p>
                <p class="user-content-info__item">
                    <img :src="'/svg/cellphone.svg'" alt="Cellphone Logo" class="mr-2">
                    {{user.celular}}
                </p>
            </div>
        </div>
    </div>


    <div class="user-info border-bottom">
        <div class="card-header border-bottom-0 pt-sm-25 pb-sm-0  px-md-25 px-3">
            <div class="profile-header-title">
                Información personal
            </div>
        </div>
        <div class="card-body pt-md-1 pt-0">
            <div class="user-content-info">
                <p class="user-content-info__item">
                    <img :src="'/svg/gender.svg'" alt="Phone Logo" class="mr-2">
                    <span v-if="user.gender === 0">Hombre</span>
                    <span v-else>Mujer</span>
                </p>
                <p class="user-content-info__item">
                    <img :src="'/svg/birthday.svg'" alt="Phone Logo" class="mr-2">
                    {{getBirthday()}}
                </p>
                <p class="user-content-info__item">
                    <img :src="'/svg/address.svg'" alt="Cellphone Logo" class="mr-2">
                    {{user.address}}
                </p>
            </div>
        </div>
    </div>




    <div class="user-skils border-bottom">
        <div class="card-header border-bottom-0 pt-sm-25 pb-sm-0  px-md-25 px-3">
            <div class="profile-header-title">
                Permisos
            </div>
        </div>
        <div class="card-body pt-md-1 pt-0">
            <ul class="user-skils-parent">
                <li class="user-skils-parent__item">
                    <a href="#">UI/UX</a>
                </li>
                <li class="user-skils-parent__item">
                    <a href="#">Branding</a>
                </li>
                <li class="user-skils-parent__item">
                    <a href="#">product design</a>
                </li>
                <li class="user-skils-parent__item">
                    <a href="#">Application</a>
                </li>
                <li class="user-skils-parent__item mb-0">
                    <a href="#">web design</a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import moment from 'moment';

    export default {
        props: ['user', 'category', 'photo'],

        methods: {
            getImage() {
                return this.$props.photo;
            },
            getBirthday() {
                moment.locale('es');
                return moment(this.$props.user.birthday).calendar();
            }
        }
    }

</script>
