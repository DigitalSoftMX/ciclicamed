<template>
    <div class="card">
        <div class="card-header">
            <h6>Oncología</h6>
        </div>
        <div class="card-body row mx-0 atbd-collapse atbd-collapse-custom">
            <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ocOncologia" aria-expanded="true"
                        aria-controls="ocOncologia">
                        <i class="la la-angle-right"></i>
                        Oncología
                    </a>
                </div>
                <div id="ocOncologia" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0">
                        <div class="col-12 mb-25">
                            <label for="ocHistoriaFamiliar">Historia familiar de padecimientos oncológicos</label>
                            <textarea class="form-control form-control-lg" type="text" id="ocHistoriaFamiliar"
                                v-model="formDataCopy.historiaFamiliar"></textarea>
                        </div>
                        <div class="col-12 mb-25">
                            <label for="ocMenarca">Menarca</label>
                            <textarea class="form-control form-control-lg" type="text" id="ocMenarca"
                                v-model="formDataCopy.menarca"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ocEdadPrimerEmbarazo">Edad del primer embarazo</label>
                            <input class="form-control form-control-lg" type="number" id="ocEdadPrimerEmbarazo"
                                v-model="formDataCopy.edadPrimerEmbarazo">
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ocLactanciaMaterna">Lactancia materna (tiempo)</label>
                            <input class="form-control form-control-lg" type="text" id="ocLactanciaMaterna"
                                v-model="formDataCopy.lanctanciaMaterna">
                        </div>
                        <div class="col-12">
                            <label for="ocUsoHormonas">Uso de hormonas</label>
                            <textarea class="form-control form-control-lg" type="text" id="ocUsoHormonas"
                                v-model="formDataCopy.usoHormonas"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#ocNotas" aria-expanded="true"
                        aria-controls="ocNotas">
                        <i class="la la-angle-right"></i>
                        Notas
                    </a>
                </div>
                <div id="ocNotas" class="atbd-collapse-item__body collapse py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12">
                            <textarea class="form-control form-control-lg" type="text" rows="4" id="ocNotas"
                                v-model="formDataCopy.notas"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./OncologiaComponent.ts"></script>
