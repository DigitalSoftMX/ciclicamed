<template>
    <div class="drawer-basic-wrap" :id="`drawer${id}`">

        <div class="atbd-drawer drawer-basic d-none lateral-schedule-background">

            <!-- Drawer header-->
            <div class="atbd-drawer__header d-flex justify-content-between border-title-bottom border-bottom py-2 px-3">
                <h6 class="drawer-title align-self-center">{{ getLateralScheduleTitle() }}</h6>
                <button type="button" class="btn btn-icon btn-circle p-0" data-dismiss="modal"
                    @click="closeLateralSchedule()" aria-label="Close">
                    <img src="/svg/close-alternative.svg" alt="Alert logo" data-toggle="tooltip" data-placement="bottom"
                        title="Cerrar">
                </button>
            </div>

            <!-- Drawer body -->
            <div class="atbd-drawer__body">
                <div class="drawer-content">

                    <!-- Paciente -->
                    <div class="form-group" v-show="schedule.id < 1">
                        <label for="lscPacientes">Pacientes</label>
                        <select-component id="lscPacientes" :data="patientsList" v-model="formData.patient_id"
                            @onChange="getPatientSelected" :disabled="isPatientDisabled"
                            firstText='Seleccione un paciente'></select-component>
                    </div>

                    <!-- Tipo de cita -->
                    <div class="form-group">
                        <label for="lscCategoria">Tipo de cita</label>
                        <select-component id="lscCategoria" :data="scheduleTypeList"
                            v-model="formData.medicalconsulttype_id" :disabled="isScheduleCategoryDisabled"
                            @onChange="getScheduleCategorySelected" firstText='Seleccione un tipo de cita'>
                        </select-component>
                    </div>

                    <!-- Sucursal -->
                    <div class="form-group mb-25">
                        <label for="lscSucursal">Sucursal</label>
                        <select-component id="lscSucursal" :data="branchesList" v-model="formData.branch_id"
                            @onChange="getBranchSelected" :disabled="isBranchDisabled"
                            firstText='Seleccione una sucursal'></select-component>
                    </div>

                    <!-- Doctor -->
                    <div class="form-group mb-25">
                        <label for="lscDoctor">Doctor</label>
                        <select-component id="lscDoctor" :data="doctorsList" v-model="formData.doctor_id"
                            :isGroup="true" :disabled="isDoctorDisabled" firstText='Seleccione un doctor'>
                        </select-component>
                    </div>

                    <!-- Motivo de cita -->
                    <div class="form-group mb-25">
                        <label for="name2">Motivo de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/text.svg" alt="Text logo">
                            </span>
                            <textarea type="text" class="form-control" id="address" placeholder="Motivo de cita"
                                v-model="formData.consult_reason" maxlength="255"
                                @keyup="updateConsultReasonCharLength()"></textarea>
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
                                <img src="/svg/calendar.svg" alt="Clock logo">
                            </span>
                            <input type="text" class="form-control form-control-lg bg-white" :id="`scheduleDate${id}`"
                                placeholder="dd/mm/aaaa" maxlength="10" readonly>
                        </div>
                    </div>

                    <!-- Cita -->
                    <div class="form-group mb-25 time-select">
                        <label>Hora de inicio</label>
                        <time-picker-component :hourRange="hoursEnabled" v-model="formData.consult_schedule_start"></time-picker-component>
                        <!-- <light-vue-timepicker v-model="formData.consult_schedule_start" :hourRange="hoursEnabled"></light-vue-timepicker> -->
                        <!-- <date-picker mode="time" v-model="formData.consult_schedule_start" :model-config="hourConfig"/> -->
                    </div>

                    <!-- Cita -->
                    <div class="form-group mb-25 time-select">
                        <label>Hora de conclusión</label>
                        <time-picker-component :hourRange="hoursEnabled" v-model="formData.consult_schedule_finish"></time-picker-component>
                        <!-- <light-vue-timepicker v-model="formData.consult_schedule_finish"></light-vue-timepicker> -->
                    </div>

                    <!-- Botones de Cancelar y guardar -->
                    <div class="button-group d-flex justify-content-end">
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
                    <div class="card rounded-0 lateralCardColor mt-25" v-if="schedule.id > 0">
                        <div class="card-body py-2 px-3">
                            <h6 class="text-primary mb-1">
                                {{ patientsList[schedule.patient_id].text }}
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
</template>

<script lang="ts" src="./LateralScheduleComponent.ts"></script>

<style lang="scss">
    @import './LateralScheduleComponent.scss';
    @import '../../../../../public/vendor_assets/css/line-awesome.min.css';
    @import '../../../../../public/vendor_assets/css/wickedpicker.min.css';
    @import '../../../../../public/css/style.css';
</style>
