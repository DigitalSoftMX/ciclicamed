<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Agenda" :userData="imagenologia" :photo="imagenologia.photo" role="Imagenología"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <schedule-component :role="role" :employeeID="2"></schedule-component>
    </div>
</template>

<script lang="ts" src="./ImagenologiaDashboardPage.ts"></script>
