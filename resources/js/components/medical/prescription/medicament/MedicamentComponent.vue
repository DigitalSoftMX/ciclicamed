<template>
    <div class="card mb-25">
        <div class="card-header d-flex justify-items-between">
            <h4 class="mb-15 mb-md-0">Medicamento</h4>
            <button class="btn btn-icon btn-danger btn-circle button-size">
                <img src="/svg/delete.svg" alt="Delete logo" class="svg-white">
            </button>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 col-md-3 mb-25">
                <label for="">Medicamento</label>
                <input class="form-control form-control-lg" type="text" placeholder="Medicamento">
            </div>
            <div class="col-12 col-md-3 mb-25">
                <label for="">Presentación</label>
                <input class="form-control form-control-lg" type="text" placeholder="Presentación">
            </div>
            <div class="col-12 col-md-3 mb-25">
                <label for="">Dosis</label>
                <input class="form-control form-control-lg" type="text" placeholder="Dosis">
            </div>
            
            <div class="col-12 col-md-3 mb-25">
                <label for="">Frecuencia</label>
                <input class="form-control form-control-lg" type="text" placeholder="Frecuencia">
            </div>
            <div class="col-12 col-md-3">
                <label for="">Duración</label>
                <input class="form-control form-control-lg" type="text" placeholder="Duración">
            </div>
        </div>
    </div>
</template>

<style>
.button-size
{
    width: 40px !important;
    height: 40px !important;
}
.svg-white
{
    filter: invert(1);
}
</style>