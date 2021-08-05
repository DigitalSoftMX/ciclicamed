<template>
    <div class="card">
        <div class="card-header">
            <h6>Cirugía endoscópica</h6>
        </div>
        <div class="card-body row mx-0 atbd-collapse atbd-collapse-custom">
            <div class="col-12 mb-25 card shadow-none p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecCervix" aria-expanded="true"
                        aria-controls="cecCervix">
                        <i class="la la-angle-right"></i>
                        Cérvix
                    </a>
                </div>
                <div :disabled="disabled" id="cecCervix" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecPenetracion">Penetración</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecPenetracion"
                            v-model="formData.cervix.penetracion" :value="formData.cervix.penetracion">
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
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecOCE" v-model="formData.cervix.oce"
                            :value="formData.cervix.oce">
                            <option value="Permeable">Permeable</option>
                            <option value="EstenoicoPermeabiliza">Estenóico (se permeabiliza)</option>
                            <option value="EstenoicoNoPermeabiliza">Estenótico (no se permeabiliza)</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecCanalEndocervical">Canal endocervical</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecCanalEndocervical"
                            v-model="formData.cervix.canalEndocervical"
                            :value="formData.cervix.canalEndocervical">
                            <option value="TubularPermeable">Tubular permeable</option>
                            <option value="EstenoicoPermeabiliza">Estenóico (se permeabiliza)</option>
                            <option value="EstenoicoNoPermeabiliza">Estenótico (no se permeabiliza)</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="">Epitelio glandular</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecEpitelioGlandular"
                            v-model="formData.cervix.epitelioGlandular"
                            :value="formData.cervix.epitelioGlandular">
                            <option value="Atrofico">Atrófico</option>
                            <option value="Adecuado">Adecuado</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="">OCI</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecOCI" v-model="formData.cervix.oci"
                            :value="formData.cervix.oci">
                            <option value="TubularPermeable">Tubular permeable</option>
                            <option value="EstenoicoPermeabiliza">Estenóico (se permeabiliza)</option>
                            <option value="EstenoicoNoPermeabiliza">Estenótico (no se permeabiliza)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card shadow-none p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecUtero" aria-expanded="true"
                        aria-controls="cecUtero">
                        <i class="la la-angle-right"></i>
                        Útero
                    </a>
                </div>
                <div :disabled="disabled" id="cecUtero" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 col-md-6 mb-25 mb-md-0">
                        <label for="cecPosicion">Posición</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecPosicion"
                            v-model="formData.utero.posicion" :value="formData.utero.posicion">
                            <option value="AVE">AVE</option>
                            <option value="Central">Central</option>
                            <option value="RVF">RVF</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card shadow-none p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecCavidadUterina" aria-expanded="true"
                        aria-controls="cecCavidadUterina">
                        <i class="la la-angle-right"></i>
                        Cavidad uterina
                    </a>
                </div>
                <div :disabled="disabled" id="cecCavidadUterina" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecDistension">Distensión</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecDistension"
                            v-model="formData.cavidadUterina.distension">
                            <option value="AVE">AVE</option>
                            <option value="Central">Central</option>
                            <option value="RVF">RVF</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecDefectos">Defectos</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecDefectos"
                            v-model="formData.cavidadUterina.defectos">
                            <option value="Proyecciones">Proyecciones</option>
                            <option value="Hundimiento">Hundimiento</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="cecTamanio">Tamaño</label>
                        <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecTamanio"
                            v-model="formData.cavidadUterina.tamanio"></textarea>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="cecForma">Forma</label>
                        <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecForma"
                            v-model="formData.cavidadUterina.forma"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card shadow-none p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecEndometrio" aria-expanded="true"
                        aria-controls="cecEndometrio">
                        <i class="la la-angle-right"></i>
                        Endometrio
                    </a>
                </div>
                <div :disabled="disabled" id="cecEndometrio" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 mb-25">
                        <div class="custom-control custom-switch switch-primary switch-md">
                            <input type="checkbox" class="custom-control-input" :disabled="disabled" id="cecAtrofico"
                                v-model="formData.endometrio.atrofico" :checked="formData.endometrio.atrofico">
                            <label class="custom-control-label" for="cecAtrofico">Atrófico</label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecProliferativo">Proliferativo</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecProliferativo"
                            v-model="formData.endometrio.proliferativo">
                            <option value="Temprano">Temprano</option>
                            <option value="Tardio">Tardío</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-25">
                        <label for="cecSecretor">Secretor</label>
                        <select class="form-control form-control-lg" :disabled="disabled" id="cecSecretor"
                            v-model="formData.endometrio.secretor">
                            <option value="Temprano">Temprano</option>
                            <option value="Tardio">Tardío</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="">Anormal</label>
                        <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecAnormal"
                            v-model="formData.endometrio.anormal"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-25 card shadow-none p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecOstium" aria-expanded="true"
                        aria-controls="cecOstium">
                        <i class="la la-angle-right"></i>
                        Ostium
                    </a>
                </div>
                <div :disabled="disabled" id="cecOstium" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <div class="col-12 mb-25">
                        <div class="card shadow-none">
                            <div class="card-header">
                                <h6>Derecho</h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="cecDerechoChecked"
                                        v-model="formData.ostium.derecho.checked"
                                        :checked="formData.ostium.derecho.checked">
                                    <label class="custom-control-label" for="cecDerechoChecked"></label>
                                </div>
                            </div>
                            <div class="card-body" v-show="formData.ostium.derecho.checked">
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecDerechoDescription"
                                    v-model="formData.ostium.derecho.description"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-25">
                        <div class="card shadow-none">
                            <div class="card-header">
                                <h6>Izquierdo</h6>
                                <div class="custom-control custom-switch switch-primary switch-md ">
                                    <input type="checkbox" class="custom-control-input" :disabled="disabled" id="cecIzquierdoChecked"
                                        v-model="formData.ostium.izquierdo.checked"
                                        :checked="formData.ostium.izquierdo.checked">
                                    <label class="custom-control-label" for="cecIzquierdoChecked"></label>
                                </div>
                            </div>
                            <div class="card-body" v-show="formData.ostium.izquierdo.checked">
                                <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecIzquierdoDescription"
                                    v-model="formData.ostium.izquierdo.description"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row mx-0 mb-25">
                        <div class="col-12 col-md-6">
                            <label for="cecVisible">Visible</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecVisible"
                                v-model="formData.ostium.visible"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="cecTomaBiopsia">Toma biopsia</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecTomaBiopsia"
                                v-model="formData.ostium.tomaBiopsia"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="cecColocacionDIU">Colocación DIU</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecColocacionDIU"
                                v-model="formData.ostium.colocacionDiu"></textarea>
                        </div>
                        <div class="col-12 col-md-6 mb-25">
                            <label for="cecResultadoBiopsia">Resultado biopsia</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecResultadoBiopsia"
                                v-model="formData.ostium.resultadoBiopsia"></textarea>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="cecPlanQuirurgico">Plan quirúrgico</label>
                            <textarea class="form-control form-control-lg" type="text" :disabled="disabled" id="cecPlanQuirurgico"
                                v-model="formData.ostium.planQuirurgico"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-25 card shadow-none p-0 rounded border">
                <div class="atbd-collapse-item__header active">
                    <a class="item-link" data-toggle="collapse" data-target="#cecNotas" aria-expanded="true"
                        aria-controls="cecNotas">
                        <i class="la la-angle-right"></i>
                        Notas
                    </a>
                </div>
                <div :disabled="disabled" id="cecNotas" class="atbd-collapse-item__body collapse card-body row mx-0">
                    <textarea class="form-control form-control-lg" type="text" rows="4" :disabled="disabled" id="cecNotas"
                        v-model="formData.notas"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CirugiaEndoscopicaComponent.ts"></script>
