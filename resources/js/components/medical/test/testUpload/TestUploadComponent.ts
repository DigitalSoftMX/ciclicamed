import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent } from 'vue';

export default defineComponent({
    components: {
        UserBioComponent: defineAsyncComponent(() => import('@component/user/userBioComponent/UserBioComponent.vue')),
        UploadFileComponent: defineAsyncComponent(() => import('@component/general/uploadFile/UploadFileComponent.vue')),
        MastografiaComponent: defineAsyncComponent(() => import('@component/medical/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue')),
        EspermatobioscopiaDirectaComponent: defineAsyncComponent(() => import('@component/medical/test/Andrologia/EspermatobioscopiaDirecta/EspermatobioscopiaDirectaComponent.vue')),
        InseminacionArtificialComponent: defineAsyncComponent(() => import('@component/medical/test/Andrologia/InseminacionArtificial/InseminacionArtificialComponent.vue')),
        OrinaPostEyaculadoComponent: defineAsyncComponent(() => import('@component/medical/test/Andrologia/OrinaPostEyaculado/OrinaPostEyaculadoComponent.vue')),
        PruebaCapacitacionComponent: defineAsyncComponent(() => import('@component/medical/test/Andrologia/PruebaCapacitacion/PruebaCapacitacionComponent.vue')),
        PruebaHostComponent: defineAsyncComponent(() => import('@component/medical/test/Andrologia/PruebaHost/PruebaHostComponent.vue')),
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
        };
    },
    mounted() {
    },
    watch: {

    },
    methods: {
    },
})