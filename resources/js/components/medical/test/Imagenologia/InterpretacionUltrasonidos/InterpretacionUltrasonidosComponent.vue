<template>
    <div class="card">
        <div class="card-header">
            <h3>Interpretación de ultrasonidos</h3>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 col-md-8 mb-25 ">
                <label for="cscFUM">Nombre</label>
                <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
            </div>
            <div class="col-12 col-md-4 mb-25 ">
                <label for="cscFUM">Fecha</label>
                <input class="form-control form-control-lg" type="date" id="cscFUM" :disabled="disabled">
            </div>
            <div class="col-12 mb-25">
                <label for="cscPlan">Motivo del estudio</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscPlan" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscPlan">Tipo del estudio</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscPlan" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscPlan">Técnica del estudio</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscPlan" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscPlan">Hallazgos</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscPlan" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscPlan">Conclusión</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscPlan" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscPlan">Categoría</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscPlan" :disabled="disabled"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="cscPlan">Conducta</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscPlan" :disabled="disabled"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./InterpretacionUltrasonidosComponent.ts"></script>
