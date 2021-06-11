<template>
    <select name="patients" :id="`${id}`" class="form-control select2-hidden-accessible" tabindex="-1"
        aria-hidden="true" :disabled="disabled">
    </select>
</template>

<script lang="ts" src="./SelectComponent.ts"></script>

<style lang="scss">
    @import '../../../../../public/vendor_assets/css/select2.min.css';
</style>
