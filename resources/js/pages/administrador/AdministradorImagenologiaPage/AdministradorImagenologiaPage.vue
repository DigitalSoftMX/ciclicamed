<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Subir resultados" :userData="administrador" role="Administrador"
        :photo="administrador.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div v-if="!isTestUploadEnabled">
            <test-table-component :role="role" testCategory="imagenologia" testStatus="muestras"
                @onTestUpload="showUploadComponent">
            </test-table-component>
        </div>
        <div v-else>
            <div class="breadcrumb-main p-0">
                <button class="btn btn-primary btn-lg btn-squared" @click="showTableComponent">Regresar</button>
            </div>
            <div class="row mx-0 mt-25">
                <div class="col-12 col-md-3 p-md-0 mb-25 mb-md-0">
                    <consult-patient-profile-component :patientData="testSelected?.patient" role="Imagenologia"
                        :consultNote="testSelected?.consult_scheduled?.consult_reason"
                        @onFinish="showConfirmationAlert">
                    </consult-patient-profile-component>
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
                                                        aria-selected="true">Anotaciones de estudio
                                                    </a>
                                                </li>
                                                <li class="nav-item px-0">
                                                    <a class="nav-link px-3 py-2 rounded" id="mccCitasSubsecuentes-tab"
                                                        data-toggle="pill" href="#mccCitasSubsecuentes" role="tab"
                                                        aria-controls="mccCitasSubsecuentes" aria-selected="false">Subir
                                                        resultados</a>
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
                                    <div class="card">
                                        <div class="card-header">
                                            <h4>Anotaciones de estudio</h4>
                                        </div>
                                        <div class="card-body">
                                            <div v-for="(order, index) in testOrders" :key="`imatep${index}`">
                                                <div class="col-12 mb-25">
                                                    <label for="">{{order.annotation}}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="mccCitasSubsecuentes" role="tabpanel"
                                    aria-labelledby="mccCitasSubsecuentes-tab">
                                    <test-upload-component :productCode="productCode" :uploadFile="sendToServer" @afterSendData="resetSendToServer" :testID="testSelected.id" :role="role"></test-upload-component>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <confirmation-alert-component id="itpConfirmation"
        title="¿Está seguro de enviar los resultados de este estudio? Esta acción no puede deshacerse"
        @confirmAction="sendToServerData"></confirmation-alert-component>
</template>

<script lang="ts" src="./AdministradorImagenologiaPage.ts"></script>
