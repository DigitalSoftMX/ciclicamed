<template>
    <div class="card shadow-none border-0">
        <div class="card-body">
            <div class="banner-feature__shape d-flex justify-content-center p-2 p-md-5">
                <div class="content-center">
                    <img-component url="/svg/emptyError.svg" alt="Error de red" cssClass="w-50"></img-component>
                </div>
            </div>
            <div class="text-center">
                <h4>No información disponible para mostrar</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from '@vue/runtime-core';

/** 
 * @description Componente que muestra un mensaje predefinido de datos vacíos, mediante un div
 * @class EmptyErrorComponent
 * @example <empty-error-component></empty-error-component>
*/
export default defineComponent({
    components: {
    },
    emits: [],
    props: {
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    watch: {
    },
    methods: {
       
    },
})

</script>
