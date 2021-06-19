<template>
    <div class="card">
        <div class="card-header">
            <h3>Interpretación de ultrasonidos</h3>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 mb-25">
                <label for="iucMotivoEstudio">Motivo del estudio</label>
                <textarea class="form-control form-control-lg" rows="5" id="iucMotivoEstudio" v-model="formData.motivosEstudio" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="iucTipoEstudio">Tipo del estudio</label>
                <textarea class="form-control form-control-lg" rows="5" id="iucTipoEstudio" v-model="formData.tipoEstudio" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="iucTecnicaEstudio">Técnica del estudio</label>
                <textarea class="form-control form-control-lg" rows="5" id="iucTecnicaEstudio" v-model="formData.tecnicaEstudio" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="iucHallazgos">Hallazgos</label>
                <textarea class="form-control form-control-lg" rows="5" id="iucHallazgos" v-model="formData.hallazgos" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="iucConclusion">Conclusión</label>
                <textarea class="form-control form-control-lg" rows="5" id="iucConclusion" v-model="formData.conclusion" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="iucCategoria">Categoría</label>
                <textarea class="form-control form-control-lg" rows="5" id="iucCategoria" v-model="formData.categoria" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="iucConduct">Conducta</label>
                <textarea class="form-control form-control-lg" rows="5" id="iucConduct" v-model="formData.conducta" :disabled="disabled"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./InterpretacionUltrasonidosComponent.ts"></script>
