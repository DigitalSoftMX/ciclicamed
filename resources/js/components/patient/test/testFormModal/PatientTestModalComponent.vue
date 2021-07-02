<template>
    <div class="modal-info-confirmed modal fade show w-100" :id="id" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered rounded-bottom" role="document">
            <div class="card border-0 rounded-bottom">
                <div class="modal-content rounded-bottom">
                    <div class="modal-header e-info-header bg-primary text-center py-2">
                        <h6 class="modal-title e-info-title text-white">Medicamentos</h6>
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0"
                            data-dismiss="modal" aria-label="Close">
                            <img src="/svg/close.svg" alt="Alert logo" style="filter: invert(1);">
                        </button>
                    </div>
                    <div class="card-body p-0 rounded-bottom">
                        <div class="tab-content rounded-bottom">
                            <div class="tab-pane fade active show rounded-bottom" id="t_channel-today" role="tabpanel"
                                aria-labelledby="t_channel-today-tab">
                                <div class="table-responsive">
                                    <table class="table table--default mb-0">
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Dosis</th>
                                                <th>Frecuencia</th>
                                                <th>Duracion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="prescription in prescriptions" :key="prescription.medicament?.code">
                                                <td>{{prescription.medicament?.name}}</td>
                                                <td>{{prescription.administation_type}}</td>
                                                <td>{{prescription.rate}}</td>
                                                <td>{{prescription.duration}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PatientTestModalComponent.ts"></script>
