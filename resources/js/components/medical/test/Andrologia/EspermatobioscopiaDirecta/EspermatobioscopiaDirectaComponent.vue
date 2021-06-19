<template>
    <div class="card">
        <div class="card-header">
            <h3>Espermatobioscopia directa</h3>
        </div>
        <div class="card-body row mx-0">

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                
                <div class="col-12 mb-25 card card-default p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#ebdcObservaciones" aria-expanded="true"
                            aria-controls="ebdcObservaciones">
                            <i class="la la-angle-right"></i>
                            Observaciones
                        </a>
                    </div>
                    <div id="ebdcObservaciones" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div class="col-12 card mb-25 shadow-none p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Fumador?</h6>
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.observaciones.fumador.check" :checked="formData.observaciones.fumador.check"
                                        id="ebdcFumador">
                                    <label class="custom-control-label" for="ebdcFumador"></label>
                                </div>
                            </div>
                            <div class="card-body" v-if="formData.observaciones.fumador.check">
                                <label for="ebdcFumadorFrecuencia">Frecuencia</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" v-model="formData.observaciones.fumador.description"
                                    id="ebdcFumadorFrecuencia">
                            </div>
                        </div>

                        <div class="col-12 card mb-25 shadow-none p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Medicamentos?
                                </h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.observaciones.medicamentos.check" :checked="formData.observaciones.medicamentos.check"
                                        id="ebdcMedicamentos">
                                    <label class="custom-control-label" for="ebdcMedicamentos"></label>
                                </div>
                            </div>
                            <div class="card-body" v-if="formData.observaciones.medicamentos.check">
                                <label for="ebdcMedicamentosCuales">¿Cúales?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" v-model="formData.observaciones.medicamentos.description"
                                    id="ebdcMedicamentosCuales">
                            </div>
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcDiasAbstinencia">Días de abstinencia sexual</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcDiasAbstinencia" :disabled="disabled" v-model="formData.observaciones.diasAbstinenciaSexual">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcModoRecoleccion">Modo de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcModoRecoleccion" :disabled="disabled" v-model="formData.observaciones.modoRecoleccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcHoraRecoleccion">Hora de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcHoraRecoleccion" :disabled="disabled" v-model="formData.observaciones.horaRecoleccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcHoraProcesado">Hora de procesado</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcHoraProcesado" :disabled="disabled" v-model="formData.observaciones.horaProcesado">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 card p-0 rounded border shadow-none">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#ebdcAnalisisMacroscopico" aria-expanded="true"
                            aria-controls="ebdcAnalisisMacroscopico">
                            <i class="la la-angle-right"></i>
                            Análisis macroscópico
                        </a>
                    </div>
                    <div id="ebdcAnalisisMacroscopico" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div
                            class="col-12 col-md-4 custom-control custom-switch switch-primary switch-md align-self-center justify-items-center justify-content-center">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.analisisMacroscopico.coaguloInicial" :checked="formData.analisisMacroscopico.coaguloInicial"
                                id="ebdcCoaguloInicial">
                            <label class="custom-control-label" for="ebdcCoaguloInicial">Coágulo inicial</label>
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcLicuefaccion">Licuefacción</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcLicuefaccion" :disabled="disabled" v-model="formData.analisisMacroscopico.licuefaccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcViscosidad">Viscosidad</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcViscosidad" :disabled="disabled" v-model="formData.analisisMacroscopico.viscosidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcAspecto">Aspecto</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcAspecto" :disabled="disabled" v-model="formData.analisisMacroscopico.aspecto">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcVolumen">Volumen</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcVolumen" :disabled="disabled" v-model="formData.analisisMacroscopico.volumen">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcPH">PH</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcPH" :disabled="disabled" v-model="formData.analisisMacroscopico.ph">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 card p-0 rounded border shadow-none">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#ebdcAnalisisMicroscopico" aria-expanded="true"
                            aria-controls="ebdcAnalisisMicroscopico">
                            <i class="la la-angle-right"></i>
                            Análisis microscópico
                        </a>
                    </div>
                    <div id="ebdcAnalisisMicroscopico" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcConcentracion">Concentración</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcConcentracion" :disabled="disabled" v-model="formData.analisisMicroscopico.concentracion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcConcentracionTotal">Concentración total</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcConcentracionTotal" :disabled="disabled" v-model="formData.analisisMicroscopico.concentracionTotal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcMovilidadA">Movilidad A</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcMovilidadA" :disabled="disabled" v-model="formData.analisisMicroscopico.movilidad.a">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcMovilidadB">Movilidad B</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcMovilidadB" :disabled="disabled" v-model="formData.analisisMicroscopico.movilidad.b">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcMovilidadC">Movilidad C</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcMovilidadC" :disabled="disabled" v-model="formData.analisisMicroscopico.movilidad.c">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcMovilidadD">Movilidad D</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcMovilidadD" :disabled="disabled" v-model="formData.analisisMicroscopico.movilidad.d">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcIndiceMovilidad">Índice de movilidad (A+B)</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcIndiceMovilidad" disabled :value="indiceMovilidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcIndiceMovilidadTotal">Movilidad total (A+B+C)</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcIndiceMovilidadTotal" disabled :value="indiceMovilidadTotal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcMorfologia">Morfología</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcMorfologia" :disabled="disabled" v-model="formData.analisisMicroscopico.morfologia">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcDefectosCabeza">Defectos de cabeza</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcDefectosCabeza" :disabled="disabled" v-model="formData.analisisMicroscopico.defectosCabeza">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcDefectosPieza">Defectos de pieza media</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcDefectosPieza" :disabled="disabled" v-model="formData.analisisMicroscopico.defectosPiezaMedia">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcDefectosCola">Defectos de cola</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcDefectosCola" :disabled="disabled" v-model="formData.analisisMicroscopico.defectosCola">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 card p-0 rounded border shadow-none">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#ebdcCelularidad" aria-expanded="true"
                            aria-controls="ebdcCelularidad">
                            <i class="la la-angle-right"></i>
                            Celularidad
                        </a>
                    </div>
                    <div id="ebdcCelularidad" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcEritrocitos">Eritrocitos</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcEritrocitos" :disabled="disabled" v-model="formData.celularidad.eritrocitos">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcLeucocitos">Leucocitos</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcLeucocitos" :disabled="disabled" v-model="formData.celularidad.leucocitos">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcInmaduras">Inmaduras</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcInmaduras" :disabled="disabled" v-model="formData.celularidad.inmaduras">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcEpiteliales">Epiteliales</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcEpiteliales" :disabled="disabled" v-model="formData.celularidad.epiteliales">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcBacterias">Bacterias</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcBacterias" :disabled="disabled" v-model="formData.celularidad.bacterias">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcCristales">Cristales</label>
                            <input class="form-control form-control-lg" type="text" id="ebdcCristales" :disabled="disabled" v-model="formData.celularidad.cristales">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcAglutinacion">Aglutinación / Agregación</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcAglutinacion" :disabled="disabled" v-model="formData.celularidad.aglutinacion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="ebdcResiduos">Residuos / Detritos</label>
                            <input class="form-control form-control-lg" type="number" id="ebdcResiduos" :disabled="disabled" v-model="formData.celularidad.residuos">
                        </div>

                        <div class="col-12 card shadow-none p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">Si la movilidad está disminuida, se reporta</h6>
                            </div>
                            <div class="card-body row mx-0">
                                <div class="col-12 col-md-4 mb-25 ">
                                    <label for="ebdcViabilidad">Viabilidad</label>
                                    <input class="form-control form-control-lg" type="number" id="ebdcViabilidad" v-model="formData.movilidadDisminuida.viabilidad"
                                        :disabled="disabled">
                                </div>
                                <div class="col-12">
                                    <label for="ebdcObservacionesAdicionales">Observaciones adicionales</label>
                                    <textarea class="form-control form-control-lg" rows="3" id="ebdcObservacionesAdicionales" v-model="formData.movilidadDisminuida.observaciones"
                                        :disabled="disabled"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./EspermatobioscopiaDirectaComponent.ts"></script>
