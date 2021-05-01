<template>
    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 row justify-content-between p-0 w-100">
            <div class="col-12 col-md-4">
                <label for="">Número de fetos</label>
                <input class="form-control form-control-lg" type="text" placeholder="#">
            </div>
            <div class="col-12 col-md-8">
                <label for="">Múltiple corionicidad</label>
                <input class="form-control form-control-lg" type="text" placeholder="">
            </div>
        </div>

        <div class="col-12 mb-25 atbd-collapse atbd-collapse-custom p-0">
            <calculo-riesgo-feto-component id="rcrcFeto1" title="Feto 1"></calculo-riesgo-feto-component>
            <calculo-riesgo-feto-component id="rcrcFeto2" title="Feto 2"></calculo-riesgo-feto-component>
            <calculo-riesgo-feto-component id="rcrcFeto3" title="Feto 3"></calculo-riesgo-feto-component>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcDoppler" aria-expanded="true"
                    aria-controls="rcrcDoppler">
                    <i class="la la-angle-right"></i>
                    Doppler de arterias uterinas
                </a>
            </div>
            <div id="rcrcDoppler" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 justify-content-between align-items-center mb-25">
                        <div class="col-12">
                            <label for="">IP arteria uterina derecha</label>
                        </div>
                        <div class="col-12 row align-items-center justify-content-between">
                            <div class="col-md-8">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-12 col-md-4 tbd-switch-wrap">
                                <div class="custom-control custom-switch switch-primary switch-lg ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Notch</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 justify-content-between align-items-center mb-25">
                        <div class="col-12">
                            <label for="">IP arteria uterina izquierda</label>
                        </div>
                        <div class="col-12 row align-items-center justify-content-between">
                            <div class="col-md-8">
                                <input class="form-control form-control-lg" type="text" placeholder="">
                            </div>
                            <div class="col-12 col-md-4 tbd-switch-wrap">
                                <div class="custom-control custom-switch switch-primary switch-lg ">
                                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                                    <label class="custom-control-label" for="switch-s1">Notch</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 justify-content-between align-items-center mb-25">
                        <div class="col-12">
                            <label for="">IP medio de arterias
                                uterinas</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 p-0">
            <label for="">Longitud cervical</label>
            <div class="input-group col-12 p-0">
                <input class="form-control form-control-lg" type="number" placeholder="">
                <div class="input-group-append">
                    <span class="input-group-text" id="">mm</span>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcMarcadoresSericos" aria-expanded="true"
                    aria-controls="rcrcMarcadoresSericos">
                    <i class="la la-angle-right"></i>
                    Marcadores séricos
                </a>
            </div>
            <div id="rcrcMarcadoresSericos" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">Fecha de la toma</label>
                            <input class="form-control form-control-lg" type="date" placeholder="">
                        </div>
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">Fecha de procesamiento</label>
                            <input class="form-control form-control-lg" type="date" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">B-HGC</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">MoM</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">PAPP-A</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">MoM</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-10">
                            <label for="">PIGF</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="">MoM</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#rcrcCalculoRiesgo" aria-expanded="true"
                    aria-controls="rcrcCalculoRiesgo">
                    <i class="la la-angle-right"></i>
                    Cálculo de riesgo
                </a>
            </div>
            <div id="rcrcCalculoRiesgo" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="row mx-0">
                    <div class="col-12 mb-10 row mx-0">
                        <div class="col-12 col-md-6 mb-15">
                            <label for="">Para preclamsia antes de 34 semanas</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6 mb-15">
                            <label for="">Para restricción de crecimiento antes de 37 semanas</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="">Para parto pretérmino antes de 34 semanas</label>
                            <input class="form-control form-control-lg" type="text" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from '@vue/runtime-core';

export default defineComponent({
    components: {
        CalculoRiesgoFetoComponent: require('./CalculoRiesgoFetoComponent.vue').default,
    },
    emits: [],
    props: {
    },
    data() {
        return {}
    },
    mounted() {
    },
    methods: {
    },
})
</script>
