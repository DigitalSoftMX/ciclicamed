<template>
    <div class="card-body p-0">
        <h5 class="title-ciclica">Climaterio y salud ósea</h5>
        <div class="form-row p-5">
            <div class="col-md-4 mb-2">
                <label for="" class="col-form-label col-form-label-lg mb-1">Ciclos menstruales</label>
                <input class="form-control form-control-lg" type="text" placeholder="">
            </div>
            <div class="col-md-4 mb-2">
                <label for="" class="col-form-label col-form-label-lg mb-1">Cantidad de sangrado mestrual</label>
                <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                    <option>Escaso</option>
                    <option>Normal</option>
                    <option>Abundante</option>
                </select>
            </div>
            <div class="col-md-4 mb-2">
                <label for="" class="col-form-label col-form-label-lg mb-1">Toallas por día</label>
                <input class="form-control form-control-lg" type="number" placeholder="#">
            </div>

            <div class="col-12 col-md-6 mb-25 d-flex align-items-center">
                <div class="custom-control custom-switch switch-primary switch-md  align-self-center">
                    <input type="checkbox" class="custom-control-input" id="dilgenorreaCheck" checked="">
                    <label class="custom-control-label" for="dilgenorreaCheck">Dilgenorrea</label>
                </div>
                <select class="form-control form-control-lg ml-3" name="#">
                    <option value="Leve">Leve</option>
                    <option value="Moderado">Moderado</option>
                    <option value="Severo">Severo</option>
                </select>
            </div>

            <div class="col-12 col-md-6 mb-25 d-flex align-items-center">
                <div class="custom-control custom-switch switch-primary switch-md  align-self-center">
                    <input type="checkbox" class="custom-control-input" id="bochornosCheck" checked="">
                    <label class="custom-control-label" for="bochornosCheck">Bochornos</label>
                </div>
                <select class="form-control form-control-lg ml-3" name="#">
                    <option value="Leve">Leve</option>
                    <option value="Moderado">Moderado</option>
                    <option value="Severo">Severo</option>
                </select>
            </div>

            <div class="form-row p-0">
                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="caidaCabelloCheck" checked="">
                        <label class="custom-control-label" for="caidaCabelloCheck">Caída del cabello</label>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="resequedadPielCheck" checked="">
                        <label class="custom-control-label" for="resequedadPielCheck">Resequedad de la piel</label>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="labilidadCheck" checked="">
                        <label class="custom-control-label" for="labilidadCheck">Labilidad</label>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="irritabilidadCheck" checked="">
                        <label class="custom-control-label" for="irritabilidadCheck">Irritabilidad</label>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="ansiedadCheck" checked="">
                        <label class="custom-control-label" for="ansiedadCheck">Ansiedad</label>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="nerviosismoCheck" checked="">
                        <label class="custom-control-label" for="nerviosismoCheck">Nerviosismo</label>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="cefaleaCheck" checked="">
                        <label class="custom-control-label" for="cefaleaCheck">Cefalea</label>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="insomnioCheck" checked="">
                        <label class="custom-control-label" for="insomnioCheck">Insomnio</label>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="alteracionLibidoCheck" checked="">
                        <label class="custom-control-label" for="alteracionLibidoCheck">Alteración del líbido</label>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-25">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                        <input type="checkbox" class="custom-control-input" id="resequedadVaginalCheck" checked="">
                        <label class="custom-control-label" for="resequedadVaginalCheck">Resequedad vaginal</label>
                    </div>
                </div>

            </div>

            <div class="col-12 col-md-6 mb-25 d-flex align-items-center">
                <div class="custom-control custom-switch switch-primary switch-md  align-self-center">
                    <input type="checkbox" class="custom-control-input" id="sudoracionCheck" checked="">
                    <label class="custom-control-label" for="sudoracionCheck">Sudoración</label>
                </div>
                <select class="form-control form-control-lg ml-3" name="#">
                    <option value="Leve">Leve</option>
                    <option value="Moderado">Moderado</option>
                    <option value="Severo">Severo</option>
                </select>
            </div>

            <div class="col-12 col-md-6 mb-25 d-flex align-items-center">
                <div class="custom-control custom-switch switch-primary switch-md  align-self-center">
                    <input type="checkbox" class="custom-control-input" id="incontinenciaUrinariaCheck" checked="">
                    <label class="custom-control-label" for="incontinenciaUrinariaCheck">Incontinencia Urinaria</label>
                </div>
                <select class="form-control form-control-lg ml-3" name="#">
                    <option value="Esfuerzo">Esfuerzo</option>
                    <option value="Urgencia">Urgencia</option>
                </select>
            </div>

            <div class="col-12 mb-25">
                <label for="">Notas</label>
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/text.svg" alt="Text logo">
                    </span>
                    <textarea class="form-control form-control-lg" id="" rows="3" name=""></textarea>
                </div>

            </div>

            <div class="card-footer p-0 ml-auto mr-auto">
                <button type="input" class="btn btn-rose">
                </button>
            </div>

        </div>
    </div>
</template>
