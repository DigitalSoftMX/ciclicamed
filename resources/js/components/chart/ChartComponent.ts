import { ChartAdmin } from '@interface/Chart/ChartAdmin.interface';
import { defineComponent } from '@vue/runtime-core';
import { Prop, PropType } from 'vue';
import { Chart, Grid, Bar } from 'vue3-charts'
export default defineComponent({
    components: {
        Chart,
        Grid,
        Bar
    },
    emits: [],
    props: {
        id: {
            type: Number as PropType<Number>,
            default: 0
        },
        data: {
            type: Array as PropType<ChartAdmin[]>,
            default: []
        },
        title: {
            type: String as PropType<String>,
            default: ''
        },
        noShadow: {
            type: Boolean as PropType<Boolean>,
            default: false
        }
    },
    data() {
        return {
            direction: 'horizontal',
            margin: {
                left: 0,
                top: 20,
                right: 20,
                bottom: 0
            },
            width: 0
        };
    },
    mounted() {
        this.observeHeight();
    },
    watch: {
    },
    methods: {
        observeHeight() {
            const self = this;
            const resizeObserver = new ResizeObserver(function() {
                const div = document.getElementById(`chart${self.id}`)!
                const widthRaw = Number(document.getElementById(`chart${self.id}`)?.clientWidth);
                const padding = parseInt(getComputedStyle(div).paddingLeft) * 2;
                self.width = widthRaw - padding;
            });
          
           resizeObserver.observe(document.getElementById(`chart${this.id}`)!);
        }
    },
})