<template>
    <div class="row mx-0">
        <div class="col-12 mb-25">
            <div class="card">
                <div class="card-header d-flex justify-items-between atbd-collapse-item__header active active bg-white">
                    <h4>Licencias</h4>
                    <button class="btn btn-primary my-3" @click="addData('Licencia')">
                        Agregar licencias
                    </button>
                </div>
                <div class="card-body">
                    <div class="row mx-0">
                        <div class="col-12 col-md-6 mb-25" v-for="(degree, index) in degrees" :key="`degree${index}`">
                            <div class="card shadow-none">
                                <div
                                    class="card-header d-flex justify-items-between atbd-collapse-item__header active active bg-white">
                                    <h4>{{degree.degree_title}}</h4>
                                    <button class="btn btn-icon btn-danger btn-circle button-size" @click="deleteData(index, 'Licencia')">
                                        <img-component url="/svg/delete.svg" alt="Borrar" cssClass="svg-white">
                                        </img-component>
                                    </button>
                                </div>
                                <div class="card-body">
                                    <div class="mb-10">
                                        <label>Título</label>
                                        <input type="text" class="form-control form-control-lg"
                                            v-model="degrees[index].degree_title">
                                    </div>
                                    <div class="mb-10">
                                        <label>Cédula profesional</label>
                                        <input type="text" class="form-control form-control-lg" maxlength="8"
                                            v-model="degrees[index].license_number">
                                    </div>
                                    <div class="mb-10">
                                        <label>Escuela</label>
                                        <input type="text" class="form-control form-control-lg"
                                            v-model="degrees[index].school_name">
                                    </div>
                                    <div>
                                        <label>Especialidad</label>
                                        <v-select :options="specialies" label="name" :reduce="item => item.id"
                                            v-model="degrees[index].medicalspecialty_id" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary float-right" @click="setEmployeeTitles">
                        Guardar licencias
                    </button>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-items-between atbd-collapse-item__header active active bg-white">
                    <h4>Horarios</h4>
                    <button class="btn btn-primary my-3" @click="addData('Horario')">
                        Agregar horario
                    </button>
                </div>
                <div class="card-body">
                    <div class="row mx-0">
                        <div class="col-12 col-md-6 mb-25" v-for="(hour, index) in hours" :key="`hours${index}`">
                            <div class="card shadow-none">
                                <div
                                    class="card-header d-flex justify-items-between atbd-collapse-item__header active active bg-white">
                                    <h4>{{hour.branch?.name}}</h4>
                                    <button class="btn btn-icon btn-danger btn-circle button-size" @click="deleteData(index, 'Horario')">
                                        <img-component url="/svg/delete.svg" alt="Borrar" cssClass="svg-white">
                                        </img-component>
                                    </button>
                                </div>
                                <div class="card-body">
                                    <div class="mb-25">
                                        <label>Sucursal</label>
                                        <v-select :options="branches" label="name" :reduce="item => item.id"
                                            v-model="hours[index].branch_id" />
                                    </div>
                                    <div class="mb-25">
                                        <label>Día inicial</label>
                                        <v-select :options="week" label="name" :reduce="item => item.id"
                                            v-model="hours[index].start_day" />
                                    </div>
                                    <div class="mb-25">
                                        <label>Día final</label>
                                        <v-select :options="week" label="name" :reduce="item => item.id"
                                            v-model="hours[index].finish_day" />
                                    </div>
                                    <div class="mb-25 row mx-0">
                                        <label class="col-12 p-0">Hora inicial</label>
                                        <el-time-select class="col-12 p-0 w-100" start="08:00" step='00:15' end="20:00"
                                            v-model="hours[index].start_time" placeholder="Hora inicial">
                                        </el-time-select>
                                    </div>
                                    <div class="row mx-0">
                                        <label class="col-12 p-0">Hora final</label>
                                        <el-time-select class="col-12 p-0 w-100" start="08:00" step='00:15' end="20:00" :minTime="hours[index].start_time"
                                            v-model="hours[index].finish_time" placeholder="Hora final">
                                        </el-time-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary float-right" @click="setEmployeeHours">
                        Guardar horarios
                    </button>
                </div>
            </div>
        </div>

    </div>
    <success-alert-component id="emshecSuccess" :title="successAlert.title" :message="successAlert.message">
    </success-alert-component>
    <error-alert-component :id="'emshecError'" :errors="errors" :title="'Error modificar los datos'">
    </error-alert-component>
</template>

<script lang="ts" src="./EmployeesScheduleComponent.ts"></script>
