<template>
    <div class="card">
        <div class="card-body" v-show="orderTestList.length > 0">
            <div v-for="medicament in orderTestList" :key="medicament" class="atbd-collapse atbd-collapse-custom">
                <order-component :testList="testList"></order-component>
            </div>
        </div>
        <div class="card-header d-flex justify-items-between py-3 border-top rounded-0 rounded-bottom">
            <h4 class="mb-15 mb-md-0">Orden de estudio</h4>
            <button class="btn btn-primary btn-default btn-squared" @click="addMedicament()">Agregar orden</button>
        </div>
    </div>
</template>

<script lang="ts" src="./TestOrderComponent.ts"></script>
