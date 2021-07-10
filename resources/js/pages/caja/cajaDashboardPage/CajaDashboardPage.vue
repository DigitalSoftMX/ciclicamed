<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Pagos" :userData="caja" :photo="caja.photo">
    </navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="project-top-wrapper project-top-progress d-flex justify-content-start flex-wrap">
                        <div
                            class="card project-top-left d-flex flex-wrap justify-content-lg-between justify-content-center">
                            <div class="">
                                <ul class="nav justify-items-start nav-pills nav-fill rounded" id="mccTab"
                                    role="tablist">
                                    <li class="nav-item px-0">
                                        <a class="nav-link px-3 py-2 active rounded" id="mccHistorialClinico-tab"
                                            data-toggle="pill" href="#mccHistorialClinico" role="tab"
                                            aria-controls="mccHistorialClinico" aria-selected="true">Pagos faltantes
                                        </a>
                                    </li>
                                    <li class="nav-item px-0">
                                        <a class="nav-link px-3 py-2 rounded" id="mccExpedienteClinico-tab"
                                            data-toggle="pill" href="#mccExpedienteClinico" role="tab"
                                            aria-controls="mccExpedienteClinico" aria-selected="false">Deudas</a>
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
                    </div>
                    <div class="tab-pane fade" id="mccExpedienteClinico" role="tabpanel">
                        <debt-page></debt-page>
                    </div>
                    <div class="tab-pane fade" id="mccEspecialidades" role="tabpanel"
                        aria-labelledby="mccEspecialidades-tab">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CajaDashboardPage.ts"></script>
