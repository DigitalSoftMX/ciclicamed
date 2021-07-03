<template>
    <div class="breadcrumb-main">
        <h4 class="text-capitalize breadcrumb-title"></h4>
        <div class="breadcrumb-action justify-content-center flex-wrap">
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="printPDF()" :disabled="orderDataCopy.length === 0">
                    <img src="/svg/print.svg" class="mr-2 svg-white" alt="Print">
                    Imprimir
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="downloadPDF()"
                    :disabled="orderDataCopy.length === 0">
                    <img src="/svg/download.svg" class="mr-2 svg-white" alt="Print">
                    Descargar
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="createTestOrder()">
                    <img src="/svg/save.svg" class="mr-2 svg-white" alt="Print">
                    Guardar
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="addTestOrder()">
                    <img src="/svg/newTestOrder.svg" class="mr-2 svg-white" alt="New test order">
                    Agregar estudio
                </button>
            </div>
        </div>
    </div>
    <div class="atbd-collapse atbd-collapse-custom">
        <div v-for="(order, index) in orderDataCopy" :key="`ctoc${index}`">
            <order-component v-if="orderDataCopy.length > 0 && (orderDataCopy[index].medicalteststatus_id !== 5 ?? true)" :id="index" :orderList="orderList"
                v-model="orderDataCopy[index]" @onDelete="deleteTestOrder">
            </order-component>
        </div>
    </div>
</template>

<script lang="ts" src="./ConsultTestOrderComponent.ts"></script>
