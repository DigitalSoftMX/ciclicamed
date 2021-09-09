<template>
    <div class="col-12 row card-body mx-0 atbd-collapse atbd-collapse-custom">
        <!-- <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
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
                    <select class="form-control form-control-lg" :disabled="disabled" id="ccrcOrigenEtnico"
                        v-model="formData.origenEtnico.etnia">
                        <option value="Latina">Latina(Mexicana, Centroamericana)</option>
                        <option value="Caucasico">Cáucasico(Europeo, Hispánico, Oriente Medio, África del
                            Norte)</option>
                        <option value="Negro">Negro(Africano, Caribeño, Afroamericano)</option>
                        <option value="Asiatico">Asiatico(India, Pakistan, Bangladesh)</option>
                        <option value="Oriental">Este Asiático - Oriental(Chino, Coreano, Japones)</option>
                        <option value="Ninguno">Ninguno de las anteriores</option>
                    </select>
                </div>
                <div class="col-12 p-0" v-show="formData.origenEtnico.etnia === 'Ninguno'">
                    <label for="ccrcOrigenEtnicoOtra">Otra</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled"
                        id="ccrcOrigenEtnicoOtra" v-model="formData.origenEtnico.otra">
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
                        <input class="form-control form-control-lg" type="date" :disabled="disabled" id="ccrcFUM"
                            v-model="formData.fum.fum">
                    </div>
                    <div class="col-12 col-md-6 p-0">
                        <label for="ccrcConsideraMenstruacion">¿Cómo considera su menstruación</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ccrcConsideraMenstruacion"
                            v-model="formData.fum.consideraMenstruacion">
                            <option value="Desconoce">Desconoce</option>
                            <option value="RegularRegular">Regular (FUM segura)</option>
                            <option value="RegularIncierta">Regular (FUM incierta o no esta segura)</option>
                            <option value="Irregular">Irregular</option>
                        </select>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <div class="col-12 mb-25 card shadow-none p-0">
            <div class="card-header">
                <h6>¿Existe antecedente de algun hijo/feto previo con alguna cromosomopatia?</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                        id="ccrcAntecedenteCromosomopatia" v-model="formData.existeAntecedenteComosomopatia.check"
                        :checked="formData.existeAntecedenteComosomopatia.check">
                    <label class="custom-control-label" for="ccrcAntecedenteCromosomopatia"></label>
                </div>
            </div>
            <div class="card-body row mx-0" v-show="formData.existeAntecedenteComosomopatia.check">
                <div class="col-12 col-md-4">
                    <label for="">Trisomia 21</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTrisomia21"
                        v-model="formData.existeAntecedenteComosomopatia.trisomia21">
                </div>
                <div class="col-12 col-md-4">
                    <label for="">Trisomia 18</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTrisomia18"
                        v-model="formData.existeAntecedenteComosomopatia.trisomia18">
                </div>
                <div class="col-12 col-md-4">
                    <label for="">Trisomia 13</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTrisomia13"
                        v-model="formData.existeAntecedenteComosomopatia.trisomia13">
                </div>
            </div>
        </div> -->

        <!-- <div class="col-12 mb-25 card shadow-none p-0">
            <div class="card-header">
                <h6>¿Existe antecedente de algun hijo/feto previo con algun efecto o malformacion?</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :disabled="disabled"
                        id="ccrcAntecedenteMalformacion" v-model="formData.existeAntecedenteMalformacion.check"
                        :checked="formData.existeAntecedenteMalformacion.check">
                    <label class="custom-control-label" for="ccrcAntecedenteMalformacion"></label>
                </div>
            </div>
            <div class="card-body" v-show="formData.existeAntecedenteMalformacion.check">
                <label for="ccrcCual">¿Cúal?</label>
                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcCual"
                    v-model="formData.existeAntecedenteMalformacion.description"></textarea>
            </div>
        </div> -->

        <!-- <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
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
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTotalEmbarazos"
                        v-model="formData.total.embarazos">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="ccrcTotalPartos">Partos</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTotalPartos"
                        v-model="formData.total.partos">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="">Cesareas</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTotalCesareas"
                        v-model="formData.total.cesareas">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="ccrcTotalAbortos">Abortos</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTotalAbortos"
                        v-model="formData.total.abortos">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="ccrcTotalEctopicos">Ectópicos</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTotalEctopicos"
                        v-model="formData.total.ectopicos">
                </div>
                <div class="col-12 col-md-3 mb-25">
                    <label for="">Molas</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTotalMolas"
                        v-model="formData.total.molas">
                </div>
            </div>
        </div> -->

        <!-- <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
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
                            <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                id="ccrcMuerteAntes" v-model="formData.muerteUtero.muerteAntes" :checked="formData.muerteUtero.muerteAntes">
                            <label class="custom-control-label" for="ccrcMuerteAntes">¿Muerte en útero antes de las 16
                                semanas?</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-25 card shadow-none p-0">
                    <div class="card-header">
                        <h6>¿Muerte en útero después de las 16 semanas?</h6>
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled"
                                id="ccrcMuerteDespues" v-model="formData.muerteUtero.muerteDespues.check"
                                :checked="formData.muerteUtero.muerteDespues.check">
                            <label class="custom-control-label" for="ccrcMuerteDespues"></label>
                        </div>
                    </div>
                    <div class="card-body" v-show="formData.muerteUtero.muerteDespues.check">
                        <label for="ccrcMuerteDespuesDescription">¿A las cuantas semanas?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcMuerteDespuesDescription" v-model="formData.muerteUtero.muerteDespues.description">
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
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
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcPeso"
                            v-model="formData.enfermera.peso">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccrcTalla">Talla</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcTalla"
                            v-model="formData.enfermera.talla">
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 mb-15 text-center">
                        <label>Brazo derecho</label>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ccrcSistoleDerecho">Sistole</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcSistoleDerecho" v-model="formData.enfermera.brazoDerecho.sistole">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccrcDiastoleDerecho">Diastole</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcDiastoleDerecho" v-model="formData.enfermera.brazoDerecho.diastole">
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 mb-15 text-center">
                        <label>Brazo izquierdo</label>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="ccrcSistoleIzquierdo">Sistole</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcSistoleIzquierdo" v-model="formData.enfermera.brazoIzquierdo.sistole">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccrcDiastoleIzquierdo">Diastole</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcDiastoleIzquierdo" v-model="formData.enfermera.brazoIzquierdo.diastole">
                    </div>
                </div>
            </div>
        </div> -->

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
                    <div class="card shadow-none">
                        <div class="card-header">
                            <h6>¿Fuma?</h6>
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccrcFuma"
                                    v-model="formData.tabaquismo.fuma" :checked="formData.tabaquismo.fuma">
                                <label class="custom-control-label" for="ccrcFuma"></label>
                            </div>
                        </div>
                        <div class="card-body" v-show="formData.tabaquismo.fuma">
                            <label for="ccrcFumaCuantosDia">¿Cuántos al día?</label>
                            <input class="form-control form-control-lg" type="text" :disabled="disabled"
                                id="ccrcFumaCuantosDia" v-model="formData.tabaquismo.cantidad">
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccrcFumaEmbarazo"
                            v-model="formData.tabaquismo.fumaEmbarazo" :checked="formData.tabaquismo.fumaEmbarazo">
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
                    Antecedentes Patológicos de la embarazada
                </a>
            </div>
            <div id="ccrcAntecedentesPatologicos" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                            id="ccrcDiabetesMellitus" v-model="formData.antecedentesPatologicos.diabetesMellitus"
                            :checked="formData.antecedentesPatologicos.diabetesMellitus">
                        <label class="custom-control-label" for="ccrcDiabetesMellitus">¿Padece diabetes mellitus
                            dependiente de insulina?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccrcHipertension"
                            v-model="formData.antecedentesPatologicos.hipertension"
                            :checked="formData.antecedentesPatologicos.hipertension">
                        <label class="custom-control-label" for="ccrcHipertension">¿Padece hipertensión
                            crónica?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                            id="ccrcLupusEritematoso" v-model="formData.antecedentesPatologicos.lupusEritematoso"
                            :checked="formData.antecedentesPatologicos.lupusEritematoso">
                        <label class="custom-control-label" for="ccrcLupusEritematoso">¿Padece lupus eritematoso
                            sistemémico?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                            id="ccrcAnticuerposAntifofolipidos"
                            v-model="formData.antecedentesPatologicos.anticuerposAntifofolipidos"
                            :checked="formData.antecedentesPatologicos.anticuerposAntifofolipidos">
                        <label class="custom-control-label" for="ccrcAnticuerposAntifofolipidos">¿Padece síndrome de
                            anticuerpos
                            anti-fosfolípidos?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccrcPreeclamsia"
                            v-model="formData.antecedentesPatologicos.preeclamsia"
                            :checked="formData.antecedentesPatologicos.preeclamsia">
                        <label class="custom-control-label" for="ccrcPreeclamsia">¿Padeció preeclampsia en los
                            embarazos previos?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                            id="ccrcMadrePreeclamsia" v-model="formData.antecedentesPatologicos.madrePreeclamsia"
                            :checked="formData.antecedentesPatologicos.madrePreeclamsia">
                        <label class="custom-control-label" for="ccrcMadrePreeclamsia">¿Su madre padeció
                            preeclampsia en
                            algún embarazo?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                            id="ccrcOtroAntecedente" v-model="formData.antecedentesPatologicos.otroAntecedentes"
                            :checked="formData.antecedentesPatologicos.otroAntecedentes">
                        <label class="custom-control-label" for="ccrcOtroAntecedente">¿Tiene algún otro antecedente
                            personal o familiar que considere importante?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                            id="ccrcEmbarazoTratamientoReproduccion"
                            v-model="formData.antecedentesPatologicos.embarazoTratamientoReproduccion"
                            :checked="formData.antecedentesPatologicos.embarazoTratamientoReproduccion">
                        <label class="custom-control-label" for="ccrcEmbarazoTratamientoReproduccion">¿Se logró el
                            embarazo con algún
                            tratamiento de reproducción asistida?</label>
                    </div>
                </div>
                <div class="col-12 mb-15 tbd-switch-wrap align-items-center align-self-center">
                    <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                        <input type="checkbox" class="custom-control-input" :disabled="disabled"
                            id="ccrcInductoresOvulacion" v-model="formData.antecedentesPatologicos.inductoresOvulacion"
                            :checked="formData.antecedentesPatologicos.inductoresOvulacion">
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
                    <label for="">Fecha de extracción de ovocitos</label>
                    <input class="form-control form-control-lg" type="date" :disabled="disabled"
                        id="ccrcFechaExtraccion" v-model="formData.fertilizacionInvitro.fechaExtraccion">
                </div>
                <div class="col-12 col-md-6 mb-15">
                    <label for="">Fecha de congelación</label>
                    <input class="form-control form-control-lg" type="date" :disabled="disabled"
                        id="ccrcFechaCongelacion" v-model="formData.fertilizacionInvitro.fechaCongelacion">
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
                    <input class="form-control form-control-lg" type="date" :disabled="disabled"
                        id="ccrcFechaNacimiento" v-model="formData.donanteOvocitos.fechaNacimiento">
                </div>
                <div class="col-12 col-md-6">
                    <label for="">Edad aproximada</label>
                    <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcEdadAproximada"
                        v-model="formData.donanteOvocitos.edadAproximada">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CuestionarioCalculoRiesgoComponent.ts"></script>
