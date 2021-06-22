<template>
    <div id="ckpscCheckups" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
        aria-labelledby="ckpscCheckups" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header justify-content-betweem bg-primary">
                    <div>
                        <h6 class="modal-title e-info-title text-white">Agendar Checkup</h6>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3"
                            data-dismiss="modal" aria-label="Close">
                            <img src="/svg/close.svg" alt="Alert logo" style="filter: invert(1);" data-toggle="tooltip"
                                data-placement="bottom" title="Cerrar">
                        </button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="px-3">
                        <div class="card mb-25 shadow-none">
                            <div class="card-header">
                                <h4>Lista de checkups</h4>
                            </div>
                            <div class="card-body">
                                <select-component id="ckpscLista" :data="categoryList" v-model="categorySelected"
                                    firstText="Seleccione un checkup"></select-component>
                            </div>
                        </div>
                    </div>

                    <div class="row mx-0">
                        <div class="col-12 col-md-6 mb-25" v-for="(checkup, index) in checkupData" :key="checkup.code">
                            <div class="card shadow-none">
                                <div class="card-header">
                                    <h4>{{checkup.name}}</h4>
                                </div>
                                <div class="card-body">
                                    <div class="mb-25">
                                        <label>Sucursal</label>
                                        <select-component :id="`ckpscAgenda${index}`"
                                            firstText="Seleccione una sucursal" :data="branchesList">
                                        </select-component>
                                    </div>
                                    <div class="mb-25">
                                        <label>Hora de inicio</label>
                                        <timepicker :hourRange="['8-20']"></timepicker>
                                    </div>
                                    <div>
                                        <label>Hora de conclusión</label>
                                        <timepicker :hourRange="['8-20']"></timepicker>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script lang="ts" src="./CheckupScheduleComponent.ts"></script>
<style scoped>
    @import './CheckupScheduleComponent.scss';

</style>
