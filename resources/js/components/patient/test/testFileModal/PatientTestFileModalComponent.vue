<template>
    <div class="modal-info-confirmed modal fade show w-100 modal-dialog-pdf" :id="id" tabindex="-1" role="dialog"
        aria-modal="true">
        <div class="modal-dialog modal-dialog-centered rounded-bottom" role="document">
            <div class="modal-content rounded-bottom">
                <div class="modal-header e-info-header bg-primary text-center py-2">
                    <h6 class="modal-title e-info-title text-white">Resultados</h6>
                    <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" data-dismiss="modal"
                        aria-label="Close">
                        <img-component url="/svg/close.svg" alt="Cerrar" styleData="filter: invert(1);"></img-component>
                    </button>
                </div>
                <div class="modal-body p-0">
                    <div>
                        <div class="px-3">
                            <div class="btn-group atbd-button-group btn-group-normal my-2 bg-white">
                                <button type="button" class="btn btn-default btn-squared btn-outline-primary "
                                    v-for="(file, index) in results.files" :key="`ptfmc${index}`"
                                    @click="selectPDF(file)">{{file}}</button>
                            </div>
                        </div>
                        <div id="example1" class="pdf"></div>
                    </div>
                    <div class="mt-25">
                        <div class="mb-25" v-if="componentEnabled === 'cuestionarioMastografia'">
                            <cuestionario-mastografia-component :disabled="true" v-model="cuestionarioMastografia">
                            </cuestionario-mastografia-component>
                        </div>
                        <div class="mb-25"
                            v-if="componentEnabled === 'interpretacionUltrasonidos' || componentEnabled === 'cuestionarioMastografia'">
                            <interpretacion-ultrasonidos-component :disabled="true" v-model="interpretacionUltrasonidos">
                            </interpretacion-ultrasonidos-component>
                        </div>
                        <div class="mb-25" v-if="componentEnabled === 'espermatobioscopiaDirecta'">
                            <espermatobioscopia-directa-component :disabled="true" v-model="espermatobioscopiaDirecta">
                            </espermatobioscopia-directa-component>
                        </div>
                        <div class="mb-25" v-if="componentEnabled === 'inseminacionArtificialHumana'">
                            <inseminacion-artificial-component :disabled="true" v-model="inseminacionArtificialHumana">
                            </inseminacion-artificial-component>
                        </div>
                        <div class="mb-25" v-if="componentEnabled === 'orinaPostEyaculado'">
                            <orina-post-eyaculado-component :disabled="true" v-model="orinaPostEyaculado">
                            </orina-post-eyaculado-component>
                        </div>
                        <div class="mb-25" v-if="componentEnabled === 'capacitacionEspermatica'">
                            <prueba-capacitacion-component :disabled="true" v-model="capacitacionEspermatica">
                            </prueba-capacitacion-component>
                        </div>
                        <div class="mb-25" v-if="componentEnabled === 'host'">
                            <prueba-host-component :disabled="true" v-model="host"></prueba-host-component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PatientTestFileModalComponent.ts"></script>

<style scoped>
    @import './PatientTestFileModalComponent.scss';

</style>
