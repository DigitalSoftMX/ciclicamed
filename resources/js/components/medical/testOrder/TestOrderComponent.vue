<template>
    <div class="breadcrumb-main">
        <h4 class="text-capitalize breadcrumb-title"></h4>
        <div class="breadcrumb-action justify-content-center flex-wrap">
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="printPDF()" :disabled="orderDataList.length === 0">
                    <img src="/svg/print.svg" class="mr-2 svg-white" alt="Print">
                    Imprimir
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default" @click="downloadPDF()"
                    :disabled="orderDataList.length === 0">
                    <img src="/svg/download.svg" class="mr-2 svg-white" alt="Print">
                    Descargar
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
        <order-component :orderIndex="index" :orderList="orderList" @ocDelete="deleteOrderComponent"
            @ocChange="updateOrderSelected" v-for="(medicament, index) in orderComponentList" :key="medicament">
        </order-component>
    </div>
</template>

<script lang="ts" src="./TestOrderComponent.ts"></script>
