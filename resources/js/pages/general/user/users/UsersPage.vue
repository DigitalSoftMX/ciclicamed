<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="project-top-wrapper project-top-progress d-flex justify-content-between flex-wrap m-0">
                    <div
                        class="project-top-left d-flex flex-wrap justify-content-lg-between justify-content-center m-0">
                        <div class="project-tap global-shadow order-lg-1 order-2 my-10">
                            <ul class="nav px-1" id="upTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="upPacienteTab" data-toggle="pill"
                                        href="#upPacienteOverview" role="tab" aria-controls="upPacienteOverview"
                                        aria-selected="true">Pacientes</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="upEmpleadoTab" data-toggle="pill" href="#upEmpleadoOverview" role="tab"
                                        aria-controls="upEmpleadoOverview" aria-selected="false">Empleados</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Tab Menu End -->
        <div class="projects-tab-content projects-tab-content--progress">
            <div class="tab-content mt-25" id="upTabContent">
                <div class="tab-pane fade px-3 active show" id="upPacienteOverview" role="tabpanel">
                    <patients-table-component></patients-table-component>
                </div>
                <div class="tab-pane fade px-3" id="upEmpleadoOverview" role="tabpanel">
                    <employees-table-component></employees-table-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UsersPage.ts"></script>
