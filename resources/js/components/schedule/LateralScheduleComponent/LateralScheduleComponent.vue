<template>
    <div class="drawer-basic-wrap" id="container">

        <div class="atbd-drawer drawer-basic d-none lateral-schedule-background">
            <div class="atbd-drawer__header">
                <h6 class="drawer-title">Basic Drawer</h6>
            </div><!-- ends: .atbd-drawer__header -->
            <div class="atbd-drawer__body">
                <div class="drawer-content">

                    <div class="form-group mb-25">
                        <label for="name2">Doctor</label>
                        <select name="select-search" id="branches" class="form-control select2-hidden-accessible"
                            tabindex="-1" aria-hidden="true">
                            <optgroup :label="`Sucursal: ${branch.name}`" v-for="branch in branchesList" :key="branch.id">
                                <option v-for="employee in branch.employees" :key="employee.id">{{ `${employee.first_name} ${employee.last_name}` }}</option>
                            </optgroup>
                        </select>
                    </div>

                    <div class="form-group mb-25">
                        <label for="name2">Motivo de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/text.svg" alt="Address logo">
                            </span>
                            <textarea type="text" class="form-control" id="address" placeholder="Motivo de cita"
                                maxlength="255"></textarea>
                        </div>
                        <div class="float-right">
                            {{ `/255` }}
                        </div>
                    </div>

                    <!-- <div class="form-group my-0">
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/calendar.svg" alt="Birthday logo">
                            </span>
                            <label for="scheduleDate" id="scheduleDateLabel" class="ml-5 my-2"
                                @click="clickScheduleDate()">Fecha</label><input style="opacity: 0; width: 0"
                                id="scheduleDate" ref="scheduleDate" />
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/clock.svg" alt="Birthday logo">
                            </span>
                            <label for="scheduleDate" id="scheduleDateLabel" class="ml-5 my-2"
                                @click="clickScheduleDate()">Hora</label><input style="opacity: 0; width: 0"
                                id="scheduleDate" ref="scheduleDate" />
                        </div>
                    </div> -->

                    <div class="form-group mb-25">
                        <label>Fecha de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/calendar.svg" alt="Birthday logo">
                            </span>
                            <input type="text" class="form-control form-control-lg " id="scheduleDate"
                                placeholder="dd/mm/aaaa"
                                maxlength="10" readonly>
                        </div>
                    </div>

                    <div class="form-group mb-25">
                        <label>Hora de cita</label>
                        <div class="with-icon">
                            <span class="mr-5">
                                <img src="/svg/calendar.svg" alt="Birthday logo">
                            </span>
                            <input type="text" class="form-control form-control-lg " id="scheduleTime"
                                placeholder="dd/mm/aaaa"
                                maxlength="10" readonly>
                        </div>
                    </div>

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

                    <div class="button-group d-flex pt-25 justify-content-between mb-25">
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                            v-on:click="closeLateralSchedule()" >
                            Cancelar
                        </button>
                        <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2"
                            >
                            Guardar
                        </button>
                    </div>

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

</style>
