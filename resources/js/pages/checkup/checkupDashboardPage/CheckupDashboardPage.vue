<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Agenda" :userData="patient" :photo="patient.photo" role="Checkup"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <schedule-component :role="role"></schedule-component>
    </div>
</template>

<script lang="ts" src="./CheckupDashboardPage.ts"></script>
