<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Agenda" :userData="doctor" :photo="doctor.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <schedule-component userCategory="Doctor" :roles="roles" :employeeID="doctor.user.id"></schedule-component>
    </div>
</template>

<script lang="ts" src="./DoctorDashboardPage.ts"></script>
