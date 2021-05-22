<template>
    <div class="breadcrumb-main">
        <h4 class="text-capitalize breadcrumb-title"></h4>
        <div class="breadcrumb-action justify-content-center flex-wrap">
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="printPDF()"
                    :disabled="prescriptionDataList.length === 0">
                    <img src="/svg/print.svg" class="mr-2 svg-white" alt="Print">
                    Imprimir
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="downloadPDF()"
                    :disabled="prescriptionDataList.length === 0">
                    <img src="/svg/download.svg" class="mr-2 svg-white" alt="Print">
                    Descargar
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="addPrescription()">
                    <img src="/svg/newMedicament.svg" class="mr-2 svg-white" alt="New medicament">
                    Agregar medicamento
                </button>
            </div>
        </div>
    </div>
    <div class="atbd-collapse atbd-collapse-custom">
        <medicament-component :medicamentIndex="index" :medicamentList="medicamentList"
            @mcDelete="deleteMedicamentComponent" @mcChange="updateMedicamentSelected"
            v-for="(prescription, index) in prescriptionList" :key="prescription">
        </medicament-component>
    </div>
</template>

<script lang="ts" src="./PrescriptionComponent.ts"></script>

<style lang="sass">
    @import "./PrescriptionComponent.scss"

</style>
