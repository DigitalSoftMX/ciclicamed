<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Perfil de usuario" :userData="doctor" :photo="doctor.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div class="row mx-0" v-if="consult > 0">
            <consult-page :employeeID="doctor.id" :consultID="consult" :role="role"></consult-page>
        </div>
        <div v-else>
            <no-consult-component></no-consult-component>
        </div>
    </div>
</template>

<script lang="ts" src="./AdministradorConsultPage.ts"></script>
