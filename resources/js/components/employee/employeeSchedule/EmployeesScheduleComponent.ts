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
export default defineComponent({
    components: {
        ElTimeSelect,
    },
    emits: [],
    props: {
        id: {
            type: Number as PropType<Number>,
            default: -1
        }
    },
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
    mounted() {
        this.getMedicalSpecialties();
        this.getEmployeeTitles();
        this.getEmployeeHours();
        this.getBranches();
    },
    watch: {
        id()
        {
            this.getEmployeeTitles();
            this.getEmployeeHours();
            this.getBranches();
        }
    },
    methods: {
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
        addData(category: string)
        {
            category === 'Licencia' ? this.degrees.unshift({...EmployeeDegreeData}) : this.hours.unshift({...EmployeeHourData});
        },
        deleteData(index: number, category: string)
        {
            category === 'Licencia' ? this.degrees.splice(index, 1) : this.hours.splice(index, 1);
        },
        getMedicalSpecialties()
        {
            axios.get<MedicalSpecialty[]>(`/empleados/especialidades`)
            .then(response => {
                this.specialies = response.data;
            })
            .catch(error => {
                
            })
        },
        getEmployeeTitles()
        {
            axios.get<EmployeeDegree[]>(`/empleados/${this.id}/titulos`)
            .then(response => {
                this.degrees = response.data;
            })
            .catch(error => {
                
            })
        },
        getEmployeeHours()
        {
            axios.get<EmployeeHours[]>(`/empleados/${this.id}/horarios`)
            .then(response => {
                this.hours = response.data;
            })
            .catch(error => {
                
            })
        },
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