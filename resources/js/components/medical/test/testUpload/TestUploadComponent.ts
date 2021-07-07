import { EspermatobioscopiaDirectaData } from '@data/Medical/Test/Andrologia/EspermatobioscopiaDirecta.data';
import { InterpretacionUltrasonidosData } from '@data/Medical/Test/Imagenologia/InterpretacionUltrasonidos.data';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent } from 'vue';

export default defineComponent({
    components: {
        UserBioComponent: require('@component/user/userBioComponent/UserBioComponent.vue').default,
        UploadFileComponent: require('@component/general/uploadFile/UploadFileComponent.vue').default,
        MastografiaComponent: require('@component/medical/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue').default,
        EspermatobioscopiaDirectaComponent: require('@component/medical/test/Andrologia/EspermatobioscopiaDirecta/EspermatobioscopiaDirectaComponent.vue').default,
        InseminacionArtificialComponent: require('@component/medical/test/Andrologia/InseminacionArtificial/InseminacionArtificialComponent.vue').default,
        OrinaPostEyaculadoComponent: require('@component/medical/test/Andrologia/OrinaPostEyaculado/OrinaPostEyaculadoComponent.vue').default,
        PruebaCapacitacionComponent: require('@component/medical/test/Andrologia/PruebaCapacitacion/PruebaCapacitacionComponent.vue').default,
        PruebaHostComponent: require('@component/medical/test/Andrologia/PruebaHost/PruebaHostComponent.vue').default,
    },
    emits: [],
    props: {
        testCategory: {
            type: String,
            default: 'laboratorio'
        },
        testStatus: {
            type: String,
            default: 'completados'
        },
        title: {
            type: String,
            default: 'Estudios pendientes'
        },
        role: {
            type: String,
            default: 'Administrador'
        }
    },
    data() {
        return {
            interpretacionUltrasonidos: InterpretacionUltrasonidosData,
            espermatobioscopiaDirecta: EspermatobioscopiaDirectaData
        };
    },
    mounted() {
    },
    watch: {
    },
    methods: {
    },
})