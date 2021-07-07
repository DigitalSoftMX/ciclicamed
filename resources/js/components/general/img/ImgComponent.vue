<template>
    <img :src="src" :alt="alt" :class="cssClass" :style="styleData" :onerror="`this.src='${srcError}';`">
</template>

<script lang="ts" src="./ImgComponent.ts"></script>
