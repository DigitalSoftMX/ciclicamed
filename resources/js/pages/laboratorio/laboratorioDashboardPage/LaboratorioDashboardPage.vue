<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Agenda" :userData="nurse" :photo="nurse.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <schedule-component :role="role" :employeeID="nurse.id"></schedule-component>
    </div>
</template>

<script lang="ts" src="./NurseDashboardPage.ts"></script>
