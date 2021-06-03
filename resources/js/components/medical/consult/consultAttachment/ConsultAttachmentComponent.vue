<template>
    <div class="row">
        <div class="col-12">
            <div class="project-top-wrapper project-top-progress d-flex">
                <div class="card col-12 p-0 project-top-left d-flex flex-wrap">
                    <div class="card-header">
                        <h3>Especialidades</h3>
                    </div>
                    <div class="card-body">
                        <ul class="nav justify-items-start nav-pills nav-fill rounded" id="mccdTab" role="tablist">
                            <li class="nav-item px-0">
                                <a class="nav-link px-3 py-2 rounded" id="mccdBiologiaReproduccion-tab"
                                    data-toggle="pill" href="#mccdBiologiaReproduccion" role="tab"
                                    aria-controls="mccdBiologiaReproduccion" aria-selected="false">Biología de la
                                    reproducción</a>
                            </li>
                            <li class="nav-item px-0">
                                <a class="nav-link px-3 py-2 rounded" id="mccdCirugiaEndoscopica-tab" data-toggle="pill"
                                    href="#mccdCirugiaEndoscopica" role="tab" aria-controls="mccdCirugiaEndoscopica"
                                    aria-selected="false">Cirugía
                                    endoscópica</a>
                            </li>
                            <li class="nav-item px-0">
                                <a class="nav-link px-3 py-2 rounded" id="mccdClimaterioSaludOsea-tab" data-toggle="pill"
                                    href="#mccdClimaterioSaludOsea" role="tab" aria-controls="mccdClimaterioSaludOsea"
                                    aria-selected="false">Climaterío y salud
                                    ósea</a>
                            </li>
                            <li class="nav-item px-0">
                                <a class="nav-link px-3 py-2 rounded" id="mccdColposcopia-tab" data-toggle="pill"
                                    href="#mccdColposcopia" role="tab" aria-controls="mccdColposcopia"
                                    aria-selected="false">Colposcopía</a>
                            </li>
                            <li class="nav-item px-0">
                                <a class="nav-link px-3 py-2 rounded" id="mccdMaternoFetal-tab" data-toggle="pill"
                                    href="#mccdMaternoFetal" role="tab" aria-controls="mccdMaternoFetal"
                                    aria-selected="false">Materno fetal</a>
                            </li>
                            <li class="nav-item px-0">
                                <a class="nav-link px-3 py-2 rounded" id="mccdOncologia-tab" data-toggle="pill"
                                    href="#mccdOncologia" role="tab" aria-controls="mccdOncologia"
                                    aria-selected="false">Oncología</a>
                            </li>
                            <li class="nav-item px-0">
                                <a class="nav-link px-3 py-2 rounded" id="mccdUroginecologia-tab" data-toggle="pill"
                                    href="#mccdUroginecologia" role="tab" aria-controls="mccdUroginecologia"
                                    aria-selected="false">Uroginecología</a>
                            </li>
                            <li class="nav-item px-0">
                                <a class="nav-link px-3 py-2 rounded" id="mccdNutricionGeneral-tab" data-toggle="pill"
                                    href="#mccdNutricionPerinatal" role="tab" aria-controls="mccdNutricionPerinatal"
                                    aria-selected="false">Nutrición perinatal</a>
                            </li>
                            <li class="nav-item px-0">
                                <a class="nav-link px-3 py-2 rounded" id="mccdNutricionGeneral-tab" data-toggle="pill"
                                    href="#mccdNutricionGeneral" role="tab" aria-controls="mccdNutricionGeneral"
                                    aria-selected="false">Nutrición general</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Tab Menu End -->
    <div class="projects-tab-content projects-tab-content--progress">
        <div class="tab-content mt-25" id="mccd">
            <div class="tab-pane fade" id="mccdUroginecologia" role="tabpanel" aria-labelledby="mccdUroginecologia-tab">
                <uroginecologia-component></uroginecologia-component>
            </div>
            <div class="tab-pane fade" id="mccdClimaterioSaludOsea" role="tabpanel"
                aria-labelledby="mccdClimaterioSaludOsea-tab">
                <climaterio-salud-osea-component></climaterio-salud-osea-component>
            </div>
            <div class="tab-pane fade" id="mccdMaternoFetal" role="tabpanel" aria-labelledby="mccdMaternoFetal-tab">
                <materno-fetal-component></materno-fetal-component>
            </div>
            <div class="tab-pane fade" id="mccdBiologiaReproduccion" role="tabpanel"
                aria-labelledby="mccdBiologiaReproduccion-tab">
                <biologia-reproduccion-component></biologia-reproduccion-component>
            </div>
            <div class="tab-pane fade" id="mccdCirugiaEndoscopica" role="tabpanel"
                aria-labelledby="mccdCirugiaEndoscopica-tab">
                <cirugia-endoscopica-component></cirugia-endoscopica-component>
            </div>
            <div class="tab-pane fade" id="mccdOncologia" role="tabpanel" aria-labelledby="mccdOncologia-tab">
                <oncologia-component></oncologia-component>
            </div>
            <div class="tab-pane fade" id="mccdColposcopia" role="tabpanel" aria-labelledby="mccdColposcopia-tab">
                <colposcopia-component></colposcopia-component>
            </div>
            <div class="tab-pane fade" id="mccdNutricionPerinatal" role="tabpanel" aria-labelledby="mccdNutricionPerinatal-tab">
                <nutricion-perinatal-component></nutricion-perinatal-component>
            </div>
            <div class="tab-pane fade" id="mccdNutricionGeneral" role="tabpanel" aria-labelledby="mccdNutricionGeneral-tab">
                <nutricion-general-component></nutricion-general-component>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ConsultAttachmentComponent.ts"></script>
