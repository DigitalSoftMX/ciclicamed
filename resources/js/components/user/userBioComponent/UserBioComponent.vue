<template>
    <div class="card mb-25">
        <div class="card-body text-center pt-sm-30 pb-sm-0  px-25 pb-0">
            <div class="account-profile">
                <div class="ap-img w-100 d-flex justify-content-center">
                    <img class="ap-img__main rounded-circle mb-3  wh-120 d-flex bg-opacity-primary"
                        src="https://demo.jsnorm.com/laravel/strikingdash/img/author/profile.png" alt="profile">
                </div>
                <div class="ap-nameAddress pb-3 pt-1">
                    <h5 class="ap-nameAddress__title">{{fullName}}</h5>
                    <p class="ap-nameAddress__subTitle fs-14 m-0">{{userData.user.email}}</p>
                </div>
            </div>
            <div class="card-footer pt-20 pb-20 px-0">
                <div class="profile-overview d-flex justify-content-center flex-wrap">
                    <p class="user-content-info__item mx-3">
                        <img-component url="/svg/gender.svg" alt="Sexo" cssClass="mr-2"></img-component>
                        <span v-if="userData.gender === 0">Hombre</span>
                        <span v-else>Mujer</span>
                    </p>
                    <p class="user-content-info__item mx-3">
                        <img-component url="/svg/birthday.svg" alt="Nacimiento" cssClass="mr-2"></img-component>
                        {{birthday}}
                    </p>
                    <p class="user-content-info__item mx-3">
                        <img-component url="/svg/phone.svg" alt="Teléfono" cssClass="mr-2"></img-component>
                        {{userData.phone}}
                    </p>
                    <p class="user-content-info__item mx-3">
                        <img-component url="/svg/cellphone.svg" alt="Celular" cssClass="mr-2"></img-component>
                        {{userData.cellphone}}
                    </p>
                    <p class="user-content-info__item mx-3 mt-3 mt-lg-0">
                        <img-component url="/svg/address.svg" alt="Dirección" cssClass="mr-2"></img-component>
                        {{userData.address}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UserBioComponent.ts"></script>
