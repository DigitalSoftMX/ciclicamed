<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Recetas médicas" :userData="nurse" :photo="nurse.photo" role="Administrador"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <prescriptions-table-component  title="Recetas" :role="role"></prescriptions-table-component>
    </div>
</template>

<script lang="ts" src="./AdministradorPrescriptionPage.ts"></script>
