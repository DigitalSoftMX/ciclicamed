<template>
    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Tipo de Sangre</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcTipoSangre"
                        :checked="formData.tipoSangre.check" v-model="formData.tipoSangre.check">
                    <label class="custom-control-label" for="pnpcTipoSangre"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.tipoSangre.check">
                <div class="d-flex">
                    <select name="select-size-1" class="form-control form-control-lg" :disabled="disabled" id="pnpcTipoSangreDescription"
                        v-model="formData.tipoSangre.description">
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
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Ejercicio</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcEjercicioCheck"
                        :checked="formData.ejercicio.check" v-model="formData.ejercicio.check">
                    <label class="custom-control-label" for="pnpcEjercicioCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.ejercicio.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcEjercicioDescription" placeholder="Ejercicio" rows="5"
                    v-model="formData.ejercicio.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Tabaquismo</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcTabaquismoCheck"
                        :checked="formData.tabaquismo.check" v-model="formData.tabaquismo.check">
                    <label class="custom-control-label" for="pnpcTabaquismoCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.tabaquismo.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcTabaquismoDescription" placeholder="Tabaquismo" rows="5"
                    v-model="formData.tabaquismo.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Alcoholismo</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcAlcoholismoCheck"
                        :checked="formData.alcoholismo.check" v-model="formData.alcoholismo.check">
                    <label class="custom-control-label" for="pnpcAlcoholismoCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.alcoholismo.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcAlcoholismoDescription" placeholder="Alcoholismo" rows="5"
                    v-model="formData.alcoholismo.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Drogas</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcDrogasCheck"
                        :checked="formData.drogas.check" v-model="formData.drogas.check">
                    <label class="custom-control-label" for="pnpcDrogasCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.drogas.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcDrogasDescription" placeholder="Drogas" rows="5"
                    v-model="formData.drogas.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Estreñimiento</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="pnpcEstreniminentoCheck"
                        :checked="formData.estrenimiento.check" v-model="formData.estrenimiento.check">
                    <label class="custom-control-label" for="pnpcEstreniminentoCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.estrenimiento.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="pnpcEstreniminentoDescription" placeholder="Drogas" rows="5"
                    v-model="formData.estrenimiento.description"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PersonalesNoPatologicosComponent.ts"></script>
