<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Perfil de usuario" :userData="patient" :photo="patient.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div class="row mx-0">
            <consult-page :roles="roles" userCategory="Doctor" :employeeID="patient.user.id"></consult-page>
        </div>
    </div>
</template>

<script lang="ts" src="./DoctorConsultPage.ts"></script>
