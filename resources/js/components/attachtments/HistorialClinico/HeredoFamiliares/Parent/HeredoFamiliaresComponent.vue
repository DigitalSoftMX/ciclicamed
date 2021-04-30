<template>
    <hipertension-component></hipertension-component>
    <cancer-component></cancer-component>
    <diabetes-component></diabetes-component>
    <tiroidea-component></tiroidea-component>
    <otros-component></otros-component>
</template>

<script lang="ts">
import {
    defineComponent
} from '@vue/runtime-core';

export default defineComponent({
    components: {
        HipertensionComponent: require('../Options/HipertensionComponent.vue').default,
        CancerComponent: require('../Options/CancerComponent.vue').default,
        DiabetesComponent: require('../Options/DiabetesComponent.vue').default,
        TiroideaComponent: require('../Options/TiroideaComponent.vue').default,
        OtrosComponent: require('../Options/OtrosComponent.vue').default
    },
    setup() {
        
    },
})
</script>
