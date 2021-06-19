<template>
    <div class="breadcrumb-main px-3">
        <h4 class="breadcrumb-title mb-25 mb-md-0">Subir resultados</h4>
    </div>

    <div class="row mx-0">
        <div class="col-12 col-lg-3 mb-25 mb-lg-0">
            <div class="mb-25">
                <user-bio-component></user-bio-component>
            </div>
            <button class="btn btn-danger btn-lg btn-squared w-100">Guardar resultados</button>
        </div>

        <div class="col-12 col-lg-9">
            <div class="mb-25">
                <mastografia-component v-model="interpretacionUltrasonidos" :disabled="false"></mastografia-component>
            </div>
            <div class="mb-25">
                <espermatobioscopia-directa-component :disabled="false"></espermatobioscopia-directa-component>
            </div>
            <div class="mb-25">
                <inseminacion-artificial-component :disabled="false"></inseminacion-artificial-component>
            </div>
            <div class="mb-25">
                <orina-post-eyaculado-component :disabled="false"></orina-post-eyaculado-component>
            </div>
            <div class="mb-25">
                <prueba-capacitacion-component :disabled="false"></prueba-capacitacion-component>
            </div>
            <div class="mb-25">
                <prueba-host-component :disabled="false"></prueba-host-component>
            </div>
            <div>
                <upload-file-component></upload-file-component>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./TestUploadComponent.ts"></script>

<style lang="scss" scoped>
</style>
