<template>
    <div class="drawer-basic-wrap" :id="`drawer${id}`">

        <div class="atbd-drawer drawer-basic d-none lateral-schedule-background">

            <!-- Drawer header-->
            <div class="atbd-drawer__header d-flex justify-content-between border-title-bottom border-bottom py-2 px-3">
                <h6 class="drawer-title align-self-center">{{ getLateralScheduleTitle() }} </h6>
                <button type="button" class="btn btn-icon btn-circle p-0" data-dismiss="modal"
                    @click="closeLateralSchedule()" aria-label="Close">
                    <img-component url="/svg/close-alternative.svg" alt="Cerrar"></img-component>
                </button>
            </div>

            <!-- Drawer body -->
            <div class="atbd-drawer__body">
                <div class="drawer-content">

                    <!-- Paciente -->
                    <div class="form-group" v-show="scheduleSelectedCopy.id < 1 && patientID < 1">
                        <label for="lscPacientes">Pacientes</label>
                        <v-select :options="patientsList" label="text" :reduce="item => item.childID"
                            placeholder="Seleccione un paciente" v-model="scheduleSelectedCopy.patient_id"/>
                    </div>

                    <!-- Lista de estudios (solo si es imagenologia o laboratorio) -->
                    <div class="form-group" v-if="(scheduleSelectedCopy.doctor_id === 1 || scheduleSelectedCopy.doctor_id === 2)">
                        <label for="lscEstudios">Estudio clínico</label>
                        <v-select :options="testList" label="text" :reduce="item => item.childID"
                            placeholder="Seleccione un estudio" v-model="scheduleSelectedCopy.product_id" />
                    </div>

                    <!-- Sucursal -->
                    <div class="form-group mb-25">
                        <label for="lscSucursal">Sucursal</label>
                        <v-select :options="branchesList" label="text" :reduce="item => item.childID"
                            placeholder="Seleccione una sucursal" v-model="scheduleSelectedCopy.branch_id" />
                    </div>

                    <!-- Doctor -->
                    <div class="form-group mb-25">
                        <label for="lscDoctor">Doctor</label>
                        <select-component id="lscDoctor" :data="doctorListCopy" v-model="doctorSelect" firstText='Seleccione un doctor'>
                        </select-component>
                    </div>

                    <!-- Motivo de cita -->
                    <div class="form-group mb-25">
                        <label for="name2">Motivo de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img-component url="/svg/text.svg" alt="Texto"></img-component>
                            </span>
                            <textarea type="text" class="form-control" id="address" placeholder="Motivo de cita"
                                v-model="scheduleSelectedCopy.consult_reason" maxlength="255"></textarea>
                        </div>
                        <div class="float-right">
                            {{ `${consultReasonLength}/255` }}
                        </div>
                    </div>

                    <!-- Fecha de cita -->
                    <div class="form-group mb-25">
                        <label>Fecha de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img-component url="/svg/calendar.svg" alt="Calendario"></img-component>
                            </span>
                            <input type="date" class="form-control form-control-lg bg-white" :id="`scheduleDate${id}`"
                                placeholder="dd/mm/aaaa" v-model="dateSelected">
                        </div>
                    </div>

                    <!-- Cita -->
                    <div class="form-group mb-25 time-select">
                        <label>Hora inicial</label>
                        <el-time-select :start='startHour.startTime' step='00:15' :end='startHour.endTime' v-model="startTime" placeholder="Hora inicial"></el-time-select>
                    </div>

                    <!-- Cita -->
                    <div class="form-group mb-25 time-select" v-if="role !== 'Paciente'">
                        <label>Hora final</label>
                        <el-time-select :start='startHour.startTime' step='00:15' :end='startHour.endTime' v-model="finishTime" :minTime="startTime" placeholder="Hora final"></el-time-select>
                    </div>

                    <!-- Botones de Cancelar y guardar -->
                    <div class="button-group d-flex justify-content-end">
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                            v-if="schedule.id <= 0" @click="createNewSchedule()">
                            Crear cita
                        </button>
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2" v-else
                            @click="updateSchedule()">
                            Actualizar cita
                        </button>
                    </div>

                    <!-- Tarjeta de cita -->
                    <div class="card rounded-0 lateralCardColor mt-25 shadow-none"
                        v-if="schedule.id > 0 && (role === 'Asistente' || role === 'Administrador')">
                        <div class="card-body py-2 px-3">
                            <h6 class="text-primary mb-1">
                                {{ tarjetaPaciente }}
                            </h6>
                            <p class="m-0 text-primary">
                                {{ `${formatScheduleTime(this.scheduleSelectedCopy.consult_schedule_start)} - ${formatScheduleTime(this.scheduleSelectedCopy.consult_schedule_finish)}` }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <error-alert-component id="latscError" :errors="errors" :title="`Error al ${scheduleAction} la cita`">
    </error-alert-component>
    <success-alert-component id="latscSuccess" :message="`Se ha podido ${scheduleAction} correctamente la cita`"
        :title="'Cita procesada correctamente'"></success-alert-component>
</template>

<script lang="ts" src="./LateralScheduleComponent.ts"></script>

<style lang="scss">
    @import './LateralScheduleComponent.scss';
    @import '../../../../../public/vendor_assets/css/line-awesome.min.css';
    @import '../../../../../public/vendor_assets/css/wickedpicker.min.css';
    @import '../../../../../public/css/style.css';

</style>
