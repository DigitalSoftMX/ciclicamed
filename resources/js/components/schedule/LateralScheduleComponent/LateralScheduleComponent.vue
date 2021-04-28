<template>
    <div class="drawer-basic-wrap" :id="`drawer${id}`">

        <div class="atbd-drawer drawer-basic d-none lateral-schedule-background">

            <!-- Drawer header-->
            <div class="atbd-drawer__header d-flex justify-content-between border-title-bottom border-bottom">
                <h6 class="drawer-title align-self-center">{{ getLateralScheduleTitle() }}</h6>
                <button type="button" class="btn btn-icon btn-circle p-0" data-dismiss="modal" @click="closeLateralSchedule()"
                    aria-label="Close">
                    <img src="/svg/close-alternative.svg" alt="Alert logo" data-toggle="tooltip" data-placement="bottom"
                        title="Cerrar">
                </button>
            </div>

            <!-- Drawer body -->
            <div class="atbd-drawer__body">
                <div class="drawer-content">

                    <!-- Paciente -->
                    <div class="form-group" v-show="schedule.id < 1">
                        <label for="patients">Pacientes</label>
                        <select name="patients" :id="`patients${id}`" class="form-control select2-hidden-accessible"
                            tabindex="-1" aria-hidden="true" :disabled="isPatientDisabled">
                            <option v-for="patient in patientsList" :key="patient.id" :value="patient.id">
                                {{ `${patient.first_name} ${patient.last_name}` }}
                            </option>
                        </select>
                    </div>

                    <!-- Tipo de cita -->
                    <div class="form-group">
                        <label for="scheduleCategories">Tipo de cita</label>
                        <select name="scheduleCategories" :id="`scheduleCategories${id}`"
                            class="form-control select2-hidden-accessible" :disabled="isScheduleCategoryDisabled"
                            tabindex="-1" aria-hidden="true">
                            <option v-for="scheduleType in scheduleTypeList" :key="scheduleType.id"
                                :value="scheduleType.id">
                                {{scheduleType.name}}
                            </option>
                        </select>
                    </div>

                    <!-- Sucursal -->
                    <div class="form-group mb-25">
                        <label for="branches">Sucursal</label>
                        <select name="branches" :id="`branches${id}`" class="form-control select2-hidden-accessible"
                            :disabled="isBranchDisabled" tabindex="-1" aria-hidden="true">
                            <option v-for="branch in branchesList" :key="branch.id" :value="branch.id">
                                {{branch.name}}
                            </option>
                        </select>
                    </div>

                    <!-- Doctor -->
                    <div class="form-group mb-25">
                        <label for="doctors">Doctor</label>
                        <select name="doctors" :id="`doctors${id}`" class="form-control select2-hidden-accessible"
                            :disabled="isDoctorDisabled" tabindex="-1" aria-hidden="true">
                            <optgroup :label="`Especialidad: ${specialty.name}`" v-for="specialty in doctorsList"
                                :key="specialty.id">
                                <option v-for="doctor in specialty.doctors" :key="doctor.id" :value="doctor.id">
                                    {{ `${doctor.first_name} ${doctor.last_name}` }}</option>
                            </optgroup>
                        </select>
                    </div>

                    <!-- Motivo de cita -->
                    <div class="form-group mb-25">
                        <label for="name2">Motivo de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/text.svg" alt="Text logo">
                            </span>
                            <textarea type="text" class="form-control" id="address" placeholder="Motivo de cita"
                                v-model="formData.consult_reason" maxlength="255" @keyup="updateConsultReasonCharLength()"></textarea>
                        </div>
                        <div class="float-right">
                            {{ `${getConsultReasonCharLength()}/255` }}
                        </div>
                    </div>

                    <!-- Fecha de cita -->
                    <div class="form-group mb-25">
                        <label>Fecha de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/clock.svg" alt="Clock logo">
                            </span>
                            <input type="text" class="form-control form-control-lg bg-white" :id="`scheduleDate${id}`"
                                placeholder="dd/mm/aaaa" maxlength="10" readonly>
                        </div>
                    </div>

                    <!-- Cita -->
                    <div class="form-group mb-25">
                        <label>Hora de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/calendar.svg" alt="Calendar logo">
                            </span>
                            <input type="text" class="form-control form-control-lg bg-white" :id="`scheduleTime${id}`"
                                placeholder="dd/mm/aaaa" maxlength="10" readonly>
                        </div>
                    </div>

                    <!-- Botones de Cancelar y guardar -->
                    <div class="button-group d-flex justify-content-end mb-25">
                        <!-- <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                            v-on:click="closeLateralSchedule()" >
                            Cancelar
                        </button> -->
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                            v-if="schedule.id < 1" @click="createNewSchedule()">
                            Crear cita
                        </button>
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2" v-else
                            @click="updateSchedule()">
                            Actualizar cita
                        </button>
                    </div>

                    <!-- Tarjeta de cita -->
                    <div class="card rounded-0 lateralCardColor" v-if="schedule.id > 0">
                        <div class="card-body py-2 px-3">
                            <h6 class="text-primary mb-1">
                                {{ `${patientsList[schedule.patient_id].first_name} ${patientsList[schedule.patient_id].last_name}` }}
                            </h6>
                            <p class="m-0 text-primary">
                                {{ `${formatScheduleTime(this.schedule.consult_schedule_start)} - ${formatScheduleTime(this.schedule.consult_schedule_finish)}` }}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="overlay-dark"></div>
</template>

<script lang="ts" src="./LateralScheduleComponent.ts"></script>

<style src="./LateralScheduleComponent.css"></style>
