import { CuestionarioMastografiaData } from '@data/Medical/Test/Imagenologia/CuestionarioMastografia.data';
import { CuestionarioMastografia } from '@interface/Medical/Test/Imagenologia/CuestionarioMastografia.interface';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({
    components: {
        Editor: require('vue-image-markup').default
    },
    emits: ['update:modelValue'],
    props: {
        disabled: {
            type: Boolean,
            default: true
        },
        modelValue: {
            type: Object as PropType<CuestionarioMastografia>,
            default: CuestionarioMastografiaData
        }
    },
    data() {
        return {
            formData: CuestionarioMastografiaData
        };
    },
    mounted() {
        (this.$refs.editor as any).setBackgroundImage('/img/estudios/cuestionarioMastografia.png');
        (this.$refs.editor as any).set('freeDrawing');
        this.formData = this.modelValue;
    },
    watch: {
        modelValue:
        {
            handler()
            {
                this.formData = this.modelValue;
            },
            deep: true
        },
        formData:
        {
            handler()
            {
                this.formData.antecedentesPersonales.imagen = (this.$refs.editor as any).saveImage();
                this.$emit('update:modelValue', this.formData)
            },
            deep: true
        }
    },
    methods: {
        deleteCanvasData()
        {
            (this.$refs.editor as any).clear();
            (this.$refs.editor as any).setBackgroundImage('/img/estudios/cuestionarioMastografia.png');
            (this.$refs.editor as any).set('freeDrawing');
        },
        redoCanvasData()
        {
            (this.$refs.editor as any).redo();
            (this.$refs.editor as any).set('freeDrawing');
        },
        undoCanvasData()
        {
            (this.$refs.editor as any).undo();
            (this.$refs.editor as any).set('freeDrawing');
        },
    },
})