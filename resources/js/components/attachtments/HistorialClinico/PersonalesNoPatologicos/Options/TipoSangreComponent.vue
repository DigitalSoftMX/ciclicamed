<template>
    <div class="card-single mb-4">
        <div class="card card-default card-md bg-normal card-bordered">
            <div class="card-header">
                <h6>Tipo de Sangre</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="tipoSangreCheck" checked="">
                    <label class="custom-control-label" for="switch-s1"></label>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex">
                    <select name="select-size-1" class="form-control form-control-lg" id="tipoSangreTimesOptions">
                        <option value="-1">Seleccione un Tipo de Sangre</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>
