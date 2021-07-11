<template>
    <div class="card shadow-none border mb-25">
        <div class="card-header">
            <h4 class="mb-25 mb-md-0">Forma de pago</h4>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 radio-horizontal-list row mx-0 p-0">
                <div class="col-12 col-md-6 mb-25 align-self-center row mx-0 mb-25 p-0">
                    <div class="col-6 radio-theme-default custom-radio mx-0">
                        <input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl1">
                        <label for="radio-hl1">
                            <span class="radio-text">Efectivo</span>
                        </label>
                    </div>
                    <div class="col-6 radio-theme-default custom-radio mx-0">
                        <input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl2">
                        <label for="radio-hl2">
                            <span class="radio-text">Tarjeta</span>
                        </label>
                    </div>
                </div>
                <div class="col-12 col-md-6 mb-25 px-0">
                    <label for="ccCitologiaCervical">Número de tarjeta</label>
                    <input class="form-control form-control-lg" type="text">
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="card shadow-none border mb-4">
        <div class="card-header">
            <h4 class="mb-25 mb-md-0">Factura</h4>
            <div class="custom-control custom-switch switch-primary switch-md ">
                <input type="checkbox" class="custom-control-input" id="ccLeucorrea">
                <label class="custom-control-label" for="ccLeucorrea"></label>
            </div>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 col-md-6 mb-25">
                <label for="ccLeucorreaDescription">Nombre</label>
                <input type="text" class="form-control form-control-lg" id="ccLeucorreaDescription">
            </div>
            <div class="col-12 col-md-6 mb-25">
                <label for="ccLeucorreaDescription">RFC</label>
                <input type="text" class="form-control form-control-lg" id="ccLeucorreaDescription">
            </div>
            <div class="col-12 col-md-6 mb-25">
                <label for="ccLeucorreaDescription">Correo</label>
                <input type="text" class="form-control form-control-lg" id="ccLeucorreaDescription">
            </div>
            <div class="col-12 col-md-6 mb-25">
                <label for="ccLeucorreaDescription">Teléfono</label>
                <input type="text" class="form-control form-control-lg" id="ccLeucorreaDescription">
            </div>
            <div class="col-12 col-md-6 mb-25 mb-md-0">
                <label for="ccLeucorreaDescription">CFDI</label>
                <select-component id="pycCFDI" :data="cdfiList" firstText="Seleccione un tipo de CFDI">
                </select-component>
            </div>
            <div class="col-12 col-md-6">
                <label for="ccLeucorreaDescription">País</label>
                <select-component id="pycPais" :data="countryList" firstText="Seleccione un país"></select-component>
            </div>
        </div>
    </div> -->

    <div class="card shadow-none border mb-4">
        <div class="card-header">
            <h4 class="mb-25 mb-md-0">Deuda</h4>
            <div class="custom-control custom-switch switch-primary switch-md ">
                <input type="checkbox" class="custom-control-input" id="ccLeucorrea">
                <label class="custom-control-label" for="ccLeucorrea"></label>
            </div>
        </div>
        <div class="card-body row mx-0">
            <div class="col-12 row mx-0 mb-25 px-0">
                <h6 class="col-7">Pago total</h6>
                <h6 class="col-5 text-right">${{}}</h6>
            </div>
            <div class="col-12 mb-25 row px-0 mx-0 align-items-center">
                <h6 class="col-8">Pago inicial</h6>
                <input type="number" class="col-4 form-control form-control-lg" id="ccLeucorreaDescription">
            </div>
            <div class="col-12 row mx-0 border-top pt-3 px-0">
                <h6 class="col-7">Pago restante</h6>
                <h6 class="col-5 text-right">${{}}</h6>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PaymentInfoComponent.ts"></script>

<style lang="scss">
</style>
