<template>
    <div class="col-12 row p-3 mx-0 atbd-collapse atbd-collapse-custom">
        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#cecCervix" aria-expanded="true"
                    aria-controls="cecCervix">
                    <i class="la la-angle-right"></i>
                    Cérvix
                </a>
            </div>
            <div id="cecCervix" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecPenetracion">Penetración</label>
                        <select class="form-control form-control-lg" id="cecPenetracion" v-model="formDataCopy.cervix.penetracion" :value="formDataCopy.cervix.penetracion">
                            <option value="Posterior">Posterior</option>
                            <option value="Central">Central</option>
                            <option value="Anterior">Anterior</option>
                            <option value="Hipotrofico">Hipotrófico</option>
                            <option value="Eutrofico">Eutrófico</option>
                            <option value="Hipertrófico">Hipertrófico</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecOCE">OCE</label>
                        <select class="form-control form-control-lg" id="cecOCE" v-model="formDataCopy.cervix.oce" :value="formDataCopy.cervix.oce">
                            <option value="Permeable">Permeable</option>
                            <option value="EstenoicoPermeabiliza">Estenóico (se permeabiliza)</option>
                            <option value="EstenoicoNoPermeabiliza">Estenótico (no se permeabiliza)</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecCanalEndocervical">Canal endocervical</label>
                        <select class="form-control form-control-lg" id="cecCanalEndocervical" v-model="formDataCopy.cervix.canalEndocervical" :value="formDataCopy.cervix.canalEndocervical">
                            <option value="TubularPermeable">Tubular permeable</option>
                            <option value="EstenoicoPermeabiliza">Estenóico (se permeabiliza)</option>
                            <option value="EstenoicoNoPermeabiliza">Estenótico (no se permeabiliza)</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Epitelio glandular</label>
                        <select class="form-control form-control-lg" id="cecEpitelioGlandular" v-model="formDataCopy.cervix.epitelioGlandular" :value="formDataCopy.cervix.epitelioGlandular">
                            <option value="Atrofico">Atrófico</option>
                            <option value="Adecuado">Adecuado</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="">OCI</label>
                        <select class="form-control form-control-lg" id="cecOCI" v-model="formDataCopy.cervix.oci" :value="formDataCopy.cervix.oci">
                            <option value="TubularPermeable">Tubular permeable</option>
                            <option value="EstenoicoPermeabiliza">Estenóico (se permeabiliza)</option>
                            <option value="EstenoicoNoPermeabiliza">Estenótico (no se permeabiliza)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#cecUtero" aria-expanded="true"
                    aria-controls="cecUtero">
                    <i class="la la-angle-right"></i>
                    Útero
                </a>
            </div>
            <div id="cecUtero" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 col-md-6 mb-25 mb-md-0">
                        <label for="cecPosicion">Posición</label>
                        <select class="form-control form-control-lg" id="cecPosicion" v-model="formDataCopy.utero.posicion" :value="formDataCopy.utero.posicion">
                            <option value="AVE">AVE</option>
                            <option value="Central">Central</option>
                            <option value="RVF">RVF</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#cecCavidadUterina" aria-expanded="true"
                    aria-controls="cecCavidadUterina">
                    <i class="la la-angle-right"></i>
                    Cavidad uterina
                </a>
            </div>
            <div id="cecCavidadUterina" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecDistension">Distensión</label>
                        <select class="form-control form-control-lg" id="cecDistension" v-model="formDataCopy.cavidadUterina.distension">
                            <option value="AVE">AVE</option>
                            <option value="Central">Central</option>
                            <option value="RVF">RVF</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecDefectos">Defectos</label>
                        <select class="form-control form-control-lg" id="cecDefectos" v-model="formDataCopy.cavidadUterina.defectos">
                            <option value="Proyecciones">Proyecciones</option>
                            <option value="Hundimiento">Hundimiento</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="cecTamanio">Tamaño</label>
                        <textarea class="form-control form-control-lg" type="text" id="cecTamanio" v-model="formDataCopy.cavidadUterina.tamanio"></textarea>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="cecForma">Forma</label>
                        <textarea class="form-control form-control-lg" type="text" id="cecForma" v-model="formDataCopy.cavidadUterina.forma"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#cecEndometrio" aria-expanded="true"
                    aria-controls="cecEndometrio">
                    <i class="la la-angle-right"></i>
                    Endometrio
                </a>
            </div>
            <div id="cecEndometrio" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md">
                            <input type="checkbox" class="custom-control-input" id="cecAtrofico" v-model="formDataCopy.endometrio.atrofico" :checked="formDataCopy.endometrio.atrofico">
                            <label class="custom-control-label" for="cecAtrofico">Atrófico</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecProliferativo">Proliferativo</label>
                        <select class="form-control form-control-lg" id="cecProliferativo" v-model="formDataCopy.endometrio.proliferativo">
                            <option value="Temprano">Temprano</option>
                            <option value="Tardio">Tardío</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecSecretor">Secretor</label>
                        <select class="form-control form-control-lg" id="cecSecretor" v-model="formDataCopy.endometrio.secretor">
                            <option value="Temprano">Temprano</option>
                            <option value="Tardio">Tardío</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="">Anormal</label>
                        <textarea class="form-control form-control-lg" type="text" id="cecAnormal" v-model="formDataCopy.endometrio.anormal"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#cecOstium" aria-expanded="true"
                    aria-controls="cecOstium">
                    <i class="la la-angle-right"></i>
                    Ostium
                </a>
            </div>
            <div id="cecOstium" class="atbd-collapse-item__body collapse px-0 py-4">
                <div class="col-12 row mx-0">
                    <div class="col-12 row mx-0 mb-25">
                        <div class="col-12 mb-25">
                            <h6>Derecho</h6>
                        </div>
                        <div class="col-12">
                            <div class="custom-control custom-switch switch-primary switch-md ">
                                <input type="checkbox" class="custom-control-input" id="cecDerechoChecked" v-model="formDataCopy.ostium.derecho.checked" :checked="formDataCopy.ostium.derecho.checked">
                                <label class="custom-control-label" for="cecDerechoChecked">Visible</label>
                            </div>
                        </div>
                        <div class="col-12" v-show="formDataCopy.ostium.derecho.checked">
                            <textarea class="form-control form-control-lg" type="text" id="cecDerechoDescription" v-model="formDataCopy.ostium.derecho.description"></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 mb-25">
                        <div class="col-12 mb-25">
                            <h6>Izquierdo</h6>
                        </div>
                        <div class="col-12 col-md-2">
                            <div class="custom-control custom-switch switch-primary">
                                <input type="checkbox" class="custom-control-input" id="cecIzquierdoChecked" v-model="formDataCopy.ostium.izquierdo.checked" :checked="formDataCopy.ostium.izquierdo.checked">
                                <label class="custom-control-label" for="cecIzquierdoChecked">Visible</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-10" v-show="formDataCopy.ostium.izquierdo.checked">
                            <textarea class="form-control form-control-lg" type="text" id="cecIzquierdoDescription" v-model="formDataCopy.ostium.izquierdo.description"></textarea>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 mb-25">
                        <div class="col-12 col-md-6">
                            <label for="cecVisible">Visible</label>
                            <textarea class="form-control form-control-lg" type="text" id="cecVisible" v-model="formDataCopy.ostium.visible"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="cecTomaBiopsia">Toma biopsia</label>
                            <textarea class="form-control form-control-lg" type="text" id="cecTomaBiopsia" v-model="formDataCopy.ostium.tomaBiopsia"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="cecColocacionDIU">Colocación DIU</label>
                            <textarea class="form-control form-control-lg" type="text" id="cecColocacionDIU" v-model="formDataCopy.ostium.colocacionDiu"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="cecResultadoBiopsia">Resultado biopsia</label>
                            <textarea class="form-control form-control-lg" type="text" id="cecResultadoBiopsia" v-model="formDataCopy.ostium.resultadoBiopsia"></textarea>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="cecPlanQuirurgico">Plan quirúrgico</label>
                            <textarea class="form-control form-control-lg" type="text" id="cecPlanQuirurgico" v-model="formDataCopy.ostium.planQuirurgico"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-25 card card-default card-md p-0">
            <div class="atbd-collapse-item__header active">
                <a class="item-link" data-toggle="collapse" data-target="#cecNotas" aria-expanded="true"
                    aria-controls="cecNotas">
                    <i class="la la-angle-right"></i>
                    Notas
                </a>
            </div>
            <div id="cecNotas" class="atbd-collapse-item__body collapse py-4">
                <div class="col-12 row mx-0 align-items-center">
                    <div class="col-12">
                        <textarea class="form-control form-control-lg" type="text" rows="4" id="cecNotas" v-model="formDataCopy.notas"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CirugiaEndoscopicaComponent.ts"></script>
