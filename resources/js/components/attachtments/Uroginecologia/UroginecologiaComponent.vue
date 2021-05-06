<template>
    <div class="card">
        <div class="card-header  py-20"><h6>Uroginecología</h6></div>
        <div class="card-body p-0">
            <div class="form-row form-group p-5">

                <div class="col-md-6 mb-25">
                    <label for="">Nictámero</label>
                    <input class="form-control form-control-lg" type="number" placeholder="Frecuencia urinaria">
                </div>

                <div class="col-md-6 mb-25">
                    <label for="">Consumo de litros por dia</label>
                    <input class="form-control form-control-lg" type="number" placeholder="Cantidad de litros" name="">
                </div>

                <div class="col-md-12 mb-25">
                    <div class="mb-15">
                        <div class="checkbox-theme-default custom-checkbox ">
                            <input class="checkbox" type="checkbox" id="">
                            <label for="">
                                Incontinencia urinaria de urgencia
                            </label>
                        </div>
                    </div>

                    <div class="form-row mt-1 p-0">
                        <div class="form-group col-md-4">
                            <input class="form-control form-control-lg" type="text" placeholder="Tiempo de envolución"
                                name="">
                        </div>
                        <div class="form-group col-md-4">
                            <input class="form-control form-control-lg" type="text" placeholder="Frecuencia" name="">
                        </div>
                        <div class="form-group col-md-4">
                            <input class="form-control form-control-lg" type="text" placeholder="Cantidad perdida"
                                name="">
                        </div>
                    </div>
                </div>

                <div class="col-md-12 mb-25">
                    <div class="mb-15">
                        <div class="checkbox-theme-default custom-checkbox ">
                            <input class="checkbox" type="checkbox" id="">
                            <label for="">
                                Incontinencia urinaria de esfuerzo
                            </label>
                        </div>
                    </div>

                    <div class="form-row mt-1 p-0">
                        <div class="form-group col-md-4">
                            <input class="form-control form-control-lg" type="text" placeholder="Tiempo de envolución"
                                name="">
                        </div>
                        <div class="form-group col-md-4">
                            <input class="form-control form-control-lg" type="text" placeholder="Frecuencia" name="">
                        </div>
                        <div class="form-group col-md-4">
                            <input class="form-control form-control-lg" type="text" placeholder="Cantidad perdida"
                                name="">
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-25">
                    <label for="">Chorro miccional</label>
                    <select class="form-control form-control-lg" id="¡" name="">
                        <option value="Completo">Completo</option>
                        <option value="Incompleto">Incompleto</option>
                    </select>
                </div>

                <div class="col-md-6 mb-25">
                    <label for="">Sensación de vacioamiento</label>
                    <select class="form-control form-control-lg" id="exampleFormControlSelect1"
                        name="anx2_SVaciamiento">
                        <option value="Completo">Completo</option>
                        <option value="Incompleto">Incompleto</option>
                    </select>
                </div>

                <div class="atbd-collapse atbd-collapse-custom col-12 mt-3" id="accordionExample">
                    <div class="atbd-collapse-item">

                        <div class="atbd-collapse-item__header" id="headingOne">
                            <a href="#" class="item-link" data-toggle="collapse" data-target="#interrogatorioCollapse"
                                aria-expanded="true" aria-controls="interrogatorioCollapse">
                                <i class="la la-angle-right"></i>
                                <h4>Interrogatorio</h4>
                            </a>
                        </div>

                        <div id="interrogatorioCollapse" class="collapse atbd-collapse-item__body"
                            aria-labelledby="interrogatorioCollapse" data-parent="#interrogatorioCollapse">
                            <div class="card-body">
                                <div class="form-row">

                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" id="disuriaCheck"
                                                checked="">
                                            <label class="custom-control-label" for="disuriaCheck">Disuria</label>
                                        </div>
                                    </div>


                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" id="hematuriaCheck"
                                                checked="">
                                            <label class="custom-control-label" for="hematuriaCheck">Hematuria</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" id="cuerpoExtranioCheck"
                                                checked="">
                                            <label class="custom-control-label" for="cuerpoExtranioCheck">Sensación de
                                                cuerpo extraño</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" id="resequedadCheck"
                                                checked="">
                                            <label class="custom-control-label" for="resequedadCheck">Resequedad
                                                vaginal</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" id="ardorCheck"
                                                checked="">
                                            <label class="custom-control-label" for="ardorCheck">Ardor</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" id="pruritoCheck"
                                                checked="">
                                            <label class="custom-control-label" for="pruritoCheck">Prurito</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" id="estrenimientoCheck"
                                                checked="">
                                            <label class="custom-control-label"
                                                for="estrenimientoCheck">Estreñimiento</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" id="laxantesCheck"
                                                checked="">
                                            <label class="custom-control-label" for="laxantesCheck">Consumo de
                                                laxantes</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input"
                                                id="inceontinenciaFlatosCheck" checked="">
                                            <label class="custom-control-label"
                                                for="inceontinenciaFlatosCheck">Incontinencia a flatos o heces</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input" id="vidaSexualCheck"
                                                checked="">
                                            <label class="custom-control-label" for="vidaSexualCheck">Vida sexual
                                                activa</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 mb-25">
                                        <div class="custom-control custom-switch switch-primary switch-md ">
                                            <input type="checkbox" class="custom-control-input"
                                                id="intentinenciaOrgasmoCheck" checked="">
                                            <label class="custom-control-label"
                                                for="intentinenciaOrgasmoCheck">Incontinencia durante prenetración u
                                                orgasmo</label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <label for="" class="">Evacuaciones al
                                            dia</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                <img src="/svg/pound.svg" alt="Pound logo">
                                            </span>
                                            <input type="number" class="form-control form-control-lg"
                                                id="ginecologicoAge" placeholder="Cantidad">
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-3 mb-25">
                                        <label for="">Dispareunia</label>
                                        <select class="form-control form-control-lg" id="" name="">
                                            <option value="Superficial">Superficial</option>
                                            <option value="Profunda">Profunda</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="atbd-collapse-item">
                        <div class="atbd-collapse-item__header" id="headingThree">
                            <a href="#" class="item-link" data-toggle="collapse" data-target="#exploracionCollapse"
                                aria-expanded="true" aria-controls="exploracionCollapse">
                                <i class="la la-angle-right"></i>
                                <h4>Exploración física</h4>
                            </a>
                        </div>

                        <div id="exploracionCollapse" class="collapse atbd-collapse-item__body"
                            aria-labelledby="exploracionCollapse" data-parent="#exploracionCollapse">
                            <div class="card-body">

                                <div class="form-row">

                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="">Reflejos perineales</label>
                                        <select class="form-control form-control-lg" id="" name="">
                                            <option value="Presentes">Presentes</option>
                                            <option value="Ausentes">Ausentes </option>
                                            <option value="Normales">Normales </option>
                                            <option value="Disminuidos">Disminuidos </option>
                                        </select>
                                    </div>

                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="">Prueba de la tos con vejiga</label>
                                        <select class="form-control form-control-lg" id="exampleFormControlSelect1"
                                            name="anx2_PTV">
                                            <option value="Llenas">Llenas</option>
                                            <option value="Vacias">Vacias </option>
                                            <option value="Positivas">Positivas </option>
                                            <option value="Negativas">Negativas </option>
                                        </select>
                                    </div>

                                    <div class="col-12 col-md-4 mb-25">
                                        <label for="">Atrofia
                                            Vaginal</label>
                                        <select class="form-control form-control-lg" id="" name="">
                                            <option value="Presentes">Presentes</option>
                                            <option value="Ausentes">Ausentes </option>
                                            <option value="Leve">Leve </option>
                                            <option value="Moderada">Moderada </option>
                                            <option value="Severa">Severa </option>
                                        </select>
                                    </div>

                                    <div class="col-12 mb-25">
                                        <label for="">Notas</label>
                                        <div class="with-icon">
                                            <span class="mr-5">
                                                <img src="/svg/text.svg" alt="Text logo">
                                            </span>
                                            <textarea class="form-control form-control-lg" id="" rows="3"
                                                name=""></textarea>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <button type="submit" class="btn btn-primary" align="left">Aceptar</button>


            </div>
        </div>
    </div>
</template>
