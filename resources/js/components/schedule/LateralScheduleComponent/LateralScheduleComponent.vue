<template>
    <div class="drawer-basic-wrap" :id="`drawer${id}`">

        <div class="atbd-drawer drawer-basic d-none lateral-schedule-background">

            <!-- Drawer header-->
            <div class="atbd-drawer__header d-flex justify-content-between border-title-bottom border-bottom py-2 px-3">
                <h6 class="drawer-title align-self-center">{{ getLateralScheduleTitle() }} </h6>
                <button type="button" class="btn btn-icon btn-circle p-0" data-dismiss="modal"
                    @click="closeLateralSchedule()" aria-label="Close">
                    <img :src="asset('/svg/close-alternative.svg')" alt="Alert logo" data-toggle="tooltip" data-placement="bottom"
                        title="Cerrar">
                </button>
            </div>

            <!-- Drawer body -->
            <div class="atbd-drawer__body">
                <div class="drawer-content">

                    <!-- Paciente -->
                    <div class="form-group" v-show="schedule.id < 1 && patientID < 1">
                        <label for="lscPacientes">Pacientes</label>
                        <select-component id="lscPacientes" :data="patientsList" v-model="patientSelect" :disabled="isPatientDisabled"
                            firstText='Seleccione un paciente'></select-component>
                    </div>

                    <!-- Tipo de cita -->
                    <div class="form-group">
                        <label for="lscCategoria">Tipo de cita</label>
                        <select-component id="lscCategoria" :data="categoryListCopy" :disabled="isScheduleCategoryDisabled"
                            v-model="categorySelect" firstText='Seleccione un tipo de cita'>
                        </select-component>
                    </div>

                    <!-- Lista de estudios (solo si es imagenologia o laboratorio) -->
                    <div class="form-group" v-if="!isTestDisabled">
                        <label for="lscEstudios">Estudio clínico</label>
                        <select-component id="lscEstudios" :data="testList" :disabled="isTestDisabled"
                            v-model="testSelect" firstText='Seleccione un estudio'>
                        </select-component>
                    </div>

                    <!-- Sucursal -->
                    <div class="form-group mb-25">
                        <label for="lscSucursal">Sucursal</label>
                        <select-component id="lscSucursal" :data="branchesList" v-model="branchSelect" :disabled="isBranchDisabled"
                            firstText='Seleccione una sucursal'></select-component>
                    </div>

                    <!-- Doctor -->
                    <div class="form-group mb-25">
                        <label for="lscDoctor">Doctor</label>
                        <select-component id="lscDoctor" :data="doctorListCopy" v-model="doctorSelect" :disabled="isDoctorDisabled" firstText='Seleccione un doctor'>
                        </select-component>
                    </div>

                    <!-- Motivo de cita -->
                    <div class="form-group mb-25">
                        <label for="name2">Motivo de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img :src="asset('/svg/text.svg')" alt="Text logo">
                            </span>
                            <textarea type="text" class="form-control" id="address" placeholder="Motivo de cita"
                                v-model="scheduleSelectedCopy.consult_reason" maxlength="255"
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
                                <img :src="asset('/svg/calendar.svg')" alt="Clock logo">
                            </span>
                            <input type="text" class="form-control form-control-lg bg-white" :id="`scheduleDate${id}`"
                                placeholder="dd/mm/aaaa" maxlength="10" readonly>
                        </div>
                    </div>

                    <!-- Cita -->
                    <div class="form-group mb-25 time-select">
                        <label>Hora de inicio</label>
                        <time-picker-component :hourRange="startHoursEnabled" :minuteRange="startMinutesEnabled"
                            v-model="scheduleSelectedCopy.consult_schedule_start" @onChange="updateStartMinute">
                        </time-picker-component>
                    </div>

                    <!-- Cita -->
                    <div class="form-group mb-25 time-select">
                        <label>Hora de conclusión</label>
                        <time-picker-component :hourRange="finishHoursEnabled" :minuteRange="finishMinutesEnabled"
                            v-model="scheduleSelectedCopy.consult_schedule_finish" @onChange="updateFinishMinute">
                        </time-picker-component>
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
                    <div class="card rounded-0 lateralCardColor mt-25 shadow-none" v-if="schedule.id > 0 && isScheduleCardEnabled">
                        <div class="card-body py-2 px-3">
                            <h6 class="text-primary mb-1">
                                {{ patientsList[scheduleSelectedCopy.patient_id ?? 0].text ?? '' }}
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
