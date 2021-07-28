import { InseminacionArtificialData } from '@data/Medical/Test/Andrologia/InseminacionArtificial.data';
import { InseminacionArtificial } from '@interface/Medical/Test/Andrologia/InseminacionArtificial.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: ['update:modelValue'],
    props: {
        disabled: {
            type: Boolean,
            default: true
        },
        modelValue: {
            type: Object as PropType<InseminacionArtificial>,
            default: InseminacionArtificialData
        }
    },
    data() {
        return {
            formData: this.modelValue,
        };
    },
    mounted()
    {
        this.formData = this.modelValue;
    },
    computed: {
        indicePreMovilidad(): number {
            return Number(this.formData.analisisPreCapacitacion.movilidad.a) + Number(this.formData.analisisPreCapacitacion.movilidad.b);
        },
        indicePreMovilidadTotal(): number {
            return Number(this.formData.analisisPreCapacitacion.movilidad.a) + Number(this.formData.analisisPreCapacitacion.movilidad.b) + Number(this.formData.analisisPreCapacitacion.movilidad.c);
        },
        indicePostMovilidad(): number {
            return Number(this.formData.analisisPostCapacitacion.movilidad.a) + Number(this.formData.analisisPostCapacitacion.movilidad.b);
        },
        indicePostMovilidadTotal(): number {
            return Number(this.formData.analisisPostCapacitacion.movilidad.a) + Number(this.formData.analisisPostCapacitacion.movilidad.b) + Number(this.formData.analisisPostCapacitacion.movilidad.c);
        }
    },
    watch: {
        modelValue: {
            handler()
            {
                this.formData = this.modelValue;
            },
            deep: true
        },
        formData: {
            
            handler(newValue)
            {
                this.$emit('update:modelValue', newValue);
            },
            deep: true
        }
    },
    methods: {
    },
})