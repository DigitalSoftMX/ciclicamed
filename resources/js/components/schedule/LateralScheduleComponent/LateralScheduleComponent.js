import $ from 'jquery';
require('select2');
require('jquery-ui');
import axios from "axios";
import datepickerFactory from 'jquery-datepicker';
datepickerFactory($);

export default {

    components: {},
    // emits: ['ScheduleData'],
    props: ['schedule'],
    data: function () {
        return {
            branchesList: []
        }
    },
    mounted() {
        const self = this;
        const overlay = document.querySelector('.overlay-dark');
        overlay.addEventListener('click', () => self.closeLateralSchedule());
        $('#branches').select2();
        $('#doctors').select2();
        $('#reminder').select2();
        $("#scheduleDate").datepicker({
            changeMonth: true,
            changeYear: true,
            container: "#container",
            dateFormat: "dd/mm/yy",
            yearRange: `1930:${new Date().getFullYear().toString()}`,
            onSelect() {}
        });
        $("#scheduleTime").datepicker({
            changeMonth: true,
            changeYear: true,
            container: "#container",
            dateFormat: "dd/mm/yy",
            yearRange: `1930:${new Date().getFullYear().toString()}`,
            onSelect() {}
        });
        self.getDoctorsList();
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
        getDoctorsList()
        {
            axios.get('/sucursales/doctores')
                .then(response => {
                    this.branchesList = response.data.filter(branch => branch.employees.length > 0);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
