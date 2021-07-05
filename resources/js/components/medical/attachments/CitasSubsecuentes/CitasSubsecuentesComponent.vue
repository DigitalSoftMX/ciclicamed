<template>
    <div class="card">
        <div class="card-header">
            <h3>{{title}}</h3>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 col-md-6 mb-25 ">
                <label for="cscFUM">FUM</label>
                <input class="form-control form-control-lg" type="date" id="cscFUM" v-model="formData.fum" :disabled="disabled">
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscIMC">IMC</label>
                <input class="form-control form-control-lg" type="text" id="cscIMC" v-model="formData.imc" :disabled="disabled">
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscPeso">Peso</label>
                <input class="form-control form-control-lg" type="text" id="cscPeso" v-model="formData.peso" :disabled="disabled">
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscTA">TA</label>
                <input class="form-control form-control-lg" type="text" id="cscTA" v-model="formData.ta" :disabled="disabled">
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscFC">FC</label>
                <input class="form-control form-control-lg" type="text" id="cscFC" v-model="formData.fc" :disabled="disabled">
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscFR">FR</label>
                <input class="form-control form-control-lg" type="text" id="cscFR" v-model="formData.fr" :disabled="disabled">
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscTemperatura">Temperatura</label>
                <input class="form-control form-control-lg" type="text" id="cscTemperatura" v-model="formData.temperatura" :disabled="disabled">
            </div>
            <div class="col-12 mb-25">
                <label for="cscDiagnosticos">Diagnósticos</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscDiagnosticos" v-model="formData.diagnosticos" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscSubjetivo">Subjetivo</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscSubjetivo" v-model="formData.subjetivo" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscObjetivo">Objetivo</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscObjetivo" v-model="formData.objetivo" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscAnalisis">Análisis</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscAnalisis" v-model="formData.analisis" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscPlan">Plan</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscPlan" v-model="formData.plan" :disabled="disabled"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CitasSubsecuentesComponent.ts"></script>
