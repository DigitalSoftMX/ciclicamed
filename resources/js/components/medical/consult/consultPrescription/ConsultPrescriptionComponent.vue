<template>
    <div class="breadcrumb-main">
        <h4 class="text-capitalize breadcrumb-title"></h4>
        <div class="breadcrumb-action justify-content-center flex-wrap">
            <div class="action-btn">
                <button class="btn btn-primary btn-default"
                    :disabled="prescriptionData.length === 0" @click="printPDF">
                    <img-component url="/svg/print.svg" cssClass="mr-2 svg-white" alt="Imprimir"></img-component>
                    Imprimir
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default"
                    :disabled="prescriptionData.length === 0"  @click="downloadPDF">
                    <img-component url="/svg/download.svg" cssClass="mr-2 svg-white" alt="Descargar"></img-component>
                    Descargar
                </button>
            </div>
            <div class="action-btn" v-if="!disabled">
                <button class="btn btn-primary btn-default" @click="addPrescription()" :disabled="disabled">
                    <img-component url="/svg/newMedicament.svg" cssClass="mr-2 svg-white" alt="Nuevo"></img-component>
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
