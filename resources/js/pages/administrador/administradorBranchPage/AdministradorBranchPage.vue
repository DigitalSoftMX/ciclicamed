<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Sucursales" :userData="administrador" :photo="administrador.photo" role="Administrador">
    </navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <branch-table-component></branch-table-component>
    </div>
</template>

<script lang="ts" src="./AdministradorBranchPage.ts"></script>
