<template>
    <div class="modal-info-confirmed modal fade show w-100 modal-dialog-pdf" id="conupteUploadTest" tabindex="-1" role="dialog"
        aria-modal="true">
        <div class="modal-dialog modal-dialog-centered rounded-bottom" role="document">
            <div class="modal-content rounded-bottom">
                <div class="modal-header e-info-header bg-primary text-center py-2">
                    <h6 class="modal-title e-info-title text-white">Subir resultados</h6>
                    <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" data-dismiss="modal"
                        aria-label="Close">
                        <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                    </button>
                </div>
                <div class="modal-body p-0">
                    <upload-file-component :upload="true" :test="testID"></upload-file-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ConsultUploadTest.ts"></script>