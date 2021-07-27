<template>
    <div class="spin-embadded" v-bind:class="{'spin-active': loading}">
        <div class="mb-25" v-if="componentEnabled === 'cuestionarioMastografia'">
            <cuestionario-mastografia-component :disabled="false" v-model="cuestionarioMastografia">
            </cuestionario-mastografia-component>
        </div>
        <div class="mb-25"
            v-if="componentEnabled === 'cuestionarioMastografia' || componentEnabled === 'interpretacionUltrasonidos'">
            <interpretacion-ultrasonidos-component :disabled="false" v-model="interpretacionUltrasonidos">
            </interpretacion-ultrasonidos-component>
        </div>
        <div class="mb-25" v-if="componentEnabled === 'espermatobioscopiaDirecta'">
            <espermatobioscopia-directa-component :disabled="false" v-model="espermatobioscopiaDirecta">
            </espermatobioscopia-directa-component>
        </div>
        <div class="mb-25" v-if="componentEnabled === 'inseminacionArtificialHumana'">
            <inseminacion-artificial-component :disabled="false" v-model="inseminacionArtificialHumana">
            </inseminacion-artificial-component>
        </div>
        <div class="mb-25" v-if="componentEnabled === 'orinaPostEyaculado'">
            <orina-post-eyaculado-component :disabled="false" v-model="orinaPostEyaculado">
            </orina-post-eyaculado-component>
        </div>
        <div class="mb-25" v-if="componentEnabled === 'capacitacionEspermatica'">
            <prueba-capacitacion-component :disabled="false" v-model="capacitacionEspermatica">
            </prueba-capacitacion-component>
        </div>
        <div class="mb-25" v-if="componentEnabled === 'host'">
            <prueba-host-component :disabled="false" v-model="host"></prueba-host-component>
        </div>
        <div>
            <upload-file-component :disabled="false" v-model="files" :role="role"></upload-file-component>
        </div>
        <div>
            <div class="card">
                <div class="card-header">
                    <h4 for="cscDiagnosticos">Notas adicionales</h4>
                </div>
                <div class="card-body">
                    <textarea class="form-control form-control-lg" rows="5" id="cscDiagnosticos"
                        v-model="form.notes"></textarea>
                </div>
            </div>
        </div>
        <div class="loaded-spin text-center spin">
            <el-progress type="circle" :percentage="uploadPercentage" class="spin-center"></el-progress>
        </div>
    </div>

</template>

<script lang="ts" src="./TestUploadComponent.ts"></script>

<style lang="scss" scoped>
    .spin {
        width: 100%;
        height: -webkit-fill-available;
        height: stretch;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .spin-center {
        top: 50%;
    }

</style>
