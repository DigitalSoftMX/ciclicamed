import { EmployeeDegreeData } from '@data/Employee/EmployeeDegree.data';
import { EmployeeHourData } from '@data/Employee/EmployeeHour.data';
import { Branch } from '@interface/Branch/Branch.interface';
import { EmployeeDegree } from '@interface/Employee/EmployeeDegree.interface';
import { EmployeeHours } from '@interface/Employee/EmployeeHours.interface';
import { MedicalSpecialty } from '@interface/Employee/MedicalSpecialtiy.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { ElTimeSelect } from 'element-plus';
import { PropType } from 'vue';
import 'bootstrap';

/** 
 * @description Componente que permite ingresar las especialidades y horarios de un doctor
 * @class EmployeeScheduleComponent
 * @example <employee-schedule-component :id=""></employee-schedu-component>
*/
export default defineComponent({
    /** 
     * {@link https://element-plus.org/#/es/component/time-select}
     * @member BranchTableComponent.components
    */
    components: {
        ElTimeSelect,
    },
    /**
    * Propiedades que recibe el componente
    * @member EmployeeScheduleComponent.props
    * @property {number} id (Obligatorio) ID del empleado (doctor)
    */
    props: {
        id: {
            type: Number as PropType<Number>,
            default: -1
        }
    },
    /**
    * Variables del componente
    * @member EmployeeScheduleComponent.data
    * @property {string} successAlert.title Guarda el título para el modal del componente {@link SuccessAlertComponent}
    * @property {string} successAlert.message Guarda el mensaje para el modal del componente {@link SuccessAlertComponent}
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {MedicalSpecialtiy[]} specialies Guarda la lista de especialidades médicas registradas en el sistema (backend)
    * @property {EmployeeDegree[]} degrees Guarda una lista de las especialidades del doctor seleccionado
    * @property {EmployeeDegree[]} hours Guarda una lista de los horarios del doctor seleccionado
    * @property {Branch[]} branches Guarda la lista de sucursales habilitados en el sistema (backend)
    * @property {Object[]} week Guarda la lista de la semana incluyendo el día y su id, la cual sirve para que el calendario pueda identificar los días habiles
    */
    data() {
        return {
            successAlert: {
                title: '',
                message: ''
            },
            errors: [],
            specialies: [] as MedicalSpecialty[],
            degrees: [] as EmployeeDegree[],
            hours: [] as EmployeeHours[],
            branches: [] as Branch[],
            week: [
                {
                    id: 0,
                    name: 'Domingo'
                },
                {
                    id: 1,
                    name: 'Lunes'
                },
                {
                    id: 2,
                    name: 'Martes'
                },
                {
                    id: 3,
                    name: 'Miércoles'
                },
                {
                    id: 4,
                    name: 'Jueves'
                },
                {
                    id: 5,
                    name: 'Viernes'
                },
                {
                    id: 6,
                    name: 'Sábado'
                },
            ]
        };
    },
    /** 
     * Al iniciar el componente, se obtienen las {@link EmployeeScheduleComponent.getMedicalSpecialties|Especialidades médicas},
     * {@link EmployeeScheduleComponent.getEmployeeTitles|Especialidades del doctor seleccionado}, {@link EmployeeScheduleComponent.getEmployeeHours|Horarios del doctor seleccionado},
     * {@link EmployeeScheduleComponent.getBranches|Sucursales},
     * @member EmployeeScheduleComponent.mounted
    */
    mounted() {
        this.getMedicalSpecialties();
        this.getEmployeeTitles();
        this.getEmployeeHours();
        this.getBranches();
    },
    /** 
     * Variables a observar por el componente
     * @member EmployeeScheduleComponent.watch
     * @property {Branch} id Al actualizar el ID del empleado (doctor) se actualiza las {@link EmployeeScheduleComponent.getEmployeeTitles|Especialidades del doctor seleccionado},
     * {@link EmployeeScheduleComponent.getEmployeeHours|Horarios del doctor seleccionado} y {@link EmployeeScheduleComponent.getBranches|Sucursales},
    */
    watch: {
        id()
        {
            this.getEmployeeTitles();
            this.getEmployeeHours();
            this.getBranches();
        }
    },
    methods: {
        /** 
         * Envía los horarios del doctor seleccionado mediante la petición a la URI /empleados/{id}/horarios. Si la petición es correcta se asigna al 
         * objecto successAlert un título y un mensaje de éxito y se muestra el componente {@link SuccessAlertComponent}.
         * En caso de error, se asigna a la variable errors los errores del backend y se muestra el componente {@link ErrorAlertComponent}
         * @function EmployeeScheduleComponent.setEmployeeHours
        */
        setEmployeeHours()
        {
            axios.post(`/empleados/${this.id}/horarios`, {
                hours: this.hours
            })
            .then(response => {
                this.successAlert.title = 'Horario modificados';
                this.successAlert.message = 'El horario se ha modificado correctamente';
                $('#emshecSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emshecError').modal('show');
            })
        },
        /** 
         * Envía las especialidades del doctor seleccionado mediante la petición a la URI /empleados/{id}/titulos. Si la petición es correcta se asigna al 
         * objecto successAlert un título y un mensaje de éxito y se muestra el componente {@link SuccessAlertComponent}.
         * En caso de error, se asigna a la variable errors los errores del backend y se muestra el componente {@link ErrorAlertComponent}
         * @function EmployeeScheduleComponent.setEmployeeTitles
        */
        setEmployeeTitles()
        {
            axios.post(`/empleados/${this.id}/titulos`, {
                degrees: this.degrees
            })
            .then(response => {
                this.successAlert.title = 'Títulos modificados';
                this.successAlert.message = 'Los títulos se han modificado correctamente';
                $('#emshecSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#emshecError').modal('show');
            })
        },
        /** 
         * Agrega una licencia o título al doctor seleccionado, de acuerdo a la categoría que se desea agregar, asignando una nueva licencia o título
         * a la variable degrees o la variable hours
         * @function EmployeeScheduleComponent.setEmployeeTitles
         * @param {string} category Categoría (lincencia u horario) a la que agregar nueva información
        */
        addData(category: string)
        {
            category === 'Licencia' ? this.degrees.unshift({...EmployeeDegreeData}) : this.hours.unshift({...EmployeeHourData});
        },
        /** 
         * Elimina una licencia o título al doctor seleccionado, de acuerdo a la categoría que se desea agregar, eliminando una licencia o título
         * a la variable degrees o la variable hours
         * @function EmployeeScheduleComponent.setEmployeeTitles
         * @param {number} index Número de posicion en el array que se desea eliminar
         * @param {string} category Categoría (lincencia u horario) a la que eliminar información
        */
        deleteData(index: number, category: string)
        {
            category === 'Licencia' ? this.degrees.splice(index, 1) : this.hours.splice(index, 1);
        },
        /** 
         * Obtiene una lista de especialidades médicas guardadas en el sistema. Si la petición en correcta se asigna a la variable specialties los resultados
         * que envíe el backend
         * @function EmployeeScheduleComponent.getMedicalSpecialties
        */
        getMedicalSpecialties()
        {
            axios.get<MedicalSpecialty[]>(`/empleados/especialidades`)
            .then(response => {
                this.specialies = response.data;
            })
            .catch(error => {
                
            })
        },
        /** 
         * Obtiene las especialidades del doctor seleccionadas que esten guardadas en el sistema.
         * Si la petición en correcta se asigna a la variable degrees los resultados que envíe el backend
         * @function EmployeeScheduleComponent.getEmployeeTitles
        */
        getEmployeeTitles()
        {
            axios.get<EmployeeDegree[]>(`/empleados/${this.id}/titulos`)
            .then(response => {
                this.degrees = response.data;
            })
            .catch(error => {
                
            })
        },
        /** 
         * Obtiene los horarios del doctor seleccionadas que esten guardadas en el sistema.
         * Si la petición en correcta se asigna a la variable hours los resultados que envíe el backend
         * @function EmployeeScheduleComponent.getEmployeeHours
        */
        getEmployeeHours()
        {
            axios.get<EmployeeHours[]>(`/empleados/${this.id}/horarios`)
            .then(response => {
                this.hours = response.data;
            })
            .catch(error => {
                
            })
        },
        /** 
         * Obtiene las sucursales que esten habilitadas en el sistema.
         * Si la petición en correcta se asigna a la variable branches los resultados que envíe el backend
         * @function EmployeeScheduleComponent.getEmployeeHours
        */
        getBranches()
        {
            axios.get<Branch[]>(`/sucursales`)
            .then(response => {
                this.branches = response.data;
            })
            .catch(error => {
                
            })
        },
    }
})