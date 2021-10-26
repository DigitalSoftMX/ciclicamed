<template>
    <div class="card">
        <div class="card-header">
            <!-- <h6>Materno fetal</h6> -->
            <div class="tab-wrapper">
                <div class="atbd-tab tab-horizontal">
                    <ul class="nav nav-tabs vertical-tabs justify-content-center px-2" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active mx-3" id="mfcAnexo39" data-toggle="tab" href="#mfcAnexo39Panel" role="tab"
                                aria-controls="mfcAnexo39Panel" aria-selected="false">Cuestionario para cálculo del riesgo de tamizaje del primer trimestre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" id="mfcTabMaternoFetal" data-toggle="tab" href="#mfcTabMaternoFetalPanel" role="tab"
                                aria-controls="mfcTabMaternoFetalPanel" aria-selected="true">Materno fetal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="tab-wrapper">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="mfcAnexo39Panel" role="tabpanel" aria-labelledby="mfcAnexo39">
                    <anexo-39-component v-model="formData.anexo39" :disabled="disabled"></anexo-39-component>
                </div>
                <div class="tab-pane fade" id="mfcTabMaternoFetalPanel" role="tabpanel" aria-labelledby="mfcTabMaternoFetal">
                    <div class="atbd-tab tab-horizontal">
                        <ul class="nav nav-tabs vertical-tabs justify-content-center px-2" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active mx-2" id="mfcTab2" data-toggle="tab" href="#mfcTab2Panel" role="tab"
                                    aria-controls="mfcTab2Panel" aria-selected="true">Resultado del cálculo de riesgo de primer
                                    trimestre</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-3" id="mfcTab1" data-toggle="tab" href="#mfcTab1Panel" role="tab"
                                    aria-controls="mfcTab1Panel" aria-selected="false">Cuestionario para el cálculo de tamizaje
                                    del primer trimestre</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="mfcTab2Panel" role="tabpanel" aria-labelledby="mfcTab2">
                                <resultado-calculo-riesgo-component v-model="formData.resultados" :disabled="disabled"></resultado-calculo-riesgo-component>
                            </div>
                            <div class="tab-pane fade" id="mfcTab1Panel" role="tabpanel" aria-labelledby="mfcTab1">
                                <cuestionario-calculo-riesgo-component v-model="formData.cuestionario" :disabled="disabled"></cuestionario-calculo-riesgo-component>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./MaternoFetalComponent.ts"></script>
