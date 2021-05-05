<template>
    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Antecedentes de importancia
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Antecedentes obstétricos</label>
                        <textarea class="form-control form-control-lg" type="text" placeholder="" rows="2"></textarea>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Frecuencia coital</label>
                        <input class="form-control form-control-lg" type="date" placeholder="">
                    </div>
                    <div class="col-12 col-md-6 mb-25 mb-md-0">
                        <label for="">Uso hormonales</label>
                        <input class="form-control form-control-lg" type="text" placeholder="">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="">Citología cervical previa</label>
                        <input class="form-control form-control-lg" type="text" placeholder="">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Cervix
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0 align-items-center">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Volumen</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Eutrofico">Eutrófico</option>
                            <option value="Hipotrofico">Hipotrófico</option>
                            <option value="Atrofico">Atrófico</option>
                            <option value="AuscenciaQuirurgica">Ausencia quirúrgica</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Zona transformación</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Tipo I">Tipo I</option>
                            <option value="Tipo II">Tipo II</option>
                            <option value="Tipo II">Tipo III</option>
                            <option value="NoValorable">No valorable</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Estudio de colposcopia</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Satisfactoria">Satisfactoria</option>
                            <option value="NoSatisfactoria">No satisfactoria</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Evasión glandular</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Pequenia">Pequeña</option>
                            <option value="Moderada">Moderada</option>
                            <option value="Grande">Grande</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Atrofia epitelial</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Ausente">Ausente</option>
                            <option value="Leve">Leve</option>
                            <option value="Moderada">Moderada</option>
                            <option value="Severa">Severa</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Quistes de Naboth</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Presente">Presente</option>
                            <option value="Ausente">Ausente</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Tumoración</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Presente">Presente</option>
                            <option value="Ausente">Ausente</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    A la aplicación de ácido acético al 5% se observa
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0 align-items-center">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Epitelio acetoblanco</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Presente">Presente</option>
                            <option value="Ausente">Ausente</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Borde</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="DefinidosConRelieve">Definidos con relieve</option>
                            <option value="DefinidosSinRelieve">Definidos sin relieve</option>
                            <option value="DifusoConRelieve">Difuso con relieve</option>
                            <option value="DifusoSinRelieve">Difuso sin relieve </option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Mosaico</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Fino">Fino</option>
                            <option value="Grueso">Grueso</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Superficie</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="LisaConPuntilleoFino">Lisa con puntilleo fino</option>
                            <option value="LisaConPuntilleoGrueso">Lisa con puntilleo grueso</option>
                            <option value="MicroPapilarConPuntilleoFino">Micro papilar con puntilleo fino</option>
                            <option value="MicroPapilarConPuntilleoFino">Micro papilar con puntilleo fino</option>
                        </select>
                    </div>
                    <div class="col-12 row mx-0 p-0">
                        <div class="col-12">
                            <label for="">Test de Schiller (Lugol)</label>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                                <option value="YodoPositivoHomogeneo">Yodo positivo homogéneo </option>
                                <option value="YodoNegativoConZonasHipocaptantes">Yodo negativo con zonas hipocaptantes
                                </option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6">
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Vaginoscopia
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0 align-items-center">
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">Leucorrea</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="">Características</label>
                            <textarea class="form-control form-control-lg" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25 mb-md-0">
                        <label for="">Epitelio acetoblanco</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Presente">Presente</option>
                            <option value="Ausente">Ausente</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="">Captación de lugol</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="YodoPositivoHomogeneo">Yodo positivo homogéneo </option>
                            <option value="YodoNegativoConZonasHipocaptantes">Yodo negativo con zonas hipocaptantes
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Vulvoscopía
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12">
                    <div class="col-12">
                        <textarea class="form-control form-control-lg" placeholder="" rows="5"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Diagnóstico colposcópico
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12">
                    <div class="col-12">
                        <textarea class="form-control form-control-lg" placeholder="" rows="5"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
