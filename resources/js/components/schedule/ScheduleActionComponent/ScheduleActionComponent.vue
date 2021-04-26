<template>
    <div class="e-info-modal modal fade show" id="schedule-action" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-sm e-info-dialog modal-dialog-centered" id="c-event" role="document">
            <div class="modal-content">
                <div class="modal-header e-info-header bg-primary text-center">
                    <h6 class="modal-title e-info-title">Agendar cita</h6>
                    <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" data-dismiss="modal" aria-label="Close">
                        <img src="/svg/close.svg" alt="Alert logo" style="filter: invert(1);">
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="e-info-list">
                        <li>
                            <img src="/svg/calendar.svg" alt="Calendar logo">
                            <span class="list-line">
                                <span class="list-label">Fecha de cita :</span>
                                <!-- <span class="list-meta">{{ `${formatScheduleDate(schedule.consult_schedule_start)}` }}</span> -->
                            </span>
                        </li>
                        <li>
                            <img src="/svg/clock.svg" alt="Clock logo">
                            <span class="list-line">
                                <span class="list-label">Hora de cita :</span>
                                <span class="list-meta"> {{ `${formatScheduleTime(schedule.consult_schedule_start)} - ${formatScheduleTime(schedule.consult_schedule_finish)}` }}</span>
                            </span>
                        </li>
                        <li>
                            <img src="/svg/branch.svg" alt="Branch logo">
                            <span class="list-line">
                                <span class="list-label">Sucursal :</span>
                                <span class="list-meta"> {{ this.$props.schedule }}</span>
                            </span>
                        </li>
                        <li>
                            <img src="/svg/text.svg" alt="Text logo">
                            <span class="list-line">
                                <span class="list-text"> Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                                    consetetur sadipscing elitr sed diam</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ScheduleActionComponent.ts"></script>

<style src="./ScheduleActionComponent.css"></style>
