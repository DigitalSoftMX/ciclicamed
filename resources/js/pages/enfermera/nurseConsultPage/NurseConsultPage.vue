<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Perfil de usuario" :userData="nurse"
        :photo="nurse.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div v-if="consult > 0">
            <div class="row mx-0 mt-25">
                <div class="col-12 col-md-3 p-md-0 mb-25 mb-md-0">
                    <patient-profile-component :patientData="patientData" :clock="clock" role="Enfermera"
                        :consultNote="consultData.consult_reason" @onFinish="showConfirmationAlert">
                    </patient-profile-component>
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
                                                        aria-controls="mccHistorialClinico"
                                                        aria-selected="true">Historial
                                                    </a>
                                                </li>
                                                <li class="nav-item px-0">
                                                    <a class="nav-link px-3 py-2 rounded" id="mccCitasSubsecuentes-tab"
                                                        data-toggle="pill" href="#mccCitasSubsecuentes" role="tab"
                                                        aria-controls="mccCitasSubsecuentes" aria-selected="false">Cita
                                                        actual</a>
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
                                    <historial-clinico-component v-model="historyData.data.form" :disabled="true">
                                    </historial-clinico-component>
                                </div>
                                <div class="tab-pane fade" id="mccCitasSubsecuentes" role="tabpanel"
                                    aria-labelledby="mccCitasSubsecuentes-tab">
                                    <div class="card">
                                        <div class="card-header">
                                            <h1>Toma de signos vitales</h1>
                                        </div>
                                        <div class="card-body">
                                            <div class="row mx-0">
                                                <div class="col-12 col-md-6 mb-25 ">
                                                    <label for="cscFUM">FUM</label>
                                                    <input class="form-control form-control-lg" type="date" id="cscFUM"
                                                        v-model="formData.fum">
                                                </div>
                                                <div class="col-12 col-md-3 mb-25 ">
                                                    <label for="cscIMC">IMC</label>
                                                    <input class="form-control form-control-lg" type="text" id="cscIMC"
                                                        v-model="formData.imc">
                                                </div>
                                                <div class="col-12 col-md-3 mb-25 ">
                                                    <label for="cscPeso">Peso</label>
                                                    <input class="form-control form-control-lg" type="text" id="cscPeso"
                                                        v-model="formData.peso">
                                                </div>
                                                <div class="col-12 col-md-3 mb-25 ">
                                                    <label for="cscTA">TA</label>
                                                    <input class="form-control form-control-lg" type="text" id="cscTA"
                                                        v-model="formData.ta">
                                                </div>
                                                <div class="col-12 col-md-3 mb-25 ">
                                                    <label for="cscFC">FC</label>
                                                    <input class="form-control form-control-lg" type="text" id="cscFC"
                                                        v-model="formData.fc">
                                                </div>
                                                <div class="col-12 col-md-3 mb-25 ">
                                                    <label for="cscFR">FR</label>
                                                    <input class="form-control form-control-lg" type="text" id="cscFR"
                                                        v-model="formData.fr">
                                                </div>
                                                <div class="col-12 col-md-3 mb-25 ">
                                                    <label for="cscTemperatura">Temperatura</label>
                                                    <input class="form-control form-control-lg" type="text"
                                                        id="cscTemperatura" v-model="formData.temperatura">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <no-consult-component></no-consult-component>
        </div>
    </div>

    <confirmation-alert-component id="nurcpConfirmation"
        title="¿Está seguro de enviar los signos vitales? Esta acción no puede deshacerse"
        @confirmAction="sendToServerData"></confirmation-alert-component>
    <success-alert-component :id="'nurcpSuccess'" :message="'Información enviada correctamente'"
        :title="'Envío exitoso'"></success-alert-component>
    <error-alert-component :id="'nurcpError'" :errors="errors" :title="'Error al enviar la información'">
    </error-alert-component>
</template>

<script lang="ts" src="./NurseConsultPage.ts"></script>
