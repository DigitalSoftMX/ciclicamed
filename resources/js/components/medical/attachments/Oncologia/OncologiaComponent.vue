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
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ocHistoriaFamiliar"
                                v-model="formData.historiaFamiliar"></textarea>
                        </div>
                        <div class="col-12 mb-25">
                            <label for="ocMenarca">Menarca</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ocMenarca"
                                v-model="formData.menarca"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ocEdadPrimerEmbarazo">Edad del primer embarazo</label>
                            <input class="form-control form-control-lg" type="number" :disabled="disabled" id="ocEdadPrimerEmbarazo"
                                v-model="formData.edadPrimerEmbarazo">
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="ocLactanciaMaterna">Lactancia materna (tiempo)</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ocLactanciaMaterna"
                                v-model="formData.lanctanciaMaterna">
                        </div>
                        <div class="col-12">
                            <label for="ocUsoHormonas">Uso de hormonas</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ocUsoHormonas"
                                v-model="formData.usoHormonas"></textarea>
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
                            <textarea class="form-control form-control-lg" type="text" rows="4" :disabled="disabled" id="ocNotas"
                                v-model="formData.notas"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./OncologiaComponent.ts"></script>
