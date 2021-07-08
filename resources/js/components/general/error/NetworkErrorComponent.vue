<template>
    <div class="card shadow-none border-0">
        <div class="card-body">
            <div class="banner-feature__shape d-flex justify-content-center p-2 p-md-5">
                <div class="content-center">
                    <img-component url="/svg/networkError.svg" cssClass="w-50" alt="Error"></img-component>
                </div>
            </div>
            <div class="text-center">
                <h4>Hubo un error al tratar de acceder a la información. Intente más tarde.</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

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
