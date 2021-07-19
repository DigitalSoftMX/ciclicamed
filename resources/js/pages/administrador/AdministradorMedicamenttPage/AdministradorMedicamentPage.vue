<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Productos" :userData="administrador" :photo="administrador.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <medicament-table-component></medicament-table-component>
    </div>
</template>

<script lang="ts" src="./AdministradorMedicamentPage.ts"></script>
