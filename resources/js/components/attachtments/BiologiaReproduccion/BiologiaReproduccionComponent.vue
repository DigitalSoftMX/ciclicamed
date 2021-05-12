<template>
    <div class="card">
        <div class="card-header">
            <h6>Biología de la reproducción</h6>
        </div>
        <div class="card-body row mx-0 atbd-collapse atbd-collapse-custom">
            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#brcBiologia" aria-expanded="true"
                        aria-controls="brcBiologia">
                        <i class="la la-angle-right"></i>
                        Biología de la reproducción
                    </a>
                </div>
                <div id="brcBiologia" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 mb-25">
                        <div class="col-12 col-md-6 mb-25 mb-md-0">
                            <label for="brcTiempoBusqueda">Tiempo de búsqueda del embarazo</label>
                            <input class="form-control form-control-lg" type="text" id="brcTiempoBusqueda"
                                v-model="formDataCopy.biologiaReproduccion.tiempoBusquedaEmbarazo">
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="brcFrecuenciaCoital">Frecuencia coital</label>
                            <input class="form-control form-control-lg" type="text" id="brcFrecuenciaCoital"
                                v-model="formDataCopy.biologiaReproduccion.frecuenciaCoital">
                        </div>
                    </div>
                    <div class="col-12 row mx-0">
                        <div class="col-12 mb-25">
                            <label for="brcPenetracion">Penetración</label>
                            <select name="select-size-1" class="form-control  form-control-lg" id="brcPenetracion"
                                v-model="formDataCopy.biologiaReproduccion.penetracion">
                                <option value="Completa">Completa</option>
                                <option value="Incompleta">Incompleta</option>
                            </select>
                        </div>
                        <div class="col-4 mb-25 m-auto">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="brcDispareunia"
                                    v-model="formDataCopy.biologiaReproduccion.dispareunia"
                                    :checked="formDataCopy.biologiaReproduccion.dispareunia">
                                <label class="custom-control-label" for="brcDispareunia">Dispareunia</label>
                            </div>
                        </div>
                        <div class="col-4 mb-25 m-auto">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="brcEyaculacionVaginal"
                                    v-model="formDataCopy.biologiaReproduccion.eyaculacionVaginal"
                                    :checked="formDataCopy.biologiaReproduccion.eyaculacionVaginal">
                                <label class="custom-control-label" for="brcEyaculacionVaginal">Eyaculación
                                    vaginal</label>
                            </div>
                        </div>
                        <div class="col-4 m-auto">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="brcDismenorrea"
                                    v-model="formDataCopy.biologiaReproduccion.dismenorrea"
                                    :checked="formDataCopy.biologiaReproduccion.dismenorrea">
                                <label class="custom-control-label" for="brcDismenorrea">Dismenorrea</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#brcFactorMasculino" aria-expanded="true"
                        aria-controls="brcFactorMasculino">
                        <i class="la la-angle-right"></i>
                        Factor masculino
                    </a>
                </div>
                <div id="brcFactorMasculino" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25">
                            <label for="">Edad</label>
                            <input class="form-control form-control-lg" type="text" id="brcEdad"
                                v-model="formDataCopy.factorMasculino.edad">
                        </div>
                        <div class="col-12 col-md-6 mb-25 align-self-center m-center">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="brcPaternidadComprobada"
                                    v-model="formDataCopy.factorMasculino.paternidadComrpobada"
                                    :checked="formDataCopy.factorMasculino.paternidadComrpobada">
                                <label class="custom-control-label" for="brcPaternidadComprobada">Paternidad
                                    comprobada</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcOcupacion">Ocupación</label>
                            <textarea class="form-control form-control-lg" type="text" id="brcOcupacion"
                                v-model="formDataCopy.factorMasculino.ocupacion"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcTraumatismoTesticular">Traumatismo o alteración testicular</label>
                            <textarea class="form-control form-control-lg" type="text" id="brcTraumatismoTesticular"
                                v-model="formDataCopy.factorMasculino.traumatismo"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcAntecedentesParotiditis">Antecedentes de parotiditis, uso de anabólicos o
                                medicamentos</label>
                            <textarea class="form-control form-control-lg" type="text" id="brcAntecedentesParotiditis"
                                v-model="formDataCopy.factorMasculino.antecedentesParotiditis"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcEBD">EBD previas</label>
                            <textarea class="form-control form-control-lg" type="text" id="brcEBD"
                                v-model="formDataCopy.factorMasculino.ebd"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#brcFactorTuboperitoneal"
                        aria-expanded="true" aria-controls="brcFactorTuboperitoneal">
                        <i class="la la-angle-right"></i>
                        Factor tuboperitoneal
                    </a>
                </div>
                <div id="brcFactorTuboperitoneal" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcCirugiasAbdominales">Cirugías abdominales</label>
                            <textarea class="form-control form-control-lg" type="text" id="brcCirugiasAbdominales"
                                v-model="formDataCopy.factorTuboperitoneal.cirugiasAbdominales"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcInfeccionesVaginales">Infecciones vaginales de repetición</label>
                            <textarea class="form-control form-control-lg" type="text" id="brcInfeccionesVaginales"
                                v-model="formDataCopy.factorTuboperitoneal.infeccionesVaginales"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#brcFactorEndocrino" aria-expanded="true"
                        aria-controls="brcFactorEndocrino">
                        <i class="la la-angle-right"></i>
                        Factor endócrino ovárico
                    </a>
                </div>
                <div id="brcFactorEndocrino" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcCiclos">Ciclos</label>
                            <textarea class="form-control form-control-lg" type="text" id="brcCiclos"
                                v-model="formDataCopy.factorEndocrino.ciclos"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcCantidad">Cantidad</label>
                            <select class="form-control form-control-lg" id="brcCantidad"
                                v-model="formDataCopy.factorEndocrino.cantidad">
                                <option value="Escaso">Escaso</option>
                                <option value="Normal">Normal</option>
                                <option value="Abundante">Abundante</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#brcFactorCervical" aria-expanded="true"
                        aria-controls="brcFactorCervical">
                        <i class="la la-angle-right"></i>
                        Factor cervical
                    </a>
                </div>
                <div id="brcFactorCervical" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25 align-self-center m-center">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="brcInfeccionVaginalRepeticion"
                                    v-model="formDataCopy.factorCervical.infeccionVaginal"
                                    :checked="formDataCopy.factorCervical.infeccionVaginal">
                                <label class="custom-control-label" for="brcInfeccionVaginalRepeticion">Infección
                                    vaginal de repetición</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcUltimoPapanicolau">Último papanicolau</label>
                            <input class="form-control form-control-lg" type="text" id="brcUltimoPapanicolau"
                                v-model="formDataCopy.factorCervical.ultimoPapanicolau">
                        </div>
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcAnterioresLesiones">Anteriores lesiones cervicales</label>
                            <textarea class="form-control form-control-lg" type="text" id="brcAnterioresLesiones"
                                v-model="formDataCopy.factorCervical.anterioresLesiones"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcAnterioresCirugias">Anteriores cirugías uterinas</label>
                            <textarea class="form-control form-control-lg" type="text" id="brcAnterioresCirugias"
                                v-model="formDataCopy.factorCervical.anterioresCirugias"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card card-default card-md p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#brcNotas" aria-expanded="true"
                        aria-controls="brcNotas">
                        <i class="la la-angle-right"></i>
                        Notas
                    </a>
                </div>
                <div id="brcNotas" class="atbd-collapse-item__body collapse py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12">
                            <textarea class="form-control form-control-lg" type="text" rows="4" id="brcNotas"
                                v-model="formDataCopy.notas"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./BiologiaReproduccionComponent.ts"></script>
