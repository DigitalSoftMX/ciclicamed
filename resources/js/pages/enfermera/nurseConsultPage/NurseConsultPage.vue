<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Perfil de usuario" :userData="nurse" role="Enfermera"
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
                    <div v-if="consultData.medicalspecialty_id === 11 || consultData.medicalspecialty_id === 12" class="container-fluid">
                        <div class="card">
                            <div class="card-header">
                                <h4>FUM</h4>
                            </div>
                            <div class="card-body">
                                <input class="form-control form-control-lg" type="date" v-model="fum">
                            </div>
                        </div>
                        <div class="card mt-25">
                            <div class="card-header">
                                <h4>Anotaciones de estudio</h4>
                            </div>
                            <div class="card-body">
                                <div v-for="(order, index) in testOrders" :key="`nurcpa${index}`">
                                    <div class="col-12 mb-25">
                                        <label for="">{{order.annotation}}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div
                                        class="project-top-wrapper project-top-progress d-flex justify-content-between flex-wrap">
                                        <div
                                            class="card project-top-left d-flex flex-wrap justify-content-lg-between justify-content-center">
                                            <div class="">
                                                <ul class="nav justify-items-start nav-pills nav-fill rounded"
                                                    id="mccTab" role="tablist">
                                                    <li class="nav-item px-0">
                                                        <a class="nav-link px-3 py-2 active rounded"
                                                            id="mccHistorialClinico-tab" data-toggle="pill"
                                                            href="#mccHistorialClinico" role="tab"
                                                            aria-controls="mccHistorialClinico"
                                                            aria-selected="true">Historial
                                                        </a>
                                                    </li>
                                                    <li class="nav-item px-0">
                                                        <a class="nav-link px-3 py-2 rounded"
                                                            id="mccCitasSubsecuentes-tab" data-toggle="pill"
                                                            href="#mccCitasSubsecuentes" role="tab"
                                                            aria-controls="mccCitasSubsecuentes"
                                                            aria-selected="false">Cita actual</a>
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
                                                        <input class="form-control form-control-lg" type="date"
                                                            id="cscFUM" v-model="formData.fum">                                                           
                                                    </div>
                                                    <div class="col-12 col-md-3 mb-25 ">
                                                        <label for="cscIMC">IMC (Kg/m&#178;)</label>
                                                        <input class="form-control form-control-lg" type="text"
                                                            id="cscIMC" v-model="formData.imc">
                                                    </div>
                                                    <div class="col-12 col-md-3 mb-25 ">
                                                        <label for="cscPeso">Peso (Kg)</label>
                                                        <input class="form-control form-control-lg" type="text"
                                                            id="cscPeso" v-model="formData.peso">
                                                    </div>
                                                    <div class="col-12 col-md-3 mb-25 ">
                                                        <label for="cscTA">T/A (mmHg)</label>
                                                        <div class="row">
                                                            <input class="col form-control form-control-lg mx-1" type="text"
                                                                id="cscT" v-model="formData.t">
                                                                <label class="d-flex align-items-center">/</label>
                                                            <input class="col form-control form-control-lg mx-1" type="text"
                                                                id="cscA" v-model="formData.a">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-3 mb-25 ">
                                                        <label for="cscFC">FC (lat./min)</label>
                                                        <input class="form-control form-control-lg" type="text"
                                                            id="cscFC" v-model="formData.fc">
                                                    </div>
                                                    <div class="col-12 col-md-3 mb-25 ">
                                                        <label for="cscFR">FR (resp./min)</label>
                                                        <input class="form-control form-control-lg" type="text"
                                                            id="cscFR" v-model="formData.fr">
                                                    </div>
                                                    <div class="col-12 col-md-3 mb-25 ">
                                                        <label for="cscTemperatura">Temperatura (°C)</label>
                                                        <input class="form-control form-control-lg" type="text"
                                                            id="cscTemperatura" v-model="formData.temperatura">
                                                    </div>
                                                </div>
                                                <div class="row mx-0">
                                                    <div class="col-12">
                                                        <label for="cscObservacion">Observaciones</label>
                                                        <textarea 
                                                            class="form-control form-control-lg" 
                                                            id="cscObservacion" cols="30" rows="5"
                                                            v-model="formData.observaciones"></textarea>
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
