<template>
    <div v-show="showPaymentComponent">
        <div class="row mx-0">
            <div class="col-12 mb-25">
                <button class="btn btn-primary btn-default btn-squared float-right" @click="showPaymentComponent = false">Regresar</button>
            </div>
            <div class="col-12 p-0">
                <charge-payment-component :products="paymentProducts.products" :consult="consultData" :patient="patientData" :role="role"></charge-payment-component>
            </div>
        </div>
    </div>
    <div v-show="!showPaymentComponent">
        <div class="row mx-0">
            <div class="col-12 col-md-3 p-md-0 mb-25 mb-md-0">
                <patient-profile-component :patientData="patientData" :clock="clock"
                    :consultNote="consultData.consult_reason" @onFinish="sendToServerData"></patient-profile-component>
            </div>
            <div class="col-12 col-md-9 p-0">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div
                                class="project-top-wrapper project-top-progress d-flex justify-content-between flex-wrap">
                                <div
                                    class="card project-top-left d-flex flex-wrap justify-content-lg-between justify-content-center">
                                    <div class="">
                                        <ul class="nav justify-items-start nav-pills nav-fill rounded" id="mccTab"
                                            role="tablist">
                                            <li class="nav-item px-0">
                                                <a class="nav-link px-3 py-2 active rounded"
                                                    id="mccHistorialClinico-tab" data-toggle="pill"
                                                    href="#mccHistorialClinico" role="tab"
                                                    aria-controls="mccHistorialClinico" aria-selected="true">Historial
                                                </a>
                                            </li>
                                            <li class="nav-item px-0">
                                                <a class="nav-link px-3 py-2 rounded" id="mccExpedienteClinico-tab"
                                                    data-toggle="pill" href="#mccExpedienteClinico" role="tab"
                                                    aria-controls="mccExpedienteClinico"
                                                    aria-selected="false">Expediente</a>
                                            </li>
                                            <li class="nav-item px-0">
                                                <a class="nav-link px-3 py-2 rounded" id="mccEspecialidades-tab"
                                                    data-toggle="pill" href="#mccEspecialidades" role="tab"
                                                    aria-controls="mccEspecialidades"
                                                    aria-selected="false">Especialidades</a>
                                            </li>
                                            <li class="nav-item px-0">
                                                <a class="nav-link px-3 py-2 rounded" id="mccCitasSubsecuentes-tab"
                                                    data-toggle="pill" href="#mccCitasSubsecuentes" role="tab"
                                                    aria-controls="mccCitasSubsecuentes" aria-selected="false">Cita
                                                    actual</a>
                                            </li>
                                            <li class="nav-item px-0">
                                                <a class="nav-link px-3 py-2 rounded" id="mccReceta-tab"
                                                    data-toggle="pill" href="#mccReceta" role="tab"
                                                    aria-controls="mccReceta" aria-selected="false">Receta</a>
                                            </li>
                                            <li class="nav-item px-0">
                                                <a class="nav-link px-3 py-2 rounded" id="mccOrdenMedica-tab"
                                                    data-toggle="pill" href="#mccOrdenMedica" role="tab"
                                                    aria-controls="mccOrdenMedica" aria-selected="false">Orden
                                                    médica</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Tab Menu End -->
                    <div class="projects-tab-content projects-tab-content--progress">
                        <div class="tab-content mt-25" id="mdc">
                            <div class="tab-pane fade active show" id="mccHistorialClinico" role="tabpanel">
                                <historial-clinico-component v-model="historyData.data.form" :disabled="disableHistory">
                                </historial-clinico-component>
                            </div>
                            <div class="tab-pane fade" id="mccExpedienteClinico" role="tabpanel">
                                <record-component :patientID="this.consultData.patient_id"
                                    :specialtyID="this.consultData.medicalspecialty_id"></record-component>
                            </div>
                            <div class="tab-pane fade" id="mccEspecialidades" role="tabpanel"
                                aria-labelledby="mccEspecialidades-tab">
                                <uroginecologia-component v-if="consultData.medicalspecialty_id === 1" :disabled="enableAttachmentData"
                                    v-model="attachmentForm.uroginecología"></uroginecologia-component>
                                <nutricion-general-component v-else-if="consultData.medicalspecialty_id === 2" :disabled="enableAttachmentData"
                                    v-model="attachmentForm.nutricionGeneral"></nutricion-general-component>
                                <!-- <climaterio-salud-osea-component v-else-if="consultData.medicalspecialty_id === 2" v-model="attachmentForm.climaterioSaludOsea"></climaterio-salud-osea-component> -->
                                <materno-fetal-component v-else-if="consultData.medicalspecialty_id === 3" :disabled="enableAttachmentData"
                                    v-model="attachmentForm.maternoFetal"></materno-fetal-component>

                                <nutricion-perinatal-component v-else-if="consultData.medicalspecialty_id === 4" :disabled="enableAttachmentData"
                                    v-model="attachmentForm.nutricionPerinatal"></nutricion-perinatal-component>
                                <nutricion-general-component v-else-if="consultData.medicalspecialty_id === 5" :disabled="enableAttachmentData"
                                    v-model="attachmentForm.nutricionGeneral"></nutricion-general-component>

                                <biologia-reproduccion-component v-else-if="consultData.medicalspecialty_id === 7" :disabled="enableAttachmentData"
                                    v-model="attachmentForm.biologiaReproduccion"></biologia-reproduccion-component>
                                <cirugia-endoscopica-component v-else-if="consultData.medicalspecialty_id === 8" :disabled="enableAttachmentData"
                                    v-model="attachmentForm.cirugiaEndoscopica"></cirugia-endoscopica-component>
                                <oncologia-component v-else-if="consultData.medicalspecialty_id === 9" :disabled="enableAttachmentData"
                                    v-model="attachmentForm.oncologia"></oncologia-component>
                                <colposcopia-component v-else-if="consultData.medicalspecialty_id === 10" :disabled="enableAttachmentData"
                                    v-model="attachmentForm.colposcopia"></colposcopia-component>
                            </div>
                            <div class="tab-pane fade" id="mccCitasSubsecuentes" role="tabpanel"
                                aria-labelledby="mccCitasSubsecuentes-tab">
                                <citas-subsecuentes-component v-model="followUp.data.form" :disabled="disableConsult">
                                </citas-subsecuentes-component>
                            </div>
                            <div class="tab-pane fade" id="mccReceta" role="tabpanel" aria-labelledby="mccReceta-tab">
                                <prescription-component v-model="prescriptionData" :disabled="disableConsult" :patientData="patientData" :consultData="consultData" :doctorData="doctorData">
                                </prescription-component>
                            </div>
                            <div class="tab-pane fade" id="mccOrdenMedica" role="tabpanel"
                                aria-labelledby="mccOrdenMedica-tab">
                                <test-order-component v-model="testData" :disabled="disableConsult" :patientData="patientData" :consultData="consultData" :doctorData="doctorData" :branches="branchesList"></test-order-component>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ConsultComponent.ts"></script>
