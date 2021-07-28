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
                <div :disabled="disabled" id="brcBiologia" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 mb-25">
                        <div class="col-12 col-md-6 mb-25 mb-md-0">
                            <label for="brcTiempoBusqueda">Tiempo de búsqueda del embarazo</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcTiempoBusqueda" v-model="formData.biologiaReproduccion.tiempoBusquedaEmbarazo">
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="brcFrecuenciaCoital">Frecuencia coital</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcFrecuenciaCoital" v-model="formData.biologiaReproduccion.frecuenciaCoital">
                        </div>
                    </div>
                    <div class="col-12 row mx-0">
                        <div class="col-12 mb-25">
                            <label for="brcPenetracion">Penetración</label>
                            <select name="select-size-1" class="form-control  form-control-lg" :disabled="disabled"
                                id="brcPenetracion" v-model="formData.biologiaReproduccion.penetracion">
                                <option value="Completa">Completa</option>
                                <option value="Incompleta">Incompleta</option>
                            </select>
                        </div>
                        <div class="col-4 mb-25 m-auto">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="brcDispareunia" v-model="formData.biologiaReproduccion.dispareunia"
                                    :checked="formData.biologiaReproduccion.dispareunia">
                                <label class="custom-control-label" for="brcDispareunia">Dispareunia</label>
                            </div>
                        </div>
                        <div class="col-4 mb-25 m-auto">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="brcEyaculacionVaginal"
                                    v-model="formData.biologiaReproduccion.eyaculacionVaginal"
                                    :checked="formData.biologiaReproduccion.eyaculacionVaginal">
                                <label class="custom-control-label" for="brcEyaculacionVaginal">Eyaculación
                                    vaginal</label>
                            </div>
                        </div>
                        <div class="col-4 m-auto">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="brcDismenorrea" v-model="formData.biologiaReproduccion.dismenorrea"
                                    :checked="formData.biologiaReproduccion.dismenorrea">
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
                <div :disabled="disabled" id="brcFactorMasculino" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25">
                            <label for="">Edad</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled" id="brcEdad"
                                v-model="formData.factorMasculino.edad">
                        </div>
                        <div class="col-12 col-md-6 mb-25 align-self-center m-center">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="brcPaternidadComprobada" v-model="formData.factorMasculino.paternidadComrpobada"
                                    :checked="formData.factorMasculino.paternidadComrpobada">
                                <label class="custom-control-label" for="brcPaternidadComprobada">Paternidad
                                    comprobada</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcOcupacion">Ocupación</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcOcupacion" v-model="formData.factorMasculino.ocupacion"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcTraumatismoTesticular">Traumatismo o alteración testicular</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcTraumatismoTesticular" v-model="formData.factorMasculino.traumatismo"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcAntecedentesParotiditis">Antecedentes de parotiditis, uso de anabólicos o
                                medicamentos</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcAntecedentesParotiditis"
                                v-model="formData.factorMasculino.antecedentesParotiditis"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcEBD">EBD previas</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="brcEBD"
                                v-model="formData.factorMasculino.ebd"></textarea>
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
                <div :disabled="disabled" id="brcFactorTuboperitoneal"
                    class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcCirugiasAbdominales">Cirugías abdominales</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcCirugiasAbdominales"
                                v-model="formData.factorTuboperitoneal.cirugiasAbdominales"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcInfeccionesVaginales">Infecciones vaginales de repetición</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcInfeccionesVaginales"
                                v-model="formData.factorTuboperitoneal.infeccionesVaginales"></textarea>
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
                <div :disabled="disabled" id="brcFactorEndocrino" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcCiclos">Ciclos</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcCiclos" v-model="formData.factorEndocrino.ciclos"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="brcCantidad">Cantidad</label>
                            <select class="form-control form-control-lg" :disabled="disabled" id="brcCantidad"
                                v-model="formData.factorEndocrino.cantidad">
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
                <div :disabled="disabled" id="brcFactorCervical" class="atbd-collapse-item__body collapse px-0 py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12 col-md-6 mb-25 align-self-center m-center">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                    id="brcInfeccionVaginalRepeticion"
                                    v-model="formData.factorCervical.infeccionVaginal"
                                    :checked="formData.factorCervical.infeccionVaginal">
                                <label class="custom-control-label" for="brcInfeccionVaginalRepeticion">Infección
                                    vaginal de repetición</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcUltimoPapanicolau">Último papanicolau</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcUltimoPapanicolau" v-model="formData.factorCervical.ultimoPapanicolau">
                        </div>
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcAnterioresLesiones">Anteriores lesiones cervicales</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcAnterioresLesiones"
                                v-model="formData.factorCervical.anterioresLesiones"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25 ">
                            <label for="brcAnterioresCirugias">Anteriores cirugías uterinas</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="brcAnterioresCirugias"
                                v-model="formData.factorCervical.anterioresCirugias"></textarea>
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
                <div :disabled="disabled" id="brcNotas" class="atbd-collapse-item__body collapse py-4">
                    <div class="col-12 row mx-0 align-items-center">
                        <div class="col-12">
                            <textarea class="form-control form-control-lg" type="text" rows="4" :disabled="disabled"
                                id="brcNotas" v-model="formData.notas"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-25 card card-default card-md p-0 rounded">
                <div class="atbd-collapse atbd-collapse-custom border rounded">
                    <div class="atbd-collapse-item__header active">
                        <a class="item-link" data-toggle="collapse" data-target="#npcAntropometria" aria-expanded="true"
                            aria-controls="npcAntropometria">
                            <i class="la la-angle-right"></i>
                            Hoja de estimulación
                        </a>
                    </div>
                    <div id="npcAntropometria" class="atbd-collapse-item__body collapse row mx-0 card-body">
                        <div class="mb-25 row mx-0">
                            <div class="col-12 p-0 mb-25">
                                <label>Inseminaciones previas</label>
                                <textarea class="form-control form-control-lg" rows="4"
                                    v-model="formData.estimulacion.inseminacionesPrevias"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label>GnRH-a (Lucrin) fase lútea</label>
                                <input class="form-control form-control-lg" type="number"
                                    v-model="formData.estimulacion.gnrh">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label>Fecha de inicio</label>
                                <input class="form-control form-control-lg" type="date"
                                    v-model="formData.estimulacion.diaInicio">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label>Dosis</label>
                                <input class="form-control form-control-lg" type="string"
                                    v-model="formData.estimulacion.dosis">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label>Hasta</label>
                                <input class="form-control form-control-lg" type="date"
                                    v-model="formData.estimulacion.hasta">
                            </div>

                            <div class="col-12 col-md-6 mb-25">
                                <label>Sostén de fase lutea</label>
                                <input class="form-control form-control-lg" type="text"
                                    v-model="formData.estimulacion.sosten">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label>Dosis</label>
                                <input class="form-control form-control-lg" type="text"
                                    v-model="formData.estimulacion.dosis2">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label>Fecha de inicio</label>
                                <input class="form-control form-control-lg" type="date"
                                    v-model="formData.estimulacion.fechaInicio2">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label>BhcG</label>
                                <input class="form-control form-control-lg" type="date"
                                    v-model="formData.estimulacion.bhcg">
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label>Resultados</label>
                                <textarea class="form-control form-control-lg" rows="5"
                                    v-model="formData.estimulacion.resultados"></textarea>
                            </div>
                            <div class="col-12 col-md-6 mb-25">
                                <label>Observaciones</label>
                                <textarea class="form-control form-control-lg" rows="5"
                                    v-model="formData.estimulacion.observaciones"></textarea>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col" v-for="index in 15" :key="index">
                                            Estimulación {{index}}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Fecha</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="date" v-model="form.dia">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Clomifeno</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text"
                                                v-model="form.clomifeno"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">GnRH-a</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text" v-model="form.gnrh">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">hMG</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text" v-model="form.hmg">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">FSH</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text" v-model="form.fsh">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">hCG</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text" v-model="form.hcg">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Otros</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text"
                                                v-model="form.otros"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Antagonista</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text"
                                                v-model="form.antagonista"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dimesiones OD</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text"
                                                v-model="form.dimesionesOD"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dimesiones OI</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text"
                                                v-model="form.dimensionesOI"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Endometrio</th>
                                        <td v-for="(form, index) in formData.estimulacion.estimulacion" :key="index">
                                            <input class="form-control form-control-lg" type="text"
                                                v-model="form.endometrio"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script lang="ts" src="./BiologiaReproduccionComponent.ts"></script>
