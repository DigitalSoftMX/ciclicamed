<template>
    <div class="card">
        <div class="card-body" v-show="prescriptionList.length > 0">
            <div v-for="(prescription, index) in prescriptionList" :key="prescription" class="atbd-collapse atbd-collapse-custom">
                <medicament-component :medicamentIndex="index" :medicamentList="medicamentList" @mcDelete="deleteMedicamentComponent" @mcChange="updateMedicamentSelected"></medicament-component>
            </div>
        </div>
        <div class="card-header d-flex justify-items-between py-3 border-top rounded-0 rounded-bottom">
            <h4 class="mb-15 mb-md-0">Receta</h4>
            <button class="btn btn-primary btn-default btn-squared" @click="addPrescription()">Agregar medicamento</button>
        </div>
    </div>
</template>

<script lang="ts" src="./PrescriptionComponent.ts"></script>
