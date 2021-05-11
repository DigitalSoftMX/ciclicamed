<template>
    <div class="card">
        <div class="card-header">
            <h3>Cita actual</h3>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 mb-25 ">
                <label for="cscDiagnosticos">Diagnósticos</label>
                <textarea class="form-control form-control-lg" type="text" rows="5" id="cscDiagnosticos" v-model="formDataCopy.diagnosticos"></textarea>
            </div>
            <div class="col-12 mb-25 ">
                <label for="cscSubjetivo">Subjetivo</label>
                <textarea class="form-control form-control-lg" type="text" rows="5" id="cscSubjetivo" v-model="formDataCopy.subjetivo"></textarea>
            </div>
            <div class="col-12 mb-25 ">
                <label for="cscObjetivo">Objetivo</label>
                <textarea class="form-control form-control-lg" type="text" rows="5" id="cscObjetivo" v-model="formDataCopy.objetivo"></textarea>
            </div>
            <div class="col-12 mb-25 ">
                <label for="cscAnalisis">Análisis</label>
                <textarea class="form-control form-control-lg" type="text" rows="5" id="cscAnalisis" v-model="formDataCopy.analisis"></textarea>
            </div>
            <div class="col-12 mb-25 ">
                <label for="cscPlan">Plan</label>
                <textarea class="form-control form-control-lg" type="text" rows="5" id="cscPlan" v-model="formDataCopy.plan"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CitasSubsecuentesComponent.ts"></script>
