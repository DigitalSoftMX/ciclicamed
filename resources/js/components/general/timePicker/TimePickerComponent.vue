<template>
    <div class="row mx-0 bg-white border align-content-center form-control form-control-lg p-0 d-flex">
        <span class="col d-flex flex-wrap align-items-center p-0 pl-2">
            <img-component url="/svg/clock.svg" alt="Reloj" cssClass="align-self-center"></img-component>
        </span>
        <div class="col-10 input-group p-0">
            <select class="form-control col-6 border-0" @input="updateTime($event, true)" :value="hourSelected">
                <option :value="convertToString(hour)" v-for="hour in hourEnabled" :key="hour">
                    {{convertToString(hour)}}
                </option>
            </select>
            <select class="form-control col-6 border-0" @input="updateTime($event, false)" :value="minuteSelected">
                <option :value="convertToString(minute)" v-for="minute in minuteEnabled" :key="minute">
                    {{convertToString(minute)}}</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts" src="./TimePickerComponent.ts"></script>
