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
                            <img :src="'/svg/email.svg'" alt="Profile" class="mr-2">
                            {{userData.user?.email}}
                        </p>
                        <p class="user-content-info__item">
                            <img :src="'/svg/phone.svg'" alt="Phone Logo" class="mr-2">
                            {{userData.phone}}
                        </p>
                        <p class="user-content-info__item">
                            <img :src="'/svg/cellphone.svg'" alt="Cellphone Logo" class="mr-2">
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
                            <img :src="'/svg/gender.svg'" alt="Phone Logo" class="mr-2">
                            <span>{{gender}}</span>
                        </p>
                        <p class="user-content-info__item">
                            <img :src="'/svg/birthday.svg'" alt="Phone Logo" class="mr-2">
                            {{birthday}}
                        </p>
                        <p class="user-content-info__item">
                            <img :src="'/svg/address.svg'" alt="Cellphone Logo" class="mr-2">
                            {{userData.address}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UserProfileInfoComponent.ts"></script>
