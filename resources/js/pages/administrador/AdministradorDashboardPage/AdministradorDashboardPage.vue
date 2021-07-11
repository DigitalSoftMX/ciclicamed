<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Agenda" :userData="administrador" :photo="administrador.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <schedule-component :role="role" :employeeID="administrador.id"></schedule-component>
    </div>
</template>

<script lang="ts" src="./AdministradorDashboardPage.ts"></script>
