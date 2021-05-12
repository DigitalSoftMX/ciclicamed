<template>
    <div class="card">
        <div class="card-header">
            <h6>Uroginecología</h6>
        </div>
        <div class="row card-body mx-0">
            <div class="col-md-6 mb-25">
                <label for="ucNictamero">Nictámero</label>
                <input class="form-control form-control-lg" type="number" id="ucNictamero"
                    v-model="formDataCopy.nictamero">
            </div>
            <div class="col-md-6 mb-25">
                <label for="ucConsumoLitros">Consumo de litros por dia</label>
                <input class="form-control form-control-lg" type="number" id="ucConsumoLitros"
                    v-model="formDataCopy.consumoLitros">
            </div>
            <div class="card-single col-12 mb-25">
                <div class="card card-default card-md bg-white">
                    <div class="card-header">
                        <h6>Incontinencia urinaria de urgencia</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="ucIncontinenciaUrinariaUrgencia"
                                v-model="formDataCopy.incontinenciaUrinariaUrgencia.check"
                                :checked="formDataCopy.incontinenciaUrinariaUrgencia.check">
                            <label class="custom-control-label" for="ucIncontinenciaUrinariaUrgencia"></label>
                        </div>
                    </div>
                    <div class="card-body bg-normal row mx-0" v-show="formDataCopy.incontinenciaUrinariaUrgencia.check">
                        <div class="form-group col-md-4">
                            <label for="ucUrgenciaTiempoEvolucion">Tiempo de evolución</label>
                            <input class="form-control form-control-lg" type="text" id="ucUrgenciaTiempoEvolucion"
                                v-model="formDataCopy.incontinenciaUrinariaUrgencia.tiempoEvolucion">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="ucUrgenciaFrecuencia">Frecuencia</label>
                            <input class="form-control form-control-lg" type="text" id="ucUrgenciaFrecuencia"
                                v-model="formDataCopy.incontinenciaUrinariaUrgencia.frecuencia">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="ucUrgenciaCantidadPerdida">Cantidad perdida</label>
                            <input class="form-control form-control-lg" type="text" id="ucUrgenciaCantidadPerdida"
                                v-model="formDataCopy.incontinenciaUrinariaUrgencia.cantidadPerdida">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-single col-12 mb-25">
                <div class="card card-default card-md bg-white">
                    <div class="card-header">
                        <h6>Incontinencia urinaria de esfuerzo</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="ucIncontinenciaUrinariaEsfuerzo"
                                v-model="formDataCopy.incontinenciaUrinariaEsfuerzo.check"
                                :checked="formDataCopy.incontinenciaUrinariaEsfuerzo.check">
                            <label class="custom-control-label" for="ucIncontinenciaUrinariaEsfuerzo"></label>
                        </div>
                    </div>
                    <div class="card-body bg-normal row mx-0" v-show="formDataCopy.incontinenciaUrinariaEsfuerzo.check">
                        <div class="form-group col-md-4">
                            <label for="ucEsfuerzoTiempoEvolucion">Tiempo de evolución</label>
                            <input class="form-control form-control-lg" type="text" id="ucEsfuerzoTiempoEvolucion"
                                v-model="formDataCopy.incontinenciaUrinariaEsfuerzo.tiempoEvolucion">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="ucEsfuerzoFrecuencia">Frecuencia</label>
                            <input class="form-control form-control-lg" type="text" id="ucEsfuerzoFrecuencia"
                                v-model="formDataCopy.incontinenciaUrinariaEsfuerzo.frecuencia">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="ucEsfuerzoCantidadPerdida">Cantidad perdida</label>
                            <input class="form-control form-control-lg" type="text" id="ucEsfuerzoCantidadPerdida"
                                v-model="formDataCopy.incontinenciaUrinariaEsfuerzo.cantidadPerdida">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-25">
                <label for="ucChorroMiccional">Chorro miccional</label>
                <select class="form-control form-control-lg" id="ucChorroMiccional"
                    v-model="formDataCopy.chorroMiccional">
                    <option value="Completo">Completo</option>
                    <option value="Incompleto">Incompleto</option>
                </select>
            </div>
            <div class="col-md-6 mb-25">
                <label for="ucSensacionVacionamiento">Sensación de vacionamiento</label>
                <select class="form-control form-control-lg" id="ucSensacionVacionamiento"
                    v-model="formDataCopy.sensacionVacionamiento">
                    <option value="Completo">Completo</option>
                    <option value="Incompleto">Incompleto</option>
                </select>
            </div>
            <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
                <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
                    <div class="atbd-collapse-item__header">
                        <a class="item-link" data-toggle="collapse" data-target="#ucInterrogatorio" aria-expanded="true"
                            aria-controls="ucInterrogatorio">
                            <i class="la la-angle-right"></i>
                            Interrogatorio
                        </a>
                    </div>
                    <div id="ucInterrogatorio" class="atbd-collapse-item__body collapse card-body row mx-0">
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucDisuria"
                                    v-model="formDataCopy.interrogatorio.disuria"
                                    :checked="formDataCopy.interrogatorio.disuria">
                                <label class="custom-control-label" for="ucDisuria">Disuria</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucHematuria"
                                    v-model="formDataCopy.interrogatorio.hematuria"
                                    :checked="formDataCopy.interrogatorio.hematuria">
                                <label class="custom-control-label" for="ucHematuria">Hematuria</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucSensacionCuerpoExtranio"
                                    v-model="formDataCopy.interrogatorio.sensacionCuerpoExtranio"
                                    :checked="formDataCopy.interrogatorio.sensacionCuerpoExtranio">
                                <label class="custom-control-label" for="ucSensacionCuerpoExtranio">Sensación de
                                    cuerpo extraño</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucResequedadVaginal"
                                    v-model="formDataCopy.interrogatorio.resequedadVaginal"
                                    :checked="formDataCopy.interrogatorio.resequedadVaginal">
                                <label class="custom-control-label" for="ucResequedadVaginal">Resequedad
                                    vaginal</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucArdor"
                                    v-model="formDataCopy.interrogatorio.ardor"
                                    :checked="formDataCopy.interrogatorio.ardor">
                                <label class="custom-control-label" for="ucArdor">Ardor</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucPrurito"
                                    v-model="formDataCopy.interrogatorio.prurito"
                                    :checked="formDataCopy.interrogatorio.prurito">
                                <label class="custom-control-label" for="ucPrurito">Prurito</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucEstrenimiento"
                                    v-model="formDataCopy.interrogatorio.estrenimiento"
                                    :checked="formDataCopy.interrogatorio.estrenimiento">
                                <label class="custom-control-label" for="ucEstrenimiento">Estreñimiento</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucConsumoLaxantes"
                                    v-model="formDataCopy.interrogatorio.consumoLaxantes"
                                    :checked="formDataCopy.interrogatorio.consumoLaxantes">
                                <label class="custom-control-label" for="ucConsumoLaxantes">Consumo de
                                    laxantes</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucIncontinenciaFlatos"
                                    v-model="formDataCopy.interrogatorio.incontinenciaFlatos"
                                    :checked="formDataCopy.interrogatorio.incontinenciaFlatos">
                                <label class="custom-control-label" for="ucIncontinenciaFlatos">Incontinencia a
                                    flatos o heces</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucVidaSexual"
                                    v-model="formDataCopy.interrogatorio.vidaSexual"
                                    :checked="formDataCopy.interrogatorio.vidaSexual">
                                <label class="custom-control-label" for="ucVidaSexual">Vida sexual
                                    activa</label>
                            </div>
                        </div>
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="ucIncontinenciaPenetracion"
                                    v-model="formDataCopy.interrogatorio.incontinenciaPenetracion"
                                    :checked="formDataCopy.interrogatorio.incontinenciaPenetracion">
                                <label class="custom-control-label" for="ucIncontinenciaPenetracion">Incontinencia
                                    durante prenetración u
                                    orgasmo</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ucEvacuacionesDia">Evacuaciones al
                                dia</label>
                            <input type="number" class="form-control form-control-lg" id="ucEvacuacionesDia"
                                v-model="formDataCopy.interrogatorio.evacuacionesDia">
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="Dispareunia">Dispareunia</label>
                            <select class="form-control form-control-lg" id="Dispareunia"
                                v-model="formDataCopy.interrogatorio.dispareunia">
                                <option value="Superficial">Superficial</option>
                                <option value="Profunda">Profunda</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
                    <div class="atbd-collapse-item__header">
                        <a class="item-link" data-toggle="collapse" data-target="#ucExploracionFisica"
                            aria-expanded="true" aria-controls="ucExploracionFisica">
                            <i class="la la-angle-right"></i>
                            Exploración física
                        </a>
                    </div>
                    <div id="ucExploracionFisica" class="atbd-collapse-item__body collapse card-body row mx-0">
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ucReflejosPerineales">Reflejos perineales</label>
                            <select class="form-control form-control-lg" id="ucReflejosPerineales"
                                v-model="formDataCopy.exploracionFisica.reflejosPerineales">
                                <option value="Presentes">Presentes</option>
                                <option value="Ausentes">Ausentes </option>
                                <option value="Normales">Normales </option>
                                <option value="Disminuidos">Disminuidos </option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ucPruebaTos">Prueba de la tos con vejiga</label>
                            <select class="form-control form-control-lg" id="ucPruebaTos"
                                v-model="formDataCopy.exploracionFisica.pruebaTos">
                                <option value="Llenas">Llenas</option>
                                <option value="Vacias">Vacias </option>
                                <option value="Positivas">Positivas </option>
                                <option value="Negativas">Negativas </option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="">Atrofia
                                Vaginal</label>
                            <select class="form-control form-control-lg" id="ucAtrofiaVaginal"
                                v-model="formDataCopy.exploracionFisica.atrofiaVaginal">
                                <option value="Presentes">Presentes</option>
                                <option value="Ausentes">Ausentes </option>
                                <option value="Leve">Leve </option>
                                <option value="Moderada">Moderada </option>
                                <option value="Severa">Severa </option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label for="">Notas</label>
                            <textarea class="form-control form-control-lg" rows="3" id="ucNotas"
                                v-model="formDataCopy.exploracionFisica.notas"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UroginecologiaComponent.ts"></script>
