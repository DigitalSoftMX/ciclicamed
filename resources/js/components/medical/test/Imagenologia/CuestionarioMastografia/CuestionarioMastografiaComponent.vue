<template>
    <div class="card">
        <div class="card-header">
            <h6 class="mb-25 mb-md-0">Custionario de Mastografía</h6>
        </div>
        <div class="card-body row mx-0 atbd-collapse atbd-collapse-custom shadow-none">
            <div class="col-12 mb-25 card shadow-none card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cmcAntecedentesFamiliares" aria-expanded="true"
                        aria-controls="cmcAntecedentesFamiliares">
                        <i class="la la-angle-right"></i>
                        Antecedentes familiares
                    </a>
                </div>
                <div id="cmcAntecedentesFamiliares" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Usted o algún familiar tiene antecedentes de cáncer de mama?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesFamiliares.antecedentesCancerMama.check" :check="formData.antecedentesFamiliares.antecedentesCancerMama.check"
                                    id="cmcCancerMamaCheck">
                                <label class="custom-control-label" for="cmcCancerMamaCheck"></label>
                            </div>
                        </div>
                        <div class="card-body" v-if="formData.antecedentesFamiliares.antecedentesCancerMama.check">
                            <label for="cmcCancerMamaDescription">¿A qué edad?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcCancerMamaDescription" v-model="formData.antecedentesFamiliares.antecedentesCancerMama.description">
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Usted o algún familiar ha padecido algún tipo de cáncer?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesFamiliares.familiarConCancer.check" :check="formData.antecedentesFamiliares.familiarConCancer.check"
                                    id="cmcCancerOtroCheck">
                                <label class="custom-control-label" for="cmcCancerOtroCheck"></label>
                            </div>
                        </div>
                        <div class="card-body" v-if="formData.antecedentesFamiliares.familiarConCancer.check">
                            <label for="cmcCancerOtroDescription">¿De qué tipo?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcCancerOtroDescription" v-model="formData.antecedentesFamiliares.familiarConCancer.description">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-25 card shadow-none card-md p-0 rounded border shadow-none">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cmcAntecedentesPersonales" aria-expanded="true"
                        aria-controls="cecCervix">
                        <i class="la la-angle-right"></i>
                        Antecedentes personales
                    </a>
                </div>
                <div id="cmcAntecedentesPersonales" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Ha notado algún cambio en sus mamas?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"  v-model="formData.antecedentesPersonales.cambioMamas.check" :check="formData.antecedentesPersonales.cambioMamas.check"
                                    id="cmcCambioMama">
                                <label class="custom-control-label" for="cmcCambioMama"></label>
                            </div>
                        </div>
                        <div class="card-body" v-if="formData.antecedentesPersonales.cambioMamas.check">
                            <label for="ccLeucorreaDescription">¿De qué tipo?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma" v-model="formData.antecedentesPersonales.cambioMamas.description">
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25 p-0">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">Señale en la imagen en que seno y área tiene la molestia</h6>
                            <div class="row mx-0">
                                <button class="btn btn-icon btn-circle btn-outline-primary rounded-button"
                                    @click="undoCanvasData">
                                    <img-component url="/svg/undo.svg"  alt="Deshacer"></img-component>
                                </button>
                                <button class="btn btn-icon btn-circle btn-outline-primary rounded-button"
                                    @click="redoCanvasData">
                                    <img-component url="/svg/redo.svg"  alt="Rehacer"></img-component>
                                </button>
                                <button class="btn btn-icon btn-circle btn-outline-primary rounded-button"
                                    @click="deleteCanvasData">
                                    <img-component url="/svg/delete.svg"  alt="Borrar"></img-component>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 row mx-0 card-body border-0">
                            <div class="col-12 justify-content-center mb-25">
                                <Editor :canvasWidth="500" :canvasHeight="397" ref="editor" />
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesPersonales.dolor" :check="formData.antecedentesPersonales.dolor"
                                        id="cmcDolor">
                                    <label class="custom-control-label" for="cmcDolor">Dolor</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesPersonales.masaPalpable" :check="formData.antecedentesPersonales.masaPalpable"
                                        id="cmcMasaPalpable">
                                    <label class="custom-control-label" for="cmcMasaPalpable">Masa
                                        palpable</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesPersonales.aumentoVolumen" :check="formData.antecedentesPersonales.aumentoVolumen"
                                        id="cmcAumentoVolumen">
                                    <label class="custom-control-label" for="cmcAumentoVolumen">Aumento de
                                        volumen</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesPersonales.secrecionPezon" :check="formData.antecedentesPersonales.secrecionPezon"
                                        id="cmcSecrecionPezon">
                                    <label class="custom-control-label" for="cmcSecrecionPezon">Secreción por el
                                        pezón</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesPersonales.inversionPezon" :check="formData.antecedentesPersonales.inversionPezon"
                                        id="cmcInversionPezon">
                                    <label class="custom-control-label" for="cmcInversionPezon">Inversión del
                                        pezón</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-25 p-0 mb-25">
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesPersonales.otros" :check="formData.antecedentesPersonales.otros"
                                        id="cmcDolorOtros">
                                    <label class="custom-control-label" for="cmcDolorOtros">Otros</label>
                                </div>
                            </div>
                            <div class="col-12 p-0">
                                <label for="cecForma">¿Desde cuando?</label>
                                <textarea class="form-control form-control-lg" rows="2" :disabled="disabled" v-model="formData.antecedentesPersonales.desdeCuando"
                                    id="cmcDolorDesdeCuando"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 mb-25 row mx-0">
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cmcSeniaParticular">Seña particular</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="cmcSeniaParticular" v-model="formData.antecedentesPersonales.seniaParticularMamas">
                                <option value="Temprano">No</option>
                                <option value="Temprano">Lunar</option>
                                <option value="Tardio">Cicatrices</option>
                                <option value="Tardio">Verrugas</option>
                                <option value="Tardio">Otros</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cmcPrimeraMenstruacion">Edad primera menstruación</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcPrimeraMenstruacion" v-model="formData.antecedentesPersonales.primeraMenstruacion">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cmcInicioVidaSexual">Edad inicio de vida sexual</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcInicioVidaSexual" v-model="formData.antecedentesPersonales.inicioVidaSexual">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cmcNumeroEmbarazos">Número de embarazos</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcNumeroEmbarazos" v-model="formData.antecedentesPersonales.embarazos">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cmcNumeroPartos">Número de partos</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcNumeroPartos" v-model="formData.antecedentesPersonales.partos">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cmcNumeroCesareas">Número de cesáreas</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcNumeroCesareas" v-model="formData.antecedentesPersonales.cesareas">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cmcNumeroAbortos">Número de abortos</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcNumeroAbortos" v-model="formData.antecedentesPersonales.abortos">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cmcEdadMenopausia">Edad de la menopausia</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcEdadMenopausia" v-model="formData.antecedentesPersonales.edadMenopausia">
                        </div>
                        <div class="col-12 col-md-4 mb-25">
                            <label for="cmcFUM">Última fecha de menstruación</label>
                            <input class="form-control form-control-lg" type="date" :disabled="disabled" id="cmcFUM" v-model="formData.antecedentesPersonales.fum">
                        </div>
                    </div>

                    <div class="col-12 mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">Método anticonceptivo</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesPersonales.metodoAnticonceptivo.check" :check="formData.antecedentesPersonales.metodoAnticonceptivo.check"
                                    id="cmcMetodoAnticonceptivoCheck">
                                <label class="custom-control-label" for="cmcMetodoAnticonceptivoCheck"></label>
                            </div>
                        </div>
                        <div class="card-body row mx-0" v-if="formData.antecedentesPersonales.metodoAnticonceptivo.check">
                            <label for="cmcMetodoAnticonceptivoDescription">¿De qué tipo?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcMetodoAnticonceptivoDescription" v-model="formData.antecedentesPersonales.metodoAnticonceptivo.description">
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">Hormonal</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesPersonales.hormonal.check" :check="formData.antecedentesPersonales.hormonal.check"
                                    id="cmcHormonalCheck">
                                <label class="custom-control-label" for="cmcHormonalCheck"></label>
                            </div>
                        </div>
                        <div class="card-body row mx-0" v-if="formData.antecedentesPersonales.hormonal.check">
                            <label for="cmcHomonalDescription">¿Cuánto tiempo?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="cmcHomonalDescription" v-model="formData.antecedentesPersonales.hormonal.description">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-25 card shadow-none card-md p-0 rounded border shadow-none">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cmcAntecedentesQuirurgicos" aria-expanded="true"
                        aria-controls="cmcAntecedentesQuirurgicos">
                        <i class="la la-angle-right"></i>
                        Antecedentes quirúrgicos
                    </a>
                </div>
                <div id="cmcAntecedentesQuirurgicos" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">Biopsia de mama</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.biopsiaMama.check" :check="formData.antecedentesQuirurgicos.biopsiaMama.check"
                                    id="cmcBiopsiaMama">
                                <label class="custom-control-label" for="cmcBiopsiaMama"></label>
                            </div>
                        </div>
                        <div class="card-body row mx-0" v-if="formData.antecedentesQuirurgicos.biopsiaMama.check">
                            <label for="cmcBiopsiaMamaDescription">Lado</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="cmcBiopsiaMamaDescription" v-model="formData.antecedentesQuirurgicos.biopsiaMama.description">
                                <option value="Temprano">Derecho</option>
                                <option value="Tardio">Izquierdo</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le han realizado mastectomia?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.masectomia.check" :check="formData.antecedentesQuirurgicos.masectomia.check"
                                    id="cmcMastectomiaCheck">
                                <label class="custom-control-label" for="cmcMastectomiaCheck"></label>
                            </div>
                        </div>
                        <div class="card-body row mx-0" v-if="formData.antecedentesQuirurgicos.masectomia.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cmcMastectomiaDescription">Lado</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="cmcMastectomiaDescription" v-model="formData.antecedentesQuirurgicos.masectomia.description">
                                    <option value="Temprano">Derecho</option>
                                    <option value="Tardio">Izquierdo</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cmcMastectomiaFecha">Fecha</label>
                                <input class="form-control form-control-lg" type="date" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.masectomia.fecha"
                                    id="cmcMastectomiaFecha">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le han quitado o biosiado ganglios en axilas?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.biopsiaGanglios.check" :check="formData.antecedentesQuirurgicos.biopsiaGanglios.check"
                                    id="cmcBipsiaGangliosCheck">
                                <label class="custom-control-label" for="cmcBipsiaGangliosCheck"></label>
                            </div>
                        </div>
                        <div class="card-body row mx-0" v-if="formData.antecedentesQuirurgicos.biopsiaGanglios.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cmcBiopsiaGangliosCheck">Lado</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="cmcBiopsiaGangliosCheck" v-model="formData.antecedentesQuirurgicos.biopsiaGanglios.description">
                                    <option value="Temprano">Derecho</option>
                                    <option value="Tardio">Izquierdo</option>
                                    <option value="Tardio">Ambas</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cmcBiopsiaGangliosFecha">Fecha</label>
                                <input class="form-control form-control-lg" type="date" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.biopsiaGanglios.fecha"
                                    id="cmcBiopsiaGangliosFecha">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le colocado implantes mamarios?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.implantesMamarios.check" :check="formData.antecedentesQuirurgicos.implantesMamarios.check"
                                    id="ccLeucorrea">
                                <label class="custom-control-label" for="ccLeucorrea"></label>
                            </div>
                        </div>
                        <div class="card-body row mx-0" v-if="formData.antecedentesQuirurgicos.implantesMamarios.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cmcImplantesMamariosDescription">Lado</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="cmcImplantesMamariosDescription" v-model="formData.antecedentesQuirurgicos.implantesMamarios.description">
                                    <option value="Temprano">Derecho</option>
                                    <option value="Tardio">Izquierdo</option>
                                    <option value="Tardio">Ambas</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cmcImplantesMamariosFecha">Fecha</label>
                                <input class="form-control form-control-lg" type="date" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.implantesMamarios.fecha"
                                    id="cmcImplantesMamariosFecha">
                            </div>

                            <div class="col-12 card shadow-none card-md p-0">
                                <div class="card-header">
                                    <h6 class="mb-25 mb-md-0">¿Ha tenido recambio de implantes?</h6>
                                    <div class="custom-control custom-switch switch-primary switch-md ">
                                        <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.recambioImplantes.check" :check="formData.antecedentesQuirurgicos.recambioImplantes.check"
                                            id="cmcImplantesMamariosRecambiosCheck">
                                        <label class="custom-control-label" for="cmcImplantesMamariosRecambiosCheck"></label>
                                    </div>
                                </div>
                                <div class="card-body" v-if="formData.antecedentesQuirurgicos.recambioImplantes.check">
                                    <label for="cmcImplantesMamariosRecambioDescription">Fecha</label>
                                    <input class="form-control form-control-lg" type="date" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.recambioImplantes.fecha"
                                        id="cmcImplantesMamariosRecambioDescription">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le realizado reducción mamaria?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.reduccionMamarias.check" :check="formData.antecedentesQuirurgicos.reduccionMamarias.check"
                                    id="cmcReduccionMamariaCheck">
                                <label class="custom-control-label" for="cmcReduccionMamariaCheck"></label>
                            </div>
                        </div>
                        <div class="card-body row mx-0" v-if="formData.antecedentesQuirurgicos.reduccionMamarias.check">
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cmcReduccionMamariaCheck">Lado</label>
                                <select class="form-control form-control-lg" :disabled="disabled" id="cmcReduccionMamariaCheck" v-model="formData.antecedentesQuirurgicos.reduccionMamarias.description">
                                    <option value="Temprano">Derecho</option>
                                    <option value="Tardio">Izquierdo</option>
                                    <option value="Tardio">Ambas</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label for="cmcReduccionMamariaFecha">Fecha</label>
                                <input class="form-control form-control-lg" type="date" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.reduccionMamarias.fecha"
                                    id="cmcReduccionMamariaFecha">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le han hecho radioterapia en su seno?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.radioterapia.check"
                                    id="cmcRadioterapiaCheck">
                                <label class="custom-control-label" for="cmcRadioterapiaCheck"></label>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 card shadow-none card-md mb-25">
                        <div class="card-header">
                            <h6 class="mb-25 mb-md-0">¿Le han realizado mastografía o ultrasonido?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.mastografia.check" :check="formData.antecedentesQuirurgicos.mastografia.check"
                                    id="cmcMastografiaCheck">
                                <label class="custom-control-label" for="cmcMastografiaCheck"></label>
                            </div>
                        </div>
                        <div class="card-body" v-if="formData.antecedentesQuirurgicos.mastografia.check">
                            <div>
                                <label for="cmcMastografiaDescription">Fecha</label>
                                <input class="form-control form-control-lg" type="date" :disabled="disabled" id="cmcMastografiaDescription" v-model="formData.antecedentesQuirurgicos.mastografia.description">
                            </div>
                            <div class="mb-25">
                                <label for="cmcMastografiaDescription">¿Qué le diagnosticaron?</label>
                                <textarea class="form-control form-control-lg" rows="2" :disabled="disabled" v-model="formData.antecedentesQuirurgicos.mastografia.diagnostico"
                                    id="cmcMastografiaDescription"></textarea>
                            </div>
                        </div>
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
