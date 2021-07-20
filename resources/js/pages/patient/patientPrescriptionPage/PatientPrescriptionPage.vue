<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Recetas médicas" :userData="patient" :photo="patient.photo" role="Paciente"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <prescription-component :patientID="patient.id"></prescription-component>
    </div>
</template>

<script lang="ts" src="./PatientPrescriptionPage.ts"></script>
