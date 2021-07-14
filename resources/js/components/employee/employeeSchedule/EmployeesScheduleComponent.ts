import { Branch } from '@interface/Branch/Branch.interface';
import { EmployeeDegree } from '@interface/Employee/EmployeeDegree.interface';
import { EmployeeHours } from '@interface/Employee/EmployeeHours.interface';
import { MedicalSpecialty } from '@interface/Employee/MedicalSpecialtiy.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { ElTimeSelect } from 'element-plus';
import { PropType } from 'vue';

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
                'Domingo',
                'Lunes',
                'Martes',
                'Miércoles',
                'Jueves',
                'Viernes',
                'Sábado',
                'Domingo'
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
    },
    methods: {
        getMedicalSpecialties()
        {
            axios.get<MedicalSpecialty[]>(`/empleados/especialidades`)
            .then(response => {
                this.specialies = response.data;
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        getEmployeeTitles()
        {
            axios.get<EmployeeDegree[]>(`/empleados/${this.id}/titulos`)
            .then(response => {
                this.degrees = response.data;
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        getEmployeeHours()
        {
            axios.get<EmployeeHours[]>(`/empleados/${this.id}/horarios`)
            .then(response => {
                this.hours = response.data;
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        getBranches()
        {
            axios.get<Branch[]>(`/sucursales`)
            .then(response => {
                this.branches = response.data;
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
    }
})