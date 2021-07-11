<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Checkups" :userData="administrador" :photo="administrador.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <checkup-table-component title="Checkup faltantes" :role="role"></checkup-table-component>
    </div>
</template>

<script lang="ts" src="./AdministradorCheckupPage.ts"></script>
