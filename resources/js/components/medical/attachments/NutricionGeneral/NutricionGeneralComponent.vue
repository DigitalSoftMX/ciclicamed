<template>

    <div class="card">
        <div class="card-header">
            <h6>Nutrición general</h6>
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
                <div id="ngcPeso" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 card p-0 shadow-none mb-25">
                        <div class="card-header">
                            <h4>Peso mínimo</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMinimo">Peso mínimo</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcPesoMinimo" v-model="formData.peso.pesoMinimo.pesoMinimo">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMinimoCuanto">¿Hace cuanto?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcPesoMinimoCuanto" v-model="formData.peso.pesoMinimo.haceCuanto">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMinimoDurante">¿Durante cuanto tiempo?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcPesoMinimoDurante" v-model="formData.peso.pesoMinimo.desdeCuanto">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card p-0 shadow-none mb-25">
                        <div class="card-header">
                            <h4>Peso máximo</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMaximo">Peso máximo</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcPesoMaximo" v-model="formData.peso.pesoMaximo.pesoMinimo">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMaximoCuanto">¿Hace cuanto?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcPesoMaximoCuanto" v-model="formData.peso.pesoMaximo.haceCuanto">
                            </div>
                            <div class="col-12 col-md-4 mb-25 mb-md-0">
                                <label for="ngcPesoMaximoDurante">¿Durante cuanto tiempo?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcPesoMaximoDurante" v-model="formData.peso.pesoMaximo.desdeCuanto">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-0">
                        <label for="ngcPesoHabitual">Peso habitual</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ngcPesoHabitual" v-model="formData.peso.pesoHabitual">
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
                <div id="ngcAntecedentesSalud" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 card p-0 shadow-none mb-25">
                        <div class="card-header">
                            <h4>Problemas actuales</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcDiarrea" v-model="formData.antecedentesSalud.problemasActuales.diarrea"
                                        :checked="formData.antecedentesSalud.problemasActuales.diarrea">
                                    <label class="custom-control-label" for="ngcDiarrea">Diarrea</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcEstrenimiento"
                                        v-model="formData.antecedentesSalud.problemasActuales.estrenimiento"
                                        :checked="formData.antecedentesSalud.problemasActuales.estrenimiento">
                                    <label class="custom-control-label" for="ngcEstrenimiento">Estreñimiento</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcGastritis"
                                        v-model="formData.antecedentesSalud.problemasActuales.gastitris"
                                        :checked="formData.antecedentesSalud.problemasActuales.gastitris">
                                    <label class="custom-control-label" for="ngcGastritis">Gastritis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcUlcera" v-model="formData.antecedentesSalud.problemasActuales.ulcera"
                                        :checked="formData.antecedentesSalud.problemasActuales.ulcera">
                                    <label class="custom-control-label" for="ngcUlcera">Úlcera</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcNauseas" v-model="formData.antecedentesSalud.problemasActuales.nauseas"
                                        :checked="formData.antecedentesSalud.problemasActuales.nauseas">
                                    <label class="custom-control-label" for="ngcNauseas">Náuseas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcPirosis" v-model="formData.antecedentesSalud.problemasActuales.pirosis"
                                        :checked="formData.antecedentesSalud.problemasActuales.pirosis">
                                    <label class="custom-control-label" for="ngcPirosis">Pirosis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcVomito" v-model="formData.antecedentesSalud.problemasActuales.vomito"
                                        :checked="formData.antecedentesSalud.problemasActuales.vomito">
                                    <label class="custom-control-label" for="ngcVomito">Vómito</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcColitis" v-model="formData.antecedentesSalud.problemasActuales.colitis"
                                        :checked="formData.antecedentesSalud.problemasActuales.colitis">
                                    <label class="custom-control-label" for="ngcColitis">Colitis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcDentarua"
                                        v-model="formData.antecedentesSalud.problemasActuales.dentadura"
                                        :checked="formData.antecedentesSalud.problemasActuales.dentadura">
                                    <label class="custom-control-label" for="ngcDentarua">Dentadura</label>
                                </div>
                            </div>
                            <div class="col-12 card shadow-none p-0 card-md">
                                <div class="card-header">
                                    <h6>Otros</h6>
                                    <div class="custom-control custom-switch switch-primary switch-md">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                            id="ngcOtros"
                                            v-model="formData.antecedentesSalud.problemasActuales.otros.check"
                                            :checked="formData.antecedentesSalud.problemasActuales.otros.check">
                                        <label class="custom-control-label" for="ngcOtros"></label>
                                    </div>
                                </div>
                                <div class="card-body"
                                    v-show="formData.antecedentesSalud.problemasActuales.otros.check">
                                    <textarea class="form-control form-control-lg" rows="4" type="text"
                                        id="ngcOtrosDescription"
                                        v-model="formData.antecedentesSalud.problemasActuales.otros.description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 row mb-25 mx-0 p-0">
                        <div class="col-12 mb-25 p-0">
                            <label for="ngcObservaciones">Observaciones</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="ngcObservaciones" v-model="formData.antecedentesSalud.observaciones"></textarea>
                        </div>

                        <div class="col-12 card p-0 shadow-none mb-25">
                            <div class="card-header">
                                <h4>TA</h4>
                            </div>
                            <div class="row card-body mx-0">
                                <div class="col-12 col-md-6">
                                    <label for="ngcTABrazoDerecho">Brazo derecho</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcTABrazoDerecho" v-model="formData.antecedentesSalud.ta.brazoDerecho">
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="ngcTABrazoIzquierdo">Brazo izquierdo</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcTABrazoIzquierdo" v-model="formData.antecedentesSalud.ta.brazoIzquierdo">
                                </div>
                            </div>
                        </div>

                        <div class="col-12 mb-25 p-0">
                            <label for="ngcEnfermedadDiagnosticada">¿Padece alguna enfermedad diagnosticada?</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="ngcEnfermedadDiagnosticada"
                                v-model="formData.antecedentesSalud.padeceEnfermedadDiagnosticada"></textarea>
                        </div>

                        <div class="col-12 mb-25 p-0">
                            <label for="ngcEnfermedadImportante">¿Ha padecido alguna enfermededad importante?</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="ngcEnfermedadImportante"
                                v-model="formData.antecedentesSalud.padecioEnfermedadImportante"></textarea>
                        </div>

                        <div class="col-12 card shadow-none p-0 card-md mb-25">
                            <div class="card-header">
                                <h6>¿Toma algún medicamento?</h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcTomaMedicamento"
                                        v-model="formData.antecedentesSalud.tomaMedicamento.check"
                                        :checked="formData.antecedentesSalud.tomaMedicamento.check">
                                    <label class="custom-control-label" for="ngcTomaMedicamento"></label>
                                </div>
                            </div>
                            <div class="row mx-0 card-body" v-show="formData.antecedentesSalud.tomaMedicamento.check">
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento1Cual">¿Cúal?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled"
                                            id="ngcTomaMedicamento1Cual"
                                            v-model="formData.antecedentesSalud.tomaMedicamento.medicamento1.cual">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento1Dosis">Dosis</label>
                                        <input class="form-control form-control-lg" :disabled="disabled"
                                            id="ngcTomaMedicamento1Dosis"
                                            v-model="formData.antecedentesSalud.tomaMedicamento.medicamento1.dosis">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento1Cuando">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled"
                                            id="ngcTomaMedicamento1Cuando"
                                            v-model="formData.antecedentesSalud.tomaMedicamento.medicamento1.cuando">
                                    </div>
                                </div>
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento2Cual">¿Cúal?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled"
                                            id="ngcTomaMedicamento2Cual"
                                            v-model="formData.antecedentesSalud.tomaMedicamento.medicamento2.cual">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento2Dosis">Dosis</label>
                                        <input class="form-control form-control-lg" :disabled="disabled"
                                            id="ngcTomaMedicamento2Dosis"
                                            v-model="formData.antecedentesSalud.tomaMedicamento.medicamento2.dosis">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="ngcTomaMedicamento2Cuando">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled"
                                            id="ngcTomaMedicamento2Cuando"
                                            v-model="formData.antecedentesSalud.tomaMedicamento.medicamento2.cuando">
                                    </div>
                                </div>
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="ngcTomaMedicamento3Cual">¿Cúal?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled"
                                            id="ngcTomaMedicamento3Cual"
                                            v-model="formData.antecedentesSalud.tomaMedicamento.medicamento3.cual">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="ngcTomaMedicamento3Dosis">Dosis</label>
                                        <input class="form-control form-control-lg" :disabled="disabled"
                                            id="ngcTomaMedicamento3Dosis"
                                            v-model="formData.antecedentesSalud.tomaMedicamento.medicamento3.dosis">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="ngcTomaMedicamento3Cuando">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled"
                                            id="ngcTomaMedicamento3Cuando"
                                            v-model="formData.antecedentesSalud.tomaMedicamento.medicamento3.cuando">
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-12 card p-0 shadow-none mb-25">
                            <div class="card-header">
                                <h4>Toma...</h4>
                            </div>
                            <div class="row card-body mx-0">
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                            id="ngcLaxantes" v-model="formData.antecedentesSalud.toma.laxantes"
                                            :checked="formData.antecedentesSalud.toma.laxantes">
                                        <label class="custom-control-label" for="ngcLaxantes">Laxantes</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                            id="ngcDiureticos" v-model="formData.antecedentesSalud.toma.diureticos"
                                            :checked="formData.antecedentesSalud.toma.diureticos">
                                        <label class="custom-control-label" for="ngcDiureticos">Diuréticos</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                            id="ngcAntiacidos" v-model="formData.antecedentesSalud.toma.antiacidos"
                                            :checked="formData.antecedentesSalud.toma.antiacidos">
                                        <label class="custom-control-label" for="ngcAntiacidos">Antiácidos</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                            id="ngcAnalgesicos" v-model="formData.antecedentesSalud.toma.analgesicos"
                                            :checked="formData.antecedentesSalud.toma.analgesicos">
                                        <label class="custom-control-label" for="ngcAnalgesicos">Analgésicos</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 p-0">
                            <label for="ngcPracticadoCirugia">¿Le han practicado alguna cirugía?</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="ngcPracticadoCirugia"
                                v-model="formData.antecedentesSalud.cirugiaAnterior"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcAntecedentesFamiliares"
                        aria-expanded="true" aria-controls="ngcAntecedentesFamiliares">
                        <i class="la la-angle-right"></i>
                        Antecedentes familiares
                    </a>
                </div>
                <div id="ngcAntecedentesFamiliares" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcObesidad"
                                v-model="formData.antecedentesFamiliares.obesidad"
                                :checked="formData.antecedentesFamiliares.obesidad">
                            <label class="custom-control-label" for="ngcObesidad">Obesidad</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcHTA"
                                v-model="formData.antecedentesFamiliares.hta"
                                :checked="formData.antecedentesFamiliares.hta">
                            <label class="custom-control-label" for="ngcHTA">HTA</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcCancer"
                                v-model="formData.antecedentesFamiliares.cancer"
                                :checked="formData.antecedentesFamiliares.cancer">
                            <label class="custom-control-label" for="ngcCancer">Cáncer</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                id="ngcHipercolesterolemia"
                                v-model="formData.antecedentesFamiliares.hipercolesterolemia"
                                :checked="formData.antecedentesFamiliares.hipercolesterolemia">
                            <label class="custom-control-label" for="ngcHipercolesterolemia">Hipercolesterolemia</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                id="ngcHipertrigliceridemia"
                                v-model="formData.antecedentesFamiliares.hipertrigliceridemia"
                                :checked="formData.antecedentesFamiliares.hipertrigliceridemia">
                            <label class="custom-control-label"
                                for="ngcHipertrigliceridemia">Hipertrigliceridemia</label>
                        </div>
                    </div>
                    <div class="col-12 card shadow-none p-0 card-md">
                        <div class="card-header">
                            <h6>Diabetes</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcDiabetes" v-model="formData.antecedentesFamiliares.diabetes.check"
                                    :checked="formData.antecedentesFamiliares.diabetes.check">
                                <label class="custom-control-label" for="ngcDiabetes"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.antecedentesFamiliares.diabetes.check">
                            <select class="form-control form-control-lg" :disabled="disabled"
                                id="ngcDiabetesDescription"
                                v-model="formData.antecedentesFamiliares.diabetes.description">
                                <option value="TipoI">Tipo I</option>
                                <option value="TipoII">Tipo II</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcAspectosGinecologicos"
                        aria-expanded="true" aria-controls="ngcAspectosGinecologicos">
                        <i class="la la-angle-right"></i>
                        Aspectos ginecológicos
                    </a>
                </div>
                <div id="ngcAspectosGinecologicos" class="atbd-collapse-item__body collapse row mx-0 card-body">

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>Embarazo actual</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcEmbarazoActualDescription"
                                    v-model="formData.aspectosGinecologicos.embarazoActual.check"
                                    :checked="formData.aspectosGinecologicos.embarazoActual.check">
                                <label class="custom-control-label" for="ngcEmbarazoActualDescription"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.aspectosGinecologicos.embarazoActual.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcEmbarazoActualSemanas">Semanas de gestación</label>
                                <input class="form-control form-control-lg" type="number" :disabled="disabled"
                                    id="ngcEmbarazoActualSemanas"
                                    v-model="formData.aspectosGinecologicos.embarazoActual.semanasGestacion">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="">Peso pregestacional</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcEmbarazoPesoPregestacional"
                                    v-model="formData.aspectosGinecologicos.embarazoActual.pesoPregestacional">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>Anticonceptivos orales</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcAnticonceptivosorales"
                                    v-model="formData.aspectosGinecologicos.anticonceptivosOrales.check"
                                    :checked="formData.aspectosGinecologicos.anticonceptivosOrales.check">
                                <label class="custom-control-label" for="ngcAnticonceptivosorales"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body"
                            v-show="formData.aspectosGinecologicos.anticonceptivosOrales.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcAnticonceptivosOralesCual">¿Cuál?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcAnticonceptivosOralesCual"
                                    v-model="formData.aspectosGinecologicos.anticonceptivosOrales.cual">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcAnticonceptivosOralesDosis">Dosis</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcAnticonceptivosOralesDosis"
                                    v-model="formData.aspectosGinecologicos.anticonceptivosOrales.dosis">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcAnticonceptivosOralesSX">SX</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcAnticonceptivosOralesSX"
                                    v-model="formData.aspectosGinecologicos.anticonceptivosOrales.sx">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>Climaterio</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcClimaterio" v-model="formData.aspectosGinecologicos.climaterio.check"
                                    :checked="formData.aspectosGinecologicos.climaterio.check">
                                <label class="custom-control-label" for="ngcClimaterio"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.aspectosGinecologicos.climaterio.check">
                            <label for="">Fecha</label>
                            <input class="form-control form-control-lg" type="date" :disabled="disabled"
                                id="ngcClimaterioFecha" v-model="formData.aspectosGinecologicos.climaterio.description">
                        </div>
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md">
                        <div class="card-header">
                            <h6>Terapia de reemplazo hormonal</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcTerapiaReemplazo"
                                    v-model="formData.aspectosGinecologicos.terapiaReemplazoHormonal.check"
                                    :checked="formData.aspectosGinecologicos.terapiaReemplazoHormonal.check">
                                <label class="custom-control-label" for="ngcTerapiaReemplazo"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body"
                            v-show="formData.aspectosGinecologicos.terapiaReemplazoHormonal.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcTerapiaReemplazoCual">¿Cuál?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcTerapiaReemplazoCual"
                                    v-model="formData.aspectosGinecologicos.terapiaReemplazoHormonal.cual">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcTerapiaReemplazoDosis">Dosis</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcTerapiaReemplazoDosis"
                                    v-model="formData.aspectosGinecologicos.terapiaReemplazoHormonal.dosis">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcTerapiaReemplazoSX">SX</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcTerapiaReemplazoSX"
                                    v-model="formData.aspectosGinecologicos.terapiaReemplazoHormonal.sx">
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
                <div id="ngcActividadFisica" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ngcProfesion">¿Cuál es tu profesión?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcProfesion"
                            v-model="formData.actividadFisica.profesion">
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ngcPracticaDeporte">¿Practica algún deporte o hace ejercicio?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ngcPracticaDeporte" v-model="formData.actividadFisica.practicaDeporte">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ngcCuantosDiasDeporte">¿Cúantos días y horas al día hace ejercicio?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ngcCuantosDiasDeporte" v-model="formData.actividadFisica.cuantoTiempo">
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
                <div id="ngcConsumoFrecuencia" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>Alcohol</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcAlcohol"
                                    v-model="formData.consumoFrecuencia.alcohol.check"
                                    :checked="formData.consumoFrecuencia.alcohol.check">
                                <label class="custom-control-label" for="ngcAlcohol"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.consumoFrecuencia.alcohol.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcAlcoholCantidad">Cantidad</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcAlcoholCantidad" v-model="formData.consumoFrecuencia.alcohol.cantidad">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcAlcoholFrecuencia">Frecuencia</label>
                                <select class="form-control form-control-lg" :disabled="disabled"
                                    id="ngcAlcoholFrecuencia" v-model="formData.consumoFrecuencia.alcohol.frecuencia">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>Tabaco</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcTabaco"
                                    v-model="formData.consumoFrecuencia.tabaco.check"
                                    :checked="formData.consumoFrecuencia.tabaco.check">
                                <label class="custom-control-label" for="ngcTabaco"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.consumoFrecuencia.tabaco.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcTabacoCantidad">Cantidad</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcTabacoCantidad" v-model="formData.consumoFrecuencia.tabaco.cantidad">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcTabacoFrecuencia">Frecuencia</label>
                                <select class="form-control form-control-lg" :disabled="disabled"
                                    id="ngcTabacoFrecuencia" v-model="formData.consumoFrecuencia.tabaco.frecuencia">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card shadow-none p-0 card-md">
                        <div class="card-header">
                            <h6>Café</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcCafe"
                                    v-model="formData.consumoFrecuencia.cafe.check"
                                    :checked="formData.consumoFrecuencia.cafe.check">
                                <label class="custom-control-label" for="ngcCafe"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.consumoFrecuencia.cafe.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Cantidad</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcCafeCantidad" v-model="formData.consumoFrecuencia.cafe.cantidad">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Frecuencia</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="ngcCafeFrecuencia"
                                    v-model="formData.consumoFrecuencia.cafe.frecuencia">
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
                    <a class="item-link" data-toggle="collapse" data-target="#ngcIndicadoresBioquimicos"
                        aria-expanded="true" aria-controls="ngcIndicadoresBioquimicos">
                        <i class="la la-angle-right"></i>
                        Indicadores bioquímicos
                    </a>
                </div>
                <div id="ngcIndicadoresBioquimicos" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 mb-25">
                        <label for="ngcUltimosEstudios">Últimos estudios de laboratorio</label>
                        <textarea class="form-control form-control-lg" rows="5" :disabled="disabled"
                            id="ngcUltimosEstudios" v-model="formData.indicadoresBioquimicos.ultimoEstudios"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Datos bioquímicos relevantes</label>
                        <textarea class="form-control form-control-lg" rows="5" :disabled="disabled"
                            id="ngcDatosBioquimicos"
                            v-model="formData.indicadoresBioquimicos.datosBioquimicos"></textarea>
                    </div>
                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>Se solicitaron análisis</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcSolicitaronAnalisis" v-model="formData.indicadoresBioquimicos.analisis.check"
                                    :checked="formData.indicadoresBioquimicos.analisis.check">
                                <label class="custom-control-label" for="ngcSolicitaronAnalisis"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.indicadoresBioquimicos.analisis.check">
                            <label for="ngcSolicitaronAnalisisCuales">¿Cúales</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="ngcSolicitaronAnalisisCuales"
                                v-model="formData.indicadoresBioquimicos.analisis.description">
                        </div>
                    </div>
                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>Glucosa capilar</h6>
                        </div>
                        <div class="row mx-0 card-body">
                            <div class="col-12 col-md-6 row mx-0 p-0 mb-25">
                                <div class="col-6">
                                    <label for="">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcGlucosaCapilar1Dia"
                                        v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa1.dia">
                                </div>
                                <div class="col-6">
                                    <label for="">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcGlucosaCapilar1Glucosa"
                                        v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa1.glucosa">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0 mb-25">
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar2Dia">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcGlucosaCapilar2Dia"
                                        v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa2.dia">
                                </div>
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar2Glucosa">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcGlucosaCapilar2Glucosa"
                                        v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa2.glucosa">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0">
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar3Dia">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcGlucosaCapilar3Dia"
                                        v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa3.dia">
                                </div>
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar3Glucosa">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcGlucosaCapilar3Glucosa"
                                        v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa3.glucosa">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0">
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar4Dia">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcGlucosaCapilar4Dia"
                                        v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa4.dia">
                                </div>
                                <div class="col-6">
                                    <label for="ngcGlucosaCapilar4Glucosa">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcGlucosaCapilar4Glucosa"
                                        v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa4.glucosa">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcIndicadoresDieteticos"
                        aria-expanded="true" aria-controls="ngcIndicadoresDieteticos">
                        <i class="la la-angle-right"></i>
                        Indicadores dietéticos
                    </a>
                </div>
                <div id="ngcIndicadoresDieteticos" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 mb-25">
                        <label for="ngcComidasDia">¿Cúantas comidas hace al día?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcComidasDia"
                            v-model="formData.indicadoresDieteticos.comidas">
                    </div>
                    <div class="col-12 mb-25">
                        <label for="ngcPreparaAlimentos">¿Quién prepara sus alimentos?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ngcPreparaAlimentos" v-model="formData.indicadoresDieteticos.preparaAlimentos">
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>¿Come entre comidas?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcComeEntreComidas"
                                    v-model="formData.indicadoresDieteticos.comeEntreComidas.check"
                                    :checked="formData.indicadoresDieteticos.comeEntreComidas.check">
                                <label class="custom-control-label" for="ngcComeEntreComidas"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.indicadoresDieteticos.comeEntreComidas.check">
                            <label for="">¿Qué come?</label>
                            <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                id="ngcComeEntreComidasQue"
                                v-model="formData.indicadoresDieteticos.comeEntreComidas.description"></textarea>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>¿Ha modificado su alimentación en los ultimos 6 meses (trabajo, estudio o actividad)?
                            </h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcModificadoAlimentacion"
                                    v-model="formData.indicadoresDieteticos.modificadoAlimentacion.check"
                                    :checked="formData.indicadoresDieteticos.modificadoAlimentacion.check">
                                <label class="custom-control-label" for="ngcModificadoAlimentacion"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body"
                            v-show="formData.indicadoresDieteticos.modificadoAlimentacion.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcModificadoAlimentacionPorQue">¿Por qué?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcModificadoAlimentacionPorQue"
                                    v-model="formData.indicadoresDieteticos.modificadoAlimentacion.porQue"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcModificadoAlimentacionComo">¿Cómo?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcModificadoAlimentacionComo"
                                    v-model="formData.indicadoresDieteticos.modificadoAlimentacion.como"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25">
                        <label for="ngcApetito">Apetito</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ngcApetito"
                            v-model="formData.indicadoresDieteticos.apetito">
                            <option value="Bueno">Bueno</option>
                            <option value="Regular">Regular</option>
                            <option value="Malo">Malo</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ngcHoraHambre">¿A qué hora tiene más hambre?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ngcHoraHambre"
                            v-model="formData.indicadoresDieteticos.horaHambre">
                    </div>
                    <div class="col-12 mb-25">
                        <label for="ngcAlimentosPreferidos">Alimentos preferidos</label>
                        <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                            id="ngcAlimentosPreferidos"
                            v-model="formData.indicadoresDieteticos.alimentosPreferidos"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="ngcAlimentosNoAgradan">Alimentos que no le agradan o no acostumbra</label>
                        <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                            id="ngcAlimentosNoAgradan"
                            v-model="formData.indicadoresDieteticos.alimentosNoAgradan"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Alimentos que le causan malestar</label>
                        <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                            id="ngcAlimentosMalestar"
                            v-model="formData.indicadoresDieteticos.alimentosMalestar"></textarea>
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>¿Es alérgico a algún alimento?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcAlergicoAlimento" v-model="formData.indicadoresDieteticos.alergico.check"
                                    :checked="formData.indicadoresDieteticos.alergico.check">
                                <label class="custom-control-label" for="ngcAlergicoAlimento"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.indicadoresDieteticos.alergico.check">
                            <label for="ngcAlergicoDescription">¿Cúal?</label>
                            <textarea class="form-control form-control-lg" rows="2" :disabled="disabled"
                                id="ngcAlergicoDescription"
                                v-model="formData.indicadoresDieteticos.alergico.description"></textarea>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>¿Toma algún suplemento o complemento?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcTomaSuplemento" v-model="formData.indicadoresDieteticos.tomaSuplemento.check"
                                    :checked="formData.indicadoresDieteticos.tomaSuplemento.check">
                                <label class="custom-control-label" for="ngcTomaSuplemento"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.indicadoresDieteticos.tomaSuplemento.check">
                            <div class="col-12 row mx-0 mb-25 p-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento1Cual">¿Cúal?</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcTomaSuplemento1Cual"
                                        v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento1.cual">
                                </div>
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento1Dosis">Dosis</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcTomaSuplemento1Dosis"
                                        v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento1.dosis">
                                </div>
                            </div>
                            <div class="col-12 row mx-0 mb-25 p-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento2Cual">¿Cúal?</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcTomaSuplemento2Cual"
                                        v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento2.cual">
                                </div>
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento2Dosis">Dosis</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcTomaSuplemento2Dosis"
                                        v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento2.dosis">
                                </div>
                            </div>
                            <div class="col-12 row mx-0 mb-25 p-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento3Cual">¿Cúal?</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcTomaSuplemento3Cual"
                                        v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento3.cual">
                                </div>
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="ngcTomaSuplemento3Dosis">Dosis</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                        id="ngcTomaSuplemento3Dosis"
                                        v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento3.dosis">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>¿Su consumo varía cuando está triste, nervioso o ansioso?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcConsumoVariaTriste"
                                    v-model="formData.indicadoresDieteticos.consumoVariaTriste.check"
                                    :checked="formData.indicadoresDieteticos.consumoVariaTriste.check">
                                <label class="custom-control-label" for="ngcConsumoVariaTriste"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.indicadoresDieteticos.consumoVariaTriste.check">
                            <label for="">¿Cómo?</label>
                            <textarea class="form-control form-control-lg" rows="2" :disabled="disabled"
                                id="ngcConsumoVariaTristeComo"
                                v-model="formData.indicadoresDieteticos.consumoVariaTriste.description"></textarea>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25 align-self-center">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ngcSal"
                                v-model="formData.indicadoresDieteticos.agregaSal"
                                :checked="formData.indicadoresDieteticos.agregaSal">
                            <label class="custom-control-label" for="ngcSal">¿Agrega sal a la comida ya
                                preparada?</label>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25">
                        <label for="">¿Qué grasa utiliza en casa para preparar su comida?</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ngcGrasa"
                            v-model="formData.indicadoresDieteticos.grasaUtiliza">
                            <option value="Margarina">Margarina</option>
                            <option value="AceiteVegetal">Aceite vegetal</option>
                            <option value="Manteca">Manteca</option>
                            <option value="Mantequilla">Mantequilla</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>¿Ha llevado alguna dieta especial?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcDietaEspecial" v-model="formData.indicadoresDieteticos.dietaEspecial.check"
                                    :checked="formData.indicadoresDieteticos.dietaEspecial.check">
                                <label class="custom-control-label" for="ngcDietaEspecial"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.indicadoresDieteticos.dietaEspecial.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialEspecificar">Especificar</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcDietaEspecialEspecificar"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.dietas"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialCuantas">¿Cuantas?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcDietaEspecialCuantas"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.cuantas"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialTipo">¿Qué tipo de dieta?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcDietaEspecialTipo"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.tipo"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialHaceCuanto">¿Hace cuánto?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcDietaEspecialHaceCuanto"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.haceCuanto"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialPorCuanto">¿Por cuánto tiempo?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcDietaEspecialPorCuanto"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.porCuanto"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialPorQue">¿Por qué razón?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcDietaEspecialPorQue"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.porQue"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialTantoApego">¿Qué tanto se apegó a ella?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcDietaEspecialTantoApego"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.tantoApego"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialObtuvoResultados">¿Obtuvo los resultados esperados?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcDietaEspecialObtuvoResultados"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.obtuvoResultados"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialKGPerdidos">¿Kg perdidos?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcDietaEspecialKGPerdidos"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.kgPerdidos">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ngcDietaEspecialPesoLogrado">¿Peso logrado?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcDietaEspecialPesoLogrado"
                                    v-show="formData.indicadoresDieteticos.dietaEspecial.pesoLogrado">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none p-0 card-md mb-25">
                        <div class="card-header">
                            <h6>¿Ha utilizado medicamentos para bajar de peso?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ngcMedicamentosBajar"
                                    v-model="formData.indicadoresDieteticos.medicamentosBajar.check"
                                    :checked="formData.indicadoresDieteticos.medicamentosBajar.check">
                                <label class="custom-control-label" for="ngcMedicamentosBajar"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.indicadoresDieteticos.medicamentosBajar.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcMedicamentosBajarCuales">¿Cuáles?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcMedicamentosBajarCuales"
                                    v-model="formData.indicadoresDieteticos.medicamentosBajar.cuales"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="ngcMedicamentosBajarCuantoTiempo">¿Por cuánto tiempo?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled"
                                    id="ngcMedicamentosBajarCuantoTiempo"
                                    v-model="formData.indicadoresDieteticos.medicamentosBajar.cuantoTiempo"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ngcRecordatorioNutricional"
                        aria-expanded="true" aria-controls="ngcRecordatorioNutricional">
                        <i class="la la-angle-right"></i>
                        Recordatorio de 24 horas
                    </a>
                </div>
                <div id="ngcRecordatorioNutricional" class="atbd-collapse-item__body collapse row mx-0 card-body">

                    <div class="card mb-25 shadow-none">
                        <div class="card-header">
                            <h4>Entre semana</h4>
                        </div>
                        <div class="col-12 row mx-0 card-body">
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaDesayuno">Desayuno</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcEntreSemanaDesayuno"
                                    v-model="formData.recordatorioNutricion.entreSemana.desayuno.desayuno"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaDesayunoColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcEntreSemanaDesayunoColacion"
                                    v-model="formData.recordatorioNutricion.entreSemana.desayuno.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaComida">Comida</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcEntreSemanaComida"
                                    v-model="formData.recordatorioNutricion.entreSemana.comida.comida"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaComidaColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcEntreSemanaComidaColacion"
                                    v-model="formData.recordatorioNutricion.entreSemana.comida.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcEntreSemanaCena">Cena</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcEntreSemanaCena"
                                    v-model="formData.recordatorioNutricion.entreSemana.cena"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-25 shadow-none">
                        <div class="card-header">
                            <h4>Fin de semana</h4>
                        </div>
                        <div class="row mx-0 card-body">
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaDesayuno">Desayuno</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcFinSemanaDesayuno"
                                    v-model="formData.recordatorioNutricion.finSemana.desayuno.desayuno"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaDesayunoColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcFinSemanaDesayunoColacion"
                                    v-model="formData.recordatorioNutricion.finSemana.desayuno.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaComida">Comida</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcFinSemanaComida"
                                    v-model="formData.recordatorioNutricion.finSemana.comida.comida"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaComidaColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcFinSemanaComidaColacion"
                                    v-model="formData.recordatorioNutricion.finSemana.comida.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="ngcFinSemanaCena">Cena</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="ngcFinSemanaCena"
                                    v-model="formData.recordatorioNutricion.finSemana.cena"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-none p-0">
                        <div class="card-header">
                            <h4> Alimentos olvidados</h4>
                        </div>
                        <div class="row mx-0 card-body">
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcChicles"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.chicles"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.chicles">
                                    <label class="custom-control-label" for="ngcChicles">Chicles</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcMentas"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.mentas"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.mentas">
                                    <label class="custom-control-label" for="ngcMentas">Mentas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcPatillas"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.patillas"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.patillas">
                                    <label class="custom-control-label" for="ngcPatillas">Patillas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcMermeladas"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.mermeladas"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.mermeladas">
                                    <label class="custom-control-label" for="ngcMermeladas">Mermeladas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcMiel" v-model="formData.recordatorioNutricion.alimentosOlvidados.miel"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.miel">
                                    <label class="custom-control-label" for="ngcMiel">Miel</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcAzucar"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.azucar"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.azucar">
                                    <label class="custom-control-label" for="ngcAzucar">Azúcar</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcSustituto"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.sustituto"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.sustituto">
                                    <label class="custom-control-label" for="ngcSustituto">Sustituto</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcCrema" v-model="formData.recordatorioNutricion.alimentosOlvidados.crema"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.crema">
                                    <label class="custom-control-label" for="ngcCrema">Crema</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcDulcer"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.dulces"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.dulces">
                                    <label class="custom-control-label" for="ngcDulcer">Dulces</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcMantequilla"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.mantequilla"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.mantequilla">
                                    <label class="custom-control-label" for="ngcMantequilla">Mantequilla</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcAceite"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.aceite"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.aceite">
                                    <label class="custom-control-label" for="ngcAceite">Aceite</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcMayonesa"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.mayonesa"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.mayonesa">
                                    <label class="custom-control-label" for="ngcMayonesa">Mayonesa</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcAderezo"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.aderezo"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.aderezo">
                                    <label class="custom-control-label" for="ngcAderezo">Aderezo</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcVinagretas"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.vinagretas"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.vinagretas">
                                    <label class="custom-control-label" for="ngcVinagretas">Vinagretas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="sal"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.sal"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.sal">
                                    <label class="custom-control-label" for="sal">Sal</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ngcSalsas"
                                        v-model="formData.recordatorioNutricion.alimentosOlvidados.salsas"
                                        :checked="formData.recordatorioNutricion.alimentosOlvidados.salsas">
                                    <label class="custom-control-label" for="ngcSalsas">Salsas</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcAntropometria" aria-expanded="true"
                        aria-controls="npcAntropometria">
                        <i class="la la-angle-right"></i>
                        Antropometría
                    </a>
                </div>
                <div id="npcAntropometria" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="mb-25 row mx-0">
                        <div class="col-12 col-md-6 mb-25">
                            <label>Peso mínimo</label>
                            <input class="form-control form-control-lg" type="number"
                                v-model="formData.antropometricos.pesoMinino">
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label>Peso máximo</label>
                            <input class="form-control form-control-lg" type="number"
                                v-model="formData.antropometricos.pesoMaximo">
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label>Peso ideal</label>
                            <input class="form-control form-control-lg" type="number"
                                v-model="formData.antropometricos.pesoIdeal">
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label>Indicador</label>
                            <input class="form-control form-control-lg" type="number"
                                v-model="formData.antropometricos.indicador">
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Semana 1</th>
                                    <th scope="col">Semana 2</th>
                                    <th scope="col">Semana 3</th>
                                    <th scope="col">Semana 4</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Semana 1</th>
                                    <th scope="col">Semana 2</th>
                                    <th scope="col">Semana 3</th>
                                    <th scope="col">Semana 4</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Fecha</th>
                                    <td><input class="form-control form-control-lg" type="date"
                                            v-model="formData.antropometricos.sem1.fecha"></td>
                                    <td><input class="form-control form-control-lg" type="date"
                                            v-model="formData.antropometricos.sem2.fecha"></td>
                                    <td><input class="form-control form-control-lg" type="date"
                                            v-model="formData.antropometricos.sem3.fecha"></td>
                                    <td><input class="form-control form-control-lg" type="date"
                                            v-model="formData.antropometricos.sem4.fecha"></td>
                                    <td>
                                        <input class="form-control form-control-lg" type="date" disabled="true">
                                    </td>
                                    <td><input class="form-control form-control-lg" type="date"
                                            v-model="formData.antropometricos.sem5.fecha"></td>
                                    <td><input class="form-control form-control-lg" type="date"
                                            v-model="formData.antropometricos.sem6.fecha"></td>
                                    <td><input class="form-control form-control-lg" type="date"
                                            v-model="formData.antropometricos.sem7.fecha"></td>
                                    <td><input class="form-control form-control-lg" type="date"
                                            v-model="formData.antropometricos.sem8.fecha"></td>
                                    <td>
                                        <input class="form-control form-control-lg" type="date" disabled="true">
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Talla</th>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem1.talla">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem2.talla">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem3.talla">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem4.talla">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total1.talla">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem5.talla">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem6.talla">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem7.talla">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem8.talla">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total2.talla">
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Peso</th>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem1.peso">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem2.peso">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem3.peso">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem4.peso">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total1.peso">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem5.peso">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem6.peso">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem7.peso">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem8.peso">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total2.peso">
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Cintura</th>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem1.cintura">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem2.cintura">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem3.cintura">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem4.cintura">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total1.cintura">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem5.cintura">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem6.cintura">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem7.cintura">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem8.cintura">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total2.cintura">
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Abdomen</th>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem1.abdomen">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem2.abdomen">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem3.abdomen">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem4.abdomen">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total1.abdomen">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem5.abdomen">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem6.abdomen">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem7.abdomen">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem8.abdomen">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total2.abdomen">
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Cadera</th>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem1.cadera">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem2.cadera">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem3.cadera">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem4.cadera">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total1.cadera">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem5.cadera">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem6.cadera">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem7.cadera">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem8.cadera">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total2.cadera">
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">IMC</th>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem1.imc">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem2.imc">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem3.imc">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem4.imc">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total1.imc">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem5.imc">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem6.imc">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem7.imc">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.sem8.imc">
                                    </td>
                                    <td>
                                        <input class="form-control form-control-lg" type="number"
                                            v-model="formData.antropometricos.total2.imc">
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Notas</th>
                                    <td><textarea class="form-control form-control-lg" rows="5"
                                            v-model="formData.antropometricos.sem1.notas"></textarea></td>
                                    <td><textarea class="form-control form-control-lg" rows="5"
                                            v-model="formData.antropometricos.sem2.notas"></textarea></td>
                                    <td><textarea class="form-control form-control-lg" rows="5"
                                            v-model="formData.antropometricos.sem3.notas"></textarea></td>
                                    <td><textarea class="form-control form-control-lg" rows="5"
                                            v-model="formData.antropometricos.sem4.notas"></textarea></td>
                                    <td></td>
                                    <td><textarea class="form-control form-control-lg" rows="5"
                                            v-model="formData.antropometricos.sem5.notas"></textarea></td>
                                    <td><textarea class="form-control form-control-lg" rows="5"
                                            v-model="formData.antropometricos.sem6.notas"></textarea></td>
                                    <td><textarea class="form-control form-control-lg" rows="5"
                                            v-model="formData.antropometricos.sem7.notas"></textarea></td>
                                    <td><textarea class="form-control form-control-lg" rows="5"
                                            v-model="formData.antropometricos.sem8.notas"></textarea></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./NutricionGeneralComponent.ts"></script>
