<template>
    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#mfcEnfermera"
                    aria-expanded="true" aria-controls="mfcEnfermera">
                    <i class="la la-angle-right"></i>
                    Llenado por enfermera
                </a>
            </div>
            <div id="mfcEnfermera" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 row mb-25 mx-0">
                        <div class="col-12 col-md-6 p-0">
                            <div class="col-12">
                                <label for="">Peso</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-0">
                            <div class="col-12">
                                <label for="">Talla</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row mb-25 mx-0">
                        <div class="col-12 mb-15 text-center">
                            <label>Brazo derecho</label>
                        </div>
                        <div class="col-12 col-md-6 mb-25 p-0">
                            <div class="col-12">
                                <label for="">Sistole</label>
                            </div>
                            <div class="col-12 row mx-0 p-0">
                                <div class="col-12 mb-15">
                                    <input class="form-control form-control-lg" type="text" placeholder="">
                                </div>
                                <div class="col-12">
                                    <input class="form-control form-control-lg" type="text" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-0">
                            <div class="col-12">
                                <label for="">Diastole</label>
                            </div>
                            <div class="col-12 row mx-0 p-0">
                                <div class="col-12 mb-15">
                                    <input class="form-control form-control-lg" type="text" placeholder="">
                                </div>
                                <div class="col-12">
                                    <input class="form-control form-control-lg" type="text" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row mx-0">
                        <div class="col-12 mb-15 text-center">
                            <label>Brazo izquierdo</label>
                        </div>
                        <div class="col-12 col-md-6 mb-25 p-0">
                            <div class="col-12">
                                <label for="">Sistole</label>
                            </div>
                            <div class="col-12 row mx-0 p-0">
                                <div class="col-12 mb-15">
                                    <input class="form-control form-control-lg" type="text" placeholder="">
                                </div>
                                <div class="col-12">
                                    <input class="form-control form-control-lg" type="text" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-0">
                            <div class="col-12">
                                <label for="">Diastole</label>
                            </div>
                            <div class="col-12 row mx-0 p-0">
                                <div class="col-12 mb-15">
                                    <input class="form-control form-control-lg" type="text" placeholder="">
                                </div>
                                <div class="col-12">
                                    <input class="form-control form-control-lg" type="text" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-12 mb-25 row justify-content-between p-0 w-100">
            <div class="col-12 col-md-4">
                <label for="">Número de fetos</label>
                <input class="form-control form-control-lg" type="text" placeholder="#">
            </div>
            <div class="col-12 col-md-8">
                <label for="">Múltiple corionicidad</label>
                <input class="form-control form-control-lg" type="text" placeholder="">
            </div>
        </div>

        <div class="col-12 mb-25 atbd-collapse atbd-collapse-custom p-0">
            <calculo-riesgo-feto-component id="crfcFeto1" title="Feto 1"></calculo-riesgo-feto-component>
            <calculo-riesgo-feto-component id="crfcFeto2" title="Feto 2"></calculo-riesgo-feto-component>
            <calculo-riesgo-feto-component id="crfcFeto3" title="Feto 3"></calculo-riesgo-feto-component>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#mfcDoppler"
                    aria-expanded="true" aria-controls="mfcDoppler">
                    <i class="la la-angle-right"></i>
                    Doppler de arterias uterinas
                </a>
            </div>
            <div id="mfcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 justify-content-between align-items-center mb-25">
                        <div class="col-12">
                            <label for="">IP arteria uterina derecha</label>
                        </div>
                        <div class="col-12 row align-items-center justify-content-between">
                            <div class="col-md-8">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-12 col-md-4 tbd-switch-wrap">
                                <div class="custom-control custom-switch switch-primary switch-lg ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Notch</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 justify-content-between align-items-center mb-25">
                        <div class="col-12">
                            <label for="">IP arteria uterina izquierda</label>
                        </div>
                        <div class="col-12 row align-items-center justify-content-between">
                            <div class="col-md-8">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-12 col-md-4 tbd-switch-wrap">
                                <div class="custom-control custom-switch switch-primary switch-lg ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Notch</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 justify-content-between align-items-center mb-25">
                        <div class="col-12">
                            <label for="">IP medio de arterias
                                uterinas</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 p-0">
            <label for="">Longitud cervical</label>
            <div class="input-group col-12 p-0">
                <input class="form-control form-control-lg" type="number" placeholder="">
                <div class="input-group-append">
                    <span class="input-group-text" id="">mm</span>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#mfcMarcadoresSericos"
                    aria-expanded="true" aria-controls="mfcMarcadoresSericos">
                    <i class="la la-angle-right"></i>
                    Marcadores séricos
                </a>
            </div>
            <div id="mfcMarcadoresSericos" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">Fecha de la toma</label>
                            <input class="form-control form-control-lg" type="date" placeholder="">
                        </div>
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">Fecha de procesamiento</label>
                            <input class="form-control form-control-lg" type="date" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">B-HGC</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">MoM</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">PAPP-A</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">MoM</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">PIGF</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="">MoM</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#mfcCalculoRiesgo"
                    aria-expanded="true" aria-controls="mfcCalculoRiesgo">
                    <i class="la la-angle-right"></i>
                    Cálculo de riesgo
                </a>
            </div>
            <div id="mfcCalculoRiesgo" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-15">
                            <label for="">Para preclamsia antes de 34 semanas</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6 mb-15">
                            <label for="">Para restricción de crecimiento antes de 37 semanas</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="">Para parto pretérmino antes de 34 semanas</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#mfcTabaquismo"
                    aria-expanded="true" aria-controls="mfcTabaquismo">
                    <i class="la la-angle-right"></i>
                    Tabaquismo
                </a>
            </div>
            <div id="mfcTabaquismo" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-3 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Fuma?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-15">
                            <label for="">¿Cuantos al día?</label>
                            <input class="form-control form-control-lg" type="number" placeholder="">
                        </div>
                        <div class="col-12 col-md-5 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Fuma durante el embarazo?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#mfcAntecedentesPatologicos"
                    aria-expanded="true" aria-controls="mfcAntecedentesPatologicos">
                    <i class="la la-angle-right"></i>
                    Antecedentes Patológicos
                </a>
            </div>
            <div id="mfcAntecedentesPatologicos" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-15 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Padece diabetes mellitus
                                    dependiente de insulina?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-15 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Padece hipertensión
                                    crónica?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-15 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Padece lupus eritematoso
                                    sistemémico?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-15 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Padece síndrome de anticuerpos
                                    anti-fosfolípidos?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-15 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Padeció preeclampsia en los
                                    embarazos previos?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-15 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Su madre padeció preeclampsia en
                                    algún embarazo?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-15 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Tiene algún otro antecedente
                                    personal o familiar que considere importante?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-15 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Se logró el embarazo con algún
                                    tratamiento de reproducción asistida?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-15 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Inductores de ovulación?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#mfcInVitro"
                    aria-expanded="true" aria-controls="mfcInVitro">
                    <i class="la la-angle-right"></i>
                    En caso de fertilización In Vitro indique lo siguiente
                </a>
            </div>
            <div id="mfcInVitro" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-15">
                            <label for="">Fecha de extracción de ovocitor</label>
                            <input class="form-control form-control-lg" type="date" placeholder="">
                        </div>
                        <div class="col-12 col-md-6 mb-15">
                            <label for="">Fecha de congelación</label>
                            <input class="form-control form-control-lg" type="date" placeholder="">
                        </div>
                    </div>

                    <div class="col-12 mx-0 p-0">
                        <div class="col-12 mb-15 text-center">
                            <label>En caso de donate de ovocitos, indique su fecha de
                                nacimiento o
                                edad
                                aproximada</label>
                        </div>
                        <div class="col-12 row mx-0">
                            <div class="col-12 col-md-6 mb-15">
                                <label for="">Fecha de nacimiento</label>
                                <input class="form-control form-control-lg" type="date" placeholder="">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Edad aproximada</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./MaternoFetalComponent.ts"></script>
