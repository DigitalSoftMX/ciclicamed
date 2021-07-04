<template>
    <div class="card-single mb-4">
        <div class="card card-md bg-white shadow-none">
            <div class="card-header">
                <h6>Hipertensión</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="hfcHipertension"
                        :checked="formData.hipertension.check"
                        v-model="formData.hipertension.check">
                    <label class="custom-control-label" for="hfcHipertension"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.hipertension.check">
                <div class="w-auto">
                    <select name="select-size-1" class="form-control form-control-lg"
                        v-model="formData.hipertension.description">
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
        <div class="card card-md bg-white shadow-none">
            <div class="card-header">
                <h6>Cáncer</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="hfcCancer"
                        :checked="formData.cancer.check"
                        v-model="formData.cancer.check">
                    <label class="custom-control-label" for="hfcCancer"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.cancer.check">
                <div class="col-12 p-0 mb-25">
                    <label>Ginecológico</label>
                    <div class="row mx-0">
                        <div class="col-12 col-md-7 mb-25 mb-md-0">
                            <textarea type="text" class="form-control" :disabled="disabled" id="hfcCancerGinecologico"
                                v-model="formData.cancer.ginecologico.description"
                                placeholder="Ginecológico"></textarea>
                        </div>
                        <div class="col-12 col-md-5">
                            <input type="number" class="form-control" :disabled="disabled" id="hfcCancerGinecologicoEdad"
                                v-model="formData.cancer.ginecologico.age"
                                placeholder="Edad de aparición">
                        </div>
                    </div>
                </div>
                <div class="col-12 p-0">
                    <label>Otros</label>
                    <div class="row mx-0">
                        <div class="col-12 col-md-7 mb-25 mb-md-0">
                            <textarea type="text" class="form-control" :disabled="disabled" id="hfcCancerOtros"
                                v-model="formData.cancer.otros.description"
                                placeholder="Ginecológico"></textarea>
                        </div>
                        <div class="col-12 col-md-5">
                            <input type="number" class="form-control" :disabled="disabled" id="hfcCancerOtrosEdad"
                                v-model="formData.cancer.otros.age" placeholder="Edad de aparición">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md bg-white shadow-none">
            <div class="card-header">
                <h6>Diabetes mellitus</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="hfcDiabetesMellitus"
                        :checked="formData.diabetesMellitus.check"
                        v-model="formData.diabetesMellitus.check">
                    <label class="custom-control-label" for="hfcDiabetesMellitus"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.diabetesMellitus.check">
                <div class="w-auto">
                    <select name="select-size-1" class="form-control form-control-lg"
                        v-model="formData.diabetesMellitus.description">
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
        <div class="card card-md bg-white shadow-none">
            <div class="card-header">
                <h6>Patología tiroidea</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="hfcPatologiaTiroidea"
                        :checked="formData.patologiaTiroidea.check"
                        v-model="formData.patologiaTiroidea.check">
                    <label class="custom-control-label" for="hfcPatologiaTiroidea"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.patologiaTiroidea.check">
                <div class="w-auto">
                    <select name="select-size-1" class="form-control form-control-lg"
                        v-model="formData.patologiaTiroidea.description">
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
        <div class="card card-md bg-white shadow-none">
            <div class="card-header">
                <h6>Otros</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="hfcOtros"
                        :checked="formData.otros.check"
                        v-model="formData.otros.check">
                    <label class="custom-control-label" for="hfcOtros"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.otros.check">
                <div class="col-12 p-0">
                    <div class="row mx-0">
                        <textarea type="text" class="form-control" :disabled="disabled" id="hfcOtrosOtros"
                            v-model="formData.cancer.otros.description"
                            placeholder="Ginecológico"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./HeredoFamiliaresComponent.ts"></script>
