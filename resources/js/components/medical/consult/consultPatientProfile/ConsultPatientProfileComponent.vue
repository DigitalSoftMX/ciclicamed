<template>
    <div class="row mx-0 p-0">
        <div class="card mb-25 col-12 p-0">
            <div class="card-body text-center pt-30 px-25 pb-0">
                <div class="account-profile-cards  ">
                    <div class="ap-img d-flex justify-content-center">
                        <img-component :url="`/images/users/${patientData.photo}`" errorImg="/svg/person.svg"
                            alt="Phone" cssClass="ap-img__main bg-opacity-primary  wh-120 rounded-circle mb-3">
                        </img-component>
                    </div>
                    <div class="ap-nameAddress">
                        <h4 class="ap-nameAddress__title mb-15">{{`${patientData.first_name} ${patientData.last_name}`}}
                        </h4>
                        <p class="ap-nameAddress__subTitle fs-14 pt-1 m-0 text-dark font-weight-bold">Fecha de
                            nacimiento</p>
                        <p>{{formatBirthDay()}}</p>
                        <img-component url="/svg/phone.svg" alt="Phone" cssClass="svg-backgroundColor"></img-component>
                        <p>{{patientData.cellphone}}</p>
                        <img-component url="/svg/email.svg" alt="Email" cssClass="svg-backgroundColor"></img-component>
                        <p>{{patientData.user.email}}</p>
                    </div>
                    <div v-if="role !== 'Enfermera'"
                        class="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap pt-20">
                        <button type="button" @click="openPreregistration"
                            class="btn btn-primary btn-lg btn-squared btn-block bg-primary">Editar</button>
                    </div>
                </div>
                <div class="card-footer mt-20 pt-20 pb-20 px-0">
                    <div class="row mx-0">
                        <div class="col-12">
                            <h4>Notas</h4>
                            <p>{{consultNote}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 card p-0 mb-25">
            <div class="card-header">
                <h4>Tiempo de consulta</h4>
            </div>
            <div class="card-body text-center">
                <h1>{{`${clock.hours}:${clock.minutes}:${clock.seconds}`}}</h1>
            </div>
        </div>
        <div class="col-12 p-0">
            <button class="btn btn-danger btn-lg btn-squared w-100" @click="finishConsult">Terminar cita
            </button>
        </div>
    </div>

    <preregistration-component :patientData="patientData" :isNew="false" role="Doctor" v-if="role !== 'Enfermera'"></preregistration-component>
</template>

<script lang="ts" src="./ConsultPatientProfileComponent.ts"></script>
<style lang="sass" scoped>
    @import "./ConsultPatientProfileComponent.scss"

</style>
