<template>
    <div v-if="showComponent === 'patientsDebts'">
        <patient-debt-table-component @onPatientSelect="setPatientData"></patient-debt-table-component>
    </div>
    <div v-if="showComponent === 'paymentDebt'">
        <payment-debt-table-component :patient="patient" @onDebtSelected="setPaymentData" @onReturn="setReturnComponent"></payment-debt-table-component>
    </div>
    <div v-if="showComponent === 'debtsTable'">
        <debts-table-component :payment="payment" @onReturn="setReturnComponent"></debts-table-component>
    </div>
</template>

<script lang="ts" src="./DebtPage.ts"></script>