<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Estudios clínicos" :userData="nurse" :photo="nurse.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <test-nurse-table-component  :role="role"></test-nurse-table-component>
    </div>
</template>

<script lang="ts" src="./NurseTestPage.ts"></script>
