<template>
    <div class="row mx-0">
        <div class="col-12 col-md-4 col-xl-3">
            <schedule-select-component :branchesList="branchesList" :doctorList="doctorList"
                @onDoctorSelected="getScheduleList" @onBranchSelected="getDoctorList"></schedule-select-component>
        </div>
        <div class="col-12 col-md-8 col-xl-9">
            <calendar-componet :branchesList="branchesList" :schedules="schedules" :businessHours="businessHours"
                @onNewSchedule="updateScheduleSelected"></calendar-componet>
        </div>
    </div>

    <schedule-action-component></schedule-action-component>
    <lateral-schedule-component
        ref="openLateralSchedule"
        :schedule="scheduleSelected" :branchesList="branchesList"
        :doctorsList="doctorList"
        :businessHours="businessHours"
        :patientsList="patientsList"
        :categoryList="scheduleCategoryList"
    ></lateral-schedule-component>
    <div class="overlay-dark"></div>
</template>
<script lang="ts" src="./ScheduleComponent.ts"></script>
