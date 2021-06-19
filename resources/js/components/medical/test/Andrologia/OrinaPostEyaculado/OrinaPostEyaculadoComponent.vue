<template>
    <div class="card">
        <div class="card-header">
            <h3>Orina post-eyaculado</h3>
        </div>
        <div class="card-body row mx-0">

            <div class="col-12 shadow-none card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 shadow-none card p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#cecCervix" aria-expanded="true"
                            aria-controls="cecCervix">
                            <i class="la la-angle-right"></i>
                            Observaciones
                        </a>
                    </div>
                    <div id="cecCervix" class="atbd-collapse-item__body collapse shadow-none card-body row mx-0">

                        <div class="col-12 shadow-none card bg-white mb-25 p-0">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Medicamentos?
                                </h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.observaciones.medicamentos.check" :checked="formData.observaciones.medicamentos.check"
                                        id="opecMedicamentos">
                                    <label class="custom-control-label" for="opecMedicamentos"></label>
                                </div>
                            </div>
                            <div class="card-body" v-if="formData.observaciones.medicamentos.check">
                                <label for="ccLeucorreaDescription">¿Cúales?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" v-model="formData.observaciones.medicamentos.description"
                                    id="opecMedicamentosCuales">
                            </div>
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecDiasAbstinencia">Días de abstinencia sexual</label>
                            <input class="form-control form-control-lg" type="text" id="opecDiasAbstinencia" :disabled="disabled" v-model="formData.observaciones.diasAbstinenciaSexual">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecHoraRecoleccion">Hora de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="opecHoraRecoleccion" :disabled="disabled" v-model="formData.observaciones.horaRecoleccion">
                        </div>

                        <div class="col-12 col-md-4">
                            <label for="opecHoraProcesado">Hora de procesado</label>
                            <input class="form-control form-control-lg" type="text" id="opecHoraProcesado" :disabled="disabled" v-model="formData.observaciones.horaProcesado">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 shadow-none card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 shadow-none card p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#opecAnalisisMacroscopico" aria-expanded="true"
                            aria-controls="opecAnalisisMacroscopico">
                            <i class="la la-angle-right"></i>
                            Análisis macroscópico
                        </a>
                    </div>
                    <div id="opecAnalisisMacroscopico" class="atbd-collapse-item__body collapse shadow-none card-body row mx-0">

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecPH">PH</label>
                            <input class="form-control form-control-lg" type="text" id="opecPH" :disabled="disabled" v-model="formData.analisisMacroscopico.ph">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecAspecto">Aspecto</label>
                            <input class="form-control form-control-lg" type="text" id="opecAspecto" :disabled="disabled" v-model="formData.analisisMacroscopico.aspecto">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 shadow-none card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 shadow-none card p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#opecAnalisisMicroscopico" aria-expanded="true"
                            aria-controls="opecAnalisisMicroscopico">
                            <i class="la la-angle-right"></i>
                            Análisis microscópico
                        </a>
                    </div>
                    <div id="opecAnalisisMicroscopico" class="atbd-collapse-item__body collapse shadow-none card-body row mx-0">

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecConcentracion">Concentración</label>
                            <input class="form-control form-control-lg" type="number" id="opecConcentracion" :disabled="disabled" v-model="formData.analisisMicroscopico.concentracion">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecMovilidadA">Movilidad A</label>
                            <input class="form-control form-control-lg" type="number" id="opecMovilidadA" :disabled="disabled" v-model="formData.analisisMicroscopico.movilidad.a">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecMovilidadB">Movilidad B</label>
                            <input class="form-control form-control-lg" type="number" id="opecMovilidadB" :disabled="disabled" v-model="formData.analisisMicroscopico.movilidad.b">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecMovilidadC">Movilidad C</label>
                            <input class="form-control form-control-lg" type="number" id="opecMovilidadC" :disabled="disabled" v-model="formData.analisisMicroscopico.movilidad.c">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecMovilidadD">Movilidad D</label>
                            <input class="form-control form-control-lg" type="number" id="opecMovilidadD" :disabled="disabled" v-model="formData.analisisMicroscopico.movilidad.d">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Movilidad total (A+B+C)</label>
                            <input class="form-control form-control-lg" type="number" id="cscFUM" disabled :value="indiceMovilidad">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Movilidad progresiva (A+B)</label>
                            <input class="form-control form-control-lg" type="number" id="cscFUM" disabled :value="indiceMovilidadTotal">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecEritrocitos">Eritrocitos</label>
                            <input class="form-control form-control-lg" type="number" id="opecEritrocitos" :disabled="disabled" v-model="formData.analisisMicroscopico.eritrocitos">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecLeucocitos">Leucocitos</label>
                            <input class="form-control form-control-lg" type="number" id="opecLeucocitos" :disabled="disabled" v-model="formData.analisisMicroscopico.leucocitos">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecInmaduras">Inmaduras</label>
                            <input class="form-control form-control-lg" type="number" id="opecInmaduras" :disabled="disabled" v-model="formData.analisisMicroscopico.inmaduras">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecEpiteliales">Epiteliales</label>
                            <input class="form-control form-control-lg" type="number" id="opecEpiteliales" :disabled="disabled" v-model="formData.analisisMicroscopico.epiteliales">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecBacterias">Bacterias</label>
                            <input class="form-control form-control-lg" type="text" id="opecBacterias" :disabled="disabled" v-model="formData.analisisMicroscopico.bacterias">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecCristales">Cristales</label>
                            <input class="form-control form-control-lg" type="text" id="opecCristales" :disabled="disabled" v-model="formData.analisisMicroscopico.cristales">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="opecResiduos">Residuos / Detritos</label>
                            <input class="form-control form-control-lg" type="number" id="opecResiduos" :disabled="disabled" v-model="formData.analisisMicroscopico.residuos">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 p-0">
                <label for="opecObservacionesAdicionales">Observaciones adicionales</label>
                <textarea class="form-control form-control-lg" rows="5" id="opecObservacionesAdicionales" :disabled="disabled" v-model="formData.observacionesAdicionales"></textarea>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./OrinaPostEyaculadoComponent.ts"></script>
