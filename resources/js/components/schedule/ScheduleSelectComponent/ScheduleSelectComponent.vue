<template>
    <div class="card mb-25 rounded">
        <div class="card-header">
            <h1>Mi agenda</h1>
        </div>
        <div class="card-body">
            <div class="mb-25" v-if="employeeBranches.length > 0">
                <label>Sucursal</label>
                <v-select :options="employeeBranches" :getOptionLabel="item => item.branch?.name" :reduce="item => item.branch.id" v-model="employeeBranchSelected"/>
            </div>
            <button class="btn btn-primary btn-lg btn-squared btn-block" @click="selectSchedule">Ver mi agenda</button>
        </div>
    </div>

    <div class="card mb-25">
        <div class="card-header">
            <h4>Otras agendas</h4>
        </div>
        <div class="card-body">
            <div class="mb-25">
                <label>Sucursal</label>
                <select-component id="sscSucursal" :data="branchesList" v-model="branchSelected"
                    firstText='Seleccione una sucursal'>
                </select-component>
            </div>
            <div class="mb-25">
                <label>Doctor</label>
                <select-component id="sscDoctor" :data="doctorList" v-model="userSelected"
                    firstText='Seleccione un doctor'>
                </select-component>
            </div>

        </div>
    </div>

    <div class="card mb-25">
        <div class="card-header">
            <h4>Agendar checkup</h4>
        </div>
        <div class="card-body">
            <button class="btn btn-primary btn-lg btn-squared btn-block" @click="openCheckupComponent">Nuevo checkup</button>
        </div>
    </div>
</template>
<script lang="ts" src="./ScheduleSelectComponent.ts"></script>
