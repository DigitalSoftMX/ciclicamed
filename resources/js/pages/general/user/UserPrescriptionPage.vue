<template>
    <div class="container-fluid">
        <prescription-component :prescriptions="prescriptions"></prescription-component>
    </div>
</template>

<script>
    import PrescriptionComponent from '../../components/prescription/PrescriptionComponent.vue'

    export default {
        components: {
            PrescriptionComponent
        },
        props: ['prescriptions', 'studies'],
        data: function () {
            return {}
        },
        methods: {}
    }

</script>
