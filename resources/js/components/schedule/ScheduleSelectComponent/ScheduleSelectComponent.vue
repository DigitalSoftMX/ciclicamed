<template>
    <div class="card mb-25 rounded" v-if="role !== 'Enfermera' && role !== 'Administrador'">
        <div class="card-header">
            <h1>Mi agenda</h1>
        </div>
        <div class="card-body">
            <div class="mb-25" v-if="employeeBranches.length > 0">
                <label>Sucursal</label>
                <v-select :options="employeeBranches" :getOptionLabel="item => item.branch?.name"
                    :reduce="item => item.branch.id" v-model="employeeBranchSelected"
                    placeholder="Seleccione una sucursal" />
            </div>
            <button class="btn btn-primary btn-lg btn-squared btn-block mb-25" @click="selectSchedule" v-if="role === 'Paciente'">Ver mi agenda</button>
            <button class="btn btn-primary btn-lg btn-squared btn-block mb-25" @click="selectSchedule" v-if="role !== 'Paciente' && role !== 'Checkup' && role !== 'Asistente'">Ver mi agenda por sucursal</button>
            <button class="btn btn-primary btn-lg btn-squared btn-block" @click="selectAllSchedule" v-if="role !== 'Paciente'">Ver toda mi agenda</button>
        </div>
    </div>

    <div class="card mb-25 rounded" v-if="role === 'Enfermera' || role === 'Administrador'">
        <div class="card-header">
            <h1>Todas las agendas</h1>
        </div>
        <div class="card-body">
            <div class="mb-25">
                <label>Sucursal</label>
                <v-select :options="branchesList" label="text"
                    :reduce="item => item.childID" v-model="employeeBranchSelected"
                    placeholder="Seleccione una sucursal" />
            </div>
            <button class="btn btn-primary btn-lg btn-squared btn-block mb-25" @click="selectSchedule">Ver agenda por sucursal</button>
            <button class="btn btn-primary btn-lg btn-squared btn-block" @click="selectAllSchedule">Ver todas las agendas</button>
        </div>
    </div>

    <div class="card mb-25" v-if="role !== 'Enfermera' && role !== 'Imagenologia' && role !== 'Laboratorio'">
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

    <div class="card mb-25" v-if="role !== 'Enfermera' && role !== 'Imagenologia' && role !== 'Laboratorio'">
        <div class="card-header">
            <h4>Agendar checkup</h4>
        </div>
        <div class="card-body">
            <button class="btn btn-primary btn-lg btn-squared btn-block" @click="openCheckupComponent">Nuevo
                checkup</button>
        </div>
    </div>
</template>
<script lang="ts" src="./ScheduleSelectComponent.ts"></script>
