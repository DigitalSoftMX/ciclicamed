require('jquery');
require('jquery-ui-bundle');
require('select2');
import axios from "axios";
import moment from "moment";

export default {

    components: {},
    // emits: ['ScheduleData'],
    props: ['schedule', 'patientID'],
    data: function () {
        return {
            patientsList: [],
            scheduleCategoriesList: [],
            branchesList: [],
            doctorsList: [],
            isPatientDisabled: true,
            isScheduleCategoryDisabled: true,
            isBranchDisabled: true,
            isDoctorDisabled: true,
            formData: {
                patient: this.$props.patient,
                scheduleCategory: null,
                branch: null,
                doctor: null,
                scheduleNote: null,
                scheduleDatetime: null
            }
        }
    },
    mounted() {
        self = this;
        const overlay = document.querySelector('.overlay-dark');

        overlay.addEventListener('click', () => self.closeLateralSchedule());

        $('#patients').select2();

        $('#scheduleCategories').select2();

        $('#branches').select2();

        $('#doctors').select2();


        $("#scheduleDate").datepicker({
            changeMonth: true,
            changeYear: true,
            container: "#container",
            dateFormat: "dd/mm/yy",
            yearRange: `1930:${new Date().getFullYear().toString()}`,
            onSelect() {
                const time = $('#scheduleTime').wickedpicker('time');
                const date = moment($("#scheduleDate").datepicker('getDate')).format('YYYY-MM-DD');
                self.formData.scheduleDatetime = moment.utc(date + ' ' + time, 'YYYY-MM-DD HH:mm A').format('l LT');
            }
        });


        $('#scheduleTime').wickedpicker({
            title: 'Hora de cita',
            now: "12:00",
            minutesInterval: 30,
            timeSeparator: ':',
        });

        if(this.patientID === undefined)
        {
            this.getPatientsList();
            this.isPatientDisabled = false;
        }
        this.getBranchList();
        this.getSchedulesCategories();
        this.getPatientSelected(this);
        this.getScheduleCategorySelected(this);
        this.getBranchSelected(this);
        this.getDoctorSelected(this);
    },


    methods: {


        openLateralSchedule() {
            const drawerBasic = document.querySelector('.drawer-basic-wrap');
            const overlay = document.querySelector('.overlay-dark');
            drawerBasic.classList.remove('account');
            drawerBasic.classList.remove('profile');
            drawerBasic.classList.add('basic');
            drawerBasic.classList.add('show');
            overlay.classList.add('show');
        },


        closeLateralSchedule() {
            const drawerBasic = document.querySelector('.drawer-basic-wrap');
            const overlay = document.querySelector('.overlay-dark');
            drawerBasic.classList.remove('show');
            overlay.classList.remove('show');
        },


        clickScheduleDate() {
            const elem = this.$refs.scheduleDate;
            $('#scheduleDate').datepicker('show');
            elem.click()
        },

        getPatientsList()
        {
            axios.get(`/pacientes`)
                .then(response => {
                    this.patientsList = response.data;
                    this.patientsList = [{'id': 0, 'first_name': 'Seleccione un paciente', 'last_name': ''}, ...this.patientsList];
                })
                .catch(error => {
                    console.log(error)
                })
        },

        getSchedulesCategories()
        {
            axios.get(`/consultas/categorias`)
                .then(response => {
                    this.scheduleCategoriesList = response.data;
                    this.scheduleCategoriesList = [{id:'0', 'name': 'Seleccione una categoría'}, ...this.scheduleCategoriesList];
                })
                .catch(error => {
                    console.log(error)
                })
        },


        getBranchList() {
            axios.get(`/sucursales`)
                .then(response => {
                    this.branchesList = response.data;
                    this.branchesList = [{id:'0', 'name': 'Seleccione una sucursal'}, ...this.branchesList];
                })
                .catch(error => {
                    console.log(error)
                })
        },


        getDoctorsList() {
            axios.get(`/sucursales/${this.formData.branch}/especialidades/doctores`)
                .then(response => {
                    this.doctorsList = response.data.filter(list => list.employees.length > 0);
                    this.doctorsList = [{id:'0', 'name': 'Ninguno', employees: [{'id': 0, 'first_name': 'Seleccione un doctor', 'last_name': ''}]}, ...this.doctorsList];
                })
                .catch(error => {
                    console.log(error)
                })
        },

        createNewSchedule() {
            console.log(this.formData)
            axios.post('/consultas', {
                    data: {...this.formData}
                })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        },


        getPatientSelected(self)
        {
            $('#patients').on('select2:select', function () {
                self.formData.patient = $('#patients').select2('data')[0][`id`];
                self.isScheduleCategoryDisabled = false;
            });
        },

        
        getScheduleCategorySelected(self)
        {
            $('#scheduleCategories').on('select2:select', function () {
                self.formData.scheduleCategory = $('#scheduleCategories').select2('data')[0][`id`];
                self.isBranchDisabled = false;
            });
        },


        getBranchSelected(self)
        {
            $('#branches').on('select2:select', function () {
                self.formData.branch = $('#branches').select2('data')[0][`id`];

                switch(self.scheduleCategoriesList[self.formData.scheduleCategory ].name)
                {
                    case 'Primera cita':
                        self.getDoctorsList();
                        self.isDoctorDisabled = false;
                        break;
                    case 'Cita médica':
                        self.getDoctorsList();
                        self.isDoctorDisabled = false;
                        break;
                    case 'Checkup':
                        break;
                    default:
                        self.isDoctorDisabled = true;
                }
            });
        },


        getDoctorSelected(self)
        {
            $('#doctors').on('select2:select', function () {
                self.formData.doctor = $('#doctors').select2('data')[0][`id`];
            });
        },


        getScheduleDateTime()
        {
            
            console.log(this.formData)
            
            // console.log(moment($("#scheduleDate").datepicker('getDate')).format('YYYY-MM-DD'))
        }
    }
}
