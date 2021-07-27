<template>
    <div class="card card-md mb-4 spin-embadded" v-bind:class="{'spin-active': load}">
        <div class="card-header  py-20">
            <h6>Subir resultados (3 archivos máximo)</h6>
        </div>
        <div class="card-body">
            <div class="atbd-tag-wrap">
                <div class="atbd-upload">
                    <div class="atbd-upload mb-25" @click='click' @dragover="dragOver" @dragleave="dragLeave"
                        @drop="dropFile">
                        <div class="atbd-upload-avatar media-import mb-25 dropzone-lg-s"
                            v-bind:class="{'upload-drag': isFileOver}">
                            <p class="color-light mt-0 fs-15">Suelta el o los archivos a subir o de click para
                                seleccionarlos
                            </p>
                        </div>
                        <div class="avatar-up">
                            <input id='ufcUpload' type="file" name="upload-avatar-input" class="upload-avatar-input"
                                multiple :accept="acceptFiles" @change='onChange'>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow-none mb-25">
                <div class="card-header">
                    <h4>Archivos seleccionados</h4>
                </div>
                <div class="card-body rounded-bottom row mx-0">
                    <div v-for="(file, index) in fileList" :key="index" class="col-12 col-md-3 mb-25">
                        <div class="fileM-single">
                            <div class="fileM-card ">
                                <div class="card border-0">
                                    <div class="card-body ">
                                        <div class="fileM-img">
                                            <img-component url="/svg/pdf.svg" alt="PDF"></img-component>
                                        </div>
                                        <p class="fileM-excerpt">{{file.name}}</p>
                                        <div class="fileM-action">
                                            <div class="fileM-action__right ">
                                                <div class="dropdown dropleft position-absolute">
                                                    <img-component url="/svg/delete.svg" alt="Borrar"
                                                        @click="deleteFileSelected(index)"></img-component>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="fileList.length === 0" class="col-12 text-center">
                        <img-component url="/svg/empty.svg" alt="Vacío" cssClass="w-25"></img-component>
                        <p>Ningún archivo seleccionado</p>
                    </div>
                </div>
                <div class="card-footer" v-if="upload === true">
                    <button type="button" class="btn btn-primary btn-lg btn-squared btn-block bg-primary"
                        @click="uploadFile">Subir resultados</button>
                </div>
            </div>
        </div>
        <div class="loaded-spin text-center spin" v-if="load">
            <el-progress type="circle" :percentage="uploadPercentage" class="spin-center"></el-progress>
        </div>
    </div>

    <error-alert-component id="upfUploadError" :errors="errors" :title="'Error al actualizar los datos del perfil'">
    </error-alert-component>
    <!--Modal de exito-->
    <success-alert-component id="upfUploadSuccess" message="Archivos subidos" :title="'Archivos subidos correctamente'">
    </success-alert-component>
</template>

<script lang="ts" src="./UploadFileComponent.ts"></script>

<style scoped>
    @import './UploadFileComponent.scss';

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
