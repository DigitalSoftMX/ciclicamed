<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="errorModal" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-info modal-dialog-centered" role="document">
            <div class="modal-content modal-bg-white">
                <div class="modal-header bg-danger">
                    <h6 class="modal-title text-white">Confirmar acción</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                    </button>
                </div>
                <div class="modal-body">
                    <p>{{title}}</p>
                </div>
                <div class="modal-footer justify-content-end py-3 px-4 border-top">
                    <button class="btn btn-danger btn-default btn-squared" @click="confirmAction">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ConfirmationAlertComponent.ts"></script>

<style src="./ConfirmationAlertComponent.css"></style>
