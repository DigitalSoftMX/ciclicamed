<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Perfil de usuario" :userData="doctor" :photo="doctor.photo" role="Doctor"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <employees-schedule-component :id="doctor.id"></employees-schedule-component>
    </div>
</template>

<script lang="ts" src="./DoctorSchedulePage.ts"></script>
