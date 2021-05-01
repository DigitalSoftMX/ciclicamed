<template>
    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccrcOrigen" aria-expanded="true"
                    aria-controls="ccrcOrigen">
                    <i class="la la-angle-right"></i>
                    Origen Étnico
                </a>
            </div>
            <div id="ccrcOrigen" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 row mb-25 mx-0">
                        <div class="col-12 col-md-6 p-0">
                            <div class="col-12">
                                <label for="">Origen Étnico</label>
                            </div>
                            <div class="atbd-select ">
                                <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                                    <option value="Latina">Latina(Mexicana, Centroamericana)</option>
                                    <option value="Caucasico">Cáucasico(Europeo, Hispánico, Oriente Medio, África del
                                        Norte)</option>
                                    <option value="Negro">Negro(Africano, Caribeño, Afroamericano)</option>
                                    <option value="Asiatico">Asiatico(India, Pakistan, Bangladesh)</option>
                                    <option value="Oriental">Este Asiático - Oriental(Chino, Coreano, Japones)</option>
                                    <option value="Ninguno">Ninguno de las anteriores</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-0">
                            <div class="col-12">
                                <label for="">Otra</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccecFum" aria-expanded="true"
                    aria-controls="ccecFum">
                    <i class="la la-angle-right"></i>
                    FUM
                </a>
            </div>
            <div id="ccecFum" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 row mb-25 mx-0">
                        <div class="col-12 col-md-6 p-0">
                            <div class="col-12">
                                <label for="">FUM</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="date" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-0">
                            <div class="col-12">
                                <label for="">¿Cómo considera su menstruación</label>
                            </div>
                            <div class="atbd-select ">
                                <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                                    <option value="Desconoce">Desconoce</option>
                                    <option value="RegularRegular">Regular (FUM segura)</option>
                                    <option value="RegularIncierta">Regular (FUM incierta o no esta segura)</option>
                                    <option value="Irregular">Irregular</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccecCromosomopatia" aria-expanded="true"
                    aria-controls="ccecCromosomopatia">
                    <i class="la la-angle-right"></i>
                    ¿Existe antecedente de algun hijo/feto previo con alguna cromosomopatia?
                </a>
            </div>
            <div id="ccecCromosomopatia" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 row mx-0">
                        <div class="col-12 col-md-4 p-0">
                            <div class="col-12">
                                <label for="">Trisomia 21</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-4 p-0">
                            <div class="col-12">
                                <label for="">Trisomia 18</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-4 p-0">
                            <div class="col-12">
                                <label for="">Trisomia 13</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccecMalformacion" aria-expanded="true"
                    aria-controls="ccecMalformacion">
                    <i class="la la-angle-right"></i>
                    ¿Existe antecedente de algun hijo/feto previo con algun efecto o malformacion?
                </a>
            </div>
            <div id="ccecMalformacion" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 row mx-0">
                        <div class="col-12 col-md-6 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Existe antecedente de algun hijo/feto previo con algun efecto o malformacion?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-0">
                            <div class="col-12">
                                <label for="">¿Cúal?</label>
                            </div>
                            <div class="col-12">
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccecTotal" aria-expanded="true"
                    aria-controls="ccecTotal">
                    <i class="la la-angle-right"></i>
                    Total de...
                </a>
            </div>
            <div id="ccecTotal" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 row mx-0">
                        <div class="col-12 col-md-3 mb-15 p-0">
                            <div class="col-12">
                                <label for="">Embarazos</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 mb-15 p-0">
                            <div class="col-12">
                                <label for="">Partos</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 mb-15 p-0">
                            <div class="col-12">
                                <label for="">Cesareas</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 mb-15 p-0">
                            <div class="col-12">
                                <label for="">Abortos</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 mb-15 p-0">
                            <div class="col-12">
                                <label for="">Ectópicos</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 mb-15 p-0">
                            <div class="col-12">
                                <label for="">Molas</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#ccecMuerteUtero" aria-expanded="true"
                    aria-controls="ccecMuerteUtero">
                    <i class="la la-angle-right"></i>
                    Muerte en útero
                </a>
            </div>
            <div id="ccecMuerteUtero" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 row mb-25 mx-0">
                        <div class="col-12 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Muerte en útero antes de las 16 semanas?</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row mx-0">
                        <div class="col-12 col-md-6 tbd-switch-wrap align-items-center align-self-center">
                            <div class="custom-control custom-switch switch-primary switch-lg align-items-center">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Muerte en útero después de las 16 semanas?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 mb-15 p-0">
                            <div class="col-12">
                                <label for="">¿A las cuantas semanas?</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcEnfermera" aria-expanded="true"
                    aria-controls="rcrcEnfermera">
                    <i class="la la-angle-right"></i>
                    Llenado por enfermera
                </a>
            </div>
            <div id="rcrcEnfermera" class="atbd-collapse-item__body collapse px-0 py-4">
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

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcTabaquismo" aria-expanded="true"
                    aria-controls="rcrcTabaquismo">
                    <i class="la la-angle-right"></i>
                    Tabaquismo
                </a>
            </div>
            <div id="rcrcTabaquismo" class="atbd-collapse-item__body collapse px-0 py-4">
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
                <a class="item-link" data-toggle="collapse" data-target="#rcrcAntecedentesPatologicos"
                    aria-expanded="true" aria-controls="rcrcAntecedentesPatologicos">
                    <i class="la la-angle-right"></i>
                    Antecedentes Patológicos
                </a>
            </div>
            <div id="rcrcAntecedentesPatologicos" class="atbd-collapse-item__body collapse px-0 py-4">
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
                <a class="item-link" data-toggle="collapse" data-target="#rcrcInVitro" aria-expanded="true"
                    aria-controls="rcrcInVitro">
                    <i class="la la-angle-right"></i>
                    En caso de fertilización In Vitro indique lo siguiente
                </a>
            </div>
            <div id="rcrcInVitro" class="atbd-collapse-item__body collapse px-0 py-4">
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
