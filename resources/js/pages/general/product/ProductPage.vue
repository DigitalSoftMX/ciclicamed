<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="project-top-wrapper project-top-progress d-flex justify-content-between flex-wrap m-0">
                    <div
                        class="project-top-left d-flex flex-wrap justify-content-lg-between justify-content-center m-0">
                        <div class="project-tap global-shadow order-lg-1 order-2 my-10">
                            <ul class="nav px-1" id="ap-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="ppConsultas-tab" data-toggle="pill" href="#ppConsultas" role="tab"
                                        aria-controls="ppConsultas" aria-selected="true">Consultas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="ppCirugias-tab" data-toggle="pill" href="#ppCirugias" role="tab"
                                        aria-controls="ppCirugias" aria-selected="false">Cirugías</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="ppHisteroscopia-tab" data-toggle="pill" href="#ppHisteroscopia" role="tab"
                                        aria-controls="ppHisteroscopia" aria-selected="false">Histeroscopía</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="ppCiclica-tab" data-toggle="pill" href="#ppCiclica" role="tab"
                                        aria-controls="ppCiclica" aria-selected="false">Cíclica</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="ppImagenologia-tab" data-toggle="pill" href="#ppImagenologia" role="tab"
                                        aria-controls="ppImagenologia" aria-selected="false">Imagenología</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="ppLaboratorio-tab" data-toggle="pill" href="#ppLaboratorio" role="tab"
                                        aria-controls="ppLaboratorio" aria-selected="false">Laboratorio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="ppFarmacia-tab" data-toggle="pill" href="#ppFarmacia" role="tab"
                                        aria-controls="ppFarmacia" aria-selected="false">Farmacia</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Tab Menu End -->
        <div class="projects-tab-content projects-tab-content--progress">
            <div class="tab-content mt-25" id="ap-tabContent">
                <div class="tab-pane fade active show" id="ppConsultas" role="tabpanel" aria-labelledby="ppConsultas-tab">
                    <product-table-component id="Consulta" title="Consulta" productCategory="consulta" :enableActions="enableActionOptions"></product-table-component>
                </div>
                <div class="tab-pane fade" id="ppCirugias" role="tabpanel" aria-labelledby="ppCirugias-tab">
                    <product-table-component title="Cirugía" productCategory="cirugia" :enableActions="enableActionOptions"></product-table-component>
                </div>
                <div class="tab-pane fade" id="ppHisteroscopia" role="tabpanel" aria-labelledby="ppHisteroscopia-tab">
                    <product-table-component id="Histeroscopia" title="Histeroscopía" productCategory="histeroscopia" :enableActions="enableActionOptions"></product-table-component>
                </div>
                <div class="tab-pane fade" id="ppCiclica" role="tabpanel" aria-labelledby="ppCiclica-tab">
                    <product-table-component id="Ciclica" title="Cíclica" productCategory="ciclica" :enableActions="enableActionOptions"></product-table-component>
                </div>
                <div class="tab-pane fade" id="ppImagenologia" role="tabpanel" aria-labelledby="ppImagenologia-tab">
                    <product-table-component id="Imagenologia" title="Imagenología" productCategory="imagenologia" :enableActions="enableActionOptions"></product-table-component>
                </div>
                <div class="tab-pane fade" id="ppLaboratorio" role="tabpanel" aria-labelledby="ppLaboratorio-tab">
                    <product-table-component id="Laboratorio" title="Laboratorio" productCategory="laboratorio" :enableActions="enableActionOptions"></product-table-component>
                </div>
                <div class="tab-pane fade" id="ppFarmacia" role="tabpanel" aria-labelledby="ppFarmacia-tab">
                    <product-table-component id="Farmacia" title="Farmacia" productCategory="farmacia" :enableActions="enableActionOptions"></product-table-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ProductPage.ts"></script>