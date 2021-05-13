<template>
    <div class="col-12 row card-body mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccrcOrigen" aria-expanded="true"
                    aria-controls="ccrcOrigen">
                    <i class="la la-angle-right"></i>
                    Origen Étnico
                </a>
            </div>
            <div id="ccrcOrigen" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 p-0 mb-25">
                    <label for="">Origen Étnico</label>
                    <select class="form-control form-control-lg" id="ccrcOrigenEtnico"
                        v-model="formDataCopy.origenEtnico.etnia">
                        <option value="Latina">Latina(Mexicana, Centroamericana)</option>
                        <option value="Caucasico">Cáucasico(Europeo, Hispánico, Oriente Medio, África del
                            Norte)</option>
                        <option value="Negro">Negro(Africano, Caribeño, Afroamericano)</option>
                        <option value="Asiatico">Asiatico(India, Pakistan, Bangladesh)</option>
                        <option value="Oriental">Este Asiático - Oriental(Chino, Coreano, Japones)</option>
                        <option value="Ninguno">Ninguno de las anteriores</option>
                    </select>
                </div>
                <div class="col-12 p-0" v-show="formDataCopy.origenEtnico.etnia === 'Ninguno'">
                    <label for="ccrcOrigenEtnicoOtra">Otra</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcOrigenEtnicoOtra"
                        v-model="formDataCopy.origenEtnico.otra">
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccecFum" aria-expanded="true"
                    aria-controls="ccecFum">
                    <i class="la la-angle-right"></i>
                    FUM
                </a>
            </div>
            <div id="ccecFum" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 row mb-25 mx-0">
                    <div class="col-12 col-md-6 p-0">
                        <label for="ccrcFUM">FUM</label>
                        <input class="form-control form-control-lg" type="date" id="ccrcFUM"
                            v-model="formDataCopy.fum.fum">
                    </div>
                    <div class="col-12 col-md-6 p-0">
                        <label for="ccrcConsideraMenstruacion">¿Cómo considera su menstruación</label>
                        <select class="form-control form-control-lg" id="ccrcConsideraMenstruacion"
                            v-model="formDataCopy.fum.consideraMenstruacion">
                            <option value="Desconoce">Desconoce</option>
                            <option value="RegularRegular">Regular (FUM segura)</option>
                            <option value="RegularIncierta">Regular (FUM incierta o no esta segura)</option>
                            <option value="Irregular">Irregular</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md bg-white p-0">
            <div class="card-header">
                <h6>¿Existe antecedente de algun hijo/feto previo con alguna cromosomopatia?</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="ccrcAntecedenteCromosomopatia"
                        v-model="formDataCopy.existeAntecedenteComosomopatia.check"
                        :checked="formDataCopy.existeAntecedenteComosomopatia.check">
                    <label class="custom-control-label" for="ccrcAntecedenteCromosomopatia"></label>
                </div>
            </div>
            <div class="card-body row mx-0 bg-normal" v-show="formDataCopy.existeAntecedenteComosomopatia.check">
                <div class="col-12 col-md-4">
                    <label for="">Trisomia 21</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcTrisomia21"
                        v-model="formDataCopy.existeAntecedenteComosomopatia.trisomia21">
                </div>
                <div class="col-12 col-md-4">
                    <label for="">Trisomia 18</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcTrisomia18"
                        v-model="formDataCopy.existeAntecedenteComosomopatia.trisomia18">
                </div>
                <div class="col-12 col-md-4">
                    <label for="">Trisomia 13</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcTrisomia13"
                        v-model="formDataCopy.existeAntecedenteComosomopatia.trisomia13">
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md bg-white p-0">
            <div class="card-header">
                <h6>¿Existe antecedente de algun hijo/feto previo con algun efecto o malformacion?</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="ccrcAntecedenteMalformacion"
                        v-model="formDataCopy.existeAntecedenteMalformacion.check"
                        :checked="formDataCopy.existeAntecedenteMalformacion.check">
                    <label class="custom-control-label" for="ccrcAntecedenteMalformacion"></label>
                </div>
            </div>
            <div class="card-body bg-normal" v-show="formDataCopy.existeAntecedenteMalformacion.check">
                <label for="ccrcCual">¿Cúal?</label>
                <textarea class="form-control form-control-lg" type="text" id="ccrcCual"
                    v-model="formDataCopy.existeAntecedenteMalformacion.description"></textarea>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccecTotal" aria-expanded="true"
                    aria-controls="ccecTotal">
                    <i class="la la-angle-right"></i>
                    Total de...
                </a>
            </div>
            <div id="ccecTotal" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 col-md-3 mb-25">
                    <label for="ccrcTotalEmbarazos">Embarazos</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcTotalEmbarazos"
                        v-model="formDataCopy.total.embarazos">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="ccrcTotalPartos">Partos</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcTotalPartos"
                        v-model="formDataCopy.total.partos">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="">Cesareas</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcTotalCesareas"
                        v-model="formDataCopy.total.cesareas">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="ccrcTotalAbortos">Abortos</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcTotalAbortos"
                        v-model="formDataCopy.total.abortos">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="ccrcTotalEctopicos">Ectópicos</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcTotalEctopicos"
                        v-model="formDataCopy.total.ectopicos">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="">Molas</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcTotalMolas"
                        v-model="formDataCopy.total.molas">
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccecMuerteUtero" aria-expanded="true"
                    aria-controls="ccecMuerteUtero">
                    <i class="la la-angle-right"></i>
                    Muerte en útero
                </a>
            </div>
            <div id="ccecMuerteUtero" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 mb-25 mx-0 p-0">
                    <div class="tbd-switch-wrap align-items-center align-self-center">
                        <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                            <input type="checkbox" class="custom-control-input" id="ccrcMuerteAntes" checked="">
                            <label class="custom-control-label" for="ccrcMuerteAntes">¿Muerte en útero antes de las 16
                                semanas?</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-25 card card-default card-md bg-white p-0">
                    <div class="card-header">
                        <h6>¿Muerte en útero después de las 16 semanas?</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="ccrcMuerteDespues"
                                v-model="formDataCopy.muerteUtero.muerteDespues.check"
                                :checked="formDataCopy.muerteUtero.muerteDespues.check">
                            <label class="custom-control-label" for="ccrcMuerteDespues"></label>
                        </div>
                    </div>
                    <div class="card-body bg-normal" v-show="formDataCopy.muerteUtero.muerteDespues.check">
                        <label for="ccrcMuerteDespuesDescription">¿A las cuantas semanas?</label>
                        <input class="form-control form-control-lg" type="text" id="ccrcMuerteDespuesDescription"
                            v-model="formDataCopy.muerteUtero.muerteDespues.description">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccrcEnfermera" aria-expanded="true"
                    aria-controls="ccrcEnfermera">
                    <i class="la la-angle-right"></i>
                    Llenado por enfermera
                </a>
            </div>
            <div id="ccrcEnfermera" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPeso">Peso</label>
                        <input class="form-control form-control-lg" type="text" id="ccrcPeso"
                            v-model="formDataCopy.enfermera.peso">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccrcTalla">Talla</label>
                        <input class="form-control form-control-lg" type="text" id="ccrcTalla"
                            v-model="formDataCopy.enfermera.talla">
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 mb-15 text-center">
                        <label>Brazo derecho</label>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ccrcSistoleDerecho">Sistole</label>
                        <input class="form-control form-control-lg" type="text" id="ccrcSistoleDerecho"
                            v-model="formDataCopy.enfermera.brazoDerecho.sistole">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccrcDiastoleDerecho">Diastole</label>
                        <input class="form-control form-control-lg" type="text" id="ccrcDiastoleDerecho"
                            v-model="formDataCopy.enfermera.brazoDerecho.diastole">
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 mb-15 text-center">
                        <label>Brazo izquierdo</label>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ccrcSistoleIzquierdo">Sistole</label>
                        <input class="form-control form-control-lg" type="text" id="ccrcSistoleIzquierdo"
                            v-model="formDataCopy.enfermera.brazoIzquierdo.sistole">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccrcDiastoleIzquierdo">Diastole</label>
                        <input class="form-control form-control-lg" type="text" id="ccrcDiastoleIzquierdo"
                            v-model="formDataCopy.enfermera.brazoIzquierdo.diastole">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccrcTabaquismo" aria-expanded="true"
                    aria-controls="ccrcTabaquismo">
                    <i class="la la-angle-right"></i>
                    Tabaquismo
                </a>
            </div>
            <div id="ccrcTabaquismo" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 mb-25">
                    <div class="card-header">
                        <h6>¿Fuma?</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="ccrcFuma"
                                v-model="formDataCopy.tabaquismo.fuma" :checked="formDataCopy.tabaquismo.fuma">
                            <label class="custom-control-label" for="ccrcFuma"></label>
                        </div>
                    </div>
                    <div class="card-body bg-normal" v-show="formDataCopy.tabaquismo.fuma">
                        <label for="ccrcFumaCuantosDia">¿Cuántos al día?</label>
                        <input class="form-control form-control-lg" type="text" id="ccrcFumaCuantosDia"
                            v-model="formDataCopy.tabaquismo.cantidad">
                    </div>
                </div>
                <div class="col-12">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcFumaEmbarazo"
                            v-model="formDataCopy.tabaquismo.fumaEmbarazo"
                            :checked="formDataCopy.tabaquismo.fumaEmbarazo">
                        <label class="custom-control-label" for="ccrcFumaEmbarazo">¿Fuma durante el embarazo?</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccrcAntecedentesPatologicos"
                    aria-expanded="true" aria-controls="ccrcAntecedentesPatologicos">
                    <i class="la la-angle-right"></i>
                    Antecedentes Patológicos
                </a>
            </div>
            <div id="ccrcAntecedentesPatologicos" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcDiabetesMellitus"
                            v-model="formDataCopy.antecedentesPatologicos.diabetesMellitus"
                            :checked="formDataCopy.antecedentesPatologicos.diabetesMellitus">
                        <label class="custom-control-label" for="ccrcDiabetesMellitus">¿Padece diabetes mellitus
                            dependiente de insulina?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcHipertension"
                            v-model="formDataCopy.antecedentesPatologicos.hipertension"
                            :checked="formDataCopy.antecedentesPatologicos.hipertension">
                        <label class="custom-control-label" for="ccrcHipertension">¿Padece hipertensión
                            crónica?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcLupusEritematoso"
                            v-model="formDataCopy.antecedentesPatologicos.lupusEritematoso"
                            :checked="formDataCopy.antecedentesPatologicos.lupusEritematoso">
                        <label class="custom-control-label" for="ccrcLupusEritematoso">¿Padece lupus eritematoso
                            sistemémico?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcAnticuerposAntifofolipidos"
                            v-model="formDataCopy.antecedentesPatologicos.anticuerposAntifofolipidos"
                            :checked="formDataCopy.antecedentesPatologicos.anticuerposAntifofolipidos">
                        <label class="custom-control-label" for="ccrcAnticuerposAntifofolipidos">¿Padece síndrome de
                            anticuerpos
                            anti-fosfolípidos?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcPreeclamsia"
                            v-model="formDataCopy.antecedentesPatologicos.preeclamsia"
                            :checked="formDataCopy.antecedentesPatologicos.preeclamsia">
                        <label class="custom-control-label" for="ccrcPreeclamsia">¿Padeció preeclampsia en los
                            embarazos previos?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcMadrePreeclamsia"
                            v-model="formDataCopy.antecedentesPatologicos.madrePreeclamsia"
                            :checked="formDataCopy.antecedentesPatologicos.madrePreeclamsia">
                        <label class="custom-control-label" for="ccrcMadrePreeclamsia">¿Su madre padeció
                            preeclampsia en
                            algún embarazo?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcOtroAntecedente"
                            v-model="formDataCopy.antecedentesPatologicos.otroAntecedentes"
                            :checked="formDataCopy.antecedentesPatologicos.otroAntecedentes">
                        <label class="custom-control-label" for="ccrcOtroAntecedente">¿Tiene algún otro antecedente
                            personal o familiar que considere importante?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcEmbarazoTratamientoReproduccion"
                            v-model="formDataCopy.antecedentesPatologicos.embarazoTratamientoReproduccion"
                            :checked="formDataCopy.antecedentesPatologicos.embarazoTratamientoReproduccion">
                        <label class="custom-control-label" for="ccrcEmbarazoTratamientoReproduccion">¿Se logró el
                            embarazo con algún
                            tratamiento de reproducción asistida?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" id="ccrcInductoresOvulacion"
                            v-model="formDataCopy.antecedentesPatologicos.inductoresOvulacion"
                            :checked="formDataCopy.antecedentesPatologicos.inductoresOvulacion">
                        <label class="custom-control-label" for="ccrcInductoresOvulacion">¿Inductores de
                            ovulación?</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccrcInvitro" aria-expanded="true"
                    aria-controls="ccrcInvitro">
                    <i class="la la-angle-right"></i>
                    En caso de fertilización In Vitro indique lo siguiente
                </a>
            </div>
            <div id="ccrcInvitro" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 col-md-6 mb-15">
                    <label for="">Fecha de extracción de ovocitor</label>
                    <input class="form-control form-control-lg" type="date" id="ccrcFechaExtraccion"
                        v-model="formDataCopy.fertilizacionInvitro.fechaExtraccion">
                </div>
                <div class="col-12 col-md-6 mb-15">
                    <label for="">Fecha de congelación</label>
                    <input class="form-control form-control-lg" type="date" id="ccrcFechaCongelacion"
                        v-model="formDataCopy.fertilizacionInvitro.fechaCongelacion">
                </div>
            </div>
        </div>

        <div class="col-12 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccrcOvocitos" aria-expanded="true"
                    aria-controls="ccrcOvocitos">
                    <i class="la la-angle-right"></i>
                    En caso de donate de ovocitos, indique su fecha de nacimiento o edad aproximada
                </a>
            </div>
            <div id="ccrcOvocitos" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 col-md-6 mb-15">
                    <label for="">Fecha de nacimiento</label>
                    <input class="form-control form-control-lg" type="date" id="ccrcFechaNacimiento"
                        v-model="formDataCopy.donanteOvocitos.fechaNacimiento">
                </div>
                <div class="col-12 col-md-6">
                    <label for="">Edad aproximada</label>
                    <input class="form-control form-control-lg" type="text" id="ccrcEdadAproximada"
                        v-model="formDataCopy.donanteOvocitos.edadAproximada">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CuestionarioCalculoRiesgoComponent.ts"></script>
