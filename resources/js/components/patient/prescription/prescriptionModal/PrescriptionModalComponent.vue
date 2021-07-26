<template>
    <div class="modal-info-confirmed modal fade show w-100" :id="id" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered rounded-bottom" role="document">
            <div class="modal-content rounded-bottom">
                <div class="modal-header e-info-header bg-primary text-center py-2">
                    <h6 class="modal-title e-info-title text-white">Medicamentos</h6>
                    <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" data-dismiss="modal"
                        aria-label="Close">
                        <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                    </button>
                </div>
                <div class="card-body p-0 rounded-bottom">
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
                                    <td>{{prescription.administration_type}}</td>
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
</template>

<script lang="ts" src="./PrescriptionModalComponent.ts"></script>
