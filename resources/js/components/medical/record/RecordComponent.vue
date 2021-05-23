<template>
    <div class="card mb-25">
        <div class="card-header">
            <h3>Expediente</h3>
        </div>
        <div class="card-body">
            <section id="timeLine" class="cd-horizontal-timeline m-0" v-show="consultList.length > 0">
                <div class="timeline mb-25">
                    <div class="events-wrapper">
                        <div class="events">
                            <ol>
                                <li v-for="consult in consultList.slice().reverse()" :key="consult.id"><a
                                        @click="getInfoConsult(consult.id, formatConsultDateTime(consult.consult_schedule_start))"
                                        :data-date="formatConsultDateTime(consult.consult_schedule_start)">{{formatConsultDateTime(consult.consult_schedule_start)}}</a>
                                </li>
                            </ol>
                            <span class="filling-line" aria-hidden="true"></span>
                        </div> <!-- .events -->
                    </div> <!-- .events-wrapper -->

                    <ul class="cd-timeline-navigation">
                        <li><a href="#0" class="prev">Prev</a></li>
                        <li><a href="#0" class="next inactive">Next</a></li>
                    </ul> <!-- .cd-timeline-navigation -->
                </div> <!-- .timeline -->

                <div class="events-content h-auto m-0">
                    <ol>
                        <li :data-date="formatConsultDateTime(consult.consult_schedule_start)"
                            v-for="consult in consultList" :key="consult.id" class="container-fluid">
                            <div class="row">
                                <div class="col-12 col-md-4  mb-25" v-if="followUp.id !== -1"
                                    @click="showComponent(1)">
                                    <div class="card h-100 card-shadow">
                                        <div class="card-body row mx-0 py-3 px-2">
                                            <div class="col-4 align-self-center">
                                                <img src="/svg/followUp.svg" alt="FollowUp">
                                            </div>
                                            <div class="col-8 align-self-center">
                                                <h5>{{followUp.name}}</h5>
                                                <h6 class="h6 font-weight-light">Cita subsecuente</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4  mb-25" v-if="prescriptionList.length > 0" @click="showComponent(2)">
                                    <div class="card h-100 card-shadow">
                                        <div class="card-body row mx-0 py-3 px-2">
                                            <div class="col-4 align-self-center">
                                                <img src="/svg/followUp.svg" alt="FollowUp">
                                            </div>
                                            <div class="col-8 align-self-center">
                                                <h5>Receta</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 mb-25" v-for="test in testList" :key="test.id">
                                    <div class="card h-100 card-shadow mb-25">
                                        <div class="card-body row mx-0 py-3 px-2">
                                            <div class="col-4 align-self-center">
                                                <img src="/svg/medicalTest.svg" alt="FollowUp">
                                            </div>
                                            <div class="col-8 align-self-center">
                                                <h5>{{test.last_order.product.name}}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div> <!-- .events-content -->
            </section>
        </div>
    </div>

    <citas-subsecuentes-component v-if="componentNumber === 1" :formData="followUp.pivot.data.form"
        :title="`Información de cita del ${consultDateSelected}`"></citas-subsecuentes-component>
    <div class="card" v-if="componentNumber === 2">
        <div class="card-header">
            <h4>Receta</h4>
        </div>
        <div class="card-body">
            <div class="col-12 mb-25 card p-0" v-for="prescription in prescriptionList"
                :key="prescription.medicament_id">
                <div class="card-header">
                    <h4>{{prescription.medicament?.name}}</h4>
                </div>
                <div class="card-body row mx-0">
                    <div class="col-12 col-md-4 mb-25 banner-feature--15">
                        <label>Presentación</label>
                        <h5>{{prescription.medicament?.presentation}}</h5>
                    </div>
                    <div class="col-12 col-md-4 mb-25 banner-feature--15">
                        <label>Dosis</label>
                        <h5>{{prescription.dose}}</h5>
                    </div>
                    <div class="col-12 col-md-4 mb-25 banner-feature--15">
                        <label>Frecuencia</label>
                        <h5>{{prescription.rate}}</h5>
                    </div>
                    <div class="col-12 col-md-4 mb-25 banner-feature--15">
                        <label>Duración</label>
                        <h5>{{prescription.duration}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./RecordComponent.ts"></script>
<style lang="sass">
    @import "./RecordComponent.scss"
</style>
