<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="errorModal" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-info modal-dialog-centered" role="document">
            <div class="modal-content modal-bg-white">
                <div class="modal-header">
                    <h6 class="modal-title">Confirmar acción</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img src="/svg/close.svg" alt="Alert logo">
                    </button>
                </div>
                <div class="modal-body">
                    <h6>{{title}}</h6>
                </div>
                <div class="modal-footer bg-white justify-content-end py-3 px-4">
                    <button class="btn btn-danger btn-default btn-squared" @click="confirmAction">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ConfirmationAlertComponent.ts"></script>

<style src="./ConfirmationAlertComponent.css"></style>
