<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Perfil de usuario" :userData="doctor" :photo="doctor.photo" role="Doctor"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div class="row mx-0" v-if="consult > 0">
            <consult-page :employeeID="doctor.id" :consultID="consult" :role="role" :doctorData="doctor"></consult-page>
        </div>
        <div v-else>
            <no-consult-component></no-consult-component>
        </div>
    </div>
</template>

<script lang="ts" src="./DoctorConsultPage.ts"></script>
