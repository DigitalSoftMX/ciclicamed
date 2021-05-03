<template>

    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Cérvix
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Penetración</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Posterior">Posterior</option>
                            <option value="Central">Central</option>
                            <option value="Anterior">Anterior</option>
                            <option value="Hipotrofico">Hipotrófico</option>
                            <option value="Eutrofico">Eutrófico</option>
                            <option value="Hipertrófico">Hipertrófico</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">OCE</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Permeable">Permeable</option>
                            <option value="EstenoicoPermeabiliza">Estenóico (se permeabiliza)</option>
                            <option value="EstenoicoNoPermeabiliza">Estenótico (no se permeabiliza)</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Canal endocervical</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="TubularPermeable">Tubular permeable</option>
                            <option value="EstenoicoPermeabiliza">Estenóico (se permeabiliza)</option>
                            <option value="EstenoicoNoPermeabiliza">Estenótico (no se permeabiliza)</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Epitelio glandular</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Atrofico">Atrófico</option>
                            <option value="Adecuado">Adecuado</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="">OCI</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="TubularPermeable">Tubular permeable</option>
                            <option value="EstenoicoPermeabiliza">Estenóico (se permeabiliza)</option>
                            <option value="EstenoicoNoPermeabiliza">Estenótico (no se permeabiliza)</option>
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
                    Útero
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 col-md-6 mb-25 mb-md-0">
                        <label for="">Posición</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="AVE">AVE</option>
                            <option value="Central">Central</option>
                            <option value="RVF">RVF</option>
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
                    Cavidad uterina
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Distensión</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="AVE">AVE</option>
                            <option value="Central">Central</option>
                            <option value="RVF">RVF</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Defectos</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Proyecciones">Proyecciones</option>
                            <option value="Hundimiento">Hundimiento</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Tamaño</label>
                        <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="">Forma</label>
                        <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>





















    <div class="content p-0">
        <div class="container-fluid">
            <div class=" ">
                <div class="card-body ">
                    <div class="form-row p-3">
                        <h6 class="col-md-12">HISTEROSCOPÍA</h6>
                        <h6 class="col-md-12">VAGINOSCOPÍA</h6>
                        <h6 class="col-md-12">CÉRVIX</h6>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Posici&oacute;n</label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>Posterior </option>
                                <option>Central </option>
                                <option>Anterior</option>
                                <option>Hipotr&oacute;fico </option>
                                <option>Eutr&oacute;fico </option>
                                <option>Hipertr&oacute;fico </option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">OCE</label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>Permeable </option>
                                <option>Esten&oacute;tico se permeabiliza </option>
                                <option>Esten&oacute;tico no se permeabiliza</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Canal
                                Endocervical</label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>Tubular permeable </option>
                                <option>Esten&oacute;tico se permeabiliza </option>
                                <option>Esten&oacute;tico no se permeabiliza</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Epitelio
                                glandular</label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>Atr&oacute;fico </option>
                                <option>Adecuado </option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">OCI</label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>Permeable </option>
                                <option>Esten&oacute;tico se permeabiliza </option>
                                <option>Esten&oacute;tico no se permeabiliza</option>
                            </select>
                        </div>
                        <h6 class="col-md-12 color-text-1 mt-3 mb-0">Útero </h6>
                        <div class="col-md-12 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Posici&oacute;n</label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>AVF </option>
                                <option>Central </option>
                                <option>RVF</option>
                            </select>
                        </div>
                        <h6 class="col-md-12 color-text-1 mt-3 mb-0">Cavidad uterina </h6>
                        <div class="col-md-3 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Distensi&oacute;n</label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>Adecuada </option>
                                <option>Inadecuada </option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Tama&ntilde;o</label>
                            <input class="form-control form-control-sm" type="text" placeholder="">
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Forma</label>
                            <input class="form-control form-control-sm" type="text" placeholder="">
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Defectos</label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>Proyecciones </option>
                                <option>Hundimiento </option>
                            </select>
                        </div>
                        <h6 class="col-md-12 color-text-1 mt-3 mb-0">Endometrio </h6>
                        <div class="col-md-4 mb-2">
                            <br>
                            <input class="" type="checkbox" data-toggle="toggle" data-size="sm" data-style="ios"
                                data-on="SI" data-off="No">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Atr&oacute;fico </label>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Proliferativo
                            </label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>Temprano </option>
                                <option>Tard&iacute;o </option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Secretor
                            </label>
                            <select class="form-control mt-1 form-control-sm" id="exampleFormControlSelect1">
                                <option>Temprano </option>
                                <option>Tard&iacute;o </option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Anormal</label>
                            <input class="form-control form-control-sm" type="text" placeholder="">
                        </div>
                        <h6 class="col-md-12 color-text-1 mt-3 mb-0">Ostium </h6>

                        <div class="col-md-2 mb-2">
                            <label for="col-md-12" class="col-form-label col-form-label-sm mb-1">Derecho
                            </label>
                        </div>
                        <div class="col-md-5 mb-2">
                            <input class="" type="checkbox" data-toggle="toggle" data-size="sm" name="derecho"
                                id="derecho" data-style="ios" data-on="SI" data-off="No" />
                            <label for="" class="col-form-label col-form-label-sm mb-1">Visible
                            </label>
                            <div class="collapse" id="derecho_CL">
                                <div class="col-md-12">
                                    <input class="form-control form-control-sm" type="text" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 mb-2">
                            <input class="" type="checkbox" data-toggle="toggle" data-size="sm" name="permeableder"
                                id="permeableder" data-style="ios" data-on="SI" data-off="No">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Permeable
                            </label>
                            <div class="collapse" id="permeableder_CL">
                                <div class="col-md-12">
                                    <input class="form-control form-control-sm" type="text" placeholder="">
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2 mb-2">
                            <label for="col-md-6" class="col-form-label col-form-label-sm mb-1">Izquierdo
                            </label>
                        </div>
                        <div class="col-md-5 mb-2">
                            <input class="" type="checkbox" data-toggle="toggle" data-size="sm" name="izquierdo"
                                id="izquierdo" data-style="ios" data-on="SI" data-off="No">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Visible
                            </label>
                            <div class="collapse" id="izquierdo_CL">
                                <div class="col-md-12">
                                    <input class="form-control form-control-sm" type="text" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 mb-2">
                            <input class="" type="checkbox" data-toggle="toggle" data-size="sm" name="permeableizq"
                                id="permeableizq" data-style="ios" data-on="SI" data-off="No">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Permeable
                            </label>
                            <div class="collapse" id="permeableizq_CL">
                                <div class="col-md-12">
                                    <input class="form-control form-control-sm" type="text" placeholder="">
                                </div>
                            </div>
                        </div>


                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Diagn&oacute;stico</label>
                            <input class="form-control form-control-sm" type="text" placeholder="">
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Tom biopsia</label>
                            <input class="form-control form-control-sm" type="text" placeholder="">
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Colocaci&oacute;n
                                DIU</label>
                            <input class="form-control form-control-sm" type="text" placeholder="">
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Resultado
                                biopsia</label>
                            <input class="form-control form-control-sm" type="text" placeholder="">
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="" class="col-form-label col-form-label-sm mb-1">Plan
                                Quir&uacute;rgico</label>
                            <input class="form-control form-control-sm" type="text" placeholder="">
                        </div>
                        <div class="col-md-12 mb-2">
                            <label for="" class="col-form-label col-form-label-sm">Notas</label>
                            <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1"
                                rows="3"></textarea>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
