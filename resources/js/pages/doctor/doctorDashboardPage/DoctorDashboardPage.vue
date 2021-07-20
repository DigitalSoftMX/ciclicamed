<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Agenda" :userData="doctor" :photo="doctor.photo" role="Doctor"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <schedule-component :role="role" :employeeID="doctor.id"></schedule-component>
    </div>
</template>

<script lang="ts" src="./DoctorDashboardPage.ts"></script>
