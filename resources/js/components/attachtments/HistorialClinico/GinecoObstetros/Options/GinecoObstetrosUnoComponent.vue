<template>

    <div class="mb-4 p-0">
        <div class="col-12 row p-0 m-0">
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Menarca</label>
                <input class="form-control form-control-lg" type="number" placeholder="Edad en que comenzó"
                    name="anx1_menarca">
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Ritmo</label>
                <input class="form-control form-control-lg" type="number" placeholder="Ritmo" name="">
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Cantidad</label>
                <select class="form-control form-control-lg" id="" name="">
                    <option>Seleccione una opción</option>
                    <option>Escaso</option>
                    <option>Normal</option>
                    <option>Abundante</option>
                </select>
            </div>
            <div class="col-12 col-md-3 my-2 align-self-center">
                <label for="" class="col-form-label col-form-label-lg"><span class="mr-2" id=""></span>
                    Toallas por día</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/pound.svg" alt="Calendar logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Cantidad" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Dolor</label>
                <select class="form-control form-control-lg" id="" name="">
                    <option>Seleccione una opción</option>
                    <option>Leve</option>
                    <option>Moderado</option>
                    <option>Severo</option>
                </select>
            </div>
            <div class="col-12 col-md-9 my-2">
                <label for="" class="col-form-label col-form-label-lg">Tratamiento</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/text.svg" alt="Text logo">
                    </span>
                    <textarea type="text" class="form-control form-control-lg" id="" placeholder="Tratamiento"></textarea>
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">FUM</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/calendar.svg" alt="Calendar logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Fecha" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">IVSA</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/pound.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Inicio" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Parejas</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/pound.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Cantidad" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">MPF</label>
                <select class="form-control form-control-lg" id="" name="">
                    <option>Seleccione una opción</option>
                    <option>Actual</option>
                    <option>Previo</option>
                </select>
            </div>

            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Gestas</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/pound.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Cantidad" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Cesareas</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/pound.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Cantidad" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Partos</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/pound.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Cantidad" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Abortos</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/pound.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Cantidad" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Ectópicos</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/pound.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Cantidad" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Citología cervical</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/calendar.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Fecha" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">DOCMA</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/calendar.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Fecha" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Autoexploración</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/text.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Autoexploración" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">USG</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/text.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="USG" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Mastografía</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/text.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Mastografía" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Menopausia</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/text.svg" alt="Pound logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Menopausia" name="">
                </div>
            </div>
            <div class="col-12 col-md-3 my-2">
                <label for="" class="col-form-label col-form-label-lg">Antecedentes de infertilidad</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/text.svg" alt="Text logo">
                    </span>
                    <input class="form-control form-control-lg" type="number" placeholder="Antecedentes de infertilidad" name="">
                </div>
            </div>
        </div>
    </div>

</template>