<template>

    <div class="card">
        <div class="card-header">
            <h6>Nutrición perinatal</h6>
        </div>
        <div class="card-body">
            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcEmbarazosAnteriores"
                        aria-expanded="true" aria-controls="npcEmbarazosAnteriores">
                        <i class="la la-angle-right"></i>
                        Embarazos anteriores
                    </a>
                </div>
                <div id="npcEmbarazosAnteriores" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 mb-25 p-0">
                        <label for="npcNumeroEmbarazos">Número de embarazos</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcNumeroEmbarazos"
                            v-model="formData.embarazosAnteriores.numeroEmbarazos">
                    </div>
                    <div class="col-12 card shadow-none card-md p-0 mb-25">
                        <div class="card-header">
                            <h6>Embarazo 1</h6>
                        </div>
                        <div class="row mx-0 card-body">
                            <div class="col-12 col-md-6">
                                <label for="npcE1PesoPregestacional">Peso pre-gestacional</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcE1PesoPregestacional"
                                    v-model="formData.embarazosAnteriores.embarazo1.pesoPregestacional">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcE1PesoFinal">Peso al final del embarazo</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcE1PesoFinal"
                                    v-model="formData.embarazosAnteriores.embarazo1.pesoFinalEmbarazo">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card shadow-none card-md p-0 mb-25">
                        <div class="card-header">
                            <h6>Embarazo 2</h6>
                        </div>
                        <div class="row mx-0 card-body">
                            <div class="col-12 col-md-6">
                                <label for="npcE2PesoPregestacional">Peso pre-gestacional</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcE2PesoPregestacional"
                                    v-model="formData.embarazosAnteriores.embarazo2.pesoPregestacional">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcE2PesoFinal">Peso al final del embarazo</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcE2PesoFinal"
                                    v-model="formData.embarazosAnteriores.embarazo2.pesoFinalEmbarazo">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card shadow-none card-md p-0 mb-25">
                        <div class="card-header">
                            <h6>Embarazo 3</h6>
                        </div>
                        <div class="row mx-0 card-body">
                            <div class="col-12 col-md-6">
                                <label for="npcE3PesoPregestacional">Peso pre-gestacional</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcE3PesoPregestacional"
                                    v-model="formData.embarazosAnteriores.embarazo3.pesoPregestacional">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Peso al final del embarazo</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcE3PesoFinal"
                                    v-model="formData.embarazosAnteriores.embarazo3.pesoFinalEmbarazo">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcEmbarazoActual" aria-expanded="true"
                        aria-controls="npcEmbarazoActual">
                        <i class="la la-angle-right"></i>
                        Embarazo Actual
                    </a>
                </div>
                <div id="npcEmbarazoActual" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 col-md-4 mb-25">
                        <label for="npcFechaInicioTX">Fecha de inicio del TX</label>
                        <input class="form-control form-control-lg" type="date" :disabled="disabled" id="npcFechaInicioTX"
                            v-model="formData.embarazoActual.fechaInicioTX">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="npcSemanasGestacion">Semanas de gestación</label>
                        <input class="form-control form-control-lg" type="number" :disabled="disabled" id="npcSemanasGestacion"
                            v-model="formData.embarazoActual.semanasGestacion">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="npcTrimestre">Trimestre</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcTrimestre"
                            v-model="formData.embarazoActual.trimestre">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="npcPesoPregestacional">Peso pre-gestacional</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcPesoPregestacional"
                            v-model="formData.embarazoActual.pesoPreGestacional">
                    </div>
                    <div class="col-12 col-md-4">
                        <label for="npcIMCPregestacional">IMC pre-gestacional</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcIMCPregestacional"
                            v-model="formData.embarazoActual.imc">
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcAntecedentesSalud" aria-expanded="true"
                        aria-controls="npcAntecedentesSalud">
                        <i class="la la-angle-right"></i>
                        Antecedentes salud y enfermedad
                    </a>
                </div>
                <div id="npcAntecedentesSalud" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 card p-0 mb-25 shadow-none">
                        <div class="card-header">
                            <h4>Problemas actuales</h4>
                        </div>
                        <div class="row card-body mx-0">
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcDiarrea"
                                        v-model="formData.antecedentesSalud.problemasActuales.diarrea"
                                        :checked="formData.antecedentesSalud.problemasActuales.diarrea">
                                    <label class="custom-control-label" for="npcDiarrea">Diarrea</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcEstrenimiento"
                                        v-model="formData.antecedentesSalud.problemasActuales.estrenimiento"
                                        :checked="formData.antecedentesSalud.problemasActuales.estrenimiento">
                                    <label class="custom-control-label" for="npcEstrenimiento">Estreñimiento</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcGastritis"
                                        v-model="formData.antecedentesSalud.problemasActuales.gastitris"
                                        :checked="formData.antecedentesSalud.problemasActuales.gastitris">
                                    <label class="custom-control-label" for="npcGastritis">Gastritis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcUlcera"
                                        v-model="formData.antecedentesSalud.problemasActuales.ulcera"
                                        :checked="formData.antecedentesSalud.problemasActuales.ulcera">
                                    <label class="custom-control-label" for="npcUlcera">Úlcera</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcNauseas"
                                        v-model="formData.antecedentesSalud.problemasActuales.nauseas"
                                        :checked="formData.antecedentesSalud.problemasActuales.nauseas">
                                    <label class="custom-control-label" for="npcNauseas">Náuseas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcPirosis"
                                        v-model="formData.antecedentesSalud.problemasActuales.pirosis"
                                        :checked="formData.antecedentesSalud.problemasActuales.pirosis">
                                    <label class="custom-control-label" for="npcPirosis">Pirosis</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcVomito"
                                        v-model="formData.antecedentesSalud.problemasActuales.vomito"
                                        :checked="formData.antecedentesSalud.problemasActuales.vomito">
                                    <label class="custom-control-label" for="npcVomito">Vómito</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcColitis"
                                        v-model="formData.antecedentesSalud.problemasActuales.colitis"
                                        :checked="formData.antecedentesSalud.problemasActuales.colitis">
                                    <label class="custom-control-label" for="npcColitis">Colitis</label>
                                </div>
                            </div>
                            <div class="col-12 card shadow-none card-md p-0">
                                <div class="card-header">
                                    <h6>Otros</h6>
                                    <div class="custom-control custom-switch switch-primary switch-md">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcOtros"
                                            v-model="formData.antecedentesSalud.problemasActuales.otros.check"
                                            :checked="formData.antecedentesSalud.problemasActuales.otros.check">
                                        <label class="custom-control-label" for="npcOtros"></label>
                                    </div>
                                </div>
                                <div class="card-body"
                                    v-show="formData.antecedentesSalud.problemasActuales.otros.check">
                                    <textarea class="form-control form-control-lg" rows="4" type="text"
                                        id="ucEsfuerzoTiempoEvolucion"
                                        v-model="formData.antecedentesSalud.problemasActuales.otros.description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 row mb-25 mx-0 p-0">
                        <div class="col-12 mb-25 p-0">
                            <label for="npcObservaciones">Observaciones</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcObservaciones" v-model="formData.antecedentesSalud.observaciones"></textarea>
                        </div>

                        <div class="col-12 card p-0 mb-25 shadow-none">
                            <div class="card-header">
                                <h4>TA</h4>
                            </div>
                            <div class="row card-body mx-0">
                                <div class="col-12 col-md-6">
                                    <label for="npcTABrazoDerecho">Brazo derecho</label>
                                    <input class="form-control form-control-lg" type="text"
                                        :disabled="disabled" id="npcTABrazoDerecho" v-model="formData.antecedentesSalud.ta.brazoDerecho">
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="npcTABrazoIzquierdo">Brazo izquierdo</label>
                                    <input class="form-control form-control-lg" type="text"
                                        :disabled="disabled" id="npcTABrazoIzquierdo" v-model="formData.antecedentesSalud.ta.brazoIzquierdo">
                                </div>
                            </div>
                        </div>

                        <div class="col-12 mb-25 p-0">
                            <label for="npcEnfermedadDiagnosticada">¿Padece alguna enfermedad diagnosticada?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                :disabled="disabled" id="npcEnfermedadDiagnosticada" v-model="formData.antecedentesSalud.padeceEnfermedadDiagnosticada"></textarea>
                        </div>

                        <div class="col-12 mb-25 p-0">
                            <label for="npcEnfermedadImportante">¿Ha padecido alguna enfermededad importante?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                :disabled="disabled" id="npcEnfermedadImportante" v-model="formData.antecedentesSalud.padecioEnfermedadImportante"></textarea>
                        </div>

                        <div class="col-12 mb-25 p-0">
                            <label for="npcComplicacionesEmbarazosAnteriores">¿Ha tenido complicaciones en embarazos
                                anteriores?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                :disabled="disabled" id="npcComplicacionesEmbarazosAnteriores" v-model="formData.antecedentesSalud.complicacionesAnteriores"></textarea>
                        </div>

                        <div class="col-12 card shadow-none card-md mb-25 p-0">
                            <div class="card-header">
                                <h6>¿Toma algún medicamento?</h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcTomaMedicamento" v-model="formData.antecedentesSalud.tomaMedicamento.check" :checked="formData.antecedentesSalud.tomaMedicamento.check">
                                    <label class="custom-control-label" for="npcTomaMedicamento"></label>
                                </div>
                            </div>
                            <div class="row mx-0 card-body" v-show="formData.antecedentesSalud.tomaMedicamento.check">
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="npcTomaMedicamento1Cual">¿Cúal?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="npcTomaMedicamento1Cual" v-model="formData.antecedentesSalud.tomaMedicamento.medicamento1.cual">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="npcTomaMedicamento1Dosis">Dosis</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="npcTomaMedicamento1Dosis" v-model="formData.antecedentesSalud.tomaMedicamento.medicamento1.dosis">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="npcTomaMedicamento1Cuando">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="npcTomaMedicamento1Cuando" v-model="formData.antecedentesSalud.tomaMedicamento.medicamento1.cuando">
                                    </div>
                                </div>
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="npcTomaMedicamento2Cual">¿Cúal?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="npcTomaMedicamento2Cual" v-model="formData.antecedentesSalud.tomaMedicamento.medicamento2.cual">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="npcTomaMedicamento2Dosis">Dosis</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="npcTomaMedicamento2Dosis" v-model="formData.antecedentesSalud.tomaMedicamento.medicamento2.dosis">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="npcTomaMedicamento2Cuando">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="npcTomaMedicamento2Cuando" v-model="formData.antecedentesSalud.tomaMedicamento.medicamento2.cuando">
                                    </div>
                                </div>
                                <div class="col-12 row mx-0 p-0">
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="npcTomaMedicamento3Cual">¿Cúal?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="npcTomaMedicamento3Cual" v-model="formData.antecedentesSalud.tomaMedicamento.medicamento3.cual">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="npcTomaMedicamento3Dosis">Dosis</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="npcTomaMedicamento3Dosis" v-model="formData.antecedentesSalud.tomaMedicamento.medicamento3.dosis">
                                    </div>
                                    <div class="col-12 col-md-4 mb-25 mb-md-0">
                                        <label for="npcTomaMedicamento3Cuando">¿Desde cuando?</label>
                                        <input class="form-control form-control-lg" :disabled="disabled" id="npcTomaMedicamento3Cuando" v-model="formData.antecedentesSalud.tomaMedicamento.medicamento3.cuando">
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-12 card p-0 mb-25 shadow-none">
                            <div class="card-header">
                                <h4>Toma...</h4>
                            </div>
                            <div class="row card-body mx-0">
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcLaxantes" v-model="formData.antecedentesSalud.toma.laxantes" :checked="formData.antecedentesSalud.toma.laxantes">
                                        <label class="custom-control-label" for="npcLaxantes">Laxantes</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcDiureticos" v-model="formData.antecedentesSalud.toma.diureticos" :checked="formData.antecedentesSalud.toma.diureticos">
                                        <label class="custom-control-label" for="npcDiureticos">Diuréticos</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcAntiacidos" v-model="formData.antecedentesSalud.toma.antiacidos" :checked="formData.antecedentesSalud.toma.antiacidos">
                                        <label class="custom-control-label" for="npcAntiacidos">Antiácidos</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-25 mb-md-0">
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcAnalgesicos" v-model="formData.antecedentesSalud.toma.analgesicos" :checked="formData.antecedentesSalud.toma.analgesicos">
                                        <label class="custom-control-label" for="npcAnalgesicos">Analgésicos</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 p-0">
                            <label for="npcPracticadoCirugia">¿Le han practicado alguna cirugía?</label>
                            <textarea class="form-control form-control-lg" type="text"
                                :disabled="disabled" id="npcPracticadoCirugia" v-model="formData.antecedentesSalud.cirugiaAnterior"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcAntecedentesFamiliares" aria-expanded="true"
                        aria-controls="npcAntecedentesFamiliares">
                        <i class="la la-angle-right"></i>
                        Antecedentes familiares
                    </a>
                </div>
                <div id="npcAntecedentesFamiliares" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcObesidad" v-model="formData.antecedentesFamiliares.obesidad" :checked="formData.antecedentesFamiliares.obesidad">
                            <label class="custom-control-label" for="npcObesidad">Obesidad</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcHTA" v-model="formData.antecedentesFamiliares.hta" :checked="formData.antecedentesFamiliares.hta">
                            <label class="custom-control-label" for="npcHTA">HTA</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcCancer" v-model="formData.antecedentesFamiliares.cancer" :checked="formData.antecedentesFamiliares.cancer">
                            <label class="custom-control-label" for="npcCancer">Cáncer</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcHipercolesterolemia" v-model="formData.antecedentesFamiliares.hipercolesterolemia" :checked="formData.antecedentesFamiliares.hipercolesterolemia">
                            <label class="custom-control-label" for="npcHipercolesterolemia">Hipercolesterolemia</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcHipertrigliceridemia" v-model="formData.antecedentesFamiliares.hipertrigliceridemia" :checked="formData.antecedentesFamiliares.hipertrigliceridemia">
                            <label class="custom-control-label"
                                for="npcHipertrigliceridemia">Hipertrigliceridemia</label>
                        </div>
                    </div>
                    <div class="col-12 card shadow-none card-md p-0">
                        <div class="card-header">
                            <h6>Diabetes</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcDiabetes" v-model="formData.antecedentesFamiliares.diabetes.check" :checked="formData.antecedentesFamiliares.diabetes.check">
                                <label class="custom-control-label" for="npcDiabetes"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.antecedentesFamiliares.diabetes.check">
                            <select class="form-control form-control-lg" :disabled="disabled" id="npcDiabetesDescription" v-model="formData.antecedentesFamiliares.diabetes.description">
                                <option value="TipoI">Tipo I</option>
                                <option value="TipoII">Tipo II</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcActividadFisica" aria-expanded="true"
                        aria-controls="npcActividadFisica">
                        <i class="la la-angle-right"></i>
                        Actividad física
                    </a>
                </div>
                <div id="npcActividadFisica" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="npcProfesion">¿Cuál es tu profesión?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcProfesion" v-model="formData.actividadFisica.profesion">
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="npcPracticaDeporte">¿Practica algún deporte o hace ejercicio?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcPracticaDeporte" v-model="formData.actividadFisica.practicaDeporte">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="npcCuantosDiasDeporte">¿Cúantos días y horas al día hace ejercicio?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcCuantosDiasDeporte" v-model="formData.actividadFisica.cuantoTiempo">
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcConsumoFrecuencia" aria-expanded="true"
                        aria-controls="npcConsumoFrecuencia">
                        <i class="la la-angle-right"></i>
                        Consumo en frecuencia y cantidad
                    </a>
                </div>
                <div id="npcConsumoFrecuencia" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>Alcohol</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcAlcohol" v-model="formData.consumoFrecuencia.alcohol.check" :checked="formData.consumoFrecuencia.alcohol.check">
                                <label class="custom-control-label" for="npcAlcohol"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.consumoFrecuencia.alcohol.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="npcAlcoholCantidad">Cantidad</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcAlcoholCantidad" v-model="formData.consumoFrecuencia.alcohol.cantidad">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="npcAlcoholFrecuencia">Frecuencia</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="npcAlcoholFrecuencia" v-model="formData.consumoFrecuencia.alcohol.frecuencia">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>Tabaco</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcTabaco" v-model="formData.consumoFrecuencia.tabaco.check" :checked="formData.consumoFrecuencia.tabaco.check">
                                <label class="custom-control-label" for="npcTabaco"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.consumoFrecuencia.tabaco.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="npcTabacoCantidad">Cantidad</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcTabacoCantidad" v-model="formData.consumoFrecuencia.tabaco.cantidad">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="npcTabacoFrecuencia">Frecuencia</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="npcTabacoFrecuencia" v-model="formData.consumoFrecuencia.tabaco.frecuencia">
                                    <option value="Dia">Día</option>
                                    <option value="Semana">Semana</option>
                                    <option value="Mes">Mes</option>
                                    <option value="Trimestre">Trimestre</option>
                                    <option value="Anio">Año</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 card shadow-none card-md p-0">
                        <div class="card-header">
                            <h6>Café</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                   :disabled="disabled" id="npcCafe" v-model="formData.consumoFrecuencia.cafe.check" :checked="formData.consumoFrecuencia.cafe.check">
                                <label class="custom-control-label" for="npcCafe"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.consumoFrecuencia.cafe.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Cantidad</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcCafeCantidad" v-model="formData.consumoFrecuencia.cafe.cantidad">
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">Frecuencia</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="npcCafeFrecuencia" v-model="formData.consumoFrecuencia.cafe.frecuencia">
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
                    <a class="item-link" data-toggle="collapse" data-target="#npcIndicadoresBioquimicos" aria-expanded="true"
                        aria-controls="npcIndicadoresBioquimicos">
                        <i class="la la-angle-right"></i>
                        Indicadores bioquímicos
                    </a>
                </div>
                <div id="npcIndicadoresBioquimicos" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 mb-25">
                        <label for="npcUltimosEstudios">Últimos estudios de laboratorio</label>
                        <textarea class="form-control form-control-lg" rows="5" :disabled="disabled" id="npcUltimosEstudios" v-model="formData.indicadoresBioquimicos.ultimoEstudios"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Datos bioquímicos relevantes</label>
                        <textarea class="form-control form-control-lg" rows="5" :disabled="disabled" id="npcDatosBioquimicos" v-model="formData.indicadoresBioquimicos.datosBioquimicos"></textarea>
                    </div>
                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>Se solicitaron análisis</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcSolicitaronAnalisis" v-model="formData.indicadoresBioquimicos.analisis.check" :checked="formData.indicadoresBioquimicos.analisis.check">
                                <label class="custom-control-label" for="npcSolicitaronAnalisis"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.indicadoresBioquimicos.analisis.check">
                            <label for="npcSolicitaronAnalisisCuales">¿Cúales</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcSolicitaronAnalisisCuales" v-model="formData.indicadoresBioquimicos.analisis.description">
                        </div>
                    </div>
                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6>Glucosa capilar</h6>
                        </div>
                        <div class="row mx-0 card-body">
                            <div class="col-12 col-md-6 row mx-0 p-0 mb-25">
                                <div class="col-6">
                                    <label for="">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcGlucosaCapilar1Dia" v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa1.dia">
                                </div>
                                <div class="col-6">
                                    <label for="">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcGlucosaCapilar1Glucosa" v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa1.glucosa">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0 mb-25">
                                <div class="col-6">
                                    <label for="npcGlucosaCapilar2Dia">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcGlucosaCapilar2Dia" v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa2.dia">
                                </div>
                                <div class="col-6">
                                    <label for="npcGlucosaCapilar2Glucosa">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcGlucosaCapilar2Glucosa" v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa2.glucosa">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 row mx-0 p-0">
                                <div class="col-6">
                                    <label for="npcGlucosaCapilar3Dia">Día</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcGlucosaCapilar3Dia" v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa3.dia">
                                </div>
                                <div class="col-6">
                                    <label for="npcGlucosaCapilar3Glucosa">Glucosa</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcGlucosaCapilar3Glucosa" v-model="formData.indicadoresBioquimicos.glucosaCapilar.glucosa3.glucosa">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcIndicadoresDieteticos" aria-expanded="true"
                        aria-controls="npcIndicadoresDieteticos">
                        <i class="la la-angle-right"></i>
                        Indicadores dietéticos
                    </a>
                </div>
                <div id="npcIndicadoresDieteticos" class="atbd-collapse-item__body collapse row mx-0 card-body">
                    <div class="col-12 mb-25">
                        <label for="npcComidasDia">¿Cúantas comidas hace al día?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcComidasDia" v-model="formData.indicadoresDieteticos.comidas">
                    </div>
                    <div class="col-12 mb-25">
                        <label for="npcPreparaAlimentos">¿Quién prepara sus alimentos?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcPreparaAlimentos" v-model="formData.indicadoresDieteticos.preparaAlimentos">
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>¿Come entre comidas?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcComeEntreComidas" v-model="formData.indicadoresDieteticos.comeEntreComidas.check" :checked="formData.indicadoresDieteticos.comeEntreComidas.check">
                                <label class="custom-control-label" for="npcComeEntreComidas"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.indicadoresDieteticos.comeEntreComidas.check">
                            <label for="">¿Qué come?</label>
                            <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcComeEntreComidasQue" v-model="formData.indicadoresDieteticos.comeEntreComidas.description"></textarea>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>¿Ha modificado su alimentación desde el inicio de su embarazo?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcModificadoAlimentacion" v-model="formData.indicadoresDieteticos.modificadoAlimentacion.check" :checked="formData.indicadoresDieteticos.modificadoAlimentacion.check">
                                <label class="custom-control-label" for="npcModificadoAlimentacion"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.indicadoresDieteticos.modificadoAlimentacion.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="npcModificadoAlimentacionPorQue">¿Por qué?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcModificadoAlimentacionPorQue" v-model="formData.indicadoresDieteticos.modificadoAlimentacion.porQue"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="npcModificadoAlimentacionComo">¿Cómo?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcModificadoAlimentacionComo" v-model="formData.indicadoresDieteticos.modificadoAlimentacion.como"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25">
                        <label for="npcApetito">Apetito</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="npcApetito" v-model="formData.indicadoresDieteticos.apetito">
                            <option value="Bueno">Bueno</option>
                            <option value="Regular">Regular</option>
                            <option value="Malo">Malo</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="npcHoraHambre">¿A qué hora tiene más hambre?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcHoraHambre" v-model="formData.indicadoresDieteticos.horaHambre">
                    </div>
                    <div class="col-12 mb-25">
                        <label for="npcAlimentosPreferidos">Alimentos preferidos</label>
                        <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcAlimentosPreferidos" v-model="formData.indicadoresDieteticos.alimentosPreferidos"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="npcAlimentosNoAgradan">Alimentos que no le agradan o no acostumbra</label>
                        <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcAlimentosNoAgradan" v-model="formData.indicadoresDieteticos.alimentosNoAgradan"></textarea>
                    </div>
                    <div class="col-12 mb-25">
                        <label for="">Alimentos que le causan malestar</label>
                        <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcAlimentosMalestar" v-model="formData.indicadoresDieteticos.alimentosMalestar"></textarea>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>¿Es alérgico a algún alimento?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcAlergicoAlimento" v-model="formData.indicadoresDieteticos.alergico.check" :checked="formData.indicadoresDieteticos.alergico.check">
                                <label class="custom-control-label" for="npcAlergicoAlimento"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.indicadoresDieteticos.alergico.check">
                            <label for="npcAlergicoDescription">¿Cúal?</label>
                            <textarea class="form-control form-control-lg" rows="2" :disabled="disabled" id="npcAlergicoDescription" v-model="formData.indicadoresDieteticos.alergico.description"></textarea>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>¿Toma algún suplemento o complemento?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcTomaSuplemento" v-model="formData.indicadoresDieteticos.tomaSuplemento.check" :checked="formData.indicadoresDieteticos.tomaSuplemento.check">
                                <label class="custom-control-label" for="npcTomaSuplemento"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.indicadoresDieteticos.tomaSuplemento.check">
                            <div class="col-12 row mx-0 mb-25 p-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="npcTomaSuplemento1Cual">¿Cúal?</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcTomaSuplemento1Cual" v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento1.cual">
                                </div>
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="npcTomaSuplemento1Dosis">Dosis</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcTomaSuplemento1Dosis" v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento1.dosis">
                                </div>
                            </div>
                            <div class="col-12 row mx-0 mb-25 p-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="npcTomaSuplemento2Cual">¿Cúal?</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcTomaSuplemento2Cual" v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento2.cual">
                                </div>
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="npcTomaSuplemento2Dosis">Dosis</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcTomaSuplemento2Dosis" v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento2.dosis">
                                </div>
                            </div>
                            <div class="col-12 row mx-0 mb-25 p-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="npcTomaSuplemento3Cual">¿Cúal?</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcTomaSuplemento3Cual" v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento3.cual">
                                </div>
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label for="npcTomaSuplemento3Dosis">Dosis</label>
                                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcTomaSuplemento3Dosis" v-model="formData.indicadoresDieteticos.tomaSuplemento.suplementos.suplemento3.dosis">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>¿Su consumo varía cuando está triste, nervioso o ansioso?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcConsumoVariaTriste" v-model="formData.indicadoresDieteticos.consumoVariaTriste.check" :checked="formData.indicadoresDieteticos.consumoVariaTriste.check">
                                <label class="custom-control-label" for="npcConsumoVariaTriste"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.indicadoresDieteticos.consumoVariaTriste.check">
                            <label for="">¿Cómo?</label>
                            <textarea class="form-control form-control-lg" rows="2" :disabled="disabled" id="npcConsumoVariaTristeComo" v-model="formData.indicadoresDieteticos.consumoVariaTriste.description"></textarea>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25 align-self-center">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcSal" v-model="formData.indicadoresDieteticos.agregaSal" :checked="formData.indicadoresDieteticos.agregaSal">
                            <label class="custom-control-label" for="npcSal">¿Agrega sal a la comida ya
                                preparada?</label>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-25">
                        <label for="">¿Qué grasa utiliza en casa para preparar su comida?</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="npcGrasa" v-model="formData.indicadoresDieteticos.grasaUtiliza">
                            <option value="Margarina">Margarina</option>
                            <option value="AceiteVegetal">Aceite vegetal</option>
                            <option value="Manteca">Manteca</option>
                            <option value="Mantequilla">Mantequilla</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>¿Ha llevado alguna dieta especial?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcDietaEspecial" v-model="formData.indicadoresDieteticos.dietaEspecial.check" :checked="formData.indicadoresDieteticos.dietaEspecial.check">
                                <label class="custom-control-label" for="npcDietaEspecial"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.indicadoresDieteticos.dietaEspecial.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialEspecificar">Especificar</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcDietaEspecialEspecificar" v-show="formData.indicadoresDieteticos.dietaEspecial.dietas"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialCuantas">¿Cuantas?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcDietaEspecialCuantas" v-show="formData.indicadoresDieteticos.dietaEspecial.cuantas"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialTipo">¿Qué tipo de dieta?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcDietaEspecialTipo" v-show="formData.indicadoresDieteticos.dietaEspecial.tipo"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialHaceCuanto">¿Hace cuánto?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcDietaEspecialHaceCuanto" v-show="formData.indicadoresDieteticos.dietaEspecial.haceCuanto"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialPorCuanto">¿Por cuánto tiempo?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcDietaEspecialPorCuanto" v-show="formData.indicadoresDieteticos.dietaEspecial.porCuanto"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialPorQue">¿Por qué razón?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcDietaEspecialPorQue" v-show="formData.indicadoresDieteticos.dietaEspecial.porQue"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialTantoApego">¿Qué tanto se apegó a ella?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcDietaEspecialTantoApego" v-show="formData.indicadoresDieteticos.dietaEspecial.tantoApego"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialObtuvoResultados">¿Obtuvo los resultados esperados?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcDietaEspecialObtuvoResultados" v-show="formData.indicadoresDieteticos.dietaEspecial.obtuvoResultados"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialKGPerdidos">¿Kg perdidos?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcDietaEspecialKGPerdidos" v-show="formData.indicadoresDieteticos.dietaEspecial.kgPerdidos">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="npcDietaEspecialPesoLogrado">¿Peso logrado?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="npcDietaEspecialPesoLogrado" v-show="formData.indicadoresDieteticos.dietaEspecial.pesoLogrado">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6>¿Ha utilizado medicamentos para bajar de peso?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input"
                                    :disabled="disabled" id="npcMedicamentosBajar" v-model="formData.indicadoresDieteticos.medicamentosBajar.check" :checked="formData.indicadoresDieteticos.medicamentosBajar.check">
                                <label class="custom-control-label" for="npcMedicamentosBajar"></label>
                            </div>
                        </div>
                        <div class="row mx-0 card-body" v-show="formData.indicadoresDieteticos.medicamentosBajar.check">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="npcMedicamentosBajarCuales">¿Cuáles?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcMedicamentosBajarCuales" v-model="formData.indicadoresDieteticos.medicamentosBajar.cuales"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="npcMedicamentosBajarCuantoTiempo">¿Por cuánto tiempo?</label>
                                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="npcMedicamentosBajarCuantoTiempo" v-model="formData.indicadoresDieteticos.medicamentosBajar.cuantoTiempo"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="">Plan</label>
                        <textarea class="form-control form-control-lg" rows="4" :disabled="disabled" id="npcPlan" v-model="formData.indicadoresDieteticos.plan"></textarea>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse atbd-collapse-custom mb-25 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#npcRecordatorioNutricional" aria-expanded="true"
                        aria-controls="npcRecordatorioNutricional">
                        <i class="la la-angle-right"></i>
                        Recordatorio de 24 horas
                    </a>
                </div>
                <div id="npcRecordatorioNutricional" class="atbd-collapse-item__body collapse row mx-0 card-body">

                    <div class="card mb-25 shadow-none">
                        <div class="card-header">
                            <h4>Entre semana</h4>
                        </div>
                        <div class="col-12 row mx-0 card-body">
                            <div class="col-12 col-md-6">
                                <label for="npcEntreSemanaDesayuno">Desayuno</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcEntreSemanaDesayuno" v-model="formData.recordatorioNutricion.entreSemana.desayuno.desayuno"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcEntreSemanaDesayunoColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcEntreSemanaDesayunoColacion" v-model="formData.recordatorioNutricion.entreSemana.desayuno.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcEntreSemanaComida">Comida</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcEntreSemanaComida" v-model="formData.recordatorioNutricion.entreSemana.comida.comida"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcEntreSemanaComidaColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcEntreSemanaComidaColacion" v-model="formData.recordatorioNutricion.entreSemana.comida.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcEntreSemanaCena">Cena</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcEntreSemanaCena" v-model="formData.recordatorioNutricion.entreSemana.cena"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-25 shadow-none">
                        <div class="card-header">
                            <h4>Fin de semana</h4>
                        </div>
                        <div class="row mx-0 card-body">
                            <div class="col-12 col-md-6">
                                <label for="npcFinSemanaDesayuno">Desayuno</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcFinSemanaDesayuno" v-model="formData.recordatorioNutricion.finSemana.desayuno.desayuno"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcFinSemanaDesayunoColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcFinSemanaDesayunoColacion" v-model="formData.recordatorioNutricion.finSemana.desayuno.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcFinSemanaComida">Comida</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcFinSemanaComida" v-model="formData.recordatorioNutricion.finSemana.comida.comida"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcFinSemanaComidaColacion">Colación</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcFinSemanaComidaColacion" v-model="formData.recordatorioNutricion.finSemana.comida.colacion"></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="npcFinSemanaCena">Cena</label>
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="npcFinSemanaCena" v-model="formData.recordatorioNutricion.finSemana.cena"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-none">
                        <div class="card-header">
                            <h4> Alimentos olvidados</h4>
                        </div>
                        <div class="row mx-0 card-body">
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcChicles" v-model="formData.recordatorioNutricion.alimentosOlvidados.chicles" :checked="formData.recordatorioNutricion.alimentosOlvidados.chicles">
                                    <label class="custom-control-label" for="npcChicles">Chicles</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcMentas" v-model="formData.recordatorioNutricion.alimentosOlvidados.mentas" :checked="formData.recordatorioNutricion.alimentosOlvidados.mentas">
                                    <label class="custom-control-label" for="npcMentas">Mentas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcPatillas" v-model="formData.recordatorioNutricion.alimentosOlvidados.patillas" :checked="formData.recordatorioNutricion.alimentosOlvidados.patillas">
                                    <label class="custom-control-label" for="npcPatillas">Patillas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcMermeladas" v-model="formData.recordatorioNutricion.alimentosOlvidados.mermeladas" :checked="formData.recordatorioNutricion.alimentosOlvidados.mermeladas">
                                    <label class="custom-control-label" for="npcMermeladas">Mermeladas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcMiel" v-model="formData.recordatorioNutricion.alimentosOlvidados.miel" :checked="formData.recordatorioNutricion.alimentosOlvidados.miel">
                                    <label class="custom-control-label" for="npcMiel">Miel</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcAzucar" v-model="formData.recordatorioNutricion.alimentosOlvidados.azucar" :checked="formData.recordatorioNutricion.alimentosOlvidados.azucar">
                                    <label class="custom-control-label" for="npcAzucar">Azúcar</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcSustituto" v-model="formData.recordatorioNutricion.alimentosOlvidados.sustituto" :checked="formData.recordatorioNutricion.alimentosOlvidados.sustituto">
                                    <label class="custom-control-label" for="npcSustituto">Sustituto</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcCrema" v-model="formData.recordatorioNutricion.alimentosOlvidados.crema" :checked="formData.recordatorioNutricion.alimentosOlvidados.crema">
                                    <label class="custom-control-label" for="npcCrema">Crema</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcDulcer" v-model="formData.recordatorioNutricion.alimentosOlvidados.dulces" :checked="formData.recordatorioNutricion.alimentosOlvidados.dulces">
                                    <label class="custom-control-label" for="npcDulcer">Dulces</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcMantequilla" v-model="formData.recordatorioNutricion.alimentosOlvidados.mantequilla" :checked="formData.recordatorioNutricion.alimentosOlvidados.mantequilla">
                                    <label class="custom-control-label" for="npcMantequilla">Mantequilla</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcAceite" v-model="formData.recordatorioNutricion.alimentosOlvidados.aceite" :checked="formData.recordatorioNutricion.alimentosOlvidados.aceite">
                                    <label class="custom-control-label" for="npcAceite">Aceite</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcMayonesa" v-model="formData.recordatorioNutricion.alimentosOlvidados.mayonesa" :checked="formData.recordatorioNutricion.alimentosOlvidados.mayonesa">
                                    <label class="custom-control-label" for="npcMayonesa">Mayonesa</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcAderezo" v-model="formData.recordatorioNutricion.alimentosOlvidados.aderezo" :checked="formData.recordatorioNutricion.alimentosOlvidados.aderezo">
                                    <label class="custom-control-label" for="npcAderezo">Aderezo</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcVinagretas" v-model="formData.recordatorioNutricion.alimentosOlvidados.vinagretas" :checked="formData.recordatorioNutricion.alimentosOlvidados.vinagretas">
                                    <label class="custom-control-label" for="npcVinagretas">Vinagretas</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" id="sal" v-model="formData.recordatorioNutricion.alimentosOlvidados.sal" :checked="formData.recordatorioNutricion.alimentosOlvidados.sal">
                                    <label class="custom-control-label" for="sal">Sal</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mb-15">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="npcSalsas" v-model="formData.recordatorioNutricion.alimentosOlvidados.salsas" :checked="formData.recordatorioNutricion.alimentosOlvidados.salsas">
                                    <label class="custom-control-label" for="npcSalsas">Salsas</label>
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
                                    <h6>Antropométricos</h6>
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

<script lang="ts" src="./NutricionPerinatalComponent.ts"></script>
