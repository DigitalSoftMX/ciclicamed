<template>
    <div class="card-body row p-0">
        <div class="col-12">
            <div class="col-12 mb-25">
                <label for="">Padecimiento
                    actual</label>
                <textarea class="form-control form-control-lg" id="" rows="3" name="" value=""></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Exploración
                    física</label>
                <textarea class="form-control form-control-lg" id="" rows="3" name=""
                    value=""></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Gabinete y
                    laboratoria</label>
                <textarea class="form-control form-control-lg" id="" rows="3"
                    placeholder="" name="" value=""></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Impresión
                    diagnostica</label>
                <textarea class="form-control form-control-lg" id="" rows="3" name=""
                    value=""></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Tratamiento</label>
                <textarea class="form-control form-control-lg" id="" rows="3" name=""
                    value=""></textarea>
            </div>
            <div class="col-12 mb-25">
                <label for="">Plan
                    médico</label>
                <textarea class="form-control form-control-lg" id="" rows="3" name="" value=""></textarea>
            </div>
        </div>

        <div class="col-12">
            <h4 class="col-md-12 m-0 mt-3 color-text-1 mb-25">Pronóstico</h4>
            <div class="d-flex justify-content-between">
                <div class="col-6 mb-25">
                    <label for="">Para la
                        vida</label>
                    <select class="form-control form-control-lg" id="" name="anx1_pronos">
                        <option value="-1">Seleccione una opción</option>
                        <option value="Bueno">Bueno</option>
                        <option value="Reservado">Reservado</option>
                        <option value="Malo">Malo</option>
                    </select>
                </div>
                <div class="col-6 mb-25">
                    <label for="">Para la función</label>
                    <select class="form-control form-control-lg" id="" name="anx1_fun">
                        <option value="-1">Seleccione una opción</option>
                        <option value="Bueno">Bueno</option>
                        <option value="Reservado">Reservado</option>
                        <option value="Malo">Malo</option>
                    </select>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" src="./TratamientoComponent.ts"></script>
