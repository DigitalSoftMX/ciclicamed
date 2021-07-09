<template>
    <div class="mb-25" v-if="componentEnabled === 'cuestionarioMastografia'">
        <cuestionario-mastografia-component v-model="cuestionarioMastografia"></cuestionario-mastografia-component>
    </div>
    <div class="mb-25" v-if="componentEnabled === 'cuestionarioMastografia' || componentEnabled === 'interpretacionUltrasonidos'">
        <interpretacion-ultrasonidos-component v-model="interpretacionUltrasonidos"></interpretacion-ultrasonidos-component>
    </div>
    <div class="mb-25" v-if="componentEnabled === 'espermatobioscopiaDirecta'">
        <espermatobioscopia-directa-component v-model="espermatobioscopiaDirecta"></espermatobioscopia-directa-component>
    </div>
    <div class="mb-25" v-if="componentEnabled === 'inseminacionArtificialHumana'">
        <inseminacion-artificial-component v-model="inseminacionArtificialHumana"></inseminacion-artificial-component>
    </div>
    <div class="mb-25" v-if="componentEnabled === 'orinaPostEyaculado'">
        <orina-post-eyaculado-component v-model="orinaPostEyaculado"></orina-post-eyaculado-component>
    </div>
    <div class="mb-25" v-if="componentEnabled === 'capacitacionEspermatica'">
        <prueba-capacitacion-component v-model="capacitacionEspermatica"></prueba-capacitacion-component>
    </div>
    <div class="mb-25" v-if="componentEnabled === 'host'">
        <prueba-host-component v-model="host"></prueba-host-component>
    </div>
    <div>
        <upload-file-component v-model="files"></upload-file-component>
    </div>
</template>

<script lang="ts" src="./TestUploadComponent.ts"></script>

<style lang="scss" scoped>
</style>
