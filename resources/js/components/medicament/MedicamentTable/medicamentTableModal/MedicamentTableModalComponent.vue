<template>
    <div class="modal-info-confirmed modal fade show w-100" id="brtmcBranchModal" tabindex="-1" role="dialog"
        aria-modal="true">
        <div class="modal-dialog modal-dialog-centered rounded-bottom" role="document">
            <div class="modal-content rounded-bottom">
                <div class="modal-header e-info-header bg-primary text-center py-2">
                    <h6 class="modal-title e-info-title text-white">Sucursal</h6>
                    <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" data-dismiss="modal"
                        aria-label="Close">
                        <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                    </button>
                </div>
                <div class="modal-body p-3">
                    <div class="form-group mb-25">
                        <label for="lastName">Código</label>
                        <input type="text" class="form-control form-control-lg" placeholder="Código" maxlength="50" v-model="form.code">
                    </div>
                    <div class="form-group mb-25">
                        <label for="lastName">Nombre</label>
                        <textarea class="form-control form-control-lg" placeholder="Nombre" maxlength="50" v-model="form.name"
                            rows="3"></textarea>
                    </div>
                    <div class="form-group mb-25">
                        <label for="lastName">Nombre genérico</label>
                        <input type="text" class="form-control form-control-lg" placeholder="Nombre genérico" maxlength="50"  v-model="form.generic_name">
                    </div>
                    <div class="form-group mb-25">
                        <label for="lastName">Presentación</label>
                        <input type="text" class="form-control form-control-lg" placeholder="Presentación" maxlength="70"  v-model="form.presentation">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary border-0 float-right" v-if="isNew" @click="createMedicament">
                        Crear medicamento
                    </button>
                    <button class="btn btn-primary border-0 float-right" v-else @click="updateMedicament">
                        Editar medicamento
                    </button>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component id="metmcSuccess" :title="successAlert.title"
        :message="successAlert.message"></success-alert-component>
    <error-alert-component :id="'metmcError'" :errors="errors" :title="'Error al modificar la sucursal'">
    </error-alert-component>
</template>

<script lang="ts" src="./MedicamentTableModalComponent.ts"></script>
