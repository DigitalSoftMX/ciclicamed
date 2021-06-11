<template>
    <div class="card">
        <FullCalendar ref="fullCalendar" :options="calendarOptions" />
    </div>
</template>

<script lang="ts" src="./CalendarComponent.ts"></script>

<style lang="scss">
    @import './CalendarComponent.scss';
</style>
