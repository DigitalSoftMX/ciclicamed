<template>
    <div class="container-fluid">
        <test-component :test="tests"></test-component>
    </div>
</template>

<script>
    export default {
        components: {
            TestComponent: require('../../components/patient/testData/PatientTestComponent.vue').default
        },
        props: ['tests'],
        data: function () {
            return {}
        },
        methods: {}
    }

</script>
