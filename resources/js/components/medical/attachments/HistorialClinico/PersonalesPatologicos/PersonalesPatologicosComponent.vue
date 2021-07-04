<template>
    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Cirugías</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcCirugiasCheck"
                        :checked="formData.cirugias.check" v-model="formData.cirugias.check">
                    <label class="custom-control-label" for="ppcCirugiasCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.cirugias.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcCirugiasDescription" placeholder="Descripción corta"
                    rows="5" v-model="formData.cirugias.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Transfusionales</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcTransfusionalesCheck"
                        :checked="formData.transfusionales.check" v-model="formData.transfusionales.check">
                    <label class="custom-control-label" for="ppcTransfusionalesCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.transfusionales.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcTransfusionalesDescription"
                    placeholder="¿Cúantas veces? ¿Hace cuanto?" rows="5"
                    v-model="formData.transfusionales.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Infecciosas</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcInfecciosasCheck"
                        :checked="formData.infecciosas.check" v-model="formData.infecciosas.check">
                    <label class="custom-control-label" for="ppcInfecciosasCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.infecciosas.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcInfecciosasDescription" placeholder="Descríbalas"
                    rows="5" v-model="formData.infecciosas.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Crónico degenerativas</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcCronicoDegenerativasCheck"
                        :checked="formData.cronicoDegenerativas.check"
                        v-model="formData.cronicoDegenerativas.check">
                    <label class="custom-control-label" for="ppcCronicoDegenerativasCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.cronicoDegenerativas.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcCronicoDegenerativasDescription"
                    placeholder="Descríbalas" rows="5"
                    v-model="formData.cronicoDegenerativas.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Traumatismos</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcTraumatismosCheck"
                        :checked="formData.traumatismos.check" v-model="formData.traumatismos.check">
                    <label class="custom-control-label" for="ppcTraumatismosCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.traumatismos.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcTraumatismosDescription" placeholder="Descríbalas"
                    rows="5" v-model="formData.traumatismos.description"></textarea>
            </div>
        </div>
    </div>

    <div class="card-single mb-4">
        <div class="card card-md shadow-none">
            <div class="card-header">
                <h6>Ginecológicos</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ppcGinecologicosCheck"
                        :checked="formData.ginecologicos.check" v-model="formData.ginecologicos.check">
                    <label class="custom-control-label" for="ppcGinecologicosCheck"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.ginecologicos.check">
                <textarea type="text" class="form-control" :disabled="disabled" id="ppcGinecologicosDescription" placeholder="Descríbalas"
                    rows="5" v-model="formData.ginecologicos.description"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PersonalesPatologicosComponent.ts"></script>
