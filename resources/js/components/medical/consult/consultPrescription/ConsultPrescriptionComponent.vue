<template>
    <div class="breadcrumb-main">
        <h4 class="text-capitalize breadcrumb-title"></h4>
        <div class="breadcrumb-action justify-content-center flex-wrap">
            <div class="action-btn">
                <button class="btn btn-primary btn-default"
                    :disabled="prescriptionData.length === 0">
                    <img src="/svg/print.svg" class="mr-2 svg-white" alt="Print">
                    Imprimir
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default"
                    :disabled="prescriptionData.length === 0">
                    <img src="/svg/download.svg" class="mr-2 svg-white" alt="Print">
                    Descargar
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="createPrescription()">
                    <img src="/svg/save.svg" class="mr-2 svg-white" alt="Print">
                    Guardar
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
        <medicament-component :id="index" :medicamentList="medicamentList" v-model="prescriptionData[index]"
            v-for="(prescription, index) in prescriptionData" :key="`conpc${index}`" @onDelete="deletePrescription">
        </medicament-component>
    </div>
</template>

<script lang="ts" src="./ConsultPrescriptionComponent.ts"></script>

<style lang="sass">
    @import "./ConsultPrescriptionComponent.scss"
    @import "../../../../../../public/vendor_assets/css/select2.min.css"

</style>
