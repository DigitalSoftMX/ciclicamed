<template>
    <div class="container-fluid">
        <test-component :test="tests"></test-component>
    </div>
</template>

<script>
    import TestComponent from '../../components/test/TestComponent.vue'

    export default {
        components: {
            TestComponent
        },
        props: ['tests'],
        data: function () {
            return {}
        },
        methods: {}
    }

</script>
