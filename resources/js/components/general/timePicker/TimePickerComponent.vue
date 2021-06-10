<template>
    <div class="input-group">
        <select class="form-control col-6" @input="updateHour" v-bind:value="hourSelected">
            <option :value="convertToString(hour)" v-for="hour in hourEnabled" :key="hour">{{convertToString(hour)}}</option>
        </select>
        <select class="form-control col-6" @input="updateMinute" v-bind:value="minuteSelected">
            <option :value="convertToString(minute)" v-for="minute in minuteEnabled" :key="minute">{{convertToString(minute)}}</option>
        </select>
    </div>
</template>

<script lang="ts" src="./TimePickerComponent.ts"></script>
