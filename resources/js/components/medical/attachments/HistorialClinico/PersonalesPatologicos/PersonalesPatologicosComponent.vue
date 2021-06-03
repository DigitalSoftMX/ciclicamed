<template>
    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Cirugías</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcCirugiasCheck"
                        :checked="formDataCopy.cirugias.check" v-model="formDataCopy.cirugias.check">
                    <label class="custom-control-label" for="ppcCirugiasCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.cirugias.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcCirugiasDescription" placeholder="Descripción corta"
                    rows="5" v-model="formDataCopy.cirugias.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Transfusionales</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcTransfusionalesCheck"
                        :checked="formDataCopy.transfusionales.check" v-model="formDataCopy.transfusionales.check">
                    <label class="custom-control-label" for="ppcTransfusionalesCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.transfusionales.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcTransfusionalesDescription"
                    placeholder="¿Cúantas veces? ¿Hace cuanto?" rows="5"
                    v-model="formDataCopy.transfusionales.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Infecciosas</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcInfecciosasCheck"
                        :checked="formDataCopy.infecciosas.check" v-model="formDataCopy.infecciosas.check">
                    <label class="custom-control-label" for="ppcInfecciosasCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.infecciosas.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcInfecciosasDescription" placeholder="Descríbalas"
                    rows="5" v-model="formDataCopy.infecciosas.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Crónico degenerativas</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcCronicoDegenerativasCheck"
                        :checked="formDataCopy.cronicoDegenerativas.check"
                        v-model="formDataCopy.cronicoDegenerativas.check">
                    <label class="custom-control-label" for="ppcCronicoDegenerativasCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.cronicoDegenerativas.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcCronicoDegenerativasDescription"
                    placeholder="Descríbalas" rows="5"
                    v-model="formDataCopy.cronicoDegenerativas.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Traumatismos</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcTraumatismosCheck"
                        :checked="formDataCopy.traumatismos.check" v-model="formDataCopy.traumatismos.check">
                    <label class="custom-control-label" for="ppcTraumatismosCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.traumatismos.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcTraumatismosDescription" placeholder="Descríbalas"
                    rows="5" v-model="formDataCopy.traumatismos.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-default card-md bg-white">
            <div class="card-header">
                <h6>Ginecológicos</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcGinecologicosCheck"
                        :checked="formDataCopy.ginecologicos.check" v-model="formDataCopy.ginecologicos.check">
                    <label class="custom-control-label" for="ppcGinecologicosCheck"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.ginecologicos.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcGinecologicosDescription" placeholder="Descríbalas"
                    rows="5" v-model="formDataCopy.ginecologicos.description"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PersonalesPatologicosComponent.ts"></script>
