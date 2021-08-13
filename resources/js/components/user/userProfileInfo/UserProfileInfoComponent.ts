import { defineComponent } from '@vue/runtime-core';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { Employee } from '@interface/Employee/Employee.interface';
import { PropType } from 'vue';
moment.locale('es');

/** 
 * @description Componente que muestra los datos básicos del usuario
 * @class UserProfileInfoComponent
 * @example <user-profile-component :userCategory="" :userData=""></signup-component>
*/
export default defineComponent({
    /** 
     * {@link ErrorAlertComponent}, {@link SuccessAlertComponent}
     * @member UserProfileInfoComponent.components
    */
    components: {
        ErrorAlertComponent: require('@component/general/alert/ErrorAlertComponent.vue').default,
        SuccessAlertComponent: require('@component/general/alert/SuccessAlertComponent.vue').default,
    },
    /** 
     * Propiedades que recibe el componente 
     * @member UserProfileInfoComponent.props
     * @property {string} userCategory (Obligatorio) Categoría del usuario logueado actualemente (empleados, pacientes)
     * @property {string} userData (Obligatorio) Datos del usuario seleccionado
    */
    props: {
        userCategory: {
            type: String,
            default: 'pacientes'
        },
        userData: {
            type: Object as PropType<Patient | Employee>,
            default: {}
        }
    },
    /**
    * Propiedades computadas del componente 
    * @member UserProfileInfoComponent.computed
    * @property {string} fullName Retorna el nombre completo del usuario
    * @property {string} birthday Retorna la fecha de nacimiento del usuario en formato local
    * @property {string} gender Retorna si es hombre o mujer
    */
    computed: {
        fullName(): string
        {
            return `${this.userData.first_name} ${this.userData.last_name}`;
        },
        birthday(): string
        {
            return moment(this.userData.birthday).format('DD-MM-YYYY');
        },
        gender(): string
        {
            return this.userData.gender === 0 ? 'Hombre' : 'Mujer';
        }
    },
    methods: {
    },
})