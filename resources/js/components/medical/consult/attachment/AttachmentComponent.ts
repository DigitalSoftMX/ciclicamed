import {
    defineComponent
} from '@vue/runtime-core';
import { DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        HistorialClinicoComponent: require('../../../attachtments/HistorialClinico/HistorialClinicoComponent.vue').default,
        UroginecologiaComponent: require('../../../attachtments/Uroginecologia/UroginecologiaComponent.vue').default,
        ClimaterioSaludOseaComponent: require('../../../attachtments/ClimaterioSaludOsea/ClimaterioSaludOseaComponent.vue').default,
        MaternoFetalComponent: require('../../../attachtments/MaternoFetal/Parent/MaternoFetalComponent.ts').default,
        BiologiaReproduccionComponent: require('../../../attachtments/BiologiaReproduccion/BiologiaReproduccionComponent.vue').default,
        CirugiaEndoscopicaComponent: require('../../../attachtments/CirugiaEndoscopica/CirugiaEndoscopicaComponent.vue').default,
        OncologiaComponent: require('../../../attachtments/Oncologia/OncologiaComponent.vue').default,
        CitasSubsecuentesComponent: require('../../../attachtments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        ColposcopiaComponent: require('../../../attachtments/Colposcopia/ColposcopiaComponent.vue').default
    },
    emits: [],
    props: {
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