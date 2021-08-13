import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import moment from 'moment';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';

/** 
 * @description Componente que muestra los datos básicos del usuario
 * @class UserBioComponent
 * @example <user-bio-component :userID="" :userCategory=""></signup-component>
*/
export default defineComponent({
    /** 
     * Propiedades que recibe el componente 
     * @member UserBioComponent.props
     * @property {number} userID (Obligatorio ) ID del usuario logueado actualmente
     * @property {string} userCategory (Obligatorio) Categoría del usuario logueado actualemente (empleados, pacientes)
    */
    props: {
        userID: {
            type: Number,
            default: 1
        },
        userCategory: {
            type: String,
            default: 'pacientes'
        }
    },
    /**
    * Variables del componente
    * @member UserBioComponent.data
    * @property {Schedule[]} userData Guarda los datos del usuario logueado actualmente
    */
    data() {
        return {
            userData: PatientData,
        };
    },
    /** 
     * Al iniciar el componente, se obtienen los datos del {@link UserBioComponent.getPatientData|pacientes logueado}
     * @member UserBioComponent.mounted
    */
    mounted() {
        this.getPatientData();
    },
    /**
    * Propiedades computadas del componente 
    * @member UserBioComponent.computed
    * @property {string} fullName Retorna el nombre completo del usuario
    * @property {string} birthday Retorna la fecha de nacimiento del usuario en formato local
    */
    computed: {
        fullName(): string
        {
            return `${this.userData.first_name} ${this.userData.last_name}`;
        },
        birthday(): string
        {
            return moment(this.userData.birthday).format('DD-MM-YYYY');
        }
    },
    methods: {
        /** 
         * Obtiene los datos del usuario logueado. En caso de que la petición sea procesada correctamente, se asigna a la variable userData los
         * datos que retorna el servidor
         * @function UserBioComponent.getPatientData
        */
        getPatientData()
        {
            axios.get<Patient>(`/${this.userCategory}/${this.userID}`)
            .then(response => {
                this.userData = response.data;
            })
            .catch(error => {
                ;
            })
        },
    },
})