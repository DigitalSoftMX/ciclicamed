<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Agenda" :userData="patient" :photo="patient.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <schedule-component userCategory="Paciente" :userID="patient.id" :roles="roles"></schedule-component>
    </div>
</template>

<script lang="ts" src="./PatientDashboardPage.ts"></script>
