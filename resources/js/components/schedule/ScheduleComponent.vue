<template>
    <div class="row mx-0">
        <div class="col-12 col-md-4 col-xl-3">
            <schedule-select-component @onDoctorSelected="getScheduledData"></schedule-select-component>
        </div>
        <div class="col-12 col-md-8 col-xl-9">
            <calendar-componet :schedules="schedules" :businessHours="businessHours"></calendar-componet>
        </div>
    </div>
    <div class="overlay-dark"></div>
</template>
<script lang="ts" src="./ScheduleComponent.ts"></script>
