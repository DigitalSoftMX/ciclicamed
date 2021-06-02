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
                <div class="tab-pane fade px-3 active show" id="ppConsultas" role="tabpanel" aria-labelledby="ppConsultas-tab">
                    <product-table-component title="Consulta" productCategory="consulta"></product-table-component>
                </div>
                <div class="tab-pane fade px-3" id="ppCirugias" role="tabpanel" aria-labelledby="ppCirugias-tab">
                    <product-table-component title="Cirugías" productCategory="cirugia"></product-table-component>
                </div>
                <div class="tab-pane fade px-3" id="ppHisteroscopia" role="tabpanel" aria-labelledby="ppHisteroscopia-tab">
                    <product-table-component title="Histeroscopía" productCategory="histeroscopia"></product-table-component>
                </div>
                <div class="tab-pane fade px-3" id="ppCiclica" role="tabpanel" aria-labelledby="ppCiclica-tab">
                    <product-table-component title="Cíclica" productCategory="ciclica"></product-table-component>
                </div>
                <div class="tab-pane fade px-3" id="ppImagenologia" role="tabpanel" aria-labelledby="ppImagenologia-tab">
                    <product-table-component title="Imagenología" productCategory="imagenologia"></product-table-component>
                </div>
                <div class="tab-pane fade px-3" id="ppLaboratorio" role="tabpanel" aria-labelledby="ppLaboratorio-tab">
                    <product-table-component title="Laboratorio" productCategory="laboratorio"></product-table-component>
                </div>
                <div class="tab-pane fade px-3" id="ppFarmacia" role="tabpanel" aria-labelledby="ppFarmacia-tab">
                    <product-table-component title="Farmacia" productCategory="farmacia"></product-table-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ProductPage.ts"></script>