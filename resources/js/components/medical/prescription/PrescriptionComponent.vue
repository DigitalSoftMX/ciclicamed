<template>
    <div class="card">
        <div class="card-header d-flex justify-items-between py-3">
            <h4 class="mb-15 mb-md-0">Receta</h4>
            <button class="btn btn-primary btn-default btn-squared" @click="addMedicament()">Agregar medicamento</button>
        </div>
        <div class="card-body" v-show="medicamentList.length > 0">
            <div v-for="medicament in medicamentList" :key="medicament">
                <medicament-component></medicament-component>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PrescriptionComponent.ts"></script>
