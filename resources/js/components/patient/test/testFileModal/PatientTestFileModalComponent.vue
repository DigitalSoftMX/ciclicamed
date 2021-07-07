<template>
    <div class="modal-info-confirmed modal fade show w-100" :id="id" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered rounded-bottom" role="document">
            <div class="modal-content rounded-bottom pdf">
                <div class="modal-header e-info-header bg-primary text-center py-2">
                    <h6 class="modal-title e-info-title text-white">Resultados</h6>
                    <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" data-dismiss="modal"
                        aria-label="Close">
                        <img :src="asset('/svg/close.svg')" alt="Alert logo" style="filter: invert(1);">
                    </button>
                </div>
                <div class="modal-body p-0">
                    <div class="px-3">
                        <div class="btn-group atbd-button-group btn-group-normal my-2 bg-white">
                            <button type="button" class="btn btn-default btn-squared btn-outline-primary "
                                v-for="(file, index) in results.files" :key="`ptfmc${index}`" @click="selectPDF(file)">{{file}}</button>
                        </div>
                    </div>
                    <div id="example1" class="pdf"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PatientTestFileModalComponent.ts"></script>

<style scoped>
    @import './PatientTestFileModalComponent.scss';

</style>
