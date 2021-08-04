<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Sucursales" :userData="administrador"
        :photo="administrador.photo" role="Administrador">
    </navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div class="row mx-0">
            <div class="col-12 col-md-6">
                <div class="card mb-25">
                    <div class="card-header">
                        <h4>Número de citas</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <label>Seleccionar rango de fecha</label>
                            <el-date-picker class="w-100" v-model="citaDate" type="daterange" :shortcuts="shortcuts"
                                range-separator="De" start-placeholder="Fecha inicial" end-placeholder="Fecha final">
                            </el-date-picker>
                        </div>
                        <chart-component title="Gráficas de citas" :data="citaChart" :noShadow="true"></chart-component>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 mb-25">
                <div class="card">
                    <div class="card-header">
                        <h4>Número de consultas por especialidad</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <div class="mb-25">
                                <label>Especialidad</label>
                                <select v-model="consultaEspecialidadID" class="form-control form-control-lg">
                                    <option value="1">Uroginecología</option>
                                    <option value="2">Climaterío</option>
                                    <option value="3">Materno fetal</option>
                                    <option value="4">Nutrición perinatal</option>
                                    <option value="5">Nutrición general</option>
                                    <option value="6">Genética perinatal</option>
                                    <option value="7">Biología de la reproducción</option>
                                    <option value="8">Cirugía endoscópica</option>
                                    <option value="9">Oncología</option>
                                    <option value="10">Colposcopía</option>
                                    <option value="13">Ginecología</option>
                                </select>
                            </div>
                            <div>
                                <label>Seleccionar rango de fecha</label>
                                <el-date-picker class="w-100" v-model="consultaEspecialidadDate" type="daterange"
                                    :shortcuts="shortcuts" range-separator="De" start-placeholder="Fecha inicial"
                                    end-placeholder="Fecha final">
                                </el-date-picker>
                            </div>
                        </div>
                        <chart-component :title="especialidades[consultaEspecialidadID - 1]" :data="especialidadChart"
                            :noShadow="true" :id="1"></chart-component>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6">
                <div class="card mb-25">
                    <div class="card-header">
                        <h4>Número de consultas por doctores</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <label>Seleccionar doctor</label>
                            <v-select :options="doctors"
                                :getOptionLabel="item => `${item.first_name} ${ item.last_name}`"
                                :reduce="item => item.id" v-model="doctorSelected" />
                        </div>
                        <div class="mb-25">
                            <label>Seleccionar rango de fecha</label>
                            <el-date-picker class="w-100" v-model="doctorDate" type="daterange" :shortcuts="shortcuts"
                                range-separator="De" start-placeholder="Fecha inicial" end-placeholder="Fecha final">
                            </el-date-picker>
                        </div>
                        <chart-component
                            :title="`${this.doctors.find(item => item.id === this.doctorSelected)?.first_name} ${this.doctors.find(item => item.id === this.doctorSelected)?.last_name}`"
                            :data="doctorChart" :noShadow="true" :id="2"></chart-component>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 mb-25">
                <div class="card">
                    <div class="card-header">
                        <h4>Número de consultas por servicios</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <div class="mb-25">
                                <label>Especialidad</label>
                                <select v-model="servicioID" class="form-control form-control-lg">
                                    <option value="1">Consultas</option>
                                    <option value="2">Imagenología</option>
                                    <option value="3">Laboratorio</option>
                                </select>
                            </div>
                            <div>
                                <label>Seleccionar rango de fecha</label>
                                <el-date-picker class="w-100" v-model="servicioDate" type="daterange"
                                    :shortcuts="shortcuts" range-separator="De" start-placeholder="Fecha inicial"
                                    end-placeholder="Fecha final">
                                </el-date-picker>
                            </div>
                        </div>
                        <chart-component :title="servicios[servicioID - 1]" :data="servicioChart"
                            :noShadow="true" :id="3"></chart-component>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 mb-25">
                <div class="card">
                    <div class="card-header">
                        <h4>Número de estudios de laboratorio</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <label>Seleccionar rango de fecha</label>
                            <el-date-picker class="w-100" v-model="laboratorioDate" type="daterange"
                                :shortcuts="shortcuts" range-separator="De" start-placeholder="Fecha inicial"
                                end-placeholder="Fecha final">
                            </el-date-picker>
                        </div>
                        <chart-component title="Laboratorio" :data="laboratorioChart"
                            :noShadow="true" :id="4"></chart-component>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 mb-25">
                <div class="card">
                    <div class="card-header">
                        <h4>Número de estudios de imagenología</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <label>Seleccionar rango de fecha</label>
                            <el-date-picker class="w-100" v-model="imagenologiaDate" type="daterange"
                                :shortcuts="shortcuts" range-separator="De" start-placeholder="Fecha inicial"
                                end-placeholder="Fecha final">
                            </el-date-picker>
                        </div>
                        <chart-component title="Imagenología" :data="imagenologiaChart"
                            :noShadow="true" :id="5"></chart-component>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 mb-25">
                <div class="card">
                    <div class="card-header">
                        <h4>Cobro de estudios</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <label>Seleccionar estudio</label>
                            <v-select :options="productoList"
                                :getOptionLabel="item => `${item.product_code} ${item.name}`"
                                :reduce="item => item.id" v-model="productoID" />
                        </div>
                        <div class="mb-25">
                            <label>Seleccionar rango de fecha</label>
                            <el-date-picker class="w-100" v-model="productoDate" type="daterange"
                                :shortcuts="shortcuts" range-separator="De" start-placeholder="Fecha inicial"
                                end-placeholder="Fecha final">
                            </el-date-picker>
                        </div>
                        <chart-component title="Medicamento" :data="productoChart"
                            :noShadow="true" :id="6"></chart-component>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 mb-25">
                <div class="card">
                    <div class="card-header">
                        <h4>Cobro de medicamentos</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <label>Seleccionar medicamento</label>
                            <v-select :options="medicamentoList"
                                :getOptionLabel="item => `${item.product_code} ${item.name}`"
                                :reduce="item => item.id" v-model="medicamentoID" />
                        </div>
                        <div class="mb-25">
                            <label>Seleccionar rango de fecha</label>
                            <el-date-picker class="w-100" v-model="medicamentoDate" type="daterange"
                                :shortcuts="shortcuts" range-separator="De" start-placeholder="Fecha inicial"
                                end-placeholder="Fecha final">
                            </el-date-picker>
                        </div>
                        <chart-component title="Laboratorio" :data="medicamentoChart"
                            :noShadow="true" :id="7"></chart-component>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 mb-25">
                <div class="card">
                    <div class="card-header">
                        <h4>Tiempo acumulado de tiempo</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <label>Seleccionar rango de fecha</label>
                            <el-date-picker class="w-100" v-model="tiempoDate" type="daterange"
                                :shortcuts="shortcuts" range-separator="De" start-placeholder="Fecha inicial"
                                end-placeholder="Fecha final">
                            </el-date-picker>
                        </div>
                        <chart-component title="Tiempo acumulado" :data="tiempoChart"
                            :noShadow="true" :id="8"></chart-component>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 mb-25">
                <div class="card">
                    <div class="card-header">
                        <h4>Tiempo acumulado por consulta</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-25">
                            <label>Seleccionar consulta</label>
                            <v-select :options="consultList"
                                :getOptionLabel="item => `${item.consult_schedule_start} ${item.patient.first_name} ${item.patient.last_name}`"
                                :reduce="item => item.id" v-model="consultaID" />
                        </div>
                        <chart-component title="Tiempo acumulado" :data="consultaChart"
                            :noShadow="true" :id="9"></chart-component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./AdministradorChartPage.ts"></script>
