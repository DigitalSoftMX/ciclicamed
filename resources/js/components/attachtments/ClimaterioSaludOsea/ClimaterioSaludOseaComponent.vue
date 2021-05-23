<template>
    <div class="card p-0">
        <div class="card-header">
            <h5 class="title-ciclica">Climaterio y salud ósea</h5>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 col-md-4 mb-25">
                <label for="csocCiclosMenstruales" class="col-form-label col-form-label-lg mb-1">Ciclos
                    menstruales</label>
                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="csocCiclosMenstruales"
                    v-model="formDataCopy.ciclosMenstruales">
            </div>
            <div class="col-12 col-md-6 mb-25">
                <label for="csocCantidadSangrado" class="col-form-label col-form-label-lg mb-1">Cantidad de sangrado
                    mestrual</label>
                <select class="form-control form-control-lg" :disabled="disabled" id="csocCantidadSangrado"
                    v-model="formDataCopy.cantidadSangrado">
                    <option>Escaso</option>
                    <option>Normal</option>
                    <option>Abundante</option>
                </select>
            </div>
            <div class="col-md-4 mb-25">
                <label for="csocToallas" class="col-form-label col-form-label-lg mb-1">Toallas por día</label>
                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="csocToallas"
                    v-model="formDataCopy.toallas">
            </div>
            <div class="card-single col-12 mb-4">
                <div class="card card-default card-md bg-white">
                    <div class="card-header">
                        <h6>Dilgenorrea</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocDilgenorreaCheck"
                                v-model="formDataCopy.dilgenorrea.check" :checked="formDataCopy.dilgenorrea.check">
                            <label class="custom-control-label" for="csocDilgenorreaCheck"></label>
                        </div>
                    </div>
                    <div class="card-body bg-normal" v-show="formDataCopy.dilgenorrea.check">
                        <div class="w-auto">
                            <select class="form-control form-control-lg" :disabled="disabled" id="csocDilgenorreaDescription"
                                v-model="formDataCopy.dilgenorrea.description">
                                <option value="Leve">Leve</option>
                                <option value="Moderado">Moderado</option>
                                <option value="Severo">Severo</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-single col-12 mb-4">
                <div class="card card-default card-md bg-white">
                    <div class="card-header">
                        <h6>Bochornos</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocBochornosCheck"
                                v-model="formDataCopy.bochornos.check" :checked="formDataCopy.bochornos.check">
                            <label class="custom-control-label" for="csocBochornosCheck"></label>
                        </div>
                    </div>
                    <div class="card-body bg-normal" v-show="formDataCopy.bochornos.check">
                        <div class="w-auto">
                            <select class="form-control form-control-lg" :disabled="disabled" id="csocBochornosDescription"
                                v-model="formDataCopy.bochornos.description">
                                <option value="Leve">Leve</option>
                                <option value="Moderado">Moderado</option>
                                <option value="Severo">Severo</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-0">
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocCaidaCabello"
                            v-model="formDataCopy.caidaCabello" :checked="formDataCopy.caidaCabello">
                        <label class="custom-control-label" for="csocCaidaCabello">Caída del cabello</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocResequedadPiel"
                            v-model="formDataCopy.resequedadPiel" :checked="formDataCopy.resequedadPiel">
                        <label class="custom-control-label" for="csocResequedadPiel">Resequedad de la piel</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocLabilidad"
                            v-model="formDataCopy.labilidad" :checked="formDataCopy.labilidad">
                        <label class="custom-control-label" for="csocLabilidad">Labilidad</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocIrritabilidad"
                            v-model="formDataCopy.irritabilidad" :checked="formDataCopy.irritabilidad">
                        <label class="custom-control-label" for="csocIrritabilidad">Irritabilidad</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocAnsiedad"
                            v-model="formDataCopy.ansiedad" :checked="formDataCopy.ansiedad">
                        <label class="custom-control-label" for="csocAnsiedad">Ansiedad</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocNerviosismo"
                            v-model="formDataCopy.nerviosismo" :checked="formDataCopy.nerviosismo">
                        <label class="custom-control-label" for="csocNerviosismo">Nerviosismo</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocCefalea"
                            v-model="formDataCopy.cefalea" :checked="formDataCopy.cefalea">
                        <label class="custom-control-label" for="csocCefalea">Cefalea</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocInsomnio"
                            v-model="formDataCopy.insomnio" :checked="formDataCopy.insomnio">
                        <label class="custom-control-label" for="csocInsomnio">Insomnio</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocAlteracionLibido"
                            v-model="formDataCopy.alteracionLibido" :checked="formDataCopy.alteracionLibido">
                        <label class="custom-control-label" for="csocAlteracionLibido">Alteración del líbido</label>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocResequedadVaginal"
                            v-model="formDataCopy.resequedadVaginal" :checked="formDataCopy.resequedadVaginal">
                        <label class="custom-control-label" for="csocResequedadVaginal">Resequedad vaginal</label>
                    </div>
                </div>
            </div>
            <div class="card-single col-12 mb-4">
                <div class="card card-default card-md bg-white">
                    <div class="card-header">
                        <h6>Sudoración</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocSudoracionCheck"
                                v-model="formDataCopy.sudoracion.check" :checked="formDataCopy.sudoracion.check">
                            <label class="custom-control-label" for="csocSudoracionCheck"></label>
                        </div>
                    </div>
                    <div class="card-body bg-normal" v-show="formDataCopy.sudoracion.check">
                        <div class="w-auto">
                            <select class="form-control form-control-lg" :disabled="disabled" id="csocSudoracionDescription"
                                v-model="formDataCopy.sudoracion.description">
                                <option value="Leve">Leve</option>
                                <option value="Moderado">Moderado</option>
                                <option value="Severo">Severo</option>1
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-single col-12 mb-4">
                <div class="card card-default card-md bg-white">
                    <div class="card-header">
                        <h6>Incontinencia urinaria</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="csocIncontinenciaUrinariaCheck"
                                v-model="formDataCopy.incontinenciaUrinaria.check"
                                :checked="formDataCopy.incontinenciaUrinaria.check">
                            <label class="custom-control-label" for="csocIncontinenciaUrinariaCheck"></label>
                        </div>
                    </div>
                    <div class="card-body bg-normal" v-show="formDataCopy.incontinenciaUrinaria.check">
                        <div class="w-auto">
                            <select class="form-control form-control-lg" :disabled="disabled" id="csocIncontinenciaUrinariaDescription"
                                v-model="formDataCopy.incontinenciaUrinaria.description">
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
                    v-model="formDataCopy.notas"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ClimaterioSaludOseaComponent.ts"></script>
