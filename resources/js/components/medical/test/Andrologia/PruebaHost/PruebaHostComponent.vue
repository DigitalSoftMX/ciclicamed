<template>
    <div class="card">
        <div class="card-header">
            <h3>Prueba de HOST</h3>
        </div>
        <div class="card-body row mx-0">

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                
                <div class="col-12 mb-25 card card-default p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#phocObservaciones" aria-expanded="true"
                            aria-controls="phocObservaciones">
                            <i class="la la-angle-right"></i>
                            Observaciones
                        </a>
                    </div>
                    <div id="phocObservaciones" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div class="col-12 card mb-25 shadow-none p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Fumador?</h6>
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.observaciones.fumador.check" :checked="formData.observaciones.fumador.check"
                                        id="phocFumador">
                                    <label class="custom-control-label" for="phocFumador"></label>
                                </div>
                            </div>
                            <div class="card-body" v-if="formData.observaciones.fumador.check">
                                <label for="phocFumadorFrecuencia">Frecuencia</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" v-model="formData.observaciones.fumador.description"
                                    id="phocFumadorFrecuencia">
                            </div>
                        </div>

                        <div class="col-12 card mb-25 shadow-none p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Medicamentos?
                                </h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.observaciones.medicamentos.check" :checked="formData.observaciones.medicamentos.check"
                                        id="phocMedicamentos">
                                    <label class="custom-control-label" for="phocMedicamentos"></label>
                                </div>
                            </div>
                            <div class="card-body" v-if="formData.observaciones.medicamentos.check">
                                <label for="phocMedicamentosCuales">¿Cúales?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" v-model="formData.observaciones.medicamentos.description"
                                    id="phocMedicamentosCuales">
                            </div>
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocDiasAbstinencia">Días de abstinencia sexual</label>
                            <input class="form-control form-control-lg" type="text" id="phocDiasAbstinencia" :disabled="disabled" v-model="formData.observaciones.diasAbstinencia">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocModoRecoleccion">Modo de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="phocModoRecoleccion" :disabled="disabled" v-model="formData.observaciones.modoRecoleccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocHoraRecoleccion">Hora de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="phocHoraRecoleccion" :disabled="disabled" v-model="formData.observaciones.horaRecoleccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocHoraProcesado">Hora de procesado</label>
                            <input class="form-control form-control-lg" type="text" id="phocHoraProcesado" :disabled="disabled" v-model="formData.observaciones.horaProcesado">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#phocAnalisisMicroscopico" aria-expanded="true"
                            aria-controls="phocAnalisisMicroscopico">
                            <i class="la la-angle-right"></i>
                            Análisis microscópico
                        </a>
                    </div>
                    <div id="phocAnalisisMicroscopico" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div
                            class="col-12 col-md-4 custom-control custom-switch switch-primary switch-md align-self-center justify-items-center justify-content-center">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.analisisMicroscopico.coaguloInicial" :checked="formData.analisisMicroscopico.coaguloInicial"
                                id="phocCoagulo">
                            <label class="custom-control-label" for="phocCoagulo">Coágulo inicial</label>
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocLicuefaccion">Licuefacción</label>
                            <input class="form-control form-control-lg" type="text" id="phocLicuefaccion" :disabled="disabled" v-model="formData.analisisMicroscopico.licuefaccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocViscosidad">Viscosidad</label>
                            <input class="form-control form-control-lg" type="text" id="phocViscosidad" :disabled="disabled" v-model="formData.analisisMicroscopico.viscosidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocAspecto">Aspecto</label>
                            <input class="form-control form-control-lg" type="text" id="phocAspecto" :disabled="disabled" v-model="formData.analisisMicroscopico.aspecto">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocVolumen">Volumen</label>
                            <input class="form-control form-control-lg" type="text" id="phocVolumen" :disabled="disabled" v-model="formData.analisisMicroscopico.volumen">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocPH">PH</label>
                            <input class="form-control form-control-lg" type="text" id="phocPH" :disabled="disabled" v-model="formData.analisisMicroscopico.ph">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="phocHOST">HOST</label>
                            <input class="form-control form-control-lg" type="text" id="phocHOST" :disabled="disabled" v-model="formData.analisisMicroscopico.host">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 p-0">
                <label for="phocObservacionesAdicionales">Observaciones adicionales</label>
                <textarea class="form-control form-control-lg" rows="5" id="phocObservacionesAdicionales" :disabled="disabled" v-model="formData.observacionesAdicionales"></textarea>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./PruebaHostComponent.ts"></script>
