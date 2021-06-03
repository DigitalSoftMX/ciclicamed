<template>
    <div class="card-body row p-0">
        <div class="col-12">
            <div class="col-12 mb-25">
                <label for="tcPadecimientoActual">Padecimiento actual</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcPadecimientoActual" v-model="formDataCopy.padecimientoActual"></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Exploración
                    física</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcExploracionFisica" v-model="formDataCopy.exploracionFisica"
                ></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Gabinete y
                    laboratoria</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcPadecimientoActual" v-model="formDataCopy.padecimientoActual"
                    ></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Impresión
                    diagnostica</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcImpresionDiagnostica" v-model="formDataCopy.impresionDiagnostica"
                ></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Tratamiento</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcTratamiento" v-model="formDataCopy.tratamiento"
                ></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Plan
                    médico</label>
                <textarea class="form-control form-control-lg" rows="3" :disabled="disabled" id="tcPlanMedico" v-model="formDataCopy.planMedico"></textarea>
            </div>
        </div>

        <div class="col-12">
            <h4 class="col-md-12 m-0 mt-3 color-text-1 mb-25 text-center">Pronóstico</h4>
            <div class="d-flex justify-content-between">
                <div class="col-6 mb-25">
                    <label for="tcVida">Para la
                        vida</label>
                    <select class="form-control form-control-lg" :disabled="disabled" id="tcVida" v-model="formDataCopy.pronostico.vida">
                        <option value="Bueno">Bueno</option>
                        <option value="Reservado">Reservado</option>
                        <option value="Malo">Malo</option>
                    </select>
                </div>
                <div class="col-6 mb-25">
                    <label for="tcFuncion">Para la función</label>
                    <select class="form-control form-control-lg" :disabled="disabled" id="tcFuncion" v-model="formDataCopy.pronostico.funcion">
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
