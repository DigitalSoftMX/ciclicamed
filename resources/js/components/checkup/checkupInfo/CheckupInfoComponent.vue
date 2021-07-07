<template>
    <div id="ckpscCheckupInfo" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
        aria-labelledby="ckpscCheckups" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header justify-content-betweem bg-primary">
                    <div>
                        <h6 class="modal-title e-info-title text-white">Información de checkup
                            {{checkupData.category?.name}}</h6>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0 ml-3"
                            data-dismiss="modal" aria-label="Close">
                            <img :src="asset('/svg/close.svg')" alt="Alert logo" style="filter: invert(1);" data-toggle="tooltip"
                                data-placement="bottom" title="Cerrar">
                        </button>
                    </div>
                </div>
                <div class="modal-body p-0">
                    <div class="card shadow-none border-0">
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table--default m-0">
                                    <thead>
                                        <tr>
                                            <th class="text-left">Categoría</th>
                                            <th class="text-left">Nombre</th>
                                            <th class="text-left">Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(checkup, index) in consults" :key="index">
                                            <td class="text-left">{{showCategoryInfo(checkup)}}</td>
                                            <td class="text-left">{{showNameInfo(checkup)}}</td>
                                            <td class="text-left">{{showStatusInfo(checkup)}}</td>
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
</template>
<script lang="ts" src="./CheckupInfoComponent.ts"></script>
