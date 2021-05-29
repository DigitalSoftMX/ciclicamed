import {
    defineComponent
} from '@vue/runtime-core';

export default defineComponent({
    components: {
        Editor: require('vue-image-markup').default
    },
    emits: [],
    props: {
        disabled: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
        };
    },
    mounted() {
        (this.$refs.editor as any).setBackgroundImage('/img/estudios/cuestionarioMastografia.png');
        (this.$refs.editor as any).set('freeDrawing');
    },
    watch: {

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
        prueba()
        {
            const img = (this.$refs.editor as any).saveImage();
            console.log(img)
        }
    },
})