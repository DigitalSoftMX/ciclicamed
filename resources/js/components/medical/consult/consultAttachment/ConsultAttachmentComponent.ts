import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    components: {
        HistorialClinicoComponent: require('@component/medical/attachments/HistorialClinico/HistorialClinicoComponent.vue').default,
        UroginecologiaComponent: require('@component/medical/attachments/Uroginecologia/UroginecologiaComponent.vue').default,
        ClimaterioSaludOseaComponent: require('@component/medical/attachments/ClimaterioSaludOsea/ClimaterioSaludOseaComponent.vue').default,
        MaternoFetalComponent: require('@component/medical/attachments/MaternoFetal/MaternoFetalComponent.vue').default,
        BiologiaReproduccionComponent: require('@component/medical/attachments/BiologiaReproduccion/BiologiaReproduccionComponent.vue').default,
        CirugiaEndoscopicaComponent: require('@component/medical/attachments/CirugiaEndoscopica/CirugiaEndoscopicaComponent.vue').default,
        OncologiaComponent: require('@component/medical/attachments/Oncologia/OncologiaComponent.vue').default,
        CitasSubsecuentesComponent: require('@component/medical/attachments/CitasSubsecuentes/CitasSubsecuentesComponent.vue').default,
        ColposcopiaComponent: require('@component/medical/attachments/Colposcopia/ColposcopiaComponent.vue').default,
        NutricionPerinatalComponent: require('@component/medical/attachments/NutricionPerinatal/NutricionPerinatalComponent.vue').default,
        NutricionGeneralComponent: require('@component/medical/attachments/NutricionGeneral/NutricionGeneralComponent.vue').default
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
