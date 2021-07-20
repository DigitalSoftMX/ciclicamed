<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Perfil de usuario" :userData="patient" :photo="patient.photo" role="Paciente"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div class="row mx-0">
            <div class="col-12 col-md-4">
                <div class="mb-25">
                    <user-password-component :userData="patientCopy"></user-password-component>
                </div>
                <div class="mb-25">
                    <user-profile-info-component :userData="patientCopy"></user-profile-info-component>
                </div>
            </div>
            <div class="col-12 col-md-8">
                <user-profile-component userCategory="pacientes" :userData="patientCopy" @updateUser="updatePatientInfo" @updatePhoto="updatePhoto"></user-profile-component>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PatientProfilePage.ts"></script>
