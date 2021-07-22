<template>
    <div id="ckpscCheckups" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
        aria-labelledby="ckpscCheckups" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header justify-content-betweem bg-primary">
                    <div>
                        <h6 class="modal-title e-info-title text-white">{{title}}</h6>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3"
                            data-dismiss="modal" aria-label="Close">
                            <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                        </button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="px-3" v-if="enableOptions">
                        <div class="card shadow-none mb-25">
                            <div class="card-header">
                                <h4>Opciones de agenda</h4>
                            </div>
                            <div class="card-body row mx-0 px-0">
                                <div class="col-12 col-md-6 mb-25 mb-md-0">
                                    <label>Checkup</label>
                                    <v-select :options="categoryList" label="name" :reduce="item => item.id" v-model="categorySelected" placeholder="Seleccione un checkup"/>
                                </div>
                                <div class="col-12 col-md-6" v-if="patientID < 1">
                                    <label>Paciente</label>
                                    <v-select :options="patients" label="text" :reduce="item => item.childID" v-model="checkupDataCopy.patient_id" placeholder="Seleccione un paciente"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mx-0">
                        <div class="col-12 col-md-6 mb-25" v-for="(checkup, index) in checkupDataCopy.checkupList" :key="index">
                            <div class="card shadow-none">
                                <div class="card-header">
                                    <h4>{{checkup.name}}</h4>
                                </div>
                                <div class="card-body">
                                    <div class="mb-25">
                                        <label>Sucursal</label>
                                        <v-select :options="branches" label="text" :reduce="item => item.childID" v-model="branchesSelected[index]"/>
                                    </div>
                                    <div class="mb-25">
                                        <label>Fecha</label>
                                        <input type="date" class="form-control form-control-lg" @change="updateDate($event.target.value, index)" :value="formatDate(index)">
                                    </div>
                                    <div class="mb-25">
                                        <label>Hora de inicio</label>
                                        <el-time-select start="08:00" step='00:15' end="20:00"
                                            v-model="startTime[index]" placeholder="Hora inicial">
                                        </el-time-select>
                                    </div>
                                    <div v-if="patientID <= 0">
                                        <label>Hora de conclusión</label>
                                        <el-time-select start="08:00" step='00:15' end="20:00" :minTime="startTime[index]"
                                            v-model="finishTime[index]" placeholder="Hora inicial">
                                        </el-time-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-items-end">
                    <button class="btn btn-primary btn-default btn-squared" @click="uploadCheckupData" :disabled="isButtonDisabled">Guardar</button>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component id="ckscSuccess" :title="successAlert.title" :message="successAlert.message"></success-alert-component>
</template>
<script lang="ts" src="./CheckupScheduleComponent.ts"></script>
<style scoped>
    @import './CheckupScheduleComponent.scss';

</style>
