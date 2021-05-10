<template>
    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white card-bordered">
            <div class="card-header">
                <h6>Hipertensión</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="hfcHipertension"
                        :checked="heredoFamiliaresDataCopy.hipertension.check"
                        v-model="heredoFamiliaresDataCopy.hipertension.check">
                    <label class="custom-control-label" for="hfcHipertension"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="heredoFamiliaresDataCopy.hipertension.check">
                <div class="w-auto">
                    <select name="select-size-1" class="form-control form-control-lg"
                        v-model="heredoFamiliaresDataCopy.hipertension.description">
                        <option value="Familiar">Familiar</option>
                        <option value="Padre">Padre</option>
                        <option value="Madre">Madre</option>
                        <option value="Hermano">Hermano</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white card-bordered">
            <div class="card-header">
                <h6>Cáncer</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="hfcCancer"
                        :checked="heredoFamiliaresDataCopy.cancer.check"
                        v-model="heredoFamiliaresDataCopy.cancer.check">
                    <label class="custom-control-label" for="hfcCancer"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="heredoFamiliaresDataCopy.cancer.check">
                <div class="col-12 p-0 mb-25">
                    <label>Ginecológico</label>
                    <div class="row mx-0">
                        <div class="col-12 col-md-7 mb-25 mb-md-0">
                            <textarea type="text" class="form-control" id="hfcCancerGinecologico"
                                v-model="heredoFamiliaresDataCopy.cancer.ginecologico.description"
                                :value="heredoFamiliaresDataCopy.cancer.ginecologico.description"
                                placeholder="Ginecológico"></textarea>
                        </div>
                        <div class="col-12 col-md-5">
                            <input type="number" class="form-control" id="hfcCancerGinecologicoEdad"
                                v-model="heredoFamiliaresDataCopy.cancer.ginecologico.age"
                                :value="heredoFamiliaresDataCopy.cancer.ginecologico.age"
                                placeholder="Edad de aparición">
                        </div>
                    </div>
                </div>
                <div class="col-12 p-0">
                    <label>Otros</label>
                    <div class="row mx-0">
                        <div class="col-12 col-md-7 mb-25 mb-md-0">
                            <textarea type="text" class="form-control" id="hfcCancerOtros"
                                v-model="heredoFamiliaresDataCopy.cancer.otros.description"
                                :value="heredoFamiliaresDataCopy.cancer.otros.description"
                                placeholder="Ginecológico"></textarea>
                        </div>
                        <div class="col-12 col-md-5">
                            <input type="number" class="form-control" id="hfcCancerOtrosEdad"
                                v-model="heredoFamiliaresDataCopy.cancer.otros.age"
                                :value="heredoFamiliaresDataCopy.cancer.otros.age" placeholder="Edad de aparición">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white card-bordered">
            <div class="card-header">
                <h6>Diabetes mellitus</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="hfcDiabetesMellitus"
                        :checked="heredoFamiliaresDataCopy.diabetesMellitus.check"
                        v-model="heredoFamiliaresDataCopy.diabetesMellitus.check">
                    <label class="custom-control-label" for="hfcDiabetesMellitus"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="heredoFamiliaresDataCopy.diabetesMellitus.check">
                <div class="w-auto">
                    <select name="select-size-1" class="form-control form-control-lg"
                        v-model="heredoFamiliaresDataCopy.diabetesMellitus.description">
                        <option value="Familiar">Familiar</option>
                        <option value="Padre">Padre</option>
                        <option value="Madre">Madre</option>
                        <option value="Hermano">Hermano</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white card-bordered">
            <div class="card-header">
                <h6>Patología tiroidea</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="hfcPatologiaTiroidea"
                        :checked="heredoFamiliaresDataCopy.patologiaTiroidea.check"
                        v-model="heredoFamiliaresDataCopy.patologiaTiroidea.check">
                    <label class="custom-control-label" for="hfcPatologiaTiroidea"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="heredoFamiliaresDataCopy.patologiaTiroidea.check">
                <div class="w-auto">
                    <select name="select-size-1" class="form-control form-control-lg"
                        v-model="heredoFamiliaresDataCopy.patologiaTiroidea.description">
                        <option value="Familiar">Familiar</option>
                        <option value="Padre">Padre</option>
                        <option value="Madre">Madre</option>
                        <option value="Hermano">Hermano</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white card-bordered">
            <div class="card-header">
                <h6>Otros</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="hfcOtros"
                        :checked="heredoFamiliaresDataCopy.otros.check"
                        v-model="heredoFamiliaresDataCopy.otros.check">
                    <label class="custom-control-label" for="hfcOtros"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="heredoFamiliaresDataCopy.otros.check">
                <div class="col-12 p-0">
                    <div class="row mx-0">
                        <textarea type="text" class="form-control" id="hfcOtrosOtros"
                            v-model="heredoFamiliaresDataCopy.cancer.otros.description"
                            :value="heredoFamiliaresDataCopy.cancer.otros.description"
                            placeholder="Ginecológico"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./HeredoFamiliaresComponent.ts"></script>
