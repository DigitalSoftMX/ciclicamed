<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Productos" :userData="patient" :photo="patient.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <product-page :roles="roles"></product-page>
    </div>
</template>

<script lang="ts" src="./AsistenteProductPage.ts"></script>
