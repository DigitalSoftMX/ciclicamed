import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Sidebar } from '@interface/General/Sidebar.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, Prop, PropType } from 'vue';
import {asset} from '@codinglabs/laravel-asset'

/** 
 * @description Componente que muestra correctamente las imagenes, sin importar la carpeta donde se aloje (local o servidor), imitando la funcionalidad
 * de la etiquieta img de html
 * @class ImgComponent
 * @example <img-component :url="" :alt="" cssClass="" errorImg="" styleData=""></img-component>
*/
export default defineComponent({
    
    emits: ['menuSelect'],
    mixins: [asset],
    /** 
     * Propiedades que recibe el componente 
     * @member ImgComponent.props
     * @property {string} url (Obligatorio) URL de la imagen (imita la propiedad src de la etiqueta img)
     * @property {string} alt (Obligatorio) Alt de la imagen (imita la propiedad alt de la etiqueta img)
     * @property {string} cssClass (Obligatorio) Clases css de la imagen (imita la propiedad class de la etiqueta img)
     * @property {string} errorImg (Obligatorio) URL de la imagen de error (imita la propiedad onerror de la etiqueta img)
     * @property {string} styleData (Obligatorio) Estilos personalizados para la imagen (imita la propiedad style de la etiqueta img)
    */
    props: {
        url: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        cssClass: {
            type: String,
            default: ''
        },
        errorImg: {
            type: String,
            default: ''
        },
        styleData: {
            type: String,
            default: ''
        },
    },
    /**
    * Variables del componente
    * @member ImgComponent.data
    * @property {string} path Guarda la URL actual de la carpeta donde se encuentra alojado (local o en servidor)
    */
    data() {
        return {
            path: ((document.head.querySelector('meta[name="api-base-url"]') as any)!.content as string)
        };
    },
    mounted() {
    },
    /**
    * Propiedades computadas del componente 
    * @member ImgComponent.computed
    * @property {string} src Concatena la URL de base donde se encuentra el proyecto junto con la imagen alojada dentro de la carpeta public
    * @property {string} srcError Concatena la URL de base donde se encuentra el proyecto junto con la imagen de error alojada dentro de la carpeta public
    */
    computed: {
        src(): string
        {
            return `${this.path}${this.url}`;
        },
        srcError(): string
        {
            return `${this.path}${this.errorImg}`;
        }
    },
    methods: {
    },
})