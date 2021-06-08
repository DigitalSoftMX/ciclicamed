<template>
    <div class="card mb-25 rounded">
        <div class="card-header">
            <h1>Mi agenda</h1>
        </div>
        <div class="card-body">
            <button class="btn btn-primary btn-lg btn-squared btn-block ">Ver mi agenda</button>
        </div>
    </div>

    <div class="card mb-25">
        <div class="card-header">
            <h4>Otras agendas</h4>
        </div>
        <div class="card-body">
            <div class="mb-25">
                <label>Sucursal</label>
                <select-component
                    id="sscSucursal"
                    :data="branchesList"
                    v-model="branchSelected"
                    firstText='Seleccione una sucursal'>
                </select-component>
            </div>
            <div>
                <label>Doctor</label>
                <select-component
                    id="sscDoctor"
                    :data="usersList"
                    v-model="userSelected"
                    firstText='Seleccione un doctor'
                    :isGroup="true">
                </select-component>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./ScheduleSelectComponent.ts"></script>
