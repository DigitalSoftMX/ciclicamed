<template>
    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Tipo de Sangre</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcTipoSangre"
                        :checked="formDataCopy.tipoSangre.check" v-model="formDataCopy.tipoSangre.check">
                    <label class="custom-control-label" for="pnpcTipoSangre"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.tipoSangre.check">
                <div class="d-flex">
                    <select name="select-size-1" class="form-control form-control-lg" :disabled="disabled" id="pnpcTipoSangreDescription"
                        v-model="formDataCopy.tipoSangre.description">
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Ejercicio</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcEjercicioCheck"
                        :checked="formDataCopy.ejercicio.check" v-model="formDataCopy.ejercicio.check">
                    <label class="custom-control-label" for="pnpcEjercicioCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.ejercicio.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcEjercicioDescription" placeholder="Ejercicio" rows="5"
                    v-model="formDataCopy.ejercicio.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Tabaquismo</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcTabaquismoCheck"
                        :checked="formDataCopy.tabaquismo.check" v-model="formDataCopy.tabaquismo.check">
                    <label class="custom-control-label" for="pnpcTabaquismoCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.tabaquismo.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcTabaquismoDescription" placeholder="Tabaquismo" rows="5"
                    v-model="formDataCopy.tabaquismo.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Alcoholismo</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcAlcoholismoCheck"
                        :checked="formDataCopy.alcoholismo.check" v-model="formDataCopy.alcoholismo.check">
                    <label class="custom-control-label" for="pnpcAlcoholismoCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.alcoholismo.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcAlcoholismoDescription" placeholder="Alcoholismo" rows="5"
                    v-model="formDataCopy.alcoholismo.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Drogas</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcDrogasCheck"
                        :checked="formDataCopy.drogas.check" v-model="formDataCopy.drogas.check">
                    <label class="custom-control-label" for="pnpcDrogasCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.drogas.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcDrogasDescription" placeholder="Drogas" rows="5"
                    v-model="formDataCopy.drogas.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Estreñimiento</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcEstreniminentoCheck"
                        :checked="formDataCopy.estrenimiento.check" v-model="formDataCopy.estrenimiento.check">
                    <label class="custom-control-label" for="pnpcEstreniminentoCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.estrenimiento.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcEstreniminentoDescription" placeholder="Drogas" rows="5"
                    v-model="formDataCopy.estrenimiento.description"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PersonalesNoPatologicosComponent.ts"></script>
