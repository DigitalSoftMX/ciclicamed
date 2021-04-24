require('jquery');
require('jquery-ui-bundle');
require('select2');
import axios from "axios";
import moment from "moment";

export default {

    components: {},
    // emits: ['ScheduleData'],
    props: ['schedule', 'patient'],
    data: function () {
        return {
            patientsList: [],
            scheduleCategoriesList: [],
            branchesList: [],
            doctorsList: [],
            isDoctorListDisabled: true,
            formData: {
                patient: Object.assign({}, this.$props.patient) ?? null,
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


        this.getPatientsList();
        this.getBranchList();
        this.getSchedulesCategories();
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
            console.log()
            axios.get(`/sucursales/${this.formData.branch}/especialidades/doctores`)
                .then(response => {
                    this.doctorsList = response.data.filter(list => list.employees.length > 0);
                    this.doctorsList = [{id:'0', 'name': 'Ninguno', employees: [{'id': 0, 'first_name': 'Seleccione un doctor', 'last_name': ''}]}, ...this.doctorsList];
                })
                .catch(error => {
                    console.log(error)
                })
        },


        getScheduleCategorySelected(self)
        {
            $('#scheduleCategories').on('select2:select', function () {
                self.formData.scheduleCategory = $('#scheduleCategories').find(':selected').val();
                switch(self.scheduleCategoriesList[self.formData.scheduleCategory ].name)
                {
                    case 'Primera cita':
                        console.log('data')
                        self.isDoctorListDisabled = false;
                        break;
                    case 'Cita médica':
                        console.log('data')
                        self.isDoctorListDisabled = false;
                        break;
                    case 'Checkup':
                        break;
                    default:
                        self.isDoctorListDisabled = true;
                }
            });
        },

        createNewSchedule() {
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


        getBranchSelected(self)
        {
            $('#branches').on('select2:select', function () {
                self.formData.branch = $('#branches').find(':selected').val();
                if(!self.isDoctorListDisabled)
                {
                    self.getDoctorsList();
                }
            });
        },


        getDoctorSelected(self)
        {
            $('#doctors').on('select2:select', function () {
                self.formData.doctor = $('#doctors').find(':selected').val();
            });
        },


        getScheduleDateTime()
        {
            
            console.log(this.formData)
            
            // console.log(moment($("#scheduleDate").datepicker('getDate')).format('YYYY-MM-DD'))
        }
    }
}
