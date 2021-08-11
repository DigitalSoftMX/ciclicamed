<template>
    <div class="p-5 mt-25">
        <div class="error-page text-center">
            <img-component url="/svg/noConsult.svg" cssClass="svg w-50" alt="Error"></img-component>
            <h5 class="fw-500 display-3 mt-5">No hay consulta en curso</h5>
            <div class="content-center mt-25">
                <button type="button" class="btn btn-primary btn-default btn-lg btn-squared px-30"
                    @click="goToPrevious">
                    Regresar
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

/** 
 * @description Componente que muestra un mensaje predefinido de que no existen consultas en curso (Administrador, Doctor y Enfermer), mediante un div
 * @class NoConsultComponent
 * @example <no-consult-component></no-consult-component>
*/
    import {
        defineComponent
    } from '@vue/runtime-core';

    export default defineComponent({
        components: {},
        emits: [],
        props: {},
        /**
        * Variables del componente
        * @member NoConsultComponent.data
        * @property {string} path Guarda la URL actual de la carpeta donde se encuentra alojado (local o en servidor)
        */
        data() {
            return {
                path: ((document.head.querySelector('meta[name="api-base-url"]') as any) !.content as string)
            };
        },
        mounted() {},
        watch: {},
        methods: {
            /** 
             * Redirecciona a la dirección de inicio
             * @function NoConsultComponent.goToPrevious
            */
            goToPrevious() {
                window.location.href = `${this.path}/app/inicio`;
            }
        },
    })

</script>
