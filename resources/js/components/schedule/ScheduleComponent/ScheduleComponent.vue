<template>
    <div class="content-fluid">
        <div class="card no-top mb-25">
            <div id='full-calendar'></div>
        </div>
        <schedule-action-component :schedule="scheduleSelected" @scheduleCanceled="updateSchedule"></schedule-action-component>
        <lateral-schedule-component ref="openLateralSchedule" :selectDate="scheduleSelectDate" :schedule="scheduleSelected" @updateSchedule="updateSchedule" @newSchedule="createNewSchedule" ></lateral-schedule-component>
    </div>
</template>

<script lang="ts" src="./ScheduleComponent.ts"></script>

<style src="./ScheduleComponent.css"></style>
