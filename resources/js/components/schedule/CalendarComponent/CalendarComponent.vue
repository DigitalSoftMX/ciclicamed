<template>
    <div class="card">
        <FullCalendar ref="fullCalendar" :options="calendarOptions" />
    </div>
    <schedule-action-component :schedule="scheduleSelected" @scheduleCanceled="updateSchedule">
    </schedule-action-component>
    <lateral-schedule-component ref="openLateralSchedule" :branchesList="branchesList" :selectDate="scheduleSelectDate" :schedule="scheduleSelected"
        @updateSchedule="updateSchedule" @newSchedule="createNewSchedule"></lateral-schedule-component>
</template>

<script lang="ts" src="./CalendarComponent.ts"></script>

<style lang="scss">
    @import './CalendarComponent.scss';
</style>
