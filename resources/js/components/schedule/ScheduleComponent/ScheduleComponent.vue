<template>
    <div class="content-fluid">
        <div class="card no-top mb-25">
            <div id='full-calendar'></div>
        </div>
        <schedule-action-component :schedule="scheduleSelected" @scheduleCanceled="removeScheduleCanceled"></schedule-action-component>
        <lateral-schedule-component ref="openLateralSchedule"></lateral-schedule-component>
    </div>
</template>

<script lang="ts" src="./ScheduleComponent.ts"></script>

<style src="./ScheduleComponent.css"></style>
