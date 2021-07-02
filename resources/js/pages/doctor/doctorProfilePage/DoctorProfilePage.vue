<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Perfil de usuario" :userData="patient" :photo="patient.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div class="row mx-0">
            <div class="col-12 col-md-4">
                <div class="mb-25">
                    <user-password-component :userData="employeeCopy"></user-password-component>
                </div>
                <div class="mb-25">
                    <user-profile-info-component :userData="employeeCopy"></user-profile-info-component>
                </div>
            </div>
            <div class="col-12 col-md-8">
                <user-profile-component :userData="employeeCopy" @updateUser="updatePatientInfo" @updatePhoto="updatePhoto" userCategory="empleados"></user-profile-component>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./DoctorProfilePage.ts"></script>
