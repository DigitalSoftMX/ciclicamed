<template>
    <div class="e-info-modal modal fade show" id="schedule-action" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-sm e-info-dialog modal-dialog-centered" id="c-event" role="document">
            <div class="modal-content">
                <div class="modal-header justify-content-betweem bg-primary">
                    <div>
                        <h6 class="modal-title e-info-title">Agendar cita</h6>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3"
                            data-dismiss="modal" aria-label="Close">
                            <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);">
                            </img-component>
                        </button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="row mx-0">
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="cscFUM">FUM</label>
                            <input class="form-control form-control-lg" type="date" id="cscFUM" v-model="formData.fum">
                        </div>
                        <div class="col-12 col-md-3 mb-25 ">
                            <label for="cscIMC">IMC</label>
                            <input class="form-control form-control-lg" type="text" id="cscIMC" v-model="formData.imc">
                        </div>
                        <div class="col-12 col-md-3 mb-25 ">
                            <label for="cscPeso">Peso</label>
                            <input class="form-control form-control-lg" type="text" id="cscPeso" v-model="formData.peso">
                        </div>
                        <div class="col-12 col-md-3 mb-25 ">
                            <label for="cscTA">TA</label>
                            <input class="form-control form-control-lg" type="text" id="cscTA" v-model="formData.ta">
                        </div>
                        <div class="col-12 col-md-3 mb-25 ">
                            <label for="cscFC">FC</label>
                            <input class="form-control form-control-lg" type="text" id="cscFC" v-model="formData.fc">
                        </div>
                        <div class="col-12 col-md-3 mb-25 ">
                            <label for="cscFR">FR</label>
                            <input class="form-control form-control-lg" type="text" id="cscFR" v-model="formData.fr">
                        </div>
                        <div class="col-12 col-md-3 mb-25 ">
                            <label for="cscTemperatura">Temperatura</label>
                            <input class="form-control form-control-lg" type="text" id="cscTemperatura"
                                v-model="formData.temperatura">
                        </div>
                    </div>
                </div>
                <div class="modal-footer bg-white">
                    <button class="btn btn-primary btn-lg btn-squared">Enviar información</button>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component :id="'actionConsultSuccess'" :message="successAlert.message" :title="successAlert.title">
    </success-alert-component>
    <error-alert-component :id="'actionConsultError'" :errors="errors" :title="'Error al cancelar la cita'">
    </error-alert-component>
</template>

<script lang="ts" src="./ScheduleActionComponent.ts"></script>

<style src="./ScheduleActionComponent.css"></style>
