<template>
    <div class="col-12 row mx-0 card-body atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 row mx-0 p-0">
            <div class="col-12 col-md-4">
                <label for="rcrcNumeroFetos">Número de fetos</label>
                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="rcrcNumeroFetos"
                    v-model="formData.numeroFetos">
            </div>
            <div class="col-12 col-md-8">
                <label for="rcrcMultipleCorionicidad">Múltiple corionicidad</label>
                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcMultipleCorionicidad"
                    v-model="formData.multipleCorionicidad">
            </div>
        </div>

        <div class="col-12 mb-25 atbd-collapse atbd-collapse-custom p-0">
            <div class="atbd-collapse-item rounded border">
                <div class="atbd-collapse-item__header active p-0">
                    <a class="item-link" data-toggle="collapse" data-target="#rcrcFeto1" aria-expanded="true"
                        aria-controls="rcrcFeto1">
                        <i class="la la-angle-right"></i>
                        Feto 1
                    </a>
                </div>

                <div id="rcrcFeto1" class="collapse card card-default card-md p-4">
                    <div class="row mx-0">

                        <div class="col-12 mb-155 row mx-0 p-0">
                            <div class="input-group-lg col-12 col-md-4 mb-15">
                                <label for="">Localización</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto1Localizacion"
                                    v-model="formData.feto1.localizacion">
                            </div>
                            <div class="input-group-lg col-12 col-md-4 mb-15">
                                <label for="">LCC</label>
                                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="rcrcFeto1LCC"
                                    v-model="formData.feto1.lcc" placeholder="mm">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Semanas</label>
                                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="rcrcFeto1Semanas"
                                    v-model="formData.feto1.semanas">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">FCF: latidos por minuto</label>
                                <input class="form-control form-control-lg" type="number"
                                    placeholder="latidos por minuto" :disabled="disabled" id="rcrcFeto1FCF" v-model="formData.feto1.fcf">
                            </div>
                            <div class="col-md-8 mb-15">
                                <label for="">Translucencia nucal</label>
                                <div class="row">
                                    <div class="col-md-4 col-sm-12">
                                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto1TranslucenciaNucal"
                                            v-model="formData.feto1.translucenciaNucal1" placeholder="mm">
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto1TranslucenciaNucal"
                                            v-model="formData.feto1.translucenciaNucal2" placeholder="mm">
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto1TranslucenciaNucal"
                                            v-model="formData.feto1.translucenciaNucal3" placeholder="mm">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15">                               
                                <label for="rcrcFeto1IPDuctoVenoso">IP ducto venoso</label>
                                <input type="text" class="form-control form-control-lg" :disabled="disabled" id="rcrcFeto1IPDuctoVenoso"
                                    v-model="formData.feto1.ipDuctoVenoso">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Onda "A"</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto1OndaA"
                                    v-model="formData.feto1.ondaA">
                            </div>
                            <div class="col-12 col-md-4 mb-15 align-self-center">
                                <div class="custom-control custom-switch switch-primary">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="rcrcFeto1HuesoNasal"
                                        v-model="formData.feto1.huesoNasal"
                                        :checked="formData.feto1.huesoNasal">
                                    <label class="custom-control-label" for="rcrcFeto1HuesoNasal">Hueso nasal</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15 align-self-center">
                                <div class="custom-control custom-switch switch-primary">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="rcrcFeto1Regurgitacion"
                                        v-model="formData.feto1.regurgitacionTricuspidea"
                                        :checked="formData.feto1.regurgitacionTricuspidea">
                                    <label class="custom-control-label" for="rcrcFeto1Regurgitacion">Regurgitacion
                                        Tricuspídea</label>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Defectos
                                    mayores</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto1DefectosMayores"
                                    v-model="formData.feto1.defectosMayores">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Placenta</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto1Placenta"
                                    v-model="formData.feto1.placenta">
                            </div>
                        </div>

                        <div class="row col-12 mx-0 p-0">
                            <h6 class="col-md-12 color-text-1 text-center">
                                Cálculo de riesgo de Feto
                            </h6>
                            <div class="col-12 mb-15">
                                <h6 class="mb-15">Trisotomía 21</h6>
                                <div class="form-row col-12">
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto1Tri21Edad">Riesgo basal (EDAD)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">1:</span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto1Tri21Edad"
                                                v-model="formData.feto1.calculoFactorRiesgo.trisonomia21.riesgoBasal">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto1Tri21USG">Riesgo ajustado (USG)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto1Tri21USG"
                                                v-model="formData.feto1.calculoFactorRiesgo.trisonomia21.usg">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto1Tri21DUOTEST">Riesgo ajustado (DUO-TEST)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto1Tri21DUOTEST"
                                                v-model="formData.feto1.calculoFactorRiesgo.trisonomia21.duoTest">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-15">
                                <h6 class="mb-15">Trisotomía 18</h6>
                                <div class="form-row col-12">
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto1Tri18Edad">Riesgo basal (EDAD)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">1:</span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto1Tri18Edad"
                                                v-model="formData.feto1.calculoFactorRiesgo.trisonomia18.riesgoBasal">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto1Tri18USG">Riesgo ajustado (USG)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto1Tri18USG"
                                                v-model="formData.feto1.calculoFactorRiesgo.trisonomia18.usg">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto1Tri18DUOTEST">Riesgo ajustado (DUO-TEST)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto1Tri18DUOTEST"
                                                v-model="formData.feto1.calculoFactorRiesgo.trisonomia18.duoTest">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-15">
                                <h6 class="mb-15">Trisotomía 13</h6>
                                <div class="form-row col-12">
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto1Tri13Edad">Riesgo basal (EDAD)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">1:</span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto1Tri13Edad"
                                                v-model="formData.feto1.calculoFactorRiesgo.trisonomia13.riesgoBasal">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto1Tri13USG">Riesgo ajustado (USG)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto1Tri13USG"
                                                v-model="formData.feto1.calculoFactorRiesgo.trisonomia13.usg">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto1Tri13DUOTEST">Riesgo ajustado (DUO-TEST)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto1Tri13DUOTEST"
                                                v-model="formData.feto1.calculoFactorRiesgo.trisonomia13.duoTest">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse-item rounded border">
                <div class="atbd-collapse-item__header active p-0">
                    <a class="item-link" data-toggle="collapse" data-target="#rcrcFeto2" aria-expanded="true"
                        aria-controls="rcrcFeto2">
                        <i class="la la-angle-right"></i>
                        Feto 2
                    </a>
                </div>

                <div id="rcrcFeto2" class="collapse card card-default card-md p-4">
                    <div class="row mx-0">

                        <div class="col-12 mb-155 row mx-0 p-0">
                            <div class="input-group-lg col-12 col-md-4 mb-15">
                                <label for="">Localización</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto2Localizacion"
                                    v-model="formData.feto2.localizacion">
                            </div>
                            <div class="input-group-lg col-12 col-md-4 mb-15">
                                <label for="">LCC</label>
                                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="rcrcFeto2LCC"
                                    v-model="formData.feto2.lcc" placeholder="mm">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Semanas</label>
                                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="rcrcFeto2Semanas"
                                    v-model="formData.feto2.semanas">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">FCF: latidos por minuto</label>
                                <input class="form-control form-control-lg" type="number"
                                    placeholder="latidos por minuto" :disabled="disabled" id="rcrcFeto2FCF" v-model="formData.feto2.fcf">
                            </div>
                            <div class="col-md-8 mb-15">
                                <label for="">Translucencia nucal</label>
                                <div class="row">
                                    <div class="col-md-4 col-sm-12">
                                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto2TranslucenciaNucal"
                                            v-model="formData.feto2.translucenciaNucal1" placeholder="mm">
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto2TranslucenciaNucal"
                                            v-model="formData.feto2.translucenciaNucal2" placeholder="mm">
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto2TranslucenciaNucal"
                                            v-model="formData.feto2.translucenciaNucal3" placeholder="mm">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15 align-self-center">
                                <label for="rcrcFeto2IPDuctoVenoso">IP ducto venoso</label>
                                <input type="text" class="form-control form-control-lg" :disabled="disabled" id="rcrcFeto2IPDuctoVenoso"
                                    v-model="formData.feto2.ipDuctoVenoso">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Onda "A"</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto2OndaA"
                                    v-model="formData.feto2.ondaA">
                            </div>
                            <div class="col-12 col-md-4 mb-15 align-self-center">
                                <div class="custom-control custom-switch switch-primary">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="rcrcFeto2HuesoNasal"
                                        v-model="formData.feto2.huesoNasal"
                                        :checked="formData.feto2.huesoNasal">
                                    <label class="custom-control-label" for="rcrcFeto2HuesoNasal">Hueso nasal</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15 align-self-center">
                                <div class="custom-control custom-switch switch-primary">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="rcrcFeto2Regurgitacion"
                                        v-model="formData.feto2.regurgitacionTricuspidea"
                                        :checked="formData.feto2.regurgitacionTricuspidea">
                                    <label class="custom-control-label" for="rcrcFeto2Regurgitacion">Regurgitacion
                                        Tricuspídea</label>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Defectos
                                    mayores</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto2DefectosMayores"
                                    v-model="formData.feto2.defectosMayores">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Placenta</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto2Placenta"
                                    v-model="formData.feto2.placenta">
                            </div>
                        </div>

                        <div class="row col-12 mx-0 p-0">
                            <h6 class="col-md-12 color-text-1 text-center">
                                Cálculo de riesgo de Feto
                            </h6>
                            <div class="col-12 mb-15">
                                <h6 class="mb-15">Trisotomía 21</h6>
                                <div class="form-row col-12">
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto2Tri21Edad">Riesgo basal (EDAD)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">1:</span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto2Tri21Edad"
                                                v-model="formData.feto2.calculoFactorRiesgo.trisonomia21.riesgoBasal">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto2Tri21USG">Riesgo ajustado (USG)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto2Tri21USG"
                                                v-model="formData.feto2.calculoFactorRiesgo.trisonomia21.usg">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto2Tri21DUOTEST">Riesgo ajustado (DUO-TEST)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto2Tri21DUOTEST"
                                                v-model="formData.feto2.calculoFactorRiesgo.trisonomia21.duoTest">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-15">
                                <h6 class="mb-15">Trisotomía 18</h6>
                                <div class="form-row col-12">
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto2Tri18Edad">Riesgo basal (EDAD)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">1:</span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto2Tri18Edad"
                                                v-model="formData.feto2.calculoFactorRiesgo.trisonomia18.riesgoBasal">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto2Tri18USG">Riesgo ajustado (USG)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto2Tri18USG"
                                                v-model="formData.feto2.calculoFactorRiesgo.trisonomia18.usg">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto2Tri18DUOTEST">Riesgo ajustado (DUO-TEST)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto2Tri18DUOTEST"
                                                v-model="formData.feto2.calculoFactorRiesgo.trisonomia18.duoTest">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-15">
                                <h6 class="mb-15">Trisotomía 13</h6>
                                <div class="form-row col-12">
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto2Tri13Edad">Riesgo basal (EDAD)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">1:</span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto2Tri13Edad"
                                                v-model="formData.feto2.calculoFactorRiesgo.trisonomia13.riesgoBasal">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto2Tri13USG">Riesgo ajustado (USG)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto2Tri13USG"
                                                v-model="formData.feto2.calculoFactorRiesgo.trisonomia13.usg">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto2Tri13DUOTEST">Riesgo ajustado (DUO-TEST)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto2Tri13DUOTEST"
                                                v-model="formData.feto2.calculoFactorRiesgo.trisonomia13.duoTest">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="atbd-collapse-item rounded border">
                <div class="atbd-collapse-item__header active p-0">
                    <a class="item-link" data-toggle="collapse" data-target="#rcrcFeto3" aria-expanded="true"
                        aria-controls="rcrcFeto3">
                        <i class="la la-angle-right"></i>
                        Feto 3
                    </a>
                </div>

                <div id="rcrcFeto3" class="collapse card card-default card-md p-4">
                    <div class="row mx-0">

                        <div class="col-12 mb-155 row mx-0 p-0">
                            <div class="input-group-lg col-12 col-md-4 mb-15">
                                <label for="">Localización</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto3Localizacion"
                                    v-model="formData.feto3.localizacion">
                            </div>
                            <div class="input-group-lg col-12 col-md-4 mb-15">
                                <label for="">LCC</label>
                                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="rcrcFeto3LCC"
                                    v-model="formData.feto3.lcc" placeholder="mm">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Semanas</label>
                                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="rcrcFeto3Semanas"
                                    v-model="formData.feto3.semanas">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">FCF: latidos por minuto</label>
                                <input class="form-control form-control-lg" type="number"
                                    placeholder="latidos por minuto" :disabled="disabled" id="rcrcFeto3FCF" v-model="formData.feto3.fcf">
                            </div>
                            <div class="col-md-8 mb-15">
                                <label for="">Translucencia nucal</label>
                                <div class="row">
                                    <div class="col-md-4 col-sm-12">
                                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto3TranslucenciaNucal"
                                            v-model="formData.feto3.translucenciaNucal1" placeholder="mm">
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto3TranslucenciaNucal"
                                            v-model="formData.feto3.translucenciaNucal2" placeholder="mm">
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto3TranslucenciaNucal"
                                            v-model="formData.feto3.translucenciaNucal3" placeholder="mm">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15 align-self-center">
                                <label for="rcrcFeto3IPDuctoVenoso">IP ducto venoso</label>
                                <input type="text" class="form-control form-control-lg" :disabled="disabled" id="rcrcFeto3IPDuctoVenoso"
                                    v-model="formData.feto3.ipDuctoVenoso">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Onda "A"</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto3OndaA"
                                    v-model="formData.feto3.ondaA">
                            </div>
                            <div class="col-12 col-md-4 mb-15 align-self-center">
                                <div class="custom-control custom-switch switch-primary">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="rcrcFeto3HuesoNasal"
                                        v-model="formData.feto3.huesoNasal"
                                        :checked="formData.feto3.huesoNasal">
                                    <label class="custom-control-label" for="rcrcFeto3HuesoNasal">Hueso nasal</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15 align-self-center">
                                <div class="custom-control custom-switch switch-primary">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="rcrcFeto3Regurgitacion"
                                        v-model="formData.feto3.regurgitacionTricuspidea"
                                        :checked="formData.feto3.regurgitacionTricuspidea">
                                    <label class="custom-control-label" for="rcrcFeto3Regurgitacion">Regurgitacion
                                        Tricuspídea</label>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Defectos
                                    mayores</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto3DefectosMayores"
                                    v-model="formData.feto3.defectosMayores">
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Placenta</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcFeto3Placenta"
                                    v-model="formData.feto3.placenta">
                            </div>
                        </div>

                        <div class="row col-12 mx-0 p-0">
                            <h6 class="col-md-12 color-text-1 text-center">
                                Cálculo de riesgo de Feto
                            </h6>
                            <div class="col-12 mb-15">
                                <h6 class="mb-15">Trisotomía 21</h6>
                                <div class="form-row col-12">
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto3Tri21Edad">Riesgo basal (EDAD)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">1:</span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto3Tri21Edad"
                                                v-model="formData.feto3.calculoFactorRiesgo.trisonomia21.riesgoBasal">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto3Tri21USG">Riesgo ajustado (USG)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto3Tri21USG"
                                                v-model="formData.feto3.calculoFactorRiesgo.trisonomia21.usg">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto3Tri21DUOTEST">Riesgo ajustado (DUO-TEST)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto3Tri21DUOTEST"
                                                v-model="formData.feto3.calculoFactorRiesgo.trisonomia21.duoTest">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-15">
                                <h6 class="mb-15">Trisotomía 18</h6>
                                <div class="form-row col-12">
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto3Tri18Edad">Riesgo basal (EDAD)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">1:</span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto3Tri18Edad"
                                                v-model="formData.feto3.calculoFactorRiesgo.trisonomia18.riesgoBasal">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto3Tri18USG">Riesgo ajustado (USG)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto3Tri18USG"
                                                v-model="formData.feto3.calculoFactorRiesgo.trisonomia18.usg">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto3Tri18DUOTEST">Riesgo ajustado (DUO-TEST)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto3Tri18DUOTEST"
                                                v-model="formData.feto3.calculoFactorRiesgo.trisonomia18.duoTest">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-15">
                                <h6 class="mb-15">Trisotomía 13</h6>
                                <div class="form-row col-12">
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto3Tri13Edad">Riesgo basal (EDAD)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">1:</span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto3Tri13Edad"
                                                v-model="formData.feto3.calculoFactorRiesgo.trisonomia13.riesgoBasal">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto3Tri13USG">Riesgo ajustado (USG)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto3Tri13USG"
                                                v-model="formData.feto3.calculoFactorRiesgo.trisonomia13.usg">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mb-15">
                                        <label for="rcrcFeto3Tri13DUOTEST">Riesgo ajustado (DUO-TEST)</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                1:
                                            </span>
                                            <input class="form-control form-control-lg" type="number"
                                                :disabled="disabled" id="rcrcFeto3Tri13DUOTEST"
                                                v-model="formData.feto3.calculoFactorRiesgo.trisonomia13.duoTest">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="col-12 mb-25 rounded mx-0 p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Doppler de arterias uterinas
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 justify-content-between align-items-center mb-25">
                        <div class="col-12">
                            <label for="rcrcIPArteriaDerecha">IP arteria uterina derecha</label>
                        </div>
                        <div class="col-12 row align-items-center justify-content-between">
                            <div class="col-md-8">
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcIPArteriaDerecha"
                                    v-model="formData.dopplerArteriasUterinas.ipArteriaDerecha.description">
                            </div>
                            <div class="col-12 col-md-4 tbd-switch-wrap">
                                <div class="custom-control custom-switch switch-primary switch-lg ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="rcrcIPArteriaDerechaNotch"
                                        v-model="formData.dopplerArteriasUterinas.ipArteriaIzquierda.notch">
                                    <label class="custom-control-label" for="rcrcIPArteriaDerechaNotch">Notch</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 justify-content-between align-items-center mb-25">
                        <div class="col-12">
                            <label for="rcrcIPArteriaIzquierda">IP arteria uterina izquierda</label>
                        </div>
                        <div class="col-12 row align-items-center justify-content-between">
                            <div class="col-md-8">
                                <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcIPArteriaIzquierda"
                                    v-model="formData.dopplerArteriasUterinas.ipArteriaIzquierda.description">
                            </div>
                            <div class="col-12 col-md-4 tbd-switch-wrap">
                                <div class="custom-control custom-switch switch-primary switch-lg ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="rcrcIPArteriaIzquierdaNotch"
                                        v-model="formData.dopplerArteriasUterinas.ipArteriaDerecha.notch">
                                    <label class="custom-control-label" for="rcrcIPArteriaIzquierdaNotch">Notch</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="col-12">
                            <label for="rcrcIPArteriaMedia">IP medio de arterias uterinas</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcIPArteriaMedia"
                                v-model="formData.dopplerArteriasUterinas.ipMedioArterias">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-4 mb-25 p-0">
            <label for="rcrcLongitudCervical">Longitud cervical</label>
            <div class="input-group col-12 p-0">
                <input class="form-control form-control-lg" type="number" :disabled="disabled" id="rcrcLongitudCervical"
                    v-model="formData.longitudCervical">
                <div class="input-group-append">
                    <span class="input-group-text" :disabled="disabled" id="">mm</span>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcMarcadoresSericos" aria-expanded="true"
                    aria-controls="rcrcMarcadoresSericos">
                    <i class="la la-angle-right"></i>
                    Marcadores séricos
                </a>
            </div>
            <div id="rcrcMarcadoresSericos" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="rcrcFechaToma">Fecha de la toma</label>
                            <input class="form-control form-control-lg" type="date" :disabled="disabled" id="rcrcFechaToma"
                                v-model="formData.marcadoresSericos.fechaToma">
                        </div>
                        <div class="col-12 col-md-6 mb-10">
                            <label for="rcrcFechaProcesamiento">Fecha de procesamiento</label>
                            <input class="form-control form-control-lg" type="date" :disabled="disabled" id="rcrcFechaProcesamiento"
                                v-model="formData.marcadoresSericos.fechaProcesamiento">
                        </div>
                    </div>
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="rcrcBHGC">B-HGC</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcBHGC"
                                v-model="formData.marcadoresSericos.bhgc.bhgc">
                        </div>
                        <div class="col-12 col-md-6 mb-10">
                            <label for="rcrcBHGCmom">MoM</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcBHGCmom"
                                v-model="formData.marcadoresSericos.bhgc.mom">
                        </div>
                    </div>
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">PAPP-A</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcPAPPA"
                                v-model="formData.marcadoresSericos.pappa.pappa">
                        </div>
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">MoM</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcPAPPAmom"
                                v-model="formData.marcadoresSericos.pappa.mom">
                        </div>
                    </div>
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">PIGF</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcPIGF"
                                v-model="formData.marcadoresSericos.pigf.pigf">
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="">MoM</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcPAPPAmom"
                                v-model="formData.marcadoresSericos.pigf.mom">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcCalculoRiesgo" aria-expanded="true"
                    aria-controls="rcrcCalculoRiesgo">
                    <i class="la la-angle-right"></i>
                    Cálculo de riesgo
                </a>
            </div>
            <div id="rcrcCalculoRiesgo" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-4 col-md-4 mb-15">
                        <label for="rcrcPreclamsiaAntes">Para preclamsia antes de 34 semanas</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcPreclamsiaAntes"
                            v-model="formData.calculoRiesgo.preclamsia">
                    </div>
                    <div class="col-4 col-md-4 mb-15">
                        <label for="rcrcRestriccionCrecimiento">Para restricción de crecimiento antes de 37 semanas</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcRestriccionCrecimiento"
                            v-model="formData.calculoRiesgo.restriccionCrecimiento">
                    </div>
                    <div class="col-4 col-md-4">
                        <label for="rcrcPartoPretermino">Para parto pretérmino antes de 34 semanas</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="rcrcPartoPretermino"
                            v-model="formData.calculoRiesgo.partoPretermino">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ResultadoCalculoRiesgoComponent.ts"></script>
