<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Agenda" :userData="administrador" :photo="administrador.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <product-page :roles="roles"></product-page>
    </div>
</template>

<script lang="ts" src="./AdministradorProductPage.ts"></script>
