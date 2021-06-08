<template>
    <select name="patients" :id="`${id}`" class="form-control select2-hidden-accessible" tabindex="-1" v-if="isGroup"
        aria-hidden="true" :disabled="disabled">
        <optgroup :label="firstText">
            <option value="0">
                {{firstText}}
            </option>
        </optgroup>
        <optgroup :label="`${dataGroup.text}`" v-for="dataGroup in data" :key="dataGroup.id" >
            <option v-for="dataOption in dataGroup.data" :key="dataOption.id" :value="dataOption.id">
                {{ dataOption.text }}
            </option>
        </optgroup>
    </select>
    <select name="patients" :id="`${id}`" class="form-control select2-hidden-accessible" tabindex="-1" v-else
        aria-hidden="true" :disabled="disabled">
        <option value="0">
            {{firstText}}
        </option>
        <option v-for="dataOption in data" :key="dataOption.id" :value="dataOption.id">
            {{ dataOption.text }}
        </option>
    </select>
</template>

<script lang="ts" src="./SelectComponent.ts"></script>

<style lang="scss">
    @import '../../../../../public/vendor_assets/css/select2.min.css';
</style>
