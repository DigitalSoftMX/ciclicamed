<template>
    <div class="card">
        <div class="tab-wrapper">
            <div class="atbd-tab tab-horizontal">
                <div class="card-header p-0 hcc-minHeight d-inline">
                    <ul class="nav nav-pills nav-fill rounded" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link rounded px-2 py-3 active" id="tab-v-1-tab" data-toggle="tab" href="#tab-v-1" role="tab"
                                aria-controls="tab-v-1" aria-selected="true">Heredo familiares</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded px-2 py-3" id="tab-v-2-tab" data-toggle="tab" href="#tab-v-2" role="tab"
                                aria-controls="tab-v-2" aria-selected="false">Personales no patológicos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded px-2 py-3" id="tab-v-3-tab" data-toggle="tab" href="#tab-v-3" role="tab"
                                aria-controls="tab-v-3" aria-selected="false">Personales patológicos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded px-2 py-3" id="tab-v-4-tab" data-toggle="tab" href="#tab-v-4" role="tab"
                                aria-controls="tab-v-4" aria-selected="false">Gineco-obstetros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded px-2 py-3" id="tab-v-5-tab" data-toggle="tab" href="#tab-v-5" role="tab"
                                aria-controls="tab-v-5" aria-selected="false">Tratamiento</a>
                        </li>
                    </ul>
                </div>

                <div class="tab-content card-body">

                    <!-- Heredo Familiares -->
                    <div class="tab-pane fade active show" id="tab-v-1" role="tabpanel" aria-labelledby="tab-v-1-tab">
                        <heredo-familiares-component></heredo-familiares-component>
                    </div>

                    <!-- Personales no patologicos -->
                    <div class="tab-pane fade" id="tab-v-2" role="tabpanel" aria-labelledby="tab-v-2-tab">
                        <personales-no-patologicos-component></personales-no-patologicos-component>
                    </div>

                    <!-- Personales patologicos -->
                    <div class="tab-pane fade" id="tab-v-3" role="tabpanel" aria-labelledby="tab-v-3-tab">
                        <personales-patologicos-component></personales-patologicos-component>
                    </div>

                    <!-- Gineco-obstetros -->
                    <div class="tab-pane fade" id="tab-v-4" role="tabpanel" aria-labelledby="tab-v-4-tab">
                        <gineco-obstetros-component></gineco-obstetros-component>
                    </div>

                    <div class="tab-pane fade" id="tab-v-5" role="tabpanel" aria-labelledby="tab-v-5-tab">
                        <tratamiento-component></tratamiento-component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./HistorialClinicoComponent.ts"></script>

<style src="./HistorialClinicoComponent.css"></style>