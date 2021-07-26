<template>
    <div class="card">
        <div class="card-body p-0">
            <div class="user-info border-bottom">
                <div class="card-header border-bottom-0 pt-sm-25 pb-sm-0  px-md-25 px-3">
                    <div class="profile-header-title">
                        Información de contacto
                    </div>
                </div>
                <div class="card-body pt-md-1 pt-0">
                    <div class="user-content-info">
                        <p class="user-content-info__item">
                            <img-component url="/svg/email.svg" alt="Correo" cssClass="mr-2"></img-component>
                            {{userData.user?.email}}
                        </p>
                        <p class="user-content-info__item">
                            <img-component url="/svg/phone.svg" alt="Teléfono" cssClass="mr-2"></img-component>
                            {{userData.phone}}
                        </p>
                        <p class="user-content-info__item">
                            <img-component url="/svg/cellphone.svg" alt="Celular" cssClass="mr-2"></img-component>
                            {{userData.cellphone}}
                        </p>
                    </div>
                </div>
            </div>

            <div class="user-info">
                <div class="card-header border-bottom-0 pt-15  px-md-25 px-3">
                    <div class="profile-header-title">
                        Información personal
                    </div>
                </div>
                <div class="card-body pt-md-1 pt-0">
                    <div class="user-content-info">
                        <p class="user-content-info__item">
                            <img-component url="/svg/gender.svg" alt="Sexo" cssClass="mr-2"></img-component>
                            <span>{{gender}}</span>
                        </p>
                        <p class="user-content-info__item">
                            <img-component url="/svg/birthday.svg" alt="Nacimiento" cssClass="mr-2"></img-component>
                            {{birthday}}
                        </p>
                        <p class="user-content-info__item">
                            <img-component url="/svg/address.svg" alt="Dirección" cssClass="mr-2"></img-component>
                            {{userData.address}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UserProfileInfoComponent.ts"></script>
