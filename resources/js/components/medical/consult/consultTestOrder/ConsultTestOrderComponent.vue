<template>
    <div class="breadcrumb-main">
        <h4 class="text-capitalize breadcrumb-title"></h4>
        <div class="breadcrumb-action justify-content-center flex-wrap">
            <div class="action-btn">
                <button class="btn btn-primary btn-default" :disabled="orderData.length === 0">
                    <img-component url="/svg/print.svg" cssClass="mr-2 svg-white" alt="Imprimir"></img-component>
                    Imprimir
                </button>
            </div>
            <div class="action-btn">
                <button class="btn btn-primary btn-default"
                    :disabled="orderData.length === 0">
                    <img-component url="/svg/download.svg" cssClass="mr-2 svg-white" alt="Descargar"></img-component>
                    Descargar
                </button>
            </div>
            <div class="action-btn" v-if="!disabled">
                <button class="btn btn-primary btn-default" @click="addTestOrder()" :disabled="disabled">
                    <img-component url="/svg/newMedicament.svg" cssClass="mr-2 svg-white" alt="Nuevo"></img-component>
                    Agregar estudio
                </button>
            </div>
        </div>
    </div>
    <div class="atbd-collapse atbd-collapse-custom">
        <div v-for="(order, index) in orderData" :key="`ctoc${index}`">
            <order-component v-if="orderData.length > 0 && (orderData[index].medicalteststatus_id !== 5 ?? true)" :id="index" :orderList="orderList"
                v-model="orderData[index]" @onDelete="deleteTestOrder" :disabled="disabled">
            </order-component>
        </div>
    </div>
</template>

<script lang="ts" src="./ConsultTestOrderComponent.ts"></script>
