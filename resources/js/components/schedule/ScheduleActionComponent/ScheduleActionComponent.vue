<template>
    <div class="e-info-modal modal fade show" id="schedule-action" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-sm e-info-dialog modal-dialog-centered" id="c-event" role="document">
            <div class="modal-content">
                <div class="modal-header justify-content-betweem bg-primary">
                    <div>
                        <h6 class="modal-title e-info-title">Agendar cita</h6>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" @click="openLateralSchedule" v-if="isEditOptionEnabled"
                            data-dismiss="modal" aria-label="Close">
                            <img src="svg/edit.svg" alt="Alert logo" style="filter: invert(1);" data-toggle="tooltip"
                                data-placement="bottom" title="Modificar cita">
                        </button>
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3" @click="deleteSchedule()" v-if="isCancelOptionEnabled"
                            data-dismiss="modal" aria-label="Close">
                            <img src="svg/delete.svg" alt="Alert logo" style="filter: invert(1);" data-toggle="tooltip"
                                data-placement="bottom" title="Cancelar cita">
                        </button>
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3"
                            data-dismiss="modal" aria-label="Close">
                            <img src="svg/close.svg" alt="Alert logo" style="filter: invert(1);" data-toggle="tooltip"
                                data-placement="bottom" title="Cerrar">
                        </button>
                    </div>
                </div>
                <div class="modal-body">
                    <ul class="e-info-list">
                        <li>
                            <img src="svg/calendar.svg" alt="Calendar logo">
                            <span class="list-line">
                                <span class="list-label">Fecha de cita :</span>
                                <span
                                    class="list-meta">{{ `${formatScheduleDate(schedule.consult_schedule_start)}` }}</span>
                            </span>
                        </li>
                        <li>
                            <img src="svg/clock.svg" alt="Clock logo">
                            <span class="list-line">
                                <span class="list-label">Hora de cita :</span>
                                <span class="list-meta">
                                    {{ `${formatScheduleTime(schedule.consult_schedule_start)} - ${formatScheduleTime(schedule.consult_schedule_finish)}` }}</span>
                            </span>
                        </li>
                        <li>
                            <img src="svg/branch.svg" alt="Branch logo">
                            <span class="list-line">
                                <span class="list-label">Sucursal :</span>
                                <span class="list-meta"> {{ schedule.branch?.name }}</span>
                            </span>
                        </li>
                        <li>
                            <img src="svg/text.svg" alt="Text logo">
                            <span class="list-line">
                                <span class="list-text">{{ schedule.consult_reason }}</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component :id="'actionConsultSuccess'" :message="'Se ha cancelado la cita correctamente'" :title="'Datos del perfil actualizados'">
    </success-alert-component>
    <error-alert-component :id="'actionConsultError'" :errors="errors" :title="'Error al cancelar la cita'">
    </error-alert-component>
</template>

<script lang="ts" src="./ScheduleActionComponent.ts"></script>

<style src="./ScheduleActionComponent.css"></style>
