import { OrinaPostEyaculadoData } from '@data/Medical/Test/Andrologia/OrinaPostEyaculado.data';
import { OrinaPostEyaculado } from '@interface/Medical/Test/Andrologia/OrinaPostEyaculado.interface';
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
            type: Object as PropType<OrinaPostEyaculado>,
            default: OrinaPostEyaculadoData
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
        indiceMovilidad(): number {
            return Number(this.formData.analisisMicroscopico.movilidad.a) + Number(this.formData.analisisMicroscopico.movilidad.b);
        },
        indiceMovilidadTotal(): number {
            return Number(this.formData.analisisMicroscopico.movilidad.a) + Number(this.formData.analisisMicroscopico.movilidad.b) + Number(this.formData.analisisMicroscopico.movilidad.c);
        },
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
                console.log(this.formData)
                this.$emit('update:modelValue', newValue);
            },
            deep: true
        }
    },
    methods: {
    },
})