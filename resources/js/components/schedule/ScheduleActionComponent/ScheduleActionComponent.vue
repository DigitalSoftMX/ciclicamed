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
                            <img-component url="/svg/edit.svg" alt="Editar" styleData="filter: invert(1);"></img-component>
                        </button>
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3" @click="deleteSchedule()" v-if="isCancelOptionEnabled"
                            data-dismiss="modal" aria-label="Close">
                            <img-component url="/svg/delete.svg" alt="Borrar" styleData="filter: invert(1);"></img-component>
                        </button>
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3"
                            data-dismiss="modal" aria-label="Close">
                            <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                        </button>
                    </div>
                </div>
                <div class="modal-body" v-bind:class="{'rounded-0': showScheduleOption}">
                    <!-- <p>DATA:{{schedule}}</p> --><!-- Quitar esta linea -->
                    <ul class="e-info-list">
                        <li>
                            <img-component url="/svg/calendar.svg" alt="Calendario"></img-component>
                            <span class="list-line">
                                <span class="list-label">Fecha de cita: </span>
                                <span
                                    class="list-meta">{{ `${formatScheduleDate(schedule.consult_schedule_start)}` }}</span>
                            </span>
                        </li>
                        <li>
                            <img-component url="/svg/clock.svg" alt="Reloj"></img-component>
                            <span class="list-line">
                                <span class="list-label">Hora de cita: </span>
                                <span class="list-meta">
                                    {{ `${formatScheduleTime(schedule.consult_schedule_start)} - ${formatScheduleTime(schedule.consult_schedule_finish)}` }}</span>
                            </span>
                        </li>
                        <li>
                            <img-component url="/svg/branch.svg" alt="Sucursal"></img-component>
                            <span class="list-line">
                                <span class="list-label">Sucursal: </span>
                                <span class="list-meta"> {{ schedule.branch?.name }}</span>
                            </span>
                        </li>
                        <li>
                            <img-component url="/svg/branch.svg" alt="Doctor"></img-component>
                            <span class="list-line">
                                <span class="list-label">Doctor: </span>
                                <span class="list-meta"> {{ schedule.doctor?.first_name }} {{schedule.doctor?.last_name}}</span>
                            </span>
                        </li>
                        <div v-if="role !== 'Paciente' && schedule.patient">
                            <li>
                                <img-component url="/svg/person.svg" alt="Paciente"></img-component>
                                <span class="list-line">
                                    <span class="list-label">Paciente: </span>
                                    <span class="list-meta"> {{ schedule.patient?.first_name }} {{ schedule.patient?.last_name }}</span>
                                </span>
                            </li>
                            <li>
                                <img-component url="/svg/calendar.svg" alt="Facha"></img-component>
                                <span class="list-line">
                                    <span class="list-label">Fecha de nacimiento: </span>
                                    <span class="list-meta">{{ `${formatScheduleDate(schedule.birtday)}` }}</span>
                                </span>
                            </li>
                            <li style="margin-bottom:12px">
                                <img-component url="/svg/cellphone.svg" alt="Telefono"></img-component>
                                <span class="list-line">
                                    <span class="list-label">Telefonos: </span>
                                    <span class="list-meta">{{ schedule.patient.phone }} || {{ schedule.patient.cellphone }}</span>
                                </span>
                            </li>
                        </div>
                        <li v-if="schedule.status">
                            <img-component url="/svg/alert.svg" alt="Sucursal"></img-component>
                            <span class="list-line">
                                <span class="list-label">Estado: </span>
                                <span class="list-meta"> {{ scheduleStatus }}</span>
                            </span>
                        </li>
                        <li v-if="schedule.consult_reason">
                            <img-component url="/svg/text.svg" alt="Motivo"></img-component>
                            <span class="list-line">
                                <span class="list-text">{{ schedule.consult_reason }}</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer bg-white schedule-radius" v-if="showScheduleOption">
                    <!-- <p>role: {{role}}</p> --><!-- Quitar esta linea -->
                    <div v-if="isAssistantOptionEnabled">
                        <button class="btn btn-primary btn-lg btn-squared" @click="startAssistance">Marca asistencia</button>
                    </div>
                    <div v-if="isConfirmScheduleEnabled">
                        <button class="btn btn-primary btn-lg btn-squared" @click="confirmSchedule">Confirmar cita</button>
                    </div>
                    <div v-if="isStartScheduleEnabled && role ==='Doctor'">
                        <button class="btn btn-primary btn-lg btn-squared" @click="startSchedule">Iniciar cita</button>
                    </div>
                    <div v-if="isStartScheduleEnabled && role ==='Enfermera'">
                        <button class="btn btn-primary btn-lg btn-squared" @click="startSchedule">Signos vitales</button>
                    </div>
                    <!-- <div v-if="isFullFormat">
                        <button class="btn btn-primary btn-lg btn-squared" @click="startSchedule">Llenar formulario</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>

    <success-alert-component :id="'actionConsultSuccess'" :message="successAlert.message" :title="successAlert.title">
    </success-alert-component>
    <error-alert-component :id="'actionConsultError'" :errors="errors" :title="'Error al cancelar la cita'">
    </error-alert-component>
</template>

<script lang="ts" src="./ScheduleActionComponent.ts"></script>

<style src="./ScheduleActionComponent.css"></style>
