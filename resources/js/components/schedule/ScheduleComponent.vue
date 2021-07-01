<template>
    <div class="row mx-0">
        <div class="col-12 col-md-4 col-xl-3">
            <schedule-select-component :branchesList="branchesList" :doctorList="doctorList"
                @onDoctorSelected="getScheduleList" @onBranchSelected="getDoctorList" @onUserSchedule="selectUserSchedule"></schedule-select-component>
        </div>
        <div class="col-12 col-md-8 col-xl-9">
            <calendar-componet :branchesList="branchesList" :schedules="schedules" :businessHours="businessHours"
                @onNewSchedule="copyScheduleData" @onSelectedSchedule="getScheduleSelected" :roles="roles"></calendar-componet>
        </div>
    </div>

    <schedule-action-component :schedule="scheduleSelected"></schedule-action-component>
    <checkup-schedule-component :branches="branchesList" :patients="patientsList" :patientID="userID"></checkup-schedule-component>
    <lateral-schedule-component
        ref="openLateralSchedule"
        :schedule="scheduleSelected" :branchesList="branchesList"
        :doctorsList="doctorList"
        :businessHours="businessHours"
        :patientsList="patientsList"
        :categoryList="scheduleCategoryList"
        :patientID="userID"
    ></lateral-schedule-component>
    <div class="overlay-dark"></div>
</template>
<script lang="ts" src="./ScheduleComponent.ts"></script>
