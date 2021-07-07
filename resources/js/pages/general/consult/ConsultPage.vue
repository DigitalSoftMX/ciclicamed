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
                                    <a class="nav-link active" id="ap-overview-tab" data-toggle="pill"
                                        href="#ap-overview" role="tab" aria-controls="ap-overview"
                                        aria-selected="true">Paciente</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="timeline-tab" data-toggle="pill" href="#timeline" role="tab"
                                        aria-controls="timeline" aria-selected="false">Agenda</a>
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
                <div class="tab-pane fade active show" id="ap-overview" role="tabpanel">
                    <consult-component></consult-component>
                </div>
                <div class="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                    <schedule-component :userCategory="userCategory" :roles="roles" :employeeID="employeeID"></schedule-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ConsultPage.ts"></script>
