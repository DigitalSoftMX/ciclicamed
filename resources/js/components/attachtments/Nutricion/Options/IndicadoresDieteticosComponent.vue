<template>
    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Indicadores dietéticos
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 row mx-0 p-0 mb-25">
                        <div class="col-12 col-md-6 mb-25 mb-md-0">
                            <label for="">¿Cúantas comidas haces al día?</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="">¿Quién prepara sus alimentos?</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Come entre comidas?</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="">¿Qué?</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Ha modificado su alimentación desde
                                    el inicio del embarazo?</label>
                            </div>
                        </div>
                        <div class="col-12 mb-25">
                            <label for="">¿Por qué?</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                        <div class="col-12">
                            <label for="">¿Cómo?</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-15 align-items-center">
                        <div class="col-6 mb-25 mb-md-0">
                            <label for="">Apetito</label>
                            <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                                <option value="Bueno">Bueno</option>
                                <option value="Regular">Regular</option>
                                <option value="Malo">Malo</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <label for="">¿A qué hora tiene más hambre?</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 mb-25">
                            <label for="">Alimentos preferidos</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                        <div class="col-12 mb-25">
                            <label for="">Alimentos que no le agradan / no acostumbra</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                        <div class="col-12">
                            <label for="">Alimentos que le causan malestar</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Es alérgico o intolerante a algún
                                    alimento?</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="">Especifique</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Toma algún suplemento o
                                    complemento?</label>
                            </div>
                        </div>
                        <div class="col-12 row mx-0 p-0 mb-25">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">¿Cúal?</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Dosis</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 row mx-0 p-0 mb-25">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">¿Cúal?</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Dosis</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 row mx-0 p-0 mb-25">
                            <div class="col-12 col-md-6 mb-25 mb-md-0">
                                <label for="">¿Cúal?</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Dosis</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Su comsumo varía cuando está
                                    triste, nervioso o ansioso?</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="">¿Cómo?</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-6">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Agrega sal a la comida ya
                                    preparada?</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="">¿Qué grasa utiliza en casa para preparar su comida?</label>
                            <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                                <option value="Margarina">Margarina</option>
                                <option value="Aceita vegatal">Aceita vegatal</option>
                                <option value="Manteca">Manteca</option>
                                <option value="Mantequilla">Mantequilla</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25">
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Ha llevado alguna dieta
                                    especial?</label>
                            </div>
                        </div>
                        <div class="col-12 row p-0 mx-0">
                            <div class="col-12 col-md-6">
                                <label for="">¿Cúantas?</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">¿Qué tipo de dieta?</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">¿Hace cuánto?</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">¿Por cuánto tiempo?</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">¿Por qué razón?</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">¿Qué tanto se apegó a ella?</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">¿Obtuvo los resultados esperados?</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Kg perdidos</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="">Peso logrado</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25">
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Ha utilizado medicamentos para
                                    bajar de peso?</label>
                            </div>
                        </div>
                        <div class="col-12 row p-0 mx-0">
                            <div class="col-12">
                                <label for="">¿Cúales?</label>
                                <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="">Plan</label>
                        <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
