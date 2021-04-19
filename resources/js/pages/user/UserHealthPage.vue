<template>
    <div class="container-fluid">
        <patient-prescription-component :prescriptions="prescriptions"></patient-prescription-component>
    </div>
</template>

<script>
    import PatientPrescriptionComponent from '../../components/patient/PatientPrescriptionComponent.vue'

    export default {
        components: {
            PatientPrescriptionComponent
        },
        props: ['prescriptions', 'studies'],
        data: function () {
            return {}
        },
        methods: {}
    }

</script>
