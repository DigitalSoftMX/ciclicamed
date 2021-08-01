<template>
    <div class="card">
        <div class="card-header">
            <h6>Materno fetal</h6>
        </div>
        <div class="tab-wrapper">
            <div class="atbd-tab tab-horizontal">
                <ul class="nav nav-tabs vertical-tabs justify-content-center px-2" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="mfcTab1" data-toggle="tab" href="#mfcTab1Panel" role="tab"
                            aria-controls="mfcTab1Panel" aria-selected="true">Cuestionario para el cálculo de tamizaje
                            del primer trimestre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="mfcTab2" data-toggle="tab" href="#mfcTab2Panel" role="tab"
                            aria-controls="mfcTab2Panel" aria-selected="false">Resultado del cálculo de riesgo de primer
                            trimestre</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="mfcTab1Panel" role="tabpanel" aria-labelledby="mfcTab1">
                        <cuestionario-calculo-riesgo-component v-model="formData.cuestionario" :disabled="disabled"></cuestionario-calculo-riesgo-component>
                    </div>
                    <div class="tab-pane fade" id="mfcTab2Panel" role="tabpanel" aria-labelledby="mfcTab2">
                        <resultado-calculo-riesgo-component v-model="formData.resultados" :disabled="disabled"></resultado-calculo-riesgo-component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./MaternoFetalComponent.ts"></script>
