<template>

    <div class="card">
        <div class="card-header">
            <h6>Colposcopía</h6>
        </div>
        <div class="card-body row mx-0 atbd-collapse atbd-collapse-custom">
            <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ccAntecedentesImportancia"
                        aria-expanded="true" aria-controls="ccAntecedentesImportancia">
                        <i class="la la-angle-right"></i>
                        Antecedentes de importancia
                    </a>
                </div>
                <div id="ccAntecedentesImportancia" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0">
                        <div class="col-12 mb-25">
                            <label for="ccAntecedentesObstetricos">Antecedentes obstétricos</label>
                            <textarea class="form-control form-control-lg" type="text" rows="4"
                                :disabled="disabled" id="ccAntecedentesObstetricos"
                                v-model="formDataCopy.antecedentesImportancia.antecedentesObstetricos"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccFrecuenciaCoital">Frecuencia coital</label>
                            <input class="form-control form-control-lg" type="date" :disabled="disabled" id="ccFrecuenciaCoital"
                                v-model="formDataCopy.antecedentesImportancia.frecuenciaCoital">
                        </div>
                        <div class="col-12 col-md-6 mb-25 mb-md-0">
                            <label for="ccUsoHormonales">Uso hormonales</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccUsoHormonales"
                                v-model="formDataCopy.antecedentesImportancia.usoHormonales">
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="ccCitologiaCervical">Citología cervical previa</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccCitologiaCervical"
                                v-model="formDataCopy.antecedentesImportancia.citologiaVerticalPrevia">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ccCervix" aria-expanded="true"
                        aria-controls="ccCervix">
                        <i class="la la-angle-right"></i>
                        Cervix
                    </a>
                </div>
                <div id="ccCervix" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccVolumen">Volumen</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccVolumen"
                                v-model="formDataCopy.cervix.volumen">
                                <option value="Eutrofico">Eutrófico</option>
                                <option value="Hipotrofico">Hipotrófico</option>
                                <option value="Atrofico">Atrófico</option>
                                <option value="AuscenciaQuirurgica">Ausencia quirúrgica</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccZonaTransformacion">Zona transformación</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccZonaTransformacion"
                                v-model="formDataCopy.cervix.zonaTransformacion">
                                <option value="Tipo I">Tipo I</option>
                                <option value="Tipo II">Tipo II</option>
                                <option value="Tipo II">Tipo III</option>
                                <option value="NoValorable">No valorable</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccEstudioColposcopia">Estudio de colposcopia</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccEstudioColposcopia"
                                v-model="formDataCopy.cervix.estudioColposcopia">
                                <option value="Satisfactoria">Satisfactoria</option>
                                <option value="NoSatisfactoria">No satisfactoria</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccEvasionGlandular">Evasión glandular</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccEvasionGlandular"
                                v-model="formDataCopy.cervix.evasionGlandular">
                                <option value="Pequenia">Pequeña</option>
                                <option value="Moderada">Moderada</option>
                                <option value="Grande">Grande</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccAtrofiaEpitelial">Atrofia epitelial</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccAtrofiaEpitelial"
                                v-model="formDataCopy.cervix.atrofiaEpitelial">
                                <option value="Ausente">Ausente</option>
                                <option value="Leve">Leve</option>
                                <option value="Moderada">Moderada</option>
                                <option value="Severa">Severa</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccQuistesNaboth">Quistes de Naboth</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccQuistesNaboth"
                                v-model="formDataCopy.cervix.quistesNaboth">
                                <option value="Presente">Presente</option>
                                <option value="Ausente">Ausente</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccTumoracion">Tumoración</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccTumoracion"
                                v-model="formDataCopy.cervix.tumoracion">
                                <option value="Presente">Presente</option>
                                <option value="Ausente">Ausente</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ccAplicacionAcidoAcetico"
                        aria-expanded="true" aria-controls="ccAplicacionAcidoAcetico">
                        <i class="la la-angle-right"></i>
                        A la aplicación de ácido acético al 5% se observa
                    </a>
                </div>
                <div id="ccAplicacionAcidoAcetico" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccAplicacionEpitelioAcetoblanco">Epitelio acetoblanco</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccAplicacionEpitelioAcetoblanco"
                                v-model="formDataCopy.aplicacionAcidoAcetico.epitelioAcetoblanco">
                                <option value="Presente">Presente</option>
                                <option value="Ausente">Ausente</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccBorde">Borde</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccBorde"
                                v-model="formDataCopy.aplicacionAcidoAcetico.borde">
                                <option value="DefinidosConRelieve">Definidos con relieve</option>
                                <option value="DefinidosSinRelieve">Definidos sin relieve</option>
                                <option value="DifusoConRelieve">Difuso con relieve</option>
                                <option value="DifusoSinRelieve">Difuso sin relieve </option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccMosaico">Mosaico</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccMosaico"
                                v-model="formDataCopy.aplicacionAcidoAcetico.mosaico">
                                <option value="Fino">Fino</option>
                                <option value="Grueso">Grueso</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ccSuperficie">Superficie</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccSuperficie"
                                v-model="formDataCopy.aplicacionAcidoAcetico.superficie">
                                <option value="LisaConPuntilleoFino">Lisa con puntilleo fino</option>
                                <option value="LisaConPuntilleoGrueso">Lisa con puntilleo grueso</option>
                                <option value="MicroPapilarConPuntilleoFino">Micro papilar con puntilleo fino</option>
                                <option value="MicroPapilarConPuntilleoFino">Micro papilar con puntilleo fino</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="ccTestSchiller">Test de Schiller (Lugol)</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccTestSchiller"
                                v-model="formDataCopy.aplicacionAcidoAcetico.testSchiller">
                                <option value="YodoPositivoHomogeneo">Yodo positivo homogéneo </option>
                                <option value="YodoNegativoConZonasHipocaptantes">Yodo negativo con zonas hipocaptantes
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ccVaginoscopia" aria-expanded="true"
                        aria-controls="ccVaginoscopia">
                        <i class="la la-angle-right"></i>
                        Vaginoscopia
                    </a>
                </div>
                <div id="ccVaginoscopia" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="card-single col-12 mb-4">
                            <div class="card card-default card-md bg-white">
                                <div class="card-header">
                                    <h6>Leucorrea</h6>
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccLeucorrea"
                                            v-model="formDataCopy.vaginoscopia.leucorrea.check"
                                            :checked="formDataCopy.vaginoscopia.leucorrea.check">
                                        <label class="custom-control-label" for="ccLeucorrea"></label>
                                    </div>
                                </div>
                                <div class="card-body bg-normal" v-show="formDataCopy.vaginoscopia.leucorrea.check">
                                    <label for="ccLeucorreaDescription">Características</label>
                                    <textarea class="form-control form-control-lg" id="ccLeucorreaDescription" v-model="formDataCopy.vaginoscopia.leucorrea.description" :disabled="disabled"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25 mb-md-0">
                            <label for="ccVaginoscopiaEpitelioAcetoblanco">Epitelio acetoblanco</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccVaginoscopiaEpitelioAcetoblanco"
                                v-model="formDataCopy.vaginoscopia.epitelioAcetoblanco">
                                <option value="Presente">Presente</option>
                                <option value="Ausente">Ausente</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="ccCaptacionLugol">Captación de lugol</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ccCaptacionLugol"
                                v-model="formDataCopy.vaginoscopia.captacionLugol">
                                <option value="YodoPositivoHomogeneo">Yodo positivo homogéneo </option>
                                <option value="YodoNegativoConZonasHipocaptantes">Yodo negativo con zonas hipocaptantes
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ccVulvoscopia" aria-expanded="true"
                        aria-controls="ccVulvoscopia">
                        <i class="la la-angle-right"></i>
                        Vulvoscopía
                    </a>
                </div>
                <div id="ccVulvoscopia" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12">
                        <div class="col-12">
                            <textarea class="form-control form-control-lg" rows="5" :disabled="disabled" id="ccVulvoscopia"
                                v-model="formDataCopy.vulvoscopia"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 card card-default card-md p-0 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ccDiagnosticoColposcopico"
                        aria-expanded="true" aria-controls="ccDiagnosticoColposcopico">
                        <i class="la la-angle-right"></i>
                        Diagnóstico colposcópico
                    </a>
                </div>
                <div id="ccDiagnosticoColposcopico" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12">
                        <div class="col-12">
                            <textarea class="form-control form-control-lg" rows="5" :disabled="disabled" id="ccDiagnosticoColposcopico"
                                v-model="formDataCopy.diagnosticoColposcopico"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ColposcopiaComponent.ts"></script>
