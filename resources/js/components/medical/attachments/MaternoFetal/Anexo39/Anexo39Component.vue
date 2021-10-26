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
        </div>

        <div class="col-12 mb-25 card shadow-none p-0">
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
        </div>

        <div class="col-12 mb-25 card shadow-none p-0">
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
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccecTotal" aria-expanded="true"
                    aria-controls="ccecTotal">
                    <i class="la la-angle-right"></i>
                    Total de embarazos
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
        </div>

        <label class="col-12" for="">Hisorial de las gestas</label>
        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccHistorialGestas1" aria-expanded="true"
                    aria-controls="ccHistorialGestas1">
                    <i class="la la-angle-right"></i>
                    Historial 1
                </a>
            </div>
            <div id="ccHistorialGestas1" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG1">Fecha</label>
                        <input class="form-control form-control-lg" type="date" :disabled="disabled" id="ccrcPesoG1"
                            v-model="formData.gesta1.fecha">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccSemanasG1">Semanas de</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccSemanasG1"
                            v-model="formData.gesta1.semanas">
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label id="ccProcedimientoG1" for="">Procedimiento Médico</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta1.procedimiento" id="ccProcedimientoG1">
                            <option value="parto">Parto</option>
                            <option value="cesarea">Cesárea</option>
                            <option value="aborto">Aborto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="custom-control custom-switch switch-primary mt-5">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccVivoG1"
                            v-model="formData.gesta1.vivo" :checked="formData.gesta1.vivo">
                            <label class="custom-control-label" for="ccVivoG1">¿Vivo?</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG1">Peso</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcPesoG1"
                            v-model="formData.gesta1.peso">
                    </div>
                    <div class="col-12 col-md-6">
                        <label id="ccSexoG1" for="">Sexo</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta1.sexo" id="ccSexoG1">
                            <option value="parto">Hombre</option>
                            <option value="cesarea">Mujer</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="" id="ccrcTipoG1">Estado</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ccrcTipoG1"
                            v-model="formData.gesta1.opcion.tipo">
                            <option value="Sano">Sano</option>
                            <option value="Defecto">Defecto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6" v-show="formData.gesta1.opcion.tipo === 'Defecto'">
                        <label for="ccrcTipoOtra" id="ccrcTipoOtraG1">¿Cual?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcTipoOtraG1" v-model="formData.gesta1.opcion.defecto">
                    </div>

                </div>

            </div> 
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccHistorialGestas2" aria-expanded="true"
                    aria-controls="ccHistorialGestas2">
                    <i class="la la-angle-right"></i>
                    Historial 2
                </a>
            </div>
            <div id="ccHistorialGestas2" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG2">Fecha</label>
                        <input class="form-control form-control-lg" type="date" :disabled="disabled" id="ccrcPesoG2"
                            v-model="formData.gesta2.fecha">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccSemanasG2">Semanas de</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccSemanasG2"
                            v-model="formData.gesta2.semanas">
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label id="ccProcedimientoG2" for="">Procedimiento Médico</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta2.procedimiento" id="ccProcedimientoG2">
                            <option value="parto">Parto</option>
                            <option value="cesarea">Cesárea</option>
                            <option value="aborto">Aborto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="custom-control custom-switch switch-primary mt-5">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccVivoG2"
                            v-model="formData.gesta2.vivo" :checked="formData.gesta2.vivo">
                            <label class="custom-control-label" for="ccVivoG2">¿Vivo?</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG2">Peso</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcPesoG2"
                            v-model="formData.gesta2.peso">
                    </div>
                    <div class="col-12 col-md-6">
                        <label id="ccSexoG2" for="">Sexo</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta2.sexo" id="ccSexoG2">
                            <option value="parto">Hombre</option>
                            <option value="cesarea">Mujer</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="" id="ccrcTipoG2">Estado</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ccrcTipoG2"
                            v-model="formData.gesta2.opcion.tipo">
                            <option value="Sano">Sano</option>
                            <option value="Defecto">Defecto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6" v-show="formData.gesta2.opcion.tipo === 'Defecto'">
                        <label for="ccrcTipoOtraG2" id="ccrcTipoOtraG2">¿Cual?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcTipoOtraG2" v-model="formData.gesta2.opcion.defecto">
                    </div>

                </div>

            </div> 
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccHistorialGestas3" aria-expanded="true"
                    aria-controls="ccHistorialGestas3">
                    <i class="la la-angle-right"></i>
                    Historial 3
                </a>
            </div>
            <div id="ccHistorialGestas3" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG3">Fecha</label>
                        <input class="form-control form-control-lg" type="date" :disabled="disabled" id="ccrcPesoG3"
                            v-model="formData.gesta3.fecha">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccSemanasG3">Semanas de</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccSemanasG3"
                            v-model="formData.gesta3.semanas">
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label id="ccProcedimientoG3" for="">Procedimiento Médico</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta3.procedimiento" id="ccProcedimientoG3">
                            <option value="parto">Parto</option>
                            <option value="cesarea">Cesárea</option>
                            <option value="aborto">Aborto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="custom-control custom-switch switch-primary mt-5">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccVivoG3"
                            v-model="formData.gesta3.vivo" :checked="formData.gesta3.vivo">
                            <label class="custom-control-label" for="ccVivoG3">¿Vivo?</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG3">Peso</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcPesoG3"
                            v-model="formData.gesta3.peso">
                    </div>
                    <div class="col-12 col-md-6">
                        <label id="ccSexoG3" for="">Sexo</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta3.sexo" id="ccSexoG3">
                            <option value="parto">Hombre</option>
                            <option value="cesarea">Mujer</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="" id="ccrcTipoG3">Estado</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ccrcTipoG3"
                            v-model="formData.gesta3.opcion.tipo">
                            <option value="Sano">Sano</option>
                            <option value="Defecto">Defecto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6" v-show="formData.gesta3.opcion.tipo === 'Defecto'">
                        <label for="ccrcTipoOtraG3" id="ccrcTipoOtraG3">¿Cual?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcTipoOtraG3" v-model="formData.gesta3.opcion.defecto">
                    </div>

                </div>

            </div> 
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccHistorialGestas4" aria-expanded="true"
                    aria-controls="ccHistorialGestas4">
                    <i class="la la-angle-right"></i>
                    Historial 4
                </a>
            </div>
            <div id="ccHistorialGestas4" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG4">Fecha</label>
                        <input class="form-control form-control-lg" type="date" :disabled="disabled" id="ccrcPesoG4"
                            v-model="formData.gesta4.fecha">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccSemanasG4">Semanas de</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccSemanasG4"
                            v-model="formData.gesta4.semanas">
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label id="ccProcedimientoG4" for="">Procedimiento Médico</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta4.procedimiento" id="ccProcedimientoG4">
                            <option value="parto">Parto</option>
                            <option value="cesarea">Cesárea</option>
                            <option value="aborto">Aborto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="custom-control custom-switch switch-primary mt-5">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccVivoG4"
                            v-model="formData.gesta4.vivo" :checked="formData.gesta4.vivo">
                            <label class="custom-control-label" for="ccVivoG4">¿Vivo?</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG4">Peso</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcPesoG4"
                            v-model="formData.gesta4.peso">
                    </div>
                    <div class="col-12 col-md-6">
                        <label id="ccSexoG4" for="">Sexo</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta4.sexo" id="ccSexoG4">
                            <option value="parto">Hombre</option>
                            <option value="cesarea">Mujer</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="" id="ccrcTipoG4">Estado</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ccrcTipoG4"
                            v-model="formData.gesta4.opcion.tipo">
                            <option value="Sano">Sano</option>
                            <option value="Defecto">Defecto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6" v-show="formData.gesta4.opcion.tipo === 'Defecto'">
                        <label for="ccrcTipoOtraG4" id="ccrcTipoOtraG4">¿Cual?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcTipoOtraG4" v-model="formData.gesta4.opcion.defecto">
                    </div>

                </div>

            </div> 
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0 border rounded">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccHistorialGestas5" aria-expanded="true"
                    aria-controls="ccHistorialGestas5">
                    <i class="la la-angle-right"></i>
                    Historial 5
                </a>
            </div>
            <div id="ccHistorialGestas5" class="card-body atbd-collapse-item__body collapse row mx-0">
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG5">Fecha</label>
                        <input class="form-control form-control-lg" type="date" :disabled="disabled" id="ccrcPesoG5"
                            v-model="formData.gesta5.fecha">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="ccSemanasG5">Semanas de</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccSemanasG5"
                            v-model="formData.gesta5.semanas">
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label id="ccProcedimientoG5" for="">Procedimiento Médico</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta5.procedimiento" id="ccProcedimientoG5">
                            <option value="parto">Parto</option>
                            <option value="cesarea">Cesárea</option>
                            <option value="aborto">Aborto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="custom-control custom-switch switch-primary mt-5">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="ccVivoG5"
                            v-model="formData.gesta5.vivo" :checked="formData.gesta5.vivo">
                            <label class="custom-control-label" for="ccVivoG5">¿Vivo?</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="ccrcPesoG5">Peso</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled" id="ccrcPesoG5"
                            v-model="formData.gesta5.peso">
                    </div>
                    <div class="col-12 col-md-6">
                        <label id="ccSexoG5" for="">Sexo</label>
                        <select class="form-control form-control-lg" :disabled="disabled" v-model="formData.gesta5.sexo" id="ccSexoG5">
                            <option value="parto">Hombre</option>
                            <option value="cesarea">Mujer</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 row mb-25 mx-0 p-0">
                    <div class="col-12 col-md-6">
                        <label for="" id="ccrcTipoG5">Estado</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="ccrcTipoG5"
                            v-model="formData.gesta5.opcion.tipo">
                            <option value="Sano">Sano</option>
                            <option value="Defecto">Defecto</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6" v-show="formData.gesta5.opcion.tipo === 'Defecto'">
                        <label for="ccrcTipoOtraG5" id="ccrcTipoOtraG5">¿Cual?</label>
                        <input class="form-control form-control-lg" type="text" :disabled="disabled"
                            id="ccrcTipoOtraG5" v-model="formData.gesta5.opcion.defecto">
                    </div>

                </div>

            </div> 
        </div>

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

    </div>
</template>

<script lang="ts" src='./Anexo39Component.ts'></script>