<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Checkups" :userData="patient" :photo="patient.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <checkup-table-component title="Checkup faltantes" :role="roles[0]"></checkup-table-component>
    </div>
</template>

<script lang="ts" src="./CheckupCheckupPage.ts"></script>
