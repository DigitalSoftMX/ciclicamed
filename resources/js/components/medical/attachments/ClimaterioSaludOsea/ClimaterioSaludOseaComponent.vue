<template>
    <div class="card p-0">
        <div class="card-header">
            <h5 class="title-ciclica">Climaterio y salud ósea</h5>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 col-md-4 mb-25">
                <label for="csocCiclosMenstruales">Ciclos
                    menstruales</label>
                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="csocCiclosMenstruales"
                    v-model="formData.ciclosMenstruales">
            </div>
            <div class="col-12 col-md-4 mb-25">
                <label for="csocCantidadSangrado">Cantidad de sangrado
                    mestrual</label>
                <select class="form-control form-control-lg" :disabled="disabled" id="csocCantidadSangrado"
                    v-model="formData.cantidadSangrado">
                    <option value="Escaso">Escaso</option>
                    <option value="Normal">Normal</option>
                    <option value="Abundante">Abundante</option>
                </select>
            </div>
            <div class="col-12 col-md-4 mb-25">
                <label for="csocToallas">Toallas por día</label>
                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="csocToallas"
                    v-model="formData.toallas" placeholder="#">
            </div>
            <div class="card-single col-12 col-md-6 mb-4">
                <div class="card shadow-none">
                    <div class="card-header">
                        <h6>Dismenorrea</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocDilgenorreaCheck"
                                v-model="formData.dilgenorrea.check" :checked="formData.dilgenorrea.check">
                            <label class="custom-control-label" for="csocDilgenorreaCheck"></label>
                        </div>
                    </div>
                    <div class="card-body" v-show="formData.dilgenorrea.check">
                        <div class="w-auto">
                            <select class="form-control form-control-lg" :disabled="disabled" id="csocDilgenorreaDescription"
                                v-model="formData.dilgenorrea.description">
                                <option value="Leve">Leve</option>
                                <option value="Moderado">Moderado</option>
                                <option value="Severo">Severo</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-single col-12 col-md-6 mb-4">
                <div class="card shadow-none">
                    <div class="card-header">
                        <h6>Bochornos</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocBochornosCheck"
                                v-model="formData.bochornos.check" :checked="formData.bochornos.check">
                            <label class="custom-control-label" for="csocBochornosCheck"></label>
                        </div>
                    </div>
                    <div class="card-body" v-show="formData.bochornos.check">
                        <div class="w-auto">
                            <select class="form-control form-control-lg" :disabled="disabled" id="csocBochornosDescription"
                                v-model="formData.bochornos.description">
                                <option value="Leve">Leve</option>
                                <option value="Moderado">Moderado</option>
                                <option value="Severo">Severo</option>
                            </select>
                        </div>
                        <label for="csocTiempoEvolucionB">Tiempo de evolución</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="csocTiempoEvolucionB"
                            v-model="formData.tiempoEvolucionB">
                    </div>
                </div>
            </div>
            <div class="row mx-0">
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocCaidaCabello"
                            v-model="formData.caidaCabello" :checked="formData.caidaCabello">
                        <label class="custom-control-label" for="csocCaidaCabello">Caída del cabello</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocResequedadPiel"
                            v-model="formData.resequedadPiel" :checked="formData.resequedadPiel">
                        <label class="custom-control-label" for="csocResequedadPiel">Resequedad de la piel</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocLabilidad"
                            v-model="formData.labilidad" :checked="formData.labilidad">
                        <label class="custom-control-label" for="csocLabilidad">Labilidad</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocIrritabilidad"
                            v-model="formData.irritabilidad" :checked="formData.irritabilidad">
                        <label class="custom-control-label" for="csocIrritabilidad">Irritabilidad</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocAnsiedad"
                            v-model="formData.ansiedad" :checked="formData.ansiedad">
                        <label class="custom-control-label" for="csocAnsiedad">Ansiedad</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocNerviosismo"
                            v-model="formData.nerviosismo" :checked="formData.nerviosismo">
                        <label class="custom-control-label" for="csocNerviosismo">Nerviosismo</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocCefalea"
                            v-model="formData.cefalea" :checked="formData.cefalea">
                        <label class="custom-control-label" for="csocCefalea">Cefalea</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocInsomnio"
                            v-model="formData.insomnio" :checked="formData.insomnio">
                        <label class="custom-control-label" for="csocInsomnio">Insomnio</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocAlteracionLibido"
                            v-model="formData.alteracionLibido" :checked="formData.alteracionLibido">
                        <label class="custom-control-label" for="csocAlteracionLibido">Alteración del líbido</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocResequedadVaginal"
                            v-model="formData.resequedadVaginal" :checked="formData.resequedadVaginal">
                        <label class="custom-control-label" for="csocResequedadVaginal">Resequedad vaginal</label>
                    </div>
                </div>
            </div>
            <div class="card-single col-12 col-md-6 mb-4">
                <div class="card shadow-none">
                    <div class="card-header">
                        <h6>Sudoración</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocSudoracionCheck"
                                v-model="formData.sudoracion.check" :checked="formData.sudoracion.check">
                            <label class="custom-control-label" for="csocSudoracionCheck"></label>
                        </div>
                    </div>
                    <div class="card-body" v-show="formData.sudoracion.check">
                        <div class="w-auto">
                            <select class="form-control form-control-lg" :disabled="disabled" id="csocSudoracionDescription"
                                v-model="formData.sudoracion.description">
                                <option value="Leve">Leve</option>
                                <option value="Moderado">Moderado</option>
                                <option value="Severo">Severo</option>1
                            </select>
                        </div>
                        <label for="csocTiempoEvolucion">Tiempo de evolución</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="csocTiempoEvolucion"
                            v-model="formData.tiempoEvolucionS">
                    </div>
                </div>
            </div>
            <div class="card-single col-12 col-md-6 mb-4">
                <div class="card shadow-none">
                    <div class="card-header">
                        <h6>Incontinencia urinaria</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocIncontinenciaUrinariaCheck"
                                v-model="formData.incontinenciaUrinaria.check"
                                :checked="formData.incontinenciaUrinaria.check">
                            <label class="custom-control-label" for="csocIncontinenciaUrinariaCheck"></label>
                        </div>
                    </div>
                    <div class="card-body" v-show="formData.incontinenciaUrinaria.check">
                        <div class="w-auto">
                            <select class="form-control form-control-lg" :disabled="disabled" id="csocIncontinenciaUrinariaDescription"
                                v-model="formData.incontinenciaUrinaria.description">
                                <option value="Esfuerzo">Esfuerzo</option>
                                <option value="Urgencia">Urgencia</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25">
                <label for="csocNotas">Notas</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="csocNotas"
                    v-model="formData.notas"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ClimaterioSaludOseaComponent.ts"></script>
