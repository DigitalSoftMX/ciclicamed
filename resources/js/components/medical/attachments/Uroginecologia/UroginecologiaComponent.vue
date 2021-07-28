<template>
    <div class="card">
        <div class="card-header">
            <h6>Uroginecología</h6>
        </div>
        <div class="row card-body mx-0">
            <div class="col-md-6 mb-25">
                <label for="ucNictamero">Nictámero</label>
                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="ucNictamero"
                    v-model="formData.nictamero">
            </div>
            <div class="col-md-6 mb-25">
                <label for="ucConsumoLitros">Consumo de litros por dia</label>
                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="ucConsumoLitros"
                    v-model="formData.consumoLitros">
            </div>
            <div class="card-single col-12 mb-25">
                <div class="card shadow-none">
                    <div class="card-header">
                        <h6>Incontinencia urinaria de urgencia</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucIncontinenciaUrinariaUrgencia"
                                v-model="formData.incontinenciaUrinariaUrgencia.check"
                                :checked="formData.incontinenciaUrinariaUrgencia.check">
                            <label class="custom-control-label" for="ucIncontinenciaUrinariaUrgencia"></label>
                        </div>
                    </div>
                    <div class="card-body row mx-0" v-show="formData.incontinenciaUrinariaUrgencia.check">
                        <div class="col-md-4">
                            <label for="ucUrgenciaTiempoEvolucion">Tiempo de evolución</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ucUrgenciaTiempoEvolucion"
                                v-model="formData.incontinenciaUrinariaUrgencia.tiempoEvolucion">
                        </div>
                        <div class="col-md-4">
                            <label for="ucUrgenciaFrecuencia">Frecuencia</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ucUrgenciaFrecuencia"
                                v-model="formData.incontinenciaUrinariaUrgencia.frecuencia">
                        </div>
                        <div class="col-md-4">
                            <label for="ucUrgenciaCantidadPerdida">Cantidad perdida</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ucUrgenciaCantidadPerdida"
                                v-model="formData.incontinenciaUrinariaUrgencia.cantidadPerdida">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-single col-12 mb-25">
                <div class="card shadow-none">
                    <div class="card-header">
                        <h6>Incontinencia urinaria de esfuerzo</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucIncontinenciaUrinariaEsfuerzo"
                                v-model="formData.incontinenciaUrinariaEsfuerzo.check"
                                :checked="formData.incontinenciaUrinariaEsfuerzo.check">
                            <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                        </div>
                    </div>
                    <div class="card-body row mx-0" v-show="formData.incontinenciaUrinariaEsfuerzo.check">
                        <div class="col-md-4">
                            <label for="ucEsfuerzoTiempoEvolucion">Tiempo de evolución</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ucEsfuerzoTiempoEvolucion"
                                v-model="formData.incontinenciaUrinariaEsfuerzo.tiempoEvolucion">
                        </div>
                        <div class="col-md-4">
                            <label for="ucEsfuerzoFrecuencia">Frecuencia</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ucEsfuerzoFrecuencia"
                                v-model="formData.incontinenciaUrinariaEsfuerzo.frecuencia">
                        </div>
                        <div class="col-md-4">
                            <label for="ucEsfuerzoCantidadPerdida">Cantidad perdida</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ucEsfuerzoCantidadPerdida"
                                v-model="formData.incontinenciaUrinariaEsfuerzo.cantidadPerdida">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-25">
                <label for="ucChorroMiccional">Chorro miccional</label>
                <select class="form-control form-control-lg" :disabled="disabled" id="ucChorroMiccional"
                    v-model="formData.chorroMiccional">
                    <option value="Completo">Completo</option>
                    <option value="Incompleto">Incompleto</option>
                </select>
            </div>
            <div class="col-md-6 mb-25">
                <label for="ucSensacionVacionamiento">Sensación de vacionamiento</label>
                <select class="form-control form-control-lg" :disabled="disabled" id="ucSensacionVacionamiento"
                    v-model="formData.sensacionVacionamiento">
                    <option value="Completo">Completo</option>
                    <option value="Incompleto">Incompleto</option>
                </select>
            </div>
            <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
                <div class="col-12 mb-25 card shadow-none p-0 border rounded">
                    <div class="atbd-collapse-item__header">
                        <a class="item-link" data-toggle="collapse" data-target="#ucInterrogatorio" aria-expanded="true"
                            aria-controls="ucInterrogatorio">
                            <i class="la la-angle-right"></i>
                            Interrogatorio
                        </a>
                    </div>
                    <div :disabled="disabled" id="ucInterrogatorio" class="atbd-collapse-item__body collapse card-body row mx-0">
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucDisuria"
                                    v-model="formData.interrogatorio.disuria"
                                    :checked="formData.interrogatorio.disuria">
                                <label class="custom-control-label" for="ucDisuria">Disuria</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucHematuria"
                                    v-model="formData.interrogatorio.hematuria"
                                    :checked="formData.interrogatorio.hematuria">
                                <label class="custom-control-label" for="ucHematuria">Hematuria</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucSensacionCuerpoExtranio"
                                    v-model="formData.interrogatorio.sensacionCuerpoExtranio"
                                    :checked="formData.interrogatorio.sensacionCuerpoExtranio">
                                <label class="custom-control-label" for="ucSensacionCuerpoExtranio">Sensación de
                                    cuerpo extraño</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucResequedadVaginal"
                                    v-model="formData.interrogatorio.resequedadVaginal"
                                    :checked="formData.interrogatorio.resequedadVaginal">
                                <label class="custom-control-label" for="ucResequedadVaginal">Resequedad
                                    vaginal</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucArdor"
                                    v-model="formData.interrogatorio.ardor"
                                    :checked="formData.interrogatorio.ardor">
                                <label class="custom-control-label" for="ucArdor">Ardor</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucPrurito"
                                    v-model="formData.interrogatorio.prurito"
                                    :checked="formData.interrogatorio.prurito">
                                <label class="custom-control-label" for="ucPrurito">Prurito</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucEstrenimiento"
                                    v-model="formData.interrogatorio.estrenimiento"
                                    :checked="formData.interrogatorio.estrenimiento">
                                <label class="custom-control-label" for="ucEstrenimiento">Estreñimiento</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucConsumoLaxantes"
                                    v-model="formData.interrogatorio.consumoLaxantes"
                                    :checked="formData.interrogatorio.consumoLaxantes">
                                <label class="custom-control-label" for="ucConsumoLaxantes">Consumo de
                                    laxantes</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucIncontinenciaFlatos"
                                    v-model="formData.interrogatorio.incontinenciaFlatos"
                                    :checked="formData.interrogatorio.incontinenciaFlatos">
                                <label class="custom-control-label" for="ucIncontinenciaFlatos">Incontinencia a
                                    flatos o heces</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucVidaSexual"
                                    v-model="formData.interrogatorio.vidaSexual"
                                    :checked="formData.interrogatorio.vidaSexual">
                                <label class="custom-control-label" for="ucVidaSexual">Vida sexual
                                    activa</label>
                            </div>
                        </div>
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ucIncontinenciaPenetracion"
                                    v-model="formData.interrogatorio.incontinenciaPenetracion"
                                    :checked="formData.interrogatorio.incontinenciaPenetracion">
                                <label class="custom-control-label" for="ucIncontinenciaPenetracion">Incontinencia
                                    durante prenetración u
                                    orgasmo</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ucEvacuacionesDia">Evacuaciones al
                                dia</label>
                            <input type="number" class="form-control form-control-lg" :disabled="disabled" id="ucEvacuacionesDia"
                                v-model="formData.interrogatorio.evacuacionesDia">
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="Dispareunia">Dispareunia</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="Dispareunia"
                                v-model="formData.interrogatorio.dispareunia">
                                <option value="Superficial">Superficial</option>
                                <option value="Profunda">Profunda</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-25 card shadow-none p-0 border rounded">
                    <div class="atbd-collapse-item__header">
                        <a class="item-link" data-toggle="collapse" data-target="#ucExploracionFisica"
                            aria-expanded="true" aria-controls="ucExploracionFisica">
                            <i class="la la-angle-right"></i>
                            Exploración física
                        </a>
                    </div>
                    <div :disabled="disabled" id="ucExploracionFisica" class="atbd-collapse-item__body collapse card-body row mx-0">
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ucReflejosPerineales">Reflejos perineales</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ucReflejosPerineales"
                                v-model="formData.exploracionFisica.reflejosPerineales">
                                <option value="Presentes">Presentes</option>
                                <option value="Ausentes">Ausentes </option>
                                <option value="Normales">Normales </option>
                                <option value="Disminuidos">Disminuidos </option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ucPruebaTos">Prueba de la tos con vejiga</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ucPruebaTos"
                                v-model="formData.exploracionFisica.pruebaTos">
                                <option value="Llenas">Llenas</option>
                                <option value="Vacias">Vacias </option>
                                <option value="Positivas">Positivas </option>
                                <option value="Negativas">Negativas </option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="">Atrofia
                                Vaginal</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="ucAtrofiaVaginal"
                                v-model="formData.exploracionFisica.atrofiaVaginal">
                                <option value="Presentes">Presentes</option>
                                <option value="Ausentes">Ausentes </option>
                                <option value="Leve">Leve </option>
                                <option value="Moderada">Moderada </option>
                                <option value="Severa">Severa </option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label for="">Notas</label>
                            <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="ucNotas"
                                v-model="formData.exploracionFisica.notas"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UroginecologiaComponent.ts"></script>
