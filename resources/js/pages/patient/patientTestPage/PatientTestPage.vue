<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Estudios clínicos" :userData="patient" :photo="patient.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <patient-test-component :patientID="patient.id"></patient-test-component>
    </div>
</template>

<script lang="ts" src="./PatientTestPage.ts"></script>
