<template>
    <div class="card">
        <div class="card-header">
            <h6 class="mb-25 mb-md-0">Custionario de Mastografía</h6>
        </div>
        <div class="card-body row mx-0 atbd-collapse atbd-collapse-custom">
            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecCervix" aria-expanded="true"
                        aria-controls="cecCervix">
                        <i class="la la-angle-right"></i>
                        Identificación
                    </a>
                </div>
                <div id="cecCervix" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 mb-25">
                        <label for="cecForma">Nombre</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="cecForma">Edad</label>
                        <input class="form-control form-control-lg" type="number" :disabled="disabled" id="cecForma">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="cecForma">Fecha de nacimiento</label>
                        <input class="form-control form-control-lg" type="date" :disabled="disabled" id="cecForma">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="cecForma">Sexo</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="cecForma">Estado Civil</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="cecForma">Teléfono</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                    </div>
                    <div class="col-12 col-md-4 mb-25">
                        <label for="cecForma">Correo</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                    </div>
                    <div class="col-12">
                        <label for="cecForma">Domicilio</label>
                        <textarea class="form-control form-control-lg" rows="2" :disabled="disabled"
                            id="cecForma"></textarea>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecCervix" aria-expanded="true"
                        aria-controls="cecCervix">
                        <i class="la la-angle-right"></i>
                        Antecedentes familiares
                    </a>
                </div>
                <div id="cecCervix" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Usted o algún familiar tiene antecedentes de cáncer de mama?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <label for="ccLeucorreaDescription">¿A qué edad?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Usted o algún familiar ha padecido algún tipo de cáncer?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <label for="ccLeucorreaDescription">¿De qué tipo?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecCervix" aria-expanded="true"
                        aria-controls="cecCervix">
                        <i class="la la-angle-right"></i>
                        Antecedentes personales
                    </a>
                </div>
                <div id="cecCervix" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Ha notado algún cambio en sus mamas?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <label for="ccLeucorreaDescription">¿De qué tipo?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">Señale en la imagen en que seno y área tiene la molestia</h6>
                            <div class="row mx-0">
                                <button class="btn btn-icon btn-circle btn-outline-primary rounded-button"
                                    @click="undoCanvasData">
                                    <img :src="asset('/svg/undo.svg')" alt="Undo">
                                </button>
                                <button class="btn btn-icon btn-circle btn-outline-primary rounded-button"
                                    @click="redoCanvasData">
                                    <img :src="asset('/svg/redo.svg')" alt="Redo">
                                </button>
                                <button class="btn btn-icon btn-circle btn-outline-primary rounded-button"
                                    @click="deleteCanvasData">
                                    <img :src="asset('/svg/delete.svg')" alt="Undo">
                                </button>
                            </div>
                        </div>
                        <div class="col-12 row mx-0 card-body border border-top-0">
                            <div class="col-12 justify-content-center mb-25 bg-normal">
                                <Editor :canvasWidth="500" :canvasHeight="397" ref="editor" />
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="csocAlteracionLibido">
                                    <label class="custom-control-label" for="csocAlteracionLibido">Dolor</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="csocAlteracionLibido">
                                    <label class="custom-control-label" for="csocAlteracionLibido">Masa
                                        palpable</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="csocAlteracionLibido">
                                    <label class="custom-control-label" for="csocAlteracionLibido">Aumento de
                                        volumen</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="csocAlteracionLibido">
                                    <label class="custom-control-label" for="csocAlteracionLibido">Secreción por el
                                        pezón</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="csocAlteracionLibido">
                                    <label class="custom-control-label" for="csocAlteracionLibido">Inversión del
                                        pezón</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                        id="csocAlteracionLibido">
                                    <label class="custom-control-label" for="csocAlteracionLibido">Otros</label>
                                </div>
                            </div>
                            <div class="col-12 p-0">
                                <label for="cecForma">¿Desde cuando?</label>
                                <textarea class="form-control form-control-lg" rows="2" :disabled="disabled"
                                    id="cecForma"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 mb-25 row mx-0">
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cecProliferativo">Seña particular</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="cecProliferativo">
                                <option value="Temprano">No</option>
                                <option value="Temprano">Lunar</option>
                                <option value="Tardio">Cicatrices</option>
                                <option value="Tardio">Verrugas</option>
                                <option value="Tardio">Otros</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cecForma">Edad primera menstruación</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cecForma">Edad inicio de vida sexual</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cecForma">Número de embarazos</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cecForma">Número de partos</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cecForma">Número de cesáreas</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cecForma">Número de abortos</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cecForma">Edad de la menopausia</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cecForma">Última fecha de menstruación</label>
                            <input class="form-control form-control-lg" type="date" :disabled="disabled" id="cecForma">
                        </div>
                    </div>

                    <div class="col-12 mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">Método anticonceptivo</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal row mx-0">
                            <label for="cecForma">¿De qué tipo?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">Hormonal</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal row mx-0">
                            <label for="cecForma">¿Cuánto tiempo?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecCervix" aria-expanded="true"
                        aria-controls="cecCervix">
                        <i class="la la-angle-right"></i>
                        Antecedentes quirúrgicos
                    </a>
                </div>
                <div id="cecCervix" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">Biopsia de mama</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal row mx-0">
                            <label for="cecProliferativo">Lado</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="cecProliferativo">
                                <option value="Temprano">Derecho</option>
                                <option value="Tardio">Izquierdo</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le han realizado mastectomia?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal row mx-0">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cecProliferativo">Lado</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="cecProliferativo">
                                    <option value="Temprano">Derecho</option>
                                    <option value="Tardio">Izquierdo</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ccLeucorreaDescription">Fecha</label>
                                <input class="form-control form-control-lg" type="date" :disabled="disabled"
                                    id="cecForma">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le han quitado o biosiado ganglios en axilas?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal row mx-0">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cecProliferativo">Lado</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="cecProliferativo">
                                    <option value="Temprano">Derecho</option>
                                    <option value="Tardio">Izquierdo</option>
                                    <option value="Tardio">Ambas</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ccLeucorreaDescription">Fecha</label>
                                <input class="form-control form-control-lg" type="date" :disabled="disabled"
                                    id="cecForma">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le colocado implantes mamarios?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal row mx-0">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cecProliferativo">Lado</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="cecProliferativo">
                                    <option value="Temprano">Derecho</option>
                                    <option value="Tardio">Izquierdo</option>
                                    <option value="Tardio">Ambas</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ccLeucorreaDescription">Fecha</label>
                                <input class="form-control form-control-lg" type="date" :disabled="disabled"
                                    id="cecForma">
                            </div>

                            <div class="col-12 card card-default card-md bg-white p-0">
                                <div class="card-header">
                                    <h6 class="mb-25 mb-md-0">¿Ha tenido recambio de implantes?</h6>
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                            id="ccLeucorrea">
                                        <label class="custom-control-label" for="ccLeucorrea"></label>
                                    </div>
                                </div>
                                <div class="card-body bg-white">
                                    <label for="ccLeucorreaDescription">Fecha</label>
                                    <input class="form-control form-control-lg" type="date" :disabled="disabled"
                                        id="cecForma">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le realizado reducción mamaria?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal row mx-0">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cecProliferativo">Lado</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="cecProliferativo">
                                    <option value="Temprano">Derecho</option>
                                    <option value="Tardio">Izquierdo</option>
                                    <option value="Tardio">Ambas</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="ccLeucorreaDescription">Fecha</label>
                                <input class="form-control form-control-lg" type="date" :disabled="disabled"
                                    id="cecForma">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le han hecho radioterapia en su seno?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card card-default card-md bg-white mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le han realizado mastografía o ultrasonido?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body bg-normal">
                            <label for="ccLeucorreaDescription">Fecha</label>
                            <input class="form-control form-control-lg" type="date" :disabled="disabled" id="cecForma">
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="cecForma">¿Qué le diagnosticaron?</label>
                        <textarea class="form-control form-control-lg" rows="2" :disabled="disabled"
                            id="cecForma"></textarea>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./CuestionarioMastografiaComponent.ts"></script>

<style scoped>
    @import './CuestionarioMastografiaComponent.scss';

</style>
