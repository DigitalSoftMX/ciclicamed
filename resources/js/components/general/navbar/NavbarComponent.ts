import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Sidebar } from '@interface/General/Sidebar.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, Prop, PropType } from 'vue';
import {asset} from '@codinglabs/laravel-asset'

/** 
 * @description Componente que muestra el navbar en todas las páginas del proyecto
 * @class NavbarComponent
 * @example <navbar-component></navbar-component>
*/
export default defineComponent({
    /** 
     * Eventos del componente
     * @member EmployeeTableModalComponent.emits
     * @property {null} menuSelect Evento que se lanza cuando se selecciona el botón de menú (Icono de menu, lado izquierdo)
    */
    emits: ['menuSelect'],
    mixins: [asset],
    /** 
     * Propiedades que recibe el componente 
     * @member NavbarComponent.props
     * @property {string} title (Obligatorio) Título del navbar
     * @property {Sidebar[]} items (Opcional) Items que se van a mostrar dentro del navbar
     * @property {string} photo (Obligatorio) Nombre del archivo de la foto del usuario logueado actualmente
     * @property {string} userData (Obligatorio) Información del usuario loagueado actualmente
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
    */
    props: {
        title: {
            type: String,
            default: ''
        },
        items: {
            type: Array as PropType<Sidebar[]>,
            default: []
        },
        photo: {
            type: String,
            default: ''
        },
        userData: {
            type: Object as PropType<Patient | Employee>,
            default: {}
        },
        role: {
            type: String,
            default: ''
        },
    },
    /**
    * Variables del componente
    * @member NavbarComponent.data
    * @property {string} token Guarda el token de sesión del usuario logueado actualmente, lo que permite el deslogueo al seleccionar dicha opción
    * @property {string} url Guarda la URL actual de la carpeta donde se encuentra alojado (local o en servidor)
    */
    data() {
        return {
            token: document.querySelector('meta[name="csrf-token"]')!.getAttribute('content'),
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content
        };
    },
    /**
    * Propiedades computadas del componente 
    * @member NavbarComponent.computed
    * @property {string} profilePhoto Retorna la imagen del usuario logueado actualmente, en caso contrario muestra una imagen genérica
    * @property {string} userCategory Muestra si el usuario logueado correctamente es un paciente o empleado
    * @property {string} fullName Concatena el nombre completo del usuario logueado actualmente
    */
    computed: {
        profilePhoto(): string
        {
            return this.photo === '' ? '/svg/account.svg' : `/images/users/${this.photo}`;
        },
        userCategory(): string
        {
            return instaceOf(this.userData) ? 'Empleado' : 'Paciente';
        },
        fullName(): string
        {
            return `${this.userData.first_name} ${this.userData.last_name}`;
        }
    },
    methods: {
        /** 
         * Cuando el botón de menú (lazo izquierdo) se lanza un evento para abrir el menu lateral con las páginas con las que cuenta
         * con permisos de acceso
         * @function NavbarComponent.menuSelected
        */
        menuSelected()
        {
            this.$emit('menuSelect');
        },
        /** 
         * Cuando el usuario selecciona la opción de cerrar sesión, se desloguea utilizando el formulario oculto de deslogueo
         * @function NavbarComponent.menuSelected
        */
        logout(event: Event)
        {
            event.preventDefault();
            (document.getElementById('ncLogout') as HTMLFormElement).submit();
        }
    },
})

/** 
 * Verifica que el objeto asignado en el parámetro sea de tipo Employee
 * @function NavbarComponent.instaceOf
 * @param {Object} object
*/
export function instaceOf(object: any): object is Employee
{
    return 'employeecategory_id' in object;
}