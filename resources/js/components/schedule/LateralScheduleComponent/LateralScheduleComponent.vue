<template>
    <div class="drawer-basic-wrap" id="container">

        <div class="atbd-drawer drawer-basic d-none lateral-schedule-background">

            <!-- Drawer header-->
            <div class="atbd-drawer__header">
                <h6 class="drawer-title">Basic Drawer</h6>
            </div>

            <!-- Drawer body -->
            <div class="atbd-drawer__body">
                <div class="drawer-content">

                    <!-- Paciente -->
                    <div class="form-group">
                        <label for="reminder">Pacientes</label>
                        <select name="patients" id="patients" class="form-control select2-hidden-accessible"
                            tabindex="-1" aria-hidden="true">
                            <option v-for="patient in patientsList" :key="patient.id" :value="patient.id">
                                {{ `${patient.first_name} ${patient.last_name}` }}
                            </option>
                        </select>
                    </div>

                    <!-- Tipo de cita -->
                    <div class="form-group">
                        <label for="reminder">Tipo de cita</label>
                        <select name="scheduleCategories" id="scheduleCategories" class="form-control select2-hidden-accessible"
                            tabindex="-1" aria-hidden="true">
                            <option v-for="scheduleCategory in scheduleCategoriesList" :key="scheduleCategory.id" :value="scheduleCategory.id">
                                {{scheduleCategory.name}}
                            </option>
                        </select>
                    </div>

                    <!-- Sucursal -->
                    <div class="form-group mb-25">
                        <label for="name2">Sucursal</label>
                        <select name="branches" id="branches" class="form-control select2-hidden-accessible"
                            tabindex="-1" aria-hidden="true">
                            <option v-for="branch in branchesList" :key="branch.id" :value="branch.id">
                                {{branch.name}}
                            </option>
                        </select>
                    </div>

                    <!-- Doctor -->
                    <div class="form-group mb-25">
                        <label for="name2">Doctor</label>
                        <select name="select-search" id="doctors" class="form-control select2-hidden-accessible" :disabled="isDoctorListDisabled"
                            tabindex="-1" aria-hidden="true">
                            <optgroup :label="`Especialidad: ${specialty.name}`" v-for="specialty in doctorsList" :key="specialty.id">
                                <option v-for="doctor in specialty.employees" :key="doctor.id" :value="doctor.id">{{ `${doctor.first_name} ${doctor.last_name}` }}</option>
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
                            <textarea type="text" class="form-control" id="address" placeholder="Motivo de cita" v-model="formData.scheduleNote"
                                maxlength="255"></textarea>
                        </div>
                        <div class="float-right">
                            {{ `/255` }}
                        </div>
                    </div>

                    <!-- Fecha de cita -->
                    <div class="form-group mb-25">
                        <label>Fecha de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/clock.svg" alt="Clock logo">
                            </span>
                            <input type="text" class="form-control form-control-lg bg-white" id="scheduleDate" @click="getScheduleDateTime()"
                                   placeholder="dd/mm/aaaa"
                                   maxlength="10" readonly>
                        </div>
                    </div>

                    <!-- Cita -->
                    <div class="form-group mb-25">
                        <label>Hora de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/calendar.svg" alt="Calendar logo">
                            </span>
                            <input type="text" class="form-control form-control-lg bg-white" id="scheduleTime"
                                placeholder="dd/mm/aaaa"
                                maxlength="10" readonly>
                        </div>
                    </div>

                    <!-- Aviso -->
                    <div class="form-group">
                        <label for="reminder">Aviso</label>
                        <select name="select-search" id="reminder" class="form-control select2-hidden-accessible"
                            tabindex="-1" aria-hidden="true">
                            <option value="01">Option 1</option>
                            <option value="01">Option 1</option>
                            <option value="01">Option 1</option>
                            <option value="01">Option 1</option>
                            <option value="01">Option 3</option>
                        </select>
                    </div>

                    <!-- Botones de Cancelar y guardar -->
                    <div class="button-group d-flex pt-25 justify-content-between mb-25">
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                            v-on:click="closeLateralSchedule()" >
                            Cancelar
                        </button>
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2" @click="createNewSchedule()"
                            >
                            Guardar
                        </button>
                    </div>

                    <!-- Tarjeta de cita -->
                    <div class="card rounded-0 lateralCardColor" v-if="schedule">
                        <div class="card-body py-2 px-3">
                            <h6 class="text-primary mb-1">Lorem ipsum dolom asitum</h6>
                            <p class="m-0 text-primary">12:00 - 2:00</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="overlay-dark"></div>
</template>

<script src="./LateralScheduleComponent.js"></script>

<style>
    .lateral-schedule-background {
        background-color: #faf4ff !important;
    }
    .ui-datepicker {
        z-index: 9999 !important;
    }
    .lateralCardColor
    {
        border-left-color: #60269E !important;
        border-left-width: 5px !important;
    }
    .wickedpicker
    {
        z-index: 9999 !important;
    }

</style>
