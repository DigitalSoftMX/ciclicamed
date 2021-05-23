<template>

    <div class="card">
        <div class="card-header">
            <h6>Nutrición perinatal</h6>
        </div>
        <div class="card-body">
            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcPeso" aria-expanded="true"
                        aria-controls="ngcPeso">
                        <i class="la la-angle-right"></i>
                        Peso
                    </a>
                </div>
                <div id="ngcPeso" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 card p-0 mb-25">
                        <div class="card-header">
                            <h4>Peso mínimo</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMinimo">Peso mínimo</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcPesoMinimo" v-model="formDataCopy.peso.pesoMinimo.pesoMinimo">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMinimoCuanto">¿Hace cuanto?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcPesoMinimoCuanto" v-model="formDataCopy.peso.pesoMinimo.haceCuanto">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMinimoDurante">¿Durante cuanto tiempo?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcPesoMinimoDurante" v-model="formDataCopy.peso.pesoMinimo.desdeCuanto">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card p-0 mb-25">
                        <div class="card-header">
                            <h4>Peso máximo</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMaximo">Peso máximo</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcPesoMaximo" v-model="formDataCopy.peso.pesoMaximo.pesoMinimo">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMaximoCuanto">¿Hace cuanto?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcPesoMaximoCuanto" v-model="formDataCopy.peso.pesoMaximo.haceCuanto">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMaximoDurante">¿Durante cuanto tiempo?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcPesoMaximoDurante" v-model="formDataCopy.peso.pesoMaximo.desdeCuanto">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-0">
                        <label for="ngcPesoHabitual">Peso habitual</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcPesoHabitual" v-model="formDataCopy.peso.pesoHabitual">
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcAntecedentesSalud" aria-expanded="true"
                        aria-controls="ngcAntecedentesSalud">
                        <i class="la la-angle-right"></i>
                        Antecedentes salud y enfermedad
                    </a>
                </div>
                <div id="ngcAntecedentesSalud" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 card p-0 mb-25">
                        <div class="card-header">
                            <h4>Problemas actuales</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcDiarrea"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.diarrea"
                                        :checked="formDataCopy.antecedentesSalud.problemasActuales.diarrea">
                                    <label class="custom-control-label" for="ngcDiarrea">Diarrea</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcEstrenimiento"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.estrenimiento"
                                        :checked="formDataCopy.antecedentesSalud.problemasActuales.estrenimiento">
                                    <label class="custom-control-label" for="ngcEstrenimiento">Estreñimiento</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcGastritis"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.gastitris"
                                        :checked="formDataCopy.antecedentesSalud.problemasActuales.gastitris">
                                    <label class="custom-control-label" for="ngcGastritis">Gastritis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcUlcera"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.ulcera"
                                        :checked="formDataCopy.antecedentesSalud.problemasActuales.ulcera">
                                    <label class="custom-control-label" for="ngcUlcera">Úlcera</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcNauseas"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.nauseas"
                                        :checked="formDataCopy.antecedentesSalud.problemasActuales.nauseas">
                                    <label class="custom-control-label" for="ngcNauseas">Náuseas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcPirosis"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.pirosis"
                                        :checked="formDataCopy.antecedentesSalud.problemasActuales.pirosis">
                                    <label class="custom-control-label" for="ngcPirosis">Pirosis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcVomito"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.vomito"
                                        :checked="formDataCopy.antecedentesSalud.problemasActuales.vomito">
                                    <label class="custom-control-label" for="ngcVomito">Vómito</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcColitis"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.colitis"
                                        :checked="formDataCopy.antecedentesSalud.problemasActuales.colitis">
                                    <label class="custom-control-label" for="ngcColitis">Colitis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcDentarua"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.dentadura"
                                        :checked="formDataCopy.antecedentesSalud.problemasActuales.dentadura">
                                    <label class="custom-control-label" for="ngcDentarua">Dentadura</label>
                                </div>
                            </div>
                            <div class="col-12 card card-default card-md bg-white">
                                <div class="card-header">
                                    <h6>Otros</h6>
                                    <div class="custom-control custom-switch switch-primary switch-md">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcOtros"
                                            v-model="formDataCopy.antecedentesSalud.problemasActuales.otros.check"
                                            :checked="formDataCopy.antecedentesSalud.problemasActuales.otros.check">
                                        <label class="custom-control-label" for="ngcOtros"></label>
                                    </div>
                                </div>
                                <div class="card-body bg-normal"
                                    v-show="formDataCopy.antecedentesSalud.problemasActuales.otros.check">
                                    <textarea class="form-control form-control-lg" rows="4" type="text"
                                        id="ucEsfuerzoTiempoEvolucion"
                                        v-model="formDataCopy.antecedentesSalud.problemasActuales.otros.description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 row mb-25 mx-0 p-0">
                        <div class="col-12 mb-25 p-0">
                            <label for="ngcObservaciones">Observaciones</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcObservaciones" v-model="formDataCopy.antecedentesSalud.observaciones"></textarea>
                        </div>

                        <div class="col-12 card p-0 mb-25">
                            <div class="card-header bg-normal">
                                <h4>TA</h4>
                            </div>
                            <div class="row card-body mx-0">
                                <div class="col-12 col-md-6">
                                    <label for="ngcTABrazoDerecho">Brazo derecho</label>
                                    <input class="form-control form-control-lg" type="text"
                                        :disabled="disabled" id="ngcTABrazoDerecho" v-model="formDataCopy.antecedentesSalud.ta.brazoDerecho">
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="ngcTABrazoIzquierdo">Brazo izquierdo</label>
                                    <input class="form-control form-control-lg" type="text"
                                        :disabled="disabled" id="ngcTABrazoIzquierdo" v-model="formDataCopy.antecedentesSalud.ta.brazoIzquierdo">
                                </div>
                            </div>
                        </div>

                        <div class="col-12 mb-25 p-0">
                            <label for="ngcEnfermedadDiagnosticada">¿Padece alguna enfermedad diagnosticada?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                :disabled="disabled" id="ngcEnfermedadDiagnosticada" v-model="formDataCopy.antecedentesSalud.padeceEnfermedadDiagnosticada"></textarea>
                        </div>

                        <div class="col-12 mb-25 p-0">
                            <label for="ngcEnfermedadImportante">¿Ha padecido alguna enfermededad importante?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                :disabled="disabled" id="ngcEnfermedadImportante" v-model="formDataCopy.antecedentesSalud.padecioEnfermedadImportante"></textarea>
                        </div>

                        <div class="col-12 card card-default card-md bg-white mb-25 p-0">
                            <div class="card-header">
                                <h6>¿Toma algún medicamento?</h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcTomaMedicamento" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.check" :checked="formDataCopy.antecedentesSalud.tomaMedicamento.check">
                                    <label class="custom-control-label" for="ngcTomaMedicamento"></label>
                                </div>
                            </div>
                            <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.antecedentesSalud.tomaMedicamento.check">
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento1Cual">¿Cúal?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="ngcTomaMedicamento1Cual" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.medicamento1.cual">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento1Dosis">Dosis</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="ngcTomaMedicamento1Dosis" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.medicamento1.dosis">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento1Cuando">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="ngcTomaMedicamento1Cuando" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.medicamento1.cuando">
                                    </div>
                                </div>
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento2Cual">¿Cúal?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="ngcTomaMedicamento2Cual" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.medicamento2.cual">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento2Dosis">Dosis</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="ngcTomaMedicamento2Dosis" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.medicamento2.dosis">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento2Cuando">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="ngcTomaMedicamento2Cuando" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.medicamento2.cuando">
                                    </div>
                                </div>
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="ngcTomaMedicamento3Cual">¿Cúal?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="ngcTomaMedicamento3Cual" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.medicamento3.cual">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="ngcTomaMedicamento3Dosis">Dosis</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="ngcTomaMedicamento3Dosis" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.medicamento3.dosis">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="ngcTomaMedicamento3Cuando">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="ngcTomaMedicamento3Cuando" v-model="formDataCopy.antecedentesSalud.tomaMedicamento.medicamento3.cuando">
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-12 card p-0 mb-25">
                            <div class="card-header bg-normal">
                                <h4>Toma...</h4>
                            </div>
                            <div class="row card-body mx-0">
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcLaxantes" v-model="formDataCopy.antecedentesSalud.toma.laxantes" :checked="formDataCopy.antecedentesSalud.toma.laxantes">
                                        <label class="custom-control-label" for="ngcLaxantes">Laxantes</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcDiureticos" v-model="formDataCopy.antecedentesSalud.toma.diureticos" :checked="formDataCopy.antecedentesSalud.toma.diureticos">
                                        <label class="custom-control-label" for="ngcDiureticos">Diuréticos</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcAntiacidos" v-model="formDataCopy.antecedentesSalud.toma.antiacidos" :checked="formDataCopy.antecedentesSalud.toma.antiacidos">
                                        <label class="custom-control-label" for="ngcAntiacidos">Antiácidos</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcAnalgesicos" v-model="formDataCopy.antecedentesSalud.toma.analgesicos" :checked="formDataCopy.antecedentesSalud.toma.analgesicos">
                                        <label class="custom-control-label" for="ngcAnalgesicos">Analgésicos</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 p-0">
                            <label for="ngcPracticadoCirugia">¿Le han practicado alguna cirugía?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                :disabled="disabled" id="ngcPracticadoCirugia" v-model="formDataCopy.antecedentesSalud.cirugiaAnterior"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcAntecedentesFamiliares" aria-expanded="true"
                        aria-controls="ngcAntecedentesFamiliares">
                        <i class="la la-angle-right"></i>
                        Antecedentes familiares
                    </a>
                </div>
                <div id="ngcAntecedentesFamiliares" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcObesidad" v-model="formDataCopy.antecedentesFamiliares.obesidad" :checked="formDataCopy.antecedentesFamiliares.obesidad">
                            <label class="custom-control-label" for="ngcObesidad">Obesidad</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcHTA" v-model="formDataCopy.antecedentesFamiliares.hta" :checked="formDataCopy.antecedentesFamiliares.hta">
                            <label class="custom-control-label" for="ngcHTA">HTA</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcCancer" v-model="formDataCopy.antecedentesFamiliares.cancer" :checked="formDataCopy.antecedentesFamiliares.cancer">
                            <label class="custom-control-label" for="ngcCancer">Cáncer</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcHipercolesterolemia" v-model="formDataCopy.antecedentesFamiliares.hipercolesterolemia" :checked="formDataCopy.antecedentesFamiliares.hipercolesterolemia">
                            <label class="custom-control-label" for="ngcHipercolesterolemia">Hipercolesterolemia</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcHipertrigliceridemia" v-model="formDataCopy.antecedentesFamiliares.hipertrigliceridemia" :checked="formDataCopy.antecedentesFamiliares.hipertrigliceridemia">
                            <label class="custom-control-label"
                                for="ngcHipertrigliceridemia">Hipertrigliceridemia</label>
                        </div>
                    </div>
                    <div class="col-12 card card-default card-md bg-white">
                        <div class="card-header">
                            <h6>Diabetes</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcDiabetes" v-model="formDataCopy.antecedentesFamiliares.diabetes.check" :checked="formDataCopy.antecedentesFamiliares.diabetes.check">
                                <label class="custom-control-label" for="ngcDiabetes"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal" v-show="formDataCopy.antecedentesFamiliares.diabetes.check">
                            <select class="form-control form-control-lg" :disabled="disabled" id="ngcDiabetesDescription" v-model="formDataCopy.antecedentesFamiliares.diabetes.description">
                                <option value="TipoI">Tipo I</option>
                                <option value="TipoII">Tipo II</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcAspectosGinecologicos" aria-expanded="true"
                        aria-controls="ngcAspectosGinecologicos">
                        <i class="la la-angle-right"></i>
                        Aspectos ginecológicos
                    </a>
                </div>
                <div id="ngcAspectosGinecologicos" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Embarazo actual</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcEmbarazoActualDescription" v-model="formDataCopy.aspectosGinecologicos.embarazoActual.check" :checked="formDataCopy.aspectosGinecologicos.embarazoActual.check">
                                <label class="custom-control-label" for="ngcEmbarazoActualDescription"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.aspectosGinecologicos.embarazoActual.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcEmbarazoActualSemanas">Semanas de gestación</label>
                                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="ngcEmbarazoActualSemanas" v-model="formDataCopy.aspectosGinecologicos.embarazoActual.semanasGestacion">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">Peso pregestacional</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcEmbarazoPesoPregestacional" v-model="formDataCopy.aspectosGinecologicos.embarazoActual.pesoPregestacional">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Anticonceptivos orales</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcAnticonceptivosorales" v-model="formDataCopy.aspectosGinecologicos.anticonceptivosOrales.check" :checked="formDataCopy.aspectosGinecologicos.anticonceptivosOrales.check">
                                <label class="custom-control-label" for="ngcAnticonceptivosorales"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.aspectosGinecologicos.anticonceptivosOrales.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcAnticonceptivosOralesCual">¿Cuál?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcAnticonceptivosOralesCual" v-model="formDataCopy.aspectosGinecologicos.anticonceptivosOrales.cual">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcAnticonceptivosOralesDosis">Dosis</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcAnticonceptivosOralesDosis" v-model="formDataCopy.aspectosGinecologicos.anticonceptivosOrales.dosis">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcAnticonceptivosOralesSX">SX</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcAnticonceptivosOralesSX" v-model="formDataCopy.aspectosGinecologicos.anticonceptivosOrales.sx">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Climaterio</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcClimaterio" v-model="formDataCopy.aspectosGinecologicos.climaterio.check" :checked="formDataCopy.aspectosGinecologicos.climaterio.check">
                                <label class="custom-control-label" for="ngcClimaterio"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal" v-show="formDataCopy.aspectosGinecologicos.climaterio.check">
                            <label for="">Fecha</label>
                            <input class="form-control form-control-lg" type="date" :disabled="disabled" id="ngcClimaterioFecha" v-model="formDataCopy.aspectosGinecologicos.climaterio.description">
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white">
                        <div class="card-header">
                            <h6>Terapia de reemplazo hormonal</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcTerapiaReemplazo" v-model="formDataCopy.aspectosGinecologicos.terapiaReemplazoHormonal.check" :checked="formDataCopy.aspectosGinecologicos.terapiaReemplazoHormonal.check">
                                <label class="custom-control-label" for="ngcTerapiaReemplazo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.aspectosGinecologicos.terapiaReemplazoHormonal.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcTerapiaReemplazoCual">¿Cuál?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTerapiaReemplazoCual" v-model="formDataCopy.aspectosGinecologicos.terapiaReemplazoHormonal.cual">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcTerapiaReemplazoDosis">Dosis</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTerapiaReemplazoDosis" v-model="formDataCopy.aspectosGinecologicos.terapiaReemplazoHormonal.dosis">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcTerapiaReemplazoSX">SX</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTerapiaReemplazoSX" v-model="formDataCopy.aspectosGinecologicos.terapiaReemplazoHormonal.sx">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcActividadFisica" aria-expanded="true"
                        aria-controls="ngcActividadFisica">
                        <i class="la la-angle-right"></i>
                        Actividad física
                    </a>
                </div>
                <div id="ngcActividadFisica" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ngcProfesion">¿Cuál es tu profesión?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcProfesion" v-model="formDataCopy.actividadFisica.profesion">
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ngcPracticaDeporte">¿Practica algún deporte o hace ejercicio?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcPracticaDeporte" v-model="formDataCopy.actividadFisica.practicaDeporte">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ngcCuantosDiasDeporte">¿Cúantos días y horas al día hace ejercicio?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcCuantosDiasDeporte" v-model="formDataCopy.actividadFisica.cuantoTiempo">
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcConsumoFrecuencia" aria-expanded="true"
                        aria-controls="ngcConsumoFrecuencia">
                        <i class="la la-angle-right"></i>
                        Consumo en frecuencia y cantidad
                    </a>
                </div>
                <div id="ngcConsumoFrecuencia" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Alcohol</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcAlcohol" v-model="formDataCopy.consumoFrecuencia.alcohol.check" :checked="formDataCopy.consumoFrecuencia.alcohol.check">
                                <label class="custom-control-label" for="ngcAlcohol"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.consumoFrecuencia.alcohol.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcAlcoholCantidad">Cantidad</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcAlcoholCantidad" v-model="formDataCopy.consumoFrecuencia.alcohol.cantidad">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcAlcoholFrecuencia">Frecuencia</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="ngcAlcoholFrecuencia" v-model="formDataCopy.consumoFrecuencia.alcohol.frecuencia">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Tabaco</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcTabaco" v-model="formDataCopy.consumoFrecuencia.tabaco.check" :checked="formDataCopy.consumoFrecuencia.tabaco.check">
                                <label class="custom-control-label" for="ngcTabaco"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.consumoFrecuencia.tabaco.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcTabacoCantidad">Cantidad</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTabacoCantidad" v-model="formDataCopy.consumoFrecuencia.tabaco.cantidad">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcTabacoFrecuencia">Frecuencia</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="ngcTabacoFrecuencia" v-model="formDataCopy.consumoFrecuencia.tabaco.frecuencia">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card card-default card-md bg-white">
                        <div class="card-header">
                            <h6>Café</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                   :disabled="disabled" id="ngcCafe" v-model="formDataCopy.consumoFrecuencia.cafe.check" :checked="formDataCopy.consumoFrecuencia.cafe.check">
                                <label class="custom-control-label" for="ngcCafe"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.consumoFrecuencia.cafe.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Cantidad</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcCafeCantidad" v-model="formDataCopy.consumoFrecuencia.cafe.cantidad">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Frecuencia</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="ngcCafeFrecuencia" v-model="formDataCopy.consumoFrecuencia.cafe.frecuencia">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcIndicadoresBioquimicos" aria-expanded="true"
                        aria-controls="ngcIndicadoresBioquimicos">
                        <i class="la la-angle-right"></i>
                        Indicadores bioquímicos
                    </a>
                </div>
                <div id="ngcIndicadoresBioquimicos" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 mb-25">
                        <label for="ngcUltimosEstudios">Últimos estudios de laboratorio</label>
                        <textarea class="form-control form-control-lg" rows="5" :disabled="disabled" id="ngcUltimosEstudios" v-model="formDataCopy.indicadoresBioquimicos.ultimoEstudios"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Datos bioquímicos relevantes</label>
                        <textarea class="form-control form-control-lg" rows="5" :disabled="disabled" id="ngcDatosBioquimicos" v-model="formDataCopy.indicadoresBioquimicos.datosBioquimicos"></textarea>
                    </div>
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Se solicitaron análisis</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcSolicitaronAnalisis" v-model="formDataCopy.indicadoresBioquimicos.analisis.check" :checked="formDataCopy.indicadoresBioquimicos.analisis.check">
                                <label class="custom-control-label" for="ngcSolicitaronAnalisis"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal" v-show="formDataCopy.indicadoresBioquimicos.analisis.check">
                            <label for="ngcSolicitaronAnalisisCuales">¿Cúales</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcSolicitaronAnalisisCuales" v-model="formDataCopy.indicadoresBioquimicos.analisis.description">
                        </div>
                    </div>
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>Glucosa capilar</h6>
                        </div>
                        <div class="row mx-0 card-body bg-normal">
                            <div class="col-12 col-md-6 row mx-0 p-0 mb-25">
                                <div class="col-6">
                                    <label for="">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcGlucosaCapilar1Dia" v-model="formDataCopy.indicadoresBioquimicos.glucosaCapilar.glucosa1.dia">
                                </div>
                                <div class="col-6">
                                    <label for="">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcGlucosaCapilar1Glucosa" v-model="formDataCopy.indicadoresBioquimicos.glucosaCapilar.glucosa1.glucosa">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0 mb-25">
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar2Dia">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcGlucosaCapilar2Dia" v-model="formDataCopy.indicadoresBioquimicos.glucosaCapilar.glucosa2.dia">
                                </div>
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar2Glucosa">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcGlucosaCapilar2Glucosa" v-model="formDataCopy.indicadoresBioquimicos.glucosaCapilar.glucosa2.glucosa">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0">
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar3Dia">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcGlucosaCapilar3Dia" v-model="formDataCopy.indicadoresBioquimicos.glucosaCapilar.glucosa3.dia">
                                </div>
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar3Glucosa">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcGlucosaCapilar3Glucosa" v-model="formDataCopy.indicadoresBioquimicos.glucosaCapilar.glucosa3.glucosa">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcIndicadoresDieteticos" aria-expanded="true"
                        aria-controls="ngcIndicadoresDieteticos">
                        <i class="la la-angle-right"></i>
                        Indicadores dietéticos
                    </a>
                </div>
                <div id="ngcIndicadoresDieteticos" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">
                    <div class="col-12 mb-25">
                        <label for="ngcComidasDia">¿Cúantas comidas hace al día?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcComidasDia" v-model="formDataCopy.indicadoresDieteticos.comidas">
                    </div>
                    <div class="col-12 mb-25">
                        <label for="ngcPreparaAlimentos">¿Quién prepara sus alimentos?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcPreparaAlimentos" v-model="formDataCopy.indicadoresDieteticos.preparaAlimentos">
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Come entre comidas?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcComeEntreComidas" v-model="formDataCopy.indicadoresDieteticos.comeEntreComidas.check" :checked="formDataCopy.indicadoresDieteticos.comeEntreComidas.check">
                                <label class="custom-control-label" for="ngcComeEntreComidas"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal" v-show="formDataCopy.indicadoresDieteticos.comeEntreComidas.check">
                            <label for="">¿Qué come?</label>
                            <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcComeEntreComidasQue" v-model="formDataCopy.indicadoresDieteticos.comeEntreComidas.description"></textarea>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Ha modificado su alimentación en los ultimos 6 meses (trabajo, estudio o actividad)?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcModificadoAlimentacion" v-model="formDataCopy.indicadoresDieteticos.modificadoAlimentacion.check" :checked="formDataCopy.indicadoresDieteticos.modificadoAlimentacion.check">
                                <label class="custom-control-label" for="ngcModificadoAlimentacion"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.indicadoresDieteticos.modificadoAlimentacion.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcModificadoAlimentacionPorQue">¿Por qué?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcModificadoAlimentacionPorQue" v-model="formDataCopy.indicadoresDieteticos.modificadoAlimentacion.porQue"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcModificadoAlimentacionComo">¿Cómo?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcModificadoAlimentacionComo" v-model="formDataCopy.indicadoresDieteticos.modificadoAlimentacion.como"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25">
                        <label for="ngcApetito">Apetito</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ngcApetito" v-model="formDataCopy.indicadoresDieteticos.apetito">
                            <option value="Bueno">Bueno</option>
                            <option value="Regular">Regular</option>
                            <option value="Malo">Malo</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ngcHoraHambre">¿A qué hora tiene más hambre?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcHoraHambre" v-model="formDataCopy.indicadoresDieteticos.horaHambre">
                    </div>
                    <div class="col-12 mb-25">
                        <label for="ngcAlimentosPreferidos">Alimentos preferidos</label>
                        <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcAlimentosPreferidos" v-model="formDataCopy.indicadoresDieteticos.alimentosPreferidos"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="ngcAlimentosNoAgradan">Alimentos que no le agradan o no acostumbra</label>
                        <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcAlimentosNoAgradan" v-model="formDataCopy.indicadoresDieteticos.alimentosNoAgradan"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Alimentos que le causan malestar</label>
                        <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcAlimentosMalestar" v-model="formDataCopy.indicadoresDieteticos.alimentosMalestar"></textarea>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Es alérgico a algún alimento?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcAlergicoAlimento" v-model="formDataCopy.indicadoresDieteticos.alergico.check" :checked="formDataCopy.indicadoresDieteticos.alergico.check">
                                <label class="custom-control-label" for="ngcAlergicoAlimento"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal" v-show="formDataCopy.indicadoresDieteticos.alergico.check">
                            <label for="ngcAlergicoDescription">¿Cúal?</label>
                            <textarea class="form-control form-control-lg" rows="2" :disabled="disabled" id="ngcAlergicoDescription" v-model="formDataCopy.indicadoresDieteticos.alergico.description"></textarea>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Toma algún suplemento o complemento?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcTomaSuplemento" v-model="formDataCopy.indicadoresDieteticos.tomaSuplemento.check" :checked="formDataCopy.indicadoresDieteticos.tomaSuplemento.check">
                                <label class="custom-control-label" for="ngcTomaSuplemento"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.indicadoresDieteticos.tomaSuplemento.check">
                            <div class="col-12 row mx-0 mb-25 p-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento1Cual">¿Cúal?</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTomaSuplemento1Cual" v-model="formDataCopy.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento1.cual">
                                </div>
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento1Dosis">Dosis</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTomaSuplemento1Dosis" v-model="formDataCopy.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento1.dosis">
                                </div>
                            </div>
                            <div class="col-12 row mx-0 mb-25 p-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento2Cual">¿Cúal?</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTomaSuplemento2Cual" v-model="formDataCopy.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento2.cual">
                                </div>
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento2Dosis">Dosis</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTomaSuplemento2Dosis" v-model="formDataCopy.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento2.dosis">
                                </div>
                            </div>
                            <div class="col-12 row mx-0 mb-25 p-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento3Cual">¿Cúal?</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTomaSuplemento3Cual" v-model="formDataCopy.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento3.cual">
                                </div>
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento3Dosis">Dosis</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcTomaSuplemento3Dosis" v-model="formDataCopy.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento3.dosis">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Su consumo varía cuando está triste, nervioso o ansioso?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcConsumoVariaTriste" v-model="formDataCopy.indicadoresDieteticos.consumoVariaTriste.check" :checked="formDataCopy.indicadoresDieteticos.consumoVariaTriste.check">
                                <label class="custom-control-label" for="ngcConsumoVariaTriste"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal" v-show="formDataCopy.indicadoresDieteticos.consumoVariaTriste.check">
                            <label for="">¿Cómo?</label>
                            <textarea class="form-control form-control-lg" rows="2" :disabled="disabled" id="ngcConsumoVariaTristeComo" v-model="formDataCopy.indicadoresDieteticos.consumoVariaTriste.description"></textarea>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25 align-self-center">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcSal" v-model="formDataCopy.indicadoresDieteticos.agregaSal" :checked="formDataCopy.indicadoresDieteticos.agregaSal">
                            <label class="custom-control-label" for="ngcSal">¿Agrega sal a la comida ya
                                preparada?</label>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25">
                        <label for="">¿Qué grasa utiliza en casa para preparar su comida?</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ngcGrasa" v-model="formDataCopy.indicadoresDieteticos.grasaUtiliza">
                            <option value="Margarina">Margarina</option>
                            <option value="AceiteVegetal">Aceite vegetal</option>
                            <option value="Manteca">Manteca</option>
                            <option value="Mantequilla">Mantequilla</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Ha llevado alguna dieta especial?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcDietaEspecial" v-model="formDataCopy.indicadoresDieteticos.dietaEspecial.check" :checked="formDataCopy.indicadoresDieteticos.dietaEspecial.check">
                                <label class="custom-control-label" for="ngcDietaEspecial"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialEspecificar">Especificar</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcDietaEspecialEspecificar" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.dietas"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialCuantas">¿Cuantas?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcDietaEspecialCuantas" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.cuantas"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialTipo">¿Qué tipo de dieta?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcDietaEspecialTipo" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.tipo"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialHaceCuanto">¿Hace cuánto?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcDietaEspecialHaceCuanto" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.haceCuanto"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialPorCuanto">¿Por cuánto tiempo?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcDietaEspecialPorCuanto" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.porCuanto"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialPorQue">¿Por qué razón?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcDietaEspecialPorQue" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.porQue"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialTantoApego">¿Qué tanto se apegó a ella?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcDietaEspecialTantoApego" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.tantoApego"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialObtuvoResultados">¿Obtuvo los resultados esperados?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcDietaEspecialObtuvoResultados" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.obtuvoResultados"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialKGPerdidos">¿Kg perdidos?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcDietaEspecialKGPerdidos" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.kgPerdidos">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialPesoLogrado">¿Peso logrado?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcDietaEspecialPesoLogrado" v-show="formDataCopy.indicadoresDieteticos.dietaEspecial.pesoLogrado">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6>¿Ha utilizado medicamentos para bajar de peso?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="ngcMedicamentosBajar" v-model="formDataCopy.indicadoresDieteticos.medicamentosBajar.check" :checked="formDataCopy.indicadoresDieteticos.medicamentosBajar.check">
                                <label class="custom-control-label" for="ngcMedicamentosBajar"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body bg-normal" v-show="formDataCopy.indicadoresDieteticos.medicamentosBajar.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcMedicamentosBajarCuales">¿Cuáles?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcMedicamentosBajarCuales" v-model="formDataCopy.indicadoresDieteticos.medicamentosBajar.cuales"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcMedicamentosBajarCuantoTiempo">¿Por cuánto tiempo?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ngcMedicamentosBajarCuantoTiempo" v-model="formDataCopy.indicadoresDieteticos.medicamentosBajar.cuantoTiempo"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcRecordatorioNutricional" aria-expanded="true"
                        aria-controls="ngcRecordatorioNutricional">
                        <i class="la la-angle-right"></i>
                        Recordatorio de 24 horas
                    </a>
                </div>
                <div id="ngcRecordatorioNutricional" class="atbd-collapse-item__body collapse bg-white row mx-0 card-body">

                    <div class="card mb-25 bg-normal">
                        <div class="card-header">
                            <h4>Entre semana</h4>
                        </div>
                        <div class="col-12 row mx-0 card-body bg-white">
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaDesayuno">Desayuno</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcEntreSemanaDesayuno" v-model="formDataCopy.recordatorioNutricion.entreSemana.desayuno.desayuno"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaDesayunoColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcEntreSemanaDesayunoColacion" v-model="formDataCopy.recordatorioNutricion.entreSemana.desayuno.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaComida">Comida</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcEntreSemanaComida" v-model="formDataCopy.recordatorioNutricion.entreSemana.comida.comida"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaComidaColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcEntreSemanaComidaColacion" v-model="formDataCopy.recordatorioNutricion.entreSemana.comida.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaCena">Cena</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcEntreSemanaCena" v-model="formDataCopy.recordatorioNutricion.entreSemana.cena"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-25 bg-normal">
                        <div class="card-header">
                            <h4>Fin de semana</h4>
                        </div>
                        <div class="row mx-0 card-body bg-white">
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaDesayuno">Desayuno</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcFinSemanaDesayuno" v-model="formDataCopy.recordatorioNutricion.finSemana.desayuno.desayuno"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaDesayunoColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcFinSemanaDesayunoColacion" v-model="formDataCopy.recordatorioNutricion.finSemana.desayuno.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaComida">Comida</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcFinSemanaComida" v-model="formDataCopy.recordatorioNutricion.finSemana.comida.comida"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaComidaColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcFinSemanaComidaColacion" v-model="formDataCopy.recordatorioNutricion.finSemana.comida.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaCena">Cena</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcFinSemanaCena" v-model="formDataCopy.recordatorioNutricion.finSemana.cena"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-normal">
                        <div class="card-header">
                            <h4> Alimentos olvidados</h4>
                        </div>
                        <div class="row mx-0 card-body bg-white">
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcChicles" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.chicles" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.chicles">
                                    <label class="custom-control-label" for="ngcChicles">Chicles</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcMentas" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.mentas" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.mentas">
                                    <label class="custom-control-label" for="ngcMentas">Mentas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcPatillas" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.patillas" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.patillas">
                                    <label class="custom-control-label" for="ngcPatillas">Patillas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcMermeladas" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.mermeladas" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.mermeladas">
                                    <label class="custom-control-label" for="ngcMermeladas">Mermeladas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcMiel" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.miel" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.miel">
                                    <label class="custom-control-label" for="ngcMiel">Miel</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcAzucar" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.azucar" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.azucar">
                                    <label class="custom-control-label" for="ngcAzucar">Azúcar</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcSustituto" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.sustituto" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.sustituto">
                                    <label class="custom-control-label" for="ngcSustituto">Sustituto</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcCrema" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.crema" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.crema">
                                    <label class="custom-control-label" for="ngcCrema">Crema</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcDulcer" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.dulces" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.dulces">
                                    <label class="custom-control-label" for="ngcDulcer">Dulces</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcMantequilla" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.mantequilla" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.mantequilla">
                                    <label class="custom-control-label" for="ngcMantequilla">Mantequilla</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcAceite" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.aceite" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.aceite">
                                    <label class="custom-control-label" for="ngcAceite">Aceite</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcMayonesa" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.mayonesa" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.mayonesa">
                                    <label class="custom-control-label" for="ngcMayonesa">Mayonesa</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcAderezo" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.aderezo" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.aderezo">
                                    <label class="custom-control-label" for="ngcAderezo">Aderezo</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcVinagretas" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.vinagretas" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.vinagretas">
                                    <label class="custom-control-label" for="ngcVinagretas">Vinagretas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="sal" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.sal" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.sal">
                                    <label class="custom-control-label" for="sal">Sal</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcSalsas" v-model="formDataCopy.recordatorioNutricion.alimentosOlvidados.salsas" :checked="formDataCopy.recordatorioNutricion.alimentosOlvidados.salsas">
                                    <label class="custom-control-label" for="ngcSalsas">Salsas</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>








    <div class="tab-content tab-space">
        <div class="tab-pane  active show" id="link1">
            <div class="row">
                <div id="accordion" class="col-12 my-3">

                    <div class="card">
                        <div class="card-header p-0" id="head-anexo5e">
                            <h5 class="mb-0">
                                <a class="btn btn-link" data-toggle="collapse" data-target="#anexo6e-tab"
                                    aria-expanded="true" aria-controls="collapseOne">
                                    <i class="fas fa-plus mr-2"></i>ANTROPOMETRICOS
                                </a>
                            </h5>
                        </div>
                        <div id="anexo6e-tab" class="collapse" aria-labelledby="head-anexo6e" data-parent="#accordion">
                            <div class="card-body">
                                <div class="form-row">

                                    <div class="form-row mt-1 p-0">
                                        <div class=" col-md-2">
                                            <label for="" class="col-form-label col-form-label-lg">Edad</label>
                                            <input class="form-control form-control-lg" type="text">
                                        </div>
                                        <div class=" col-md-2">
                                            <label for="" class="col-form-label col-form-label-lg">Indicador</label>
                                            <input class="form-control form-control-lg" type="text">
                                        </div>
                                        <div class=" col-md-2">
                                            <label for="" class="col-form-label col-form-label-lg">Talla</label>
                                            <input class="form-control form-control-lg" type="text">
                                        </div>
                                        <div class=" col-md-3">
                                            <label for="" class="col-form-label col-form-label-lg">Peso
                                                pre gestacional</label>
                                            <input class="form-control form-control-lg" type="text">
                                        </div>
                                        <div class=" col-md-3">
                                            <label for="" class="col-form-label col-form-label-lg">IMC pre
                                                gestacional</label>
                                            <input class="form-control form-control-lg" type="text">
                                        </div>
                                        <div class="col-md-5">
                                            <label for="" class="col-form-label col-form-label-lg">Ganancia
                                                de peso recomendada al final del
                                                embarazo</label>
                                            <input class="form-control form-control-lg" type="text">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="" class="col-form-label col-form-label-lg">Ganancia
                                                de peso durante el 2do y 3er trimestre
                                                (semanal)</label>
                                            <input class="form-control form-control-lg" type="text">
                                        </div>
                                        <div class="col-md-12 mb-2">
                                            <label for="" class="col-form-label col-form-label-lg">Notas</label>
                                            <textarea class="form-control form-control-lg"
                                                id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" src="./NutricionGeneralComponent.ts"></script>
