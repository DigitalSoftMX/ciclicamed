<template>
    <div class="shadow-none card">
        <div class="shadow-none card-header">
            <h3>Capacitación espermática</h3>
        </div>
        <div class="shadow-none card-body row mx-0">

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                
                <div class="col-12 mb-25 card card-default p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#prucacoObservaciones" aria-expanded="true"
                            aria-controls="prucacoObservaciones">
                            <i class="la la-angle-right"></i>
                            Observaciones
                        </a>
                    </div>
                    <div id="prucacoObservaciones" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div class="col-12 card mb-25 shadow-none p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Fumador?</h6>
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.observaciones.fumador.check" :checked="formData.observaciones.fumador.check"
                                        id="prucacoFumador">
                                    <label class="custom-control-label" for="prucacoFumador"></label>
                                </div>
                            </div>
                            <div class="card-body" v-if="formData.observaciones.fumador.check">
                                <label for="prucacoFumadorFrecuencia">Frecuencia</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" v-model="formData.observaciones.fumador.description"
                                    id="prucacoFumadorFrecuencia">
                            </div>
                        </div>

                        <div class="col-12 card mb-25 shadow-none p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Medicamentos?
                                </h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.observaciones.medicamentos.check" :checked="formData.observaciones.medicamentos.check"
                                        id="prucacoMedicamentos">
                                    <label class="custom-control-label" for="prucacoMedicamentos"></label>
                                </div>
                            </div>
                            <div class="card-body" v-if="formData.observaciones.medicamentos.check">
                                <label for="prucacoMedicamentosCuales">¿Cúales?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" v-model="formData.observaciones.medicamentos.description"
                                    id="prucacoMedicamentosCuales">
                            </div>
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoDiasAbstinencia">Días de abstinencia sexual</label>
                            <input class="form-control form-control-lg" type="text" id="prucacoDiasAbstinencia" :disabled="disabled" v-model="formData.observaciones.diasAbstinenciaSexual">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoModoRecoleccion">Modo de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="prucacoModoRecoleccion" :disabled="disabled" v-model="formData.observaciones.modoRecoleccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoHoraRecoleccion">Hora de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="prucacoHoraRecoleccion" :disabled="disabled" v-model="formData.observaciones.horaRecoleccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoHoraProcesado">Hora de procesado</label>
                            <input class="form-control form-control-lg" type="text" id="prucacoHoraProcesado" :disabled="disabled" v-model="formData.observaciones.horaProcesado">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 shadow-none card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 shadow-none card p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#prucacoAnalisisPreCapacitacion" aria-expanded="true"
                            aria-controls="prucacoAnalisisPreCapacitacion">
                            <i class="la la-angle-right"></i>
                            Análisis pre-capacitación
                        </a>
                    </div>
                    <div id="prucacoAnalisisPreCapacitacion" class="atbd-collapse-item__body collapse shadow-none card-body row mx-0">

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreLicuefaccion">Licuefacción</label>
                            <input class="form-control form-control-lg" type="text" id="prucacoPreLicuefaccion" :disabled="disabled" v-model="formData.analisisPreCapacitacion.licuefaccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreViscosidad">Viscosidad</label>
                            <input class="form-control form-control-lg" type="text" id="prucacoPreViscosidad" :disabled="disabled" v-model="formData.analisisPreCapacitacion.viscosidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreAspecto">Aspecto</label>
                            <input class="form-control form-control-lg" type="text" id="prucacoPreAspecto" :disabled="disabled" v-model="formData.analisisPreCapacitacion.aspecto">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreVolumen">Volumen</label>
                            <input class="form-control form-control-lg" type="text" id="prucacoPreVolumen" :disabled="disabled" v-model="formData.analisisPreCapacitacion.volumen">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreConcentracion">Concentración</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPreConcentracion" :disabled="disabled" v-model="formData.analisisPreCapacitacion.concentracion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreConcentracionTotal">Concentración total</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPreConcentracionTotal" :disabled="disabled" v-model="formData.analisisPreCapacitacion.concentracionTotal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreMovilidadA">Movilidad A</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPreMovilidadA" :disabled="disabled" v-model="formData.analisisPreCapacitacion.movilidad.a">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreMovilidadB">Movilidad B</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPreMovilidadB" :disabled="disabled" v-model="formData.analisisPreCapacitacion.movilidad.b">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreMovilidadC">Movilidad C</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPreMovilidadC" :disabled="disabled" v-model="formData.analisisPreCapacitacion.movilidad.c">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreMovilidadD">Movilidad D</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPreMovilidadD" :disabled="disabled" v-model="formData.analisisPreCapacitacion.movilidad.d">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreIndiceMovilidad">Índice de movilidad (A+B)</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPreIndiceMovilidad" disabled :value="indicePreMovilidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreMovilidadTotal">Movilidad total (A+B+C)</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPreMovilidadTotal" disabled :value="indicePreMovilidadTotal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPreMorfologia">Morfología</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPreMorfologia" :disabled="disabled" v-model="formData.analisisPreCapacitacion.morfologia">
                        </div>

                        <div class="col-12">
                            <label for="prucacoPreObservaciones">Observaciones</label>
                            <textarea class="form-control form-control-lg" rows="3" id="prucacoPreObservaciones" :disabled="disabled" v-model="formData.analisisPreCapacitacion.observaciones"></textarea>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 shadow-none card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 shadow-none card p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#prucacoPostCapacitacion" aria-expanded="true"
                            aria-controls="prucacoPostCapacitacion">
                            <i class="la la-angle-right"></i>
                            Análisis post-capacitación
                        </a>
                    </div>
                    <div id="prucacoPostCapacitacion" class="atbd-collapse-item__body collapse shadow-none card-body row mx-0">

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPostVolumen">Volumen final</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPostVolumen" :disabled="disabled" v-model="formData.analisisPostCapacitacion.volumenFinal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPostConcentracion">Concentración</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPostConcentracion" :disabled="disabled" v-model="formData.analisisPostCapacitacion.concentracion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPostMovilidadA">Movilidad A</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPostMovilidadA" :disabled="disabled" v-model="formData.analisisPostCapacitacion.movilidad.a">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPostMovilidadB">Movilidad B</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPostMovilidadB" :disabled="disabled" v-model="formData.analisisPostCapacitacion.movilidad.b">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPostMovilidadC">Movilidad C</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPostMovilidadC" :disabled="disabled" v-model="formData.analisisPostCapacitacion.movilidad.c">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPostMovilidadD">Movilidad D</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPostMovilidadD" :disabled="disabled" v-model="formData.analisisPostCapacitacion.movilidad.d">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPostIndiceMovilidad">Índice de movilidad (A+B)</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPostIndiceMovilidad" disabled :value="indicePostMovilidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPostMovilidadTotal">Movilidad total (A+B+C)</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPostMovilidadTotal" disabled :value="indicePostMovilidadTotal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="prucacoPostMorfologia">Morfología</label>
                            <input class="form-control form-control-lg" type="number" id="prucacoPostMorfologia" :disabled="disabled" v-model="formData.analisisPostCapacitacion.morfologia">
                        </div>

                        <div class="col-12">
                            <label for="prucacoPostObservaciones">Observaciones</label>
                            <textarea class="form-control form-control-lg" rows="3" id="prucacoPostObservaciones" :disabled="disabled" v-model="formData.analisisPostCapacitacion.observaciones"></textarea>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./PruebaCapacitacionComponent.ts"></script>
