<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Agenda" :userData="laboratorio" :photo="laboratorio.photo" role="Laboratorio"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <schedule-component :role="role" :employeeID="1"></schedule-component>
    </div>
</template>

<script lang="ts" src="./LaboratorioDashboardPage.ts"></script>
