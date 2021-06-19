<template>
    <div class="shadow-none card">
        <div class="shadow-none card-header">
            <h3>Inseminación artificial humana</h3>
        </div>
        <div class="shadow-none card-body row mx-0">

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                
                <div class="col-12 mb-25 card card-default p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#inacObservaciones" aria-expanded="true"
                            aria-controls="inacObservaciones">
                            <i class="la la-angle-right"></i>
                            Observaciones
                        </a>
                    </div>
                    <div id="inacObservaciones" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div class="col-12 card mb-25 shadow-none p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Fumador?</h6>
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.observaciones.fumador.check" :checked="formData.observaciones.fumador.check"
                                        id="inacFumador">
                                    <label class="custom-control-label" for="inacFumador"></label>
                                </div>
                            </div>
                            <div class="card-body" v-if="formData.observaciones.fumador.check">
                                <label for="inacFumadorFrecuencia">Frecuencia</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" v-model="formData.observaciones.fumador.description"
                                    id="inacFumadorFrecuencia">
                            </div>
                        </div>

                        <div class="col-12 card mb-25 shadow-none p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Medicamentos?
                                </h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.observaciones.medicamentos.check" :checked="formData.observaciones.medicamentos.check"
                                        id="inacMedicamentos">
                                    <label class="custom-control-label" for="inacMedicamentos"></label>
                                </div>
                            </div>
                            <div class="card-body" v-if="formData.observaciones.medicamentos.check">
                                <label for="inacMedicamentosCuales">¿Cúales?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" v-model="formData.observaciones.medicamentos.description"
                                    id="inacMedicamentosCuales">
                            </div>
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacDiasAbstinencia">Días de abstinencia sexual</label>
                            <input class="form-control form-control-lg" type="text" id="inacDiasAbstinencia" :disabled="disabled" v-model="formData.observaciones.diasAbstinenciaSexual">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacModoRecoleccion">Modo de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="inacModoRecoleccion" :disabled="disabled" v-model="formData.observaciones.modoRecoleccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacHoraRecoleccion">Hora de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="inacHoraRecoleccion" :disabled="disabled" v-model="formData.observaciones.horaRecoleccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacHoraProcesado">Hora de procesado</label>
                            <input class="form-control form-control-lg" type="text" id="inacHoraProcesado" :disabled="disabled" v-model="formData.observaciones.horaProcesado">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 shadow-none card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 shadow-none card p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#inacAnalisisPreCapacitacion" aria-expanded="true"
                            aria-controls="inacAnalisisPreCapacitacion">
                            <i class="la la-angle-right"></i>
                            Análisis pre-capacitación
                        </a>
                    </div>
                    <div id="inacAnalisisPreCapacitacion" class="atbd-collapse-item__body collapse shadow-none card-body row mx-0">

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreLicuefaccion">Licuefacción</label>
                            <input class="form-control form-control-lg" type="text" id="inacPreLicuefaccion" :disabled="disabled" v-model="formData.analisisPreCapacitacion.licuefaccion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreViscosidad">Viscosidad</label>
                            <input class="form-control form-control-lg" type="text" id="inacPreViscosidad" :disabled="disabled" v-model="formData.analisisPreCapacitacion.viscosidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreAspecto">Aspecto</label>
                            <input class="form-control form-control-lg" type="text" id="inacPreAspecto" :disabled="disabled" v-model="formData.analisisPreCapacitacion.aspecto">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreVolumen">Volumen</label>
                            <input class="form-control form-control-lg" type="text" id="inacPreVolumen" :disabled="disabled" v-model="formData.analisisPreCapacitacion.volumen">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreConcentracion">Concentración</label>
                            <input class="form-control form-control-lg" type="number" id="inacPreConcentracion" :disabled="disabled" v-model="formData.analisisPreCapacitacion.concentracion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreConcentracionTotal">Concentración total</label>
                            <input class="form-control form-control-lg" type="number" id="inacPreConcentracionTotal" :disabled="disabled" v-model="formData.analisisPreCapacitacion.concentracionTotal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreMovilidadA">Movilidad A</label>
                            <input class="form-control form-control-lg" type="number" id="inacPreMovilidadA" :disabled="disabled" v-model="formData.analisisPreCapacitacion.movilidad.a">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreMovilidadB">Movilidad B</label>
                            <input class="form-control form-control-lg" type="number" id="inacPreMovilidadB" :disabled="disabled" v-model="formData.analisisPreCapacitacion.movilidad.b">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreMovilidadC">Movilidad C</label>
                            <input class="form-control form-control-lg" type="number" id="inacPreMovilidadC" :disabled="disabled" v-model="formData.analisisPreCapacitacion.movilidad.c">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreMovilidadD">Movilidad D</label>
                            <input class="form-control form-control-lg" type="number" id="inacPreMovilidadD" :disabled="disabled" v-model="formData.analisisPreCapacitacion.movilidad.d">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreIndiceMovilidad">Índice de movilidad (A+B)</label>
                            <input class="form-control form-control-lg" type="number" id="inacPreIndiceMovilidad" disabled :value="indicePreMovilidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreMovilidadTotal">Movilidad total (A+B+C)</label>
                            <input class="form-control form-control-lg" type="number" id="inacPreMovilidadTotal" disabled :value="indicePreMovilidadTotal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPreMorfologia">Morfología</label>
                            <input class="form-control form-control-lg" type="number" id="inacPreMorfologia" :disabled="disabled" v-model="formData.analisisPreCapacitacion.morfologia">
                        </div>

                        <div class="col-12">
                            <label for="inacPreObservaciones">Observaciones</label>
                            <textarea class="form-control form-control-lg" rows="3" id="inacPreObservaciones" :disabled="disabled" v-model="formData.analisisPreCapacitacion.observaciones"></textarea>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 shadow-none card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 shadow-none card p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#inacPostCapacitacion" aria-expanded="true"
                            aria-controls="inacPostCapacitacion">
                            <i class="la la-angle-right"></i>
                            Análisis post-capacitación
                        </a>
                    </div>
                    <div id="inacPostCapacitacion" class="atbd-collapse-item__body collapse shadow-none card-body row mx-0">

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPostVolumen">Volumen final</label>
                            <input class="form-control form-control-lg" type="number" id="inacPostVolumen" :disabled="disabled" v-model="formData.analisisPostCapacitacion.volumenFinal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPostConcentracion">Concentración</label>
                            <input class="form-control form-control-lg" type="number" id="inacPostConcentracion" :disabled="disabled" v-model="formData.analisisPostCapacitacion.concentracion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPostMovilidadA">Movilidad A</label>
                            <input class="form-control form-control-lg" type="number" id="inacPostMovilidadA" :disabled="disabled" v-model="formData.analisisPostCapacitacion.movilidad.a">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPostMovilidadB">Movilidad B</label>
                            <input class="form-control form-control-lg" type="number" id="inacPostMovilidadB" :disabled="disabled" v-model="formData.analisisPostCapacitacion.movilidad.b">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPostMovilidadC">Movilidad C</label>
                            <input class="form-control form-control-lg" type="number" id="inacPostMovilidadC" :disabled="disabled" v-model="formData.analisisPostCapacitacion.movilidad.c">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPostMovilidadD">Movilidad D</label>
                            <input class="form-control form-control-lg" type="number" id="inacPostMovilidadD" :disabled="disabled" v-model="formData.analisisPostCapacitacion.movilidad.d">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPostIndiceMovilidad">Índice de movilidad (A+B)</label>
                            <input class="form-control form-control-lg" type="number" id="inacPostIndiceMovilidad" disabled :value="indicePostMovilidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPostMovilidadTotal">Movilidad total (A+B+C)</label>
                            <input class="form-control form-control-lg" type="number" id="inacPostMovilidadTotal" disabled :value="indicePostMovilidadTotal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="inacPostMorfologia">Morfología</label>
                            <input class="form-control form-control-lg" type="number" id="inacPostMorfologia" :disabled="disabled" v-model="formData.analisisPostCapacitacion.morfologia">
                        </div>

                        <div class="col-12">
                            <label for="inacPostObservaciones">Observaciones</label>
                            <textarea class="form-control form-control-lg" rows="3" id="inacPostObservaciones" :disabled="disabled" v-model="formData.analisisPostCapacitacion.observaciones"></textarea>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./InseminacionArtificialComponent.ts"></script>
