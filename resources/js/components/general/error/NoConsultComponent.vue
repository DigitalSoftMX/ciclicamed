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
    import {
        defineComponent
    } from '@vue/runtime-core';

    export default defineComponent({
        components: {},
        emits: [],
        props: {},
        data() {
            return {
                path: ((document.head.querySelector('meta[name="api-base-url"]') as any) !.content as string)
            };
        },
        mounted() {},
        watch: {},
        methods: {
            goToPrevious() {
                window.location.href = `${this.path}/app/inicio`;
            }
        },
    })

</script>
