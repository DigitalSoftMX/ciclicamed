<template>
    <div class="modal-info-confirmed modal fade show w-100" id="etmcEmployee" tabindex="-1" role="dialog" aria-modal="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-dialog-centered rounded-bottom" role="document">
            <div class="modal-content rounded-bottom">
                <div class="modal-header e-info-header bg-primary text-center py-2">
                    <h6 class="modal-title e-info-title text-white">Empleado</h6>
                    <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" data-dismiss="modal"
                        aria-label="Close">
                        <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                    </button>
                </div>
                <div class="modal-body p-1">
                    <user-profile-component userCategory="empleados" :userData="employee" :disabled="disabled" :isNew="isNew" :roles="rolesSelected"></user-profile-component>

                    <div class="card mt-25">
                        <div class="card-body">
                            <h4>Seleccionar roles</h4>
                        </div>
                        <div class="card-body">
                            <v-select :options="roles" label="name" v-model="roleSelected" :disabled="disabled"/>
                        </div>
                        <div class="card-footer" v-if="!disabled && !isNew">
                            <button class="btn btn-primary btn-default btn-squared float-right" @click="setEmployeeRoles" :disabled="disabled">Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <success-alert-component id="emtmcSuccess" title="Rol actualizado" message="Rol actualizado correctamente"></success-alert-component>
    <error-alert-component :id="'emtmcError'" :errors="errors" :title="'Error al modificar el rol'">
    </error-alert-component>
</template>

<script lang="ts" src="./EmployeeTableModalComponent.ts"></script>