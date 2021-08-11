import { Sidebar } from '@interface/General/Sidebar.interface';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, Prop, PropType } from 'vue';

/** 
 * @description Componente que muestra la barra lateral izquierda con las páginas disponibles para cada componente
 * @class SidebarComponent
 * @example <sidebar-component :title="" items=""></sidebar-component>
*/
export default defineComponent({
    /** 
     * Propiedades que recibe el componente 
     * @member SidebarComponent.props
     * @property {string} title (Obligatorio) Título de la barra lateral
     * @property {Sidebar[]} disabled (Obligatorio) Lista de páginas disponibles para el usuario loagueado actualmente
    */
    props: {
        title: {
            type: String,
            default: ''
        },
        items: {
            type: Array as PropType<Sidebar[]>,
            default: []
        }
    },
    /**
    * Variables del componente
    * @member SidebarComponent.data
    * @property {string} url Guarda la URL actual de la carpeta donde se encuentra alojado (local o en servidor)
    */
    data() {
        return {
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content
        };
    },
    mounted() {
    },
    watch: {
    },
    methods: {
       
    },
})