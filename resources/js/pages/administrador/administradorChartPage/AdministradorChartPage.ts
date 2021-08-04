import ChartComponent from '@component/chart/ChartComponent';
import { AdministradorSidebarConfig } from '@config/AdministradorSidebar.config';
import { TimeSelectConfig } from '@config/TimeSelect.config';
import { PatientData } from '@data/Patient/Patient.data';
import { ChartAdmin } from '@interface/Chart/ChartAdmin.interface';
import { ChartCita } from '@interface/Chart/ChartCita.interface';
import { Employee } from '@interface/Employee/Employee.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { ElDatePicker } from 'element-plus';
import { PropType } from 'vue';
import 'element-plus/lib/theme-chalk/index.css';
import { User } from '@interface/User/User.interface';
import { ChartEstudio } from '@interface/Chart/ChartEstudio.interface';
import { Product } from '@interface/Product/Product.interface';
import { Consult } from '@interface/Medical/Consult.interface';

export default defineComponent({
    components: {
        ElDatePicker,
        ChartComponent,
        NavbarComponent: require('@component/general/navbar/NavbarComponent.vue').default,
        SidebarComponent: require('@component/general/sidebar/SidebarComponent.vue').default,
    },
    props: {
        administrador: {
            type: Object as PropType<Employee>,
            default: PatientData
        },
        role: {
            type: String as PropType<String>,
            default: ''
        }
    },
    data() {
        return {
            sidebarItems: AdministradorSidebarConfig,
            isSidebarOpen: false,
            citaChart: [] as ChartAdmin[],
            doctors: [] as Employee[],

            shortcuts: TimeSelectConfig,
            citaDate: [
                new Date(),
                new Date()
            ] as Date[],

            consultaEspecialidadDate: [
                new Date(),
                new Date()
            ] as Date[],
            consultaEspecialidadID: 0,
            especialidadChart: [] as ChartAdmin[],

            doctorDate: [
                new Date(),
                new Date()
            ] as Date[],
            doctorSelected: 0,
            doctorChart: [] as ChartAdmin[],

            servicioDate: [
                new Date(),
                new Date()
            ] as Date[],
            servicioID: 0,
            servicioChart: [] as ChartAdmin[],

            laboratorioDate: [
                new Date(),
                new Date()
            ] as Date[],
            laboratorioChart: [] as ChartAdmin[],

            imagenologiaDate: [
                new Date(),
                new Date()
            ] as Date[],
            imagenologiaChart: [] as ChartAdmin[],

            productoDate: [
                new Date(),
                new Date()
            ] as Date[],
            productoID: 0,
            productoChart: [] as ChartAdmin[],
            productoList: [] as Product[],

            medicamentoDate: [
                new Date(),
                new Date()
            ] as Date[],
            medicamentoID: 0,
            medicamentoChart: [] as ChartAdmin[],
            medicamentoList: [] as Product[],

            tiempoDate: [
                new Date(),
                new Date()
            ] as Date[],
            tiempoChart: [] as ChartAdmin[],

            consultaID: 0,
            consultaChart: [] as ChartAdmin[],
            consultList: [] as Consult[],

            especialidades: [
                'Uroginecología',
                'Climaterío',
                'Materno fetal',
                'Nutrición perinatal',
                'Nutrición general',
                'Genética perinatal',
                'Biología de la reproducción',
                'Cirugía endoscópica',
                'Oncología',
                'Colposcopía',
                '',
                '',
                'Ginecología',
            ],

            servicios: [
                'Consultas',
                'Imagenología',
                'Laboratorio'
            ]
        };
    },
    mounted() {
        this.getCitaChart();
        this.getDoctors();
        this.getTestList();
        this.getMedicamentList();
        this.getConsultList();
    },
    watch: {
        consultaID()
        {
            this.getConsultaChart();
        },

        tiempoDate:
        {
            handler()
            {
                this.getTimeChart();
            },
            deep: true
        },

        medicamentoID()
        {
            this.getMedicamentChart();
        },
        medicamentoDate:
        {
            handler()
            {
                this.getMedicamentChart();
            },
            deep: true
        },

        productoID()
        {
            this.getProductoChart();
        },
        productoDate:
        {
            handler()
            {
                this.getProductoChart();
            },
            deep: true
        },

        imagenologiaDate:
        {
            handler()
            {
                this.getImagenologiaChart();
            },
            deep: true
        },
        laboratorioDate:
        {
            handler()
            {
                this.getLaboratorioChart();
            },
            deep: true
        },
        doctorSelected()
        {
            this.getDoctorChart();
        },
        doctorDate:
        {
            handler()
            {
                this.getDoctorChart();
            },
            deep: true
        },
        citaDate:
        {
            handler()
            {
                this.getCitaChart();
            },
            deep: true
        },
        consultaEspecialidadDate:
        {
            handler()
            {
                this.getCitaEspecialidad();
            },
            deep: true
        },
        consultaEspecialidadID()
        {
            this.getCitaEspecialidad();
        },
        servicioDate:
        {
            handler()
            {
                this.getservicioChart();
            },
            deep: true
        },
        servicioID()
        {
            this.getservicioChart();
        },
        isSidebarOpen()
        {
            if(this.isSidebarOpen )
            {
                document.getElementById('sbcSidebar')?.classList.remove('collapsed');
                document.getElementById('pdpContent')?.classList.remove('expanded');
            } else {
                document.getElementById('sbcSidebar')?.classList.add('collapsed');
                document.getElementById('pdpContent')?.classList.add('expanded');
            }
        }
    },
    methods: {
        getConsultaChart()
        {
            axios.get(`/graficas/tiempo/consulta/${this.consultaID}`)
            .then(response => {
                this.consultaChart = [
                    { name: `Asistente ${response.data.asistente}`, pl: this.timeToDecimal(response.data.asistente)},
                    { name: `Enfermera ${response.data.enfermera}`, pl: this.timeToDecimal(response.data.enfermera)},
                    { name: `Consulta ${response.data.consulta}`, pl: this.timeToDecimal(response.data.consulta)},
                    { name: `Total ${response.data.total}`, pl: this.timeToDecimal(response.data.total)},
                ]
            })
            .catch(error => {
                
            })
        },
        getConsultList(): void
        {
            axios.get<Consult[]>(`/consultas`)
            .then(response => {
                this.consultList = response.data;
            })
            .catch(error => {
                
            })
        },
        timeToDecimal(t: string) {
            var arr = t.split(':');
            var dat = ((Number(arr[1])/6)*10).toString();
            var dec = parseInt(dat, 10);
        
            return parseFloat(parseInt(arr[0], 10) + '.' + (dec<10?'0':'') + dec);
        },
        getTimeChart()
        {
            axios.get(`/graficas/tiempo`, {
                params: {
                    date: this.tiempoDate
                }
            })
            .then(response => {
                this.tiempoChart = [
                    { name: `Asistente ${response.data.asistente}`, pl: this.timeToDecimal(response.data.asistente)},
                    { name: `Enfermera ${response.data.enfermera}`, pl: this.timeToDecimal(response.data.enfermera)},
                    { name: `Consulta ${response.data.consulta}`, pl: this.timeToDecimal(response.data.consulta)},
                    { name: `Total ${response.data.total}`, pl: this.timeToDecimal(response.data.total)},
                ]
            })
            .catch(error => {
                
            })
        },
        getMedicamentChart()
        {
            axios.get(`/graficas/cobro/producto/${this.medicamentoID}`, {
                params: {
                    date: this.medicamentoDate
                }
            })
            .then(response => {
                const medicament = this.medicamentoList.find(item => item.id === this.medicamentoID)!.name;
                this.medicamentoChart = [
                    { name: medicament, pl: Number(response.data)},
                ];
            })
            .catch(error => {
                
            })
        },
        getMedicamentList(): void
        {
            axios.get<Product[]>(`/productos/farmacia`, {
                params: {
                    all: true
                }
            })
            .then(response => {
                this.medicamentoList = response.data;
            })
            .catch(error => {
                
            })
        },
        getTestList(): void
        {
            axios.get<Product[]>(`/productos/estudios`)
            .then(response => {
                this.productoList = response.data;
            })
            .catch(error => {
                
            })
        },
        getProductoChart()
        {
            axios.get(`/graficas/cobro/producto/${this.productoID}`, {
                params: {
                    date: this.productoDate
                }
            })
            .then(response => {
                const test = this.productoList.find(item => item.id === this.productoID)!.name;
                this.productoChart = [
                    { name: test, pl: Number(response.data)},
                ];
            })
            .catch(error => {
                
            })
        },
        getImagenologiaChart()
        {
            axios.get<ChartEstudio>(`/graficas/estudios/imagenologia`, {
                params: {
                    date: this.imagenologiaDate
                }
            })
            .then(response => {
                this.imagenologiaChart = [
                    { name: 'Estudios', pl: Number(response.data.total)},
                    ...response.data.doctores.map(item => {
                        return {
                            name: `${item.created_by.first_name} ${item.created_by.last_name}`,
                            pl: item.total
                        }
                    })
                ]
                console.log('ada')
            })
            .catch(error => {
                
            })
        },
        getLaboratorioChart()
        {
            axios.get<ChartEstudio>(`/graficas/estudios/laboratorio`, {
                params: {
                    date: this.laboratorioDate
                }
            })
            .then(response => {
                this.laboratorioChart = [
                    { name: 'Estudios', pl: Number(response.data.total)},
                    ...response.data.doctores.map(item => {
                        return {
                            name: `${item.created_by.first_name} ${item.created_by.last_name}`,
                            pl: item.total
                        }
                    })
                ]
            })
            .catch(error => {
                
            })
        },
        getservicioChart()
        {
            axios.get<Number>(`/graficas/consultas/servicio/${this.servicioID}`, {
                params: {
                    date: this.servicioDate
                }
            })
            .then(response => {
                this.servicioChart = [
                    { name: this.servicios[this.servicioID - 1], pl: Number(response.data)},
                ]
            })
            .catch(error => {
                
            })
        },
        getDoctors()
        {
            axios.get<Employee[]>(`/usuarios/doctores`)
            .then(response => {
                this.doctors = response.data;
            })
            .catch(error => {
                
            })
        },
        changeSidebarStatus()
        {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        getDoctorChart()
        {
            axios.get<Number>(`/graficas/consultas/medico/${this.doctorSelected}`, {
                params: {
                    date: this.doctorDate
                }
            })
            .then(response => {
                const doctor = `${this.doctors.find(item => item.id === this.doctorSelected)!.first_name} ${this.doctors.find(item => item.id === this.doctorSelected)!.last_name}`;
                this.doctorChart = [
                    { name: doctor, pl: Number(response.data)},
                ]
            })
            .catch(error => {
                
            })
        },
        getCitaChart()
        {
            axios.get<ChartCita>(`/graficas/citas`, {
                params: {
                    date: this.citaDate
                }
            })
            .then(response => {
                this.citaChart = [
                    { name: 'Cancelados', pl: Number(response.data.cancelados)},
                    { name: 'Confirmados', pl: Number(response.data.confirmadas)},
                    { name: 'Primera vez', pl: Number(response.data.primeraVez)},
                    { name: 'Seguimiento', pl: Number(response.data.seguimiento)},
                    { name: 'No asistieron', pl: Number(response.data.noAsistieron)},
                ]
            })
            .catch(error => {
            })
        },
        getCitaEspecialidad()
        {
            axios.get<Number>(`/graficas/consultas/especialidad/${this.consultaEspecialidadID}`, {
                params: {
                    date: this.consultaEspecialidadDate
                }
            })
            .then(response => {
                this.especialidadChart = [
                    { name: this.especialidades[this.consultaEspecialidadID - 1], pl: Number(response.data)},
                ]
            })
            .catch(error => {
            })
        }
    },
})