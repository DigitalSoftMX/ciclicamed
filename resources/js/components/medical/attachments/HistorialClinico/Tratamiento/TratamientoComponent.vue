<template>
    <div class="card-body row p-0">
        <div class="col-12">
            <div class="col-12 mb-25">
                <label for="tcPadecimientoActual">Padecimiento actual</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcPadecimientoActual" v-model="formData.padecimientoActual"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Exploración
                    física</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcExploracionFisica" v-model="formData.exploracionFisica"
                ></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Gabinete y
                    laboratoria</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcPadecimientoActual" v-model="formData.gabineteLaboratoria"
                    ></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Impresión
                    diagnostica</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcImpresionDiagnostica" v-model="formData.impresionDiagnostica"
                ></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Tratamiento</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcTratamiento" v-model="formData.tratamiento"
                ></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Plan
                    médico</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcPlanMedico" v-model="formData.planMedico"></textarea>
            </div>
        </div>

        <div class="col-12">
            <h4 class="col-md-12 m-0 mt-3 color-text-1 mb-25 text-center">Pronóstico</h4>
            <div class="d-flex justify-content-between">
                <div class="col-6 mb-25">
                    <label for="tcVida">Para la
                        vida</label>
                    <select class="form-control form-control-lg" :disabled="disabled" id="tcVida" v-model="formData.pronostico.vida">
                        <option value="Bueno">Bueno</option>
                        <option value="Reservado">Reservado</option>
                        <option value="Malo">Malo</option>
                    </select>
                </div>
                <div class="col-6 mb-25">
                    <label for="tcFuncion">Para la función</label>
                    <select class="form-control form-control-lg" :disabled="disabled" id="tcFuncion" v-model="formData.pronostico.funcion">
                        <option value="Bueno">Bueno</option>
                        <option value="Reservado">Reservado</option>
                        <option value="Malo">Malo</option>
                    </select>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" src="./TratamientoComponent.ts"></script>
