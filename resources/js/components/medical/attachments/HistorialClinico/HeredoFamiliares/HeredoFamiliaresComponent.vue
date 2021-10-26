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
                        v-model="formData.hipertension.description" :disabled="disabled">
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
                    <div class="row">
                        <div class="col-12 col-md-7 mt-1">
                            <div class="card card-md bg-white shadow-none">
                                <div class="card-header">
                                    <label>Ginecológico</label>
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="hfcGinecologico"
                                            :checked="formData.cancer.ginecologico.check"
                                            v-model="formData.cancer.ginecologico.check">
                                        <label class="custom-control-label" for="hfcGinecologico"></label>
                                    </div>
                                </div>
                                <div class="card-body" v-show="formData.cancer.ginecologico.check">
                                    <div class="col-12 p-0 mb-25">
                                        <div class="col-12 mb-25 mb-md-0">
                                            <label for="hfcCancerGinecologico">Antecedente Familiar</label>
                                            <select class="form-control form-control-lg" :disabled="disabled" id="hfcCancerGinecologico" v-model="formData.cancer.ginecologico.description">
                                                <option>Madre</option>
                                                <option>Padre</option>
                                                <option>Hermano</option>
                                                <option>Otro</option>
                                            </select>
                                            <!-- <textarea v-if="formData.cancer.ginecologico.description=='Otro'" type="text" class="form-control mt-3" :disabled="disabled" id="hfcCancerGinecologicoOtro"
                                                v-model="formData.cancer.ginecologico.otro"
                                                placeholder="Otros"></textarea> -->
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-md-5">
                            <label for="hfcCancerGinecologicoEdad">Edad de aparición</label>
                            <input type="number" class="form-control" :disabled="disabled" id="hfcCancerGinecologicoEdad"
                                v-model="formData.cancer.ginecologico.age"
                                placeholder="Edad de aparición">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-7 mb-25 mt-1">
                        <div class="card card-md bg-white shadow-none">
                            <div class="card-header">
                                <label>Otros</label>
                                <input type="text" class="form-control mx-3" :disabled="disabled" id="hfcCancerOtrosOtro"
                                    v-model="formData.cancer.otros.otro"
                                    placeholder="Otros">
                                    {{formData.cancer.otros.otro}}
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="hfcGinecologicoOtros"
                                        :checked="formData.cancer.otros.check"
                                        v-model="formData.cancer.otros.check">
                                    <label class="custom-control-label" for="hfcGinecologicoOtros"></label>
                                </div>
                            </div>
                            <div class="card-body" v-show="formData.cancer.otros.check">
                                <div class="col-12 p-0 mb-25">
                                    <div class="col-12 mb-25 mb-md-0">
                                        <select class="form-control form-control-lg" :disabled="disabled" id="hfcCancerOtros" v-model="formData.cancer.otros.description">
                                            <option>Madre</option>
                                            <option>Padre</option>
                                            <option>Hermano</option>
                                            <option>Otro</option>
                                        </select>
                                        <!-- <textarea v-if="formData.cancer.otros.description=='Otro'" type="text" class="form-control mt-3" :disabled="disabled" id="hfcCancerOtrosOtro"
                                            v-model="formData.cancer.otros.otro"
                                            placeholder="Otros"></textarea> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div class="col-12 col-md-5">
                        <label for="hfcCancerOtrosEdad">Edad de aparición</label>
                        <input type="number" class="form-control" :disabled="disabled" id="hfcCancerOtrosEdad"
                            v-model="formData.cancer.otros.age" placeholder="Edad de aparición">
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
                    <select name="select-size-1" class="form-control form-control-lg" :disabled="disabled"
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
                    <select name="select-size-1" class="form-control form-control-lg" :disabled="disabled"
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
                            v-model="formData.otros.description"
                            placeholder="Otros"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./HeredoFamiliaresComponent.ts"></script>
