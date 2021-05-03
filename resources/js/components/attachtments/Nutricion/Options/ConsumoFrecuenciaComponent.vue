<template>
    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Consumo de frecuencia y cantidad
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-6 row mx-0 p-0 mb-15 align-items-center">
                        <div class="col-4">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">Alcohol</label>
                            </div>
                        </div>
                        <div class="col-8">
                            <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                                <option value="Dia">Día</option>
                                <option value="Semana">Semana</option>
                                <option value="Mes">Mes</option>
                                <option value="Trimestre">Trimestre</option>
                                <option value="Anio">Año</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-6 row mx-0 p-0 mb-25 align-items-center">
                        <div class="col-4">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">Tabaco</label>
                            </div>
                        </div>
                        <div class="col-8">
                            <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                                <option value="Dia">Día</option>
                                <option value="Semana">Semana</option>
                                <option value="Mes">Mes</option>
                                <option value="Trimestre">Trimestre</option>
                                <option value="Anio">Año</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-6 row mx-0 p-0 align-items-center">
                        <div class="col-4">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                <label class="custom-control-label" for="switch-s1">Café</label>
                            </div>
                        </div>
                        <div class="col-8">
                            <select name="select-size-1" id="select-size-1" class="form-control  form-control-lg">
                                <option value="Dia">Día</option>
                                <option value="Semana">Semana</option>
                                <option value="Mes">Mes</option>
                                <option value="Trimestre">Trimestre</option>
                                <option value="Anio">Año</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>