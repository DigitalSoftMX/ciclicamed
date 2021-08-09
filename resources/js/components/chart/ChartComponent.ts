import { ChartAdmin } from '@interface/Chart/ChartAdmin.interface';
import { defineComponent } from '@vue/runtime-core';
import { Prop, PropType } from 'vue';
import { Chart, Grid, Bar } from 'vue3-charts'

/** 
 * @description Componente que genera y muestra una gráfica
 * @class ChartComponent
 * @example <chart-component :id="" data="" title="" noShadow=""></chart-component>
*/
export default defineComponent({
    /** 
     * {@link https://vue3charts.org/} Componente externo utilizado para generar los gráficos
     * @member {Object} ChartComponent.components
    */
    components: {
        Chart,
        Grid,
        Bar
    },
    /**
    * Propiedades que recibe el componente
    * @member ChartComponent.props
    * @property {number} id (Obligatorio) Id para cada una de las gráficas
    * @property {ChartAdmin} data (Obligatorio) Información que contiene los resultados de la gráfica
    * @property {string} title (Obligatorio) Título de la gráfica
    * @property {boolean} noShadow (Opcional) Habilita o deshabilita el sombreado de la tarjeta que contiene la gráfica
    */
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
    /**
    * Variables del componente
    * @member ChartComponent.data
    * @property {string} direction Dirección del gráfico de barras {@link https://vue3charts.org/docs/types}
    * @property {Object} margin Márgenes del gráfico {@link https://vue3charts.org/docs/types}
    * @property {number} width Anchura del gráfico
    */
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
    /** 
     * Al iniciar el componente, se llama al métido {@link observeHeight}
     * @member ChartComponent.mounted
    */
    mounted() {
        this.observeHeight();
    },
    methods: {
        /** 
         * Cambia el ancho del gráfico de acuerdo al tamaño de pantalla.
         * Para calcular el tamaño del gráfico se crea una llamada a la API de ResizeObserver para detectar el cambio de tamaño de la pantalla, a lo cual se procede
         * a obtener el ancho del div que contiene el gráfico junto con el tamaño del padding izquierdo del anterior div multiplicado por 2 para obtener el padding lateral.
         * Una vez obtenido el tamaño del div y su padding, se procede a restar el div menos el padding y se guarda el ancho total en la variable width
         * @function ChartComponent.observeHeight
        */
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