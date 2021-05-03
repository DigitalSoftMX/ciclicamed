<template>
    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Antecedentes Salud/Enfermedad
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0 mb-25">
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Diarrea</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Estreñiminento</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Gastritis</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Úlcera</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Náuseas</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Pirosis</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Vómito</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Colitis</label>
                        </div>
                    </div>
                </div>

                <div class="col-12 row mx-0 p-0 mb-25">
                    <div class="col-12 row mx-0">
                        <div class="col-12 mb-25">
                            <label for="">Otros</label>
                            <textarea class="form-control form-control-lg" type="date" placeholder=""></textarea>
                        </div>
                        <div class="col-12">
                            <label for="">Observaciones</label>
                            <textarea class="form-control form-control-lg" type="date" placeholder=""></textarea>
                        </div>
                    </div>
                </div>

                <div class="col-12 row mx-0 p-0 mb-25">
                    <div class="col-12 mb-25 text-center">
                        <h3>TA</h3>
                    </div>
                    <div class="col-12 row mx-0">
                        <div class="col-12 col-md-6 row mx-0 px-0 mb-25 mb-md-0">
                            <div class="col-12">
                                <label for="">Brazo derecho</label>
                            </div>
                            <div class="col-6">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-6">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="col-12 col-md-6 row mx-0 px-0">
                            <div class="col-12">
                                <label for="">Brazo izquierdo</label>
                            </div>
                            <div class="col-6">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-6">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 row mx-0 p-0 mb-25">
                    <div class="col-12 row mx-0">
                        <div class="col-12 mb-25">
                            <label for="">¿Padece alguna enfermedad diagnosticada?</label>
                            <textarea class="form-control form-control-lg" type="date" placeholder=""></textarea>
                        </div>
                        <div class="col-12 mb-25">
                            <label for="">¿Ha padecido alguna enfermedad imporante?</label>
                            <textarea class="form-control form-control-lg" type="date" placeholder=""></textarea>
                        </div>
                        <div class="col-12">
                            <label for="">¿Ha tenido complicaciones en embarazos anteriores?</label>
                            <textarea class="form-control form-control-lg" type="date" placeholder=""></textarea>
                        </div>
                    </div>
                </div>

                <div class="col-12 row mx-0">
                    <div class="col-12 col-md-12 row mx-0 px-0 mb-25">
                        <div class="col-12 mb-25">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Toma algún medicamento?</label>
                            </div>
                        </div>
                        <div class="col-12 row mx-0 px-0 mb-25">
                            <div class="col-4">
                                <label for="">¿Cúal?</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-4">
                                <label for="">Dosis</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-4">
                                <label for="">¿Desde cuando?</label>
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 row mx-0 mb-25">
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">¿Toma laxantes?</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">¿Toma diuréticos?</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-15">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">¿Toma antiácidos?</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md ">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">¿Toma analgésicos?</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="">¿Le han practicado alguna cirugía?</label>
                        <textarea class="form-control form-control-lg" type="date" placeholder=""></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
