<template>
    <div v-if="showComponent === 'paymentTable'">
        <payments-table-component @onPaymentSelect="setPaymentData" @onNewPayment="setChargePaymentComponent"></payments-table-component>
    </div>
    <div v-if="showComponent === 'paymentCharge'">
        <div class="breadcrumb-main px-3" data-v-a144defc="">
            <h4 class="text-capitalize breadcrumb-title mb-25 mb-md-0">Deudas</h4>
            <button
                @click="setReturnComponent('paymentTable')"
                class="btn btn-primary btn-default btn-squared">Regresar
            </button>
        </div>
        <charge-payment-component :products="payment.products" :role="role" :paymentID="payment.id" :isNew="isNew">
        </charge-payment-component>
    </div>
</template>

<script lang="ts" src="./PaymentPage.ts"></script>
