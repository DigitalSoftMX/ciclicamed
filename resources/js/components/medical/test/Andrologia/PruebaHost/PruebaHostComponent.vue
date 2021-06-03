<template>
    <div class="card">
        <div class="card-header">
            <h3>Prueba de HOST</h3>
        </div>
        <div class="card-body row mx-0">

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#cecCervix" aria-expanded="true"
                            aria-controls="cecCervix">
                            <i class="la la-angle-right"></i>
                            Observaciones
                        </a>
                    </div>
                    <div id="cecCervix" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div class="col-12 card card-default card-md bg-white mb-25">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Fumador?
                                </h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ccLeucorrea">
                                    <label class="custom-control-label" for="ccLeucorrea"></label>
                                </div>
                            </div>
                            <div class="card-body bg-normal">
                                <label for="ccLeucorreaDescription">Frecuencia</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="cecForma">
                            </div>
                        </div>

                        <div class="col-12 card card-default card-md bg-white mb-25">
                            <div class="card-header">
                                <h6 class="mb-25 mb-md-0">¿Medicamentos?
                                </h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="ccLeucorrea">
                                    <label class="custom-control-label" for="ccLeucorrea"></label>
                                </div>
                            </div>
                            <div class="card-body bg-normal">
                                <label for="ccLeucorreaDescription">¿Cúales?</label>
                                <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                    id="cecForma">
                            </div>
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Días de abstinencia sexual</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Modo de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Hora de recolección</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Hora de procesado</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 card-body row mx-0 atbd-collapse atbd-collapse-custom p-0">
                <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#cecCervix" aria-expanded="true"
                            aria-controls="cecCervix">
                            <i class="la la-angle-right"></i>
                            Análisis microscópico
                        </a>
                    </div>
                    <div id="cecCervix" class="atbd-collapse-item__body collapse card-body row mx-0">

                        <div
                            class="col-12 col-md-4 custom-control custom-switch switch-primary switch-md align-self-center justify-items-center justify-content-center">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                id="csocAlteracionLibido">
                            <label class="custom-control-label" for="csocAlteracionLibido">Coágulo inicial</label>
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Licuefacción</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Viscosidad</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Aspecto</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">Volumen</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">PH</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                        <div class="col-12 col-md-4 mb-25 ">
                            <label for="cscFUM">HOST</label>
                            <input class="form-control form-control-lg" type="text" id="cscFUM" :disabled="disabled">
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-12 p-0">
                <label for="cscFUM">Observaciones adicionales</label>
                <textarea class="form-control form-control-lg" rows="5" id="cscFUM" :disabled="disabled"></textarea>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./PruebaHostComponent.ts"></script>
