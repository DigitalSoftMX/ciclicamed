<template>
    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Indicadores bioquímicos
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 row mx-0 p-0 mb-15 align-items-center">
                        <div class="col-12 mb-25">
                            <label for="">Últimos estudios de laboratorio</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 mb-25">
                            <label for="">Datos bioquímicos importantes</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 col-md-4 mb-25 mb-md-0">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">¿Se solicitaron estudios?</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="">¿Cúales?</label>
                            <textarea class="form-control form-control-lg" type="text" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 col-md-6 mb-25 mb-md-0">
                            <label for="">Día</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div><div class="col-12 col-md-6">
                            <label for="">Glucosa</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 col-md-6 mb-25 mb-md-0">
                            <label for="">Día</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div><div class="col-12 col-md-6">
                            <label for="">Glucosa</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-12 col-md-6 mb-25 mb-md-0">
                            <label for="">Día</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div><div class="col-12 col-md-6">
                            <label for="">Glucosa</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>