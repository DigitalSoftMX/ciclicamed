<template>
    <div class="atbd-collapse-item">
        <div class="atbd-collapse-item__header active p-0">
            <a class="item-link" data-toggle="collapse" :data-target="`#${id}`" aria-expanded="true"
                :aria-controls="id">
                <i class="la la-angle-right"></i>
                {{ title }}
            </a>
        </div>

        <div :id="id" class="collapse card card-default card-md p-4" :data-parent="`#${id}`">
            <div class="row mx-0">

                <div class="col-12 mb-155 row mx-0 p-0">
                    <div class="input-group-lg col-12 col-md-4 mb-15">
                        <label for="">Localización</label>
                        <input class="form-control form-control-lg" type="text" placeholder="">
                    </div>
                    <div class="input-group-lg col-12 col-md-4 mb-15">
                        <label for="">LCC</label>
                        <input class="form-control form-control-lg" type="number" placeholder="mm">
                    </div>
                    <div class="col-12 col-md-4 mb-15">
                        <label for="">Semanas</label>
                        <input class="form-control form-control-lg" type="number" placeholder="">
                    </div>
                    <div class="col-12 col-md-4 mb-15">
                        <label for="">FCF</label>
                        <input class="form-control form-control-lg" type="number" placeholder="latidos por minuto">
                    </div>
                    <div class="col-md-8 mb-15">
                        <label for="">Translucencia
                            nucal</label>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-12 col-md-4">
                                <input class="form-control form-control-lg" type="text" placeholder="/">
                            </div>
                            <div class="col-12 col-md-4">
                                <input class="form-control form-control-lg" type="number" placeholder="/">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-15 align-self-center">
                        <div class="custom-control custom-switch switch-primary">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">IP ducto venoso</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-15">
                        <label for="">Onda "A"</label>
                        <input class="form-control form-control-lg" type="text" placeholder="">
                    </div>
                    <div class="col-12 col-md-4 mb-15 align-self-center">
                        <div class="custom-control custom-switch switch-primary">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Hueso nasal</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-15 align-self-center">
                        <div class="custom-control custom-switch switch-primary">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1">Regurgitacion Tricuspídea</label>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 mb-15">
                        <label for="">Defectos
                            mayores</label>
                        <input class="form-control form-control-lg" type="text" placeholder="">
                    </div>
                    <div class="col-12 col-md-4 mb-15">
                        <label for="">Placenta</label>
                        <input class="form-control form-control-lg" type="text" placeholder="">
                    </div>
                </div>

                <div class="row col-12 mx-0 p-0">
                    <h6 class="col-md-12 color-text-1 text-center">
                        Cálculo de riesgo de Feto
                    </h6>
                    <div class="col-12 mb-15">
                        <h6 class="mb-15">Trisotomía 21</h6>
                        <div class="form-row col-12">
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Riesgo
                                    Basal(EDAD)</label>
                                <div class="with-icon">
                                    <span class="mr-5">
                                        1:
                                    </span>
                                    <input class="form-control form-control-lg" type="number" placeholder="" name="">
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Riesgo
                                    Ajustado(USG)</label>
                                <div class="with-icon">
                                    <span class="mr-5">
                                        1:
                                    </span>
                                    <input class="form-control form-control-lg" type="number" placeholder="" name="">
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Riesgo
                                    Ajustado (DUO-TEST)</label>
                                <div class="with-icon">
                                    <span class="mr-5">
                                        1:
                                    </span>
                                    <input class="form-control form-control-lg" type="number" placeholder="" name="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 mb-15">
                        <h6 class="mb-15">Trisotomía 18</h6>
                        <div class="form-row col-12">
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Riesgo
                                    Basal(EDAD)</label>
                                <div class="with-icon">
                                    <span class="mr-5">
                                        1:
                                    </span>
                                    <input class="form-control form-control-lg" type="number" placeholder="" name="">
                                </div>
                            </div>

                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Riesgo
                                    Ajustado(USG)</label>
                                <div class="with-icon">
                                    <span class="mr-5">
                                        1:
                                    </span>
                                    <input class="form-control form-control-lg" type="number" placeholder="" name="">
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Riesgo
                                    Ajustado (DUO-TEST)</label>
                                <div class="with-icon">
                                    <span class="mr-5">
                                        1:
                                    </span>
                                    <input class="form-control form-control-lg" type="number" placeholder="" name="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 mb-15">
                        <h6 class="mb-15">Trisotomía 13</h6>
                        <div class="form-row col-12">
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Riesgo
                                    Basal(EDAD)</label>
                                <div class="with-icon">
                                    <span class="mr-5">
                                        1:
                                    </span>
                                    <input class="form-control form-control-lg" type="number" placeholder="" name="">
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Riesgo
                                    Ajustado(USG)</label>
                                <div class="with-icon">
                                    <span class="mr-5">
                                        1:
                                    </span>
                                    <input class="form-control form-control-lg" type="number" placeholder="" name="">
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-15">
                                <label for="">Riesgo
                                    Ajustado (DUO-TEST)</label>
                                <div class="with-icon">
                                    <span class="mr-5">
                                        1:
                                    </span>
                                    <input class="form-control form-control-lg" type="number" placeholder="" name="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        defineComponent
    } from '@vue/runtime-core';

    export default defineComponent({
        props: {
            id: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        },
    })

</script>
