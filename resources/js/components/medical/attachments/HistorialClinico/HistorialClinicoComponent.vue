<template>
    <div class="card">
        <div class="tab-wrapper">
            <div class="atbd-tab tab-horizontal">
                <div class="card-header p-0 hcc-minHeight d-inline">
                    <ul class="nav nav-pills nav-fill rounded" role="tablist">
                        <li class="nav-item border-bottom">
                            <a class="nav-link rounded px-2 py-3 active" id="tab-v-1-tab" data-toggle="tab"
                                href="#tab-v-1" role="tab" aria-controls="tab-v-1" aria-selected="true">
                                Heredo familiares</a>
                        </li>
                        <li class="nav-item border-bottom">
                            <a class="nav-link rounded px-2 py-3" id="tab-v-2-tab" data-toggle="tab" href="#tab-v-2"
                                role="tab" aria-controls="tab-v-2" aria-selected="false">Personales no patológicos</a>
                        </li>
                        <li class="nav-item border-bottom">
                            <a class="nav-link rounded px-2 py-3" id="tab-v-3-tab" data-toggle="tab" href="#tab-v-3"
                                role="tab" aria-controls="tab-v-3" aria-selected="false">Personales patológicos</a>
                        </li>
                        <li class="nav-item border-bottom">
                            <a class="nav-link rounded px-2 py-3" id="tab-v-4-tab" data-toggle="tab" href="#tab-v-4"
                                role="tab" aria-controls="tab-v-4" aria-selected="false">Gineco-obstetros</a>
                        </li>
                        <li class="nav-item border-bottom">
                            <a class="nav-link rounded px-2 py-3" id="tab-v-5-tab" data-toggle="tab" href="#tab-v-5"
                                role="tab" aria-controls="tab-v-5" aria-selected="false">
                                Tratamiento</a>
                        </li>
                    </ul>
                </div>

                <div class="tab-content card-body">

                    <!-- Heredo Familiares -->
                    <div class="tab-pane fade active show" id="tab-v-1" role="tabpanel" aria-labelledby="tab-v-1-tab">
                        <heredo-familiares-component v-model="formData.heredoFamiliares" :disabled="disabled">
                        </heredo-familiares-component>
                    </div>

                    <!-- Personales no patologicos -->
                    <div class="tab-pane fade" id="tab-v-2" role="tabpanel" aria-labelledby="tab-v-2-tab">
                        <personales-no-patologicos-component v-model="formData.personalesNoPatologicos"
                            :disabled="disabled"></personales-no-patologicos-component>
                    </div>

                    <!-- Personales patologicos -->
                    <div class="tab-pane fade" id="tab-v-3" role="tabpanel" aria-labelledby="tab-v-3-tab">
                        <personales-patologicos-component v-model="formData.personalesPatologicos" :disabled="disabled">
                        </personales-patologicos-component>
                    </div>

                    <!-- Gineco-obstetros -->
                    <div class="tab-pane fade" id="tab-v-4" role="tabpanel" aria-labelledby="tab-v-4-tab">
                        <gineco-obstetros-component v-model="formData.ginecoObstetros" :disabled="disabled">
                        </gineco-obstetros-component>
                    </div>

                    <div class="tab-pane fade" id="tab-v-5" role="tabpanel" aria-labelledby="tab-v-5-tab">
                        <tratamiento-component v-model="formData.tratamientos" :disabled="disabled">
                        </tratamiento-component>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer" v-if="edit">
            <div class="button-group d-flex justify-content-end">
                <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2" @click="updateHistorial">
                    Actualizar datos
                </button>
            </div>
        </div>
    </div>

    <success-alert-component id="hisccSuccess" title="Historial actualizado"
        message="Historial actualizado correctamente"></success-alert-component>
    <error-alert-component :id="'hisccError'" :errors="errors" :title="'Error al actualizar el historial'">
    </error-alert-component>
</template>

<script lang="ts" src="./HistorialClinicoComponent.ts"></script>

<style src="./HistorialClinicoComponent.css"></style>
