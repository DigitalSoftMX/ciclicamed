<template>
    <div class="modal-info-confirmed modal fade show w-100" id="pahmcoHistory" tabindex="-1" role="dialog"
        aria-modal="true">
        <div class="modal-dialog modal-dialog-centered rounded-bottom" role="document">
            <div class="modal-content rounded-bottom">
                <div class="modal-header e-info-header bg-primary text-center py-2">
                    <h6 class="modal-title e-info-title text-white">Historial clínico</h6>
                    <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" data-dismiss="modal"
                        aria-label="Close">
                        <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                    </button>
                </div>
                <div class="modal-body p-1">
                    <historial-clinico-component :edit="true" :disabled="false" v-model="historialClinico" :patient="patient.id"></historial-clinico-component>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component id="emtmcSuccess" title="Rol(es) actualizado(s)"
        message="Rol(es) actualizado(s) correctamente"></success-alert-component>
    <error-alert-component :id="'emtmcError'" :errors="errors" :title="'Error al modificar los roles'">
    </error-alert-component>
</template>

<script lang="ts" src="./PatientsHistoryModalComponent.ts"></script>
