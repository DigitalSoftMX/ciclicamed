<template>
    <div class="row mx-0 bg-white border align-content-center form-control form-control-lg p-0 d-flex">
        <span class="col d-flex flex-wrap align-items-center p-0 pl-2">
            <img src="/svg/clock.svg" alt="Clock" class="align-self-center">
        </span>
        <div class="col-10 input-group p-0">
            <select class="form-control col-6 border-0" @input="updateTime($event, true)" v-bind:value="hourSelected">
                <option :value="convertToString(hour)" v-for="hour in hourEnabled" :key="hour">
                    {{convertToString(hour)}}
                </option>
            </select>
            <select class="form-control col-6 border-0" @input="updateTime($event, false)" v-bind:value="minuteSelected">
                <option :value="convertToString(minute)" v-for="minute in minuteEnabled" :key="minute">
                    {{convertToString(minute)}}</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts" src="./TimePickerComponent.ts"></script>
