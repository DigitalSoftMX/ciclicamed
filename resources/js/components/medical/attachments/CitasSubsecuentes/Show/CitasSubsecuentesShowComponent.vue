<template>
    <div class="card">
        <div class="card-header">
            <h3>{{title}}</h3>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 col-md-6 mb-25 ">
                <label for="cscFUM">FUM</label>
                <input class="form-control form-control-lg" type="date" id="cscFUM" v-model="formData.fum" disabled>
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscIMC">IMC</label>
                <input class="form-control form-control-lg" type="text" id="cscIMC" v-model="formData.imc" disabled>
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscPeso">Peso</label>
                <input class="form-control form-control-lg" type="text" id="cscPeso" v-model="formData.peso" disabled>
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscTA">T/A</label>
                <div class="row">
                    <input class="col form-control form-control-lg mx-1" type="text"
                        id="cscT" v-model="formData.t" disabled>
                    <label class="d-flex align-items-center">/</label>
                    <input class="col form-control form-control-lg mx-1" type="text"
                        id="cscA" v-model="formData.a" disabled>
                </div>
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscFC">FC</label>
                <input class="form-control form-control-lg" type="text" id="cscFC" v-model="formData.fc" disabled>
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscFR">FR</label>
                <input class="form-control form-control-lg" type="text" id="cscFR" v-model="formData.fr" disabled>
            </div>
            <div class="col-12 col-md-3 mb-25 ">
                <label for="cscTemperatura">Temperatura</label>
                <input class="form-control form-control-lg" type="text" id="cscTemperatura" v-model="formData.temperatura" disabled>
            </div>
            <div class="col-12 mb-25">
                    <label for="cscDiagnosticos">Diagnósticos</label>
                    <textarea class="form-control form-control-lg" rows="5" id="cscDiagnosticos" v-model="formData.diagnosticos" disabled></textarea>
                </div>
                <div class="col-12 mb-25">
                    <label for="cscSubjetivo">Subjetivo</label>
                    <textarea class="form-control form-control-lg" rows="5" id="cscSubjetivo" v-model="formData.subjetivo" disabled></textarea>
                </div>
                <div class="col-12 mb-25">
                    <label for="cscObjetivo">Objetivo</label>
                    <textarea class="form-control form-control-lg" rows="5" id="cscObjetivo" v-model="formData.objetivo" disabled></textarea>
                </div>
                <div class="col-12 mb-25">
                    <label for="cscAnalisis">Análisis</label>
                    <textarea class="form-control form-control-lg" rows="5" id="cscAnalisis" v-model="formData.analisis" disabled></textarea>
                </div>
                <div class="col-12 mb-25">
                    <label for="cscPlan">Plan</label>
                    <textarea class="form-control form-control-lg" rows="5" id="cscPlan" v-model="formData.plan" disabled></textarea>
                </div>
                <div class="col-12 mb-25">
                    <label for="cscPlan">Observaciones</label>
                    <textarea class="form-control form-control-lg" rows="5" id="cscObservaciones" v-model="formData.observaciones" disabled></textarea>
                </div>

        </div>
    </div>
</template>

<script lang="ts" src="./CitasSubsecuentesShowComponent.ts"></script>
