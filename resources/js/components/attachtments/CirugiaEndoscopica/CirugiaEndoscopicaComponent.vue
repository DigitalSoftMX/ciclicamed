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
                    <div class="col-12 col-md-6">
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
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Endometrio
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Atrófico</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Proliferativo</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Temprano">Temprano</option>
                            <option value="Tardio">Tardío</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Secretor</label>
                        <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                            <option value="Temprano">Temprano</option>
                            <option value="Tardio">Tardío</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="">Anormal</label>
                        <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Ostium
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 row mx-0 mb-25">
                        <div class="col-12 mb-25">
                            <h6>Derecho</h6>
                        </div>
                        <div class="col-12 col-md-2">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">Visible</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-10">
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 mb-25">
                        <div class="col-12 mb-25">
                            <h6>Izquierdo</h6>
                        </div>
                        <div class="col-12 col-md-2">
                            <div class="custom-control custom-switch switch-primary">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">Visible</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-10">
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 mb-25">
                        <div class="col-12 col-md-6">
                            <label>Visible</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label>Toma biopsia</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label>Colocación DIU</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label>Resultado biopsia</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                        <div class="col-12 col-md-6">
                            <label>Plan quirúrgico</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
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
                    Notas
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse py-4">
                <div class="col-12 row mx-0 align-items-center">
                    <div class="col-12">
                        <textarea class="form-control form-control-lg" type="text" placeholder="" rows="4"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
