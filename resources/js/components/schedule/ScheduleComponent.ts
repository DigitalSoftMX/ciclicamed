import { Branch } from '@interface/Branch/Branch.interface';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { EmployeeBusinessHour } from '@interface/Employee/EmployeeBusinessHour';
import { FullCalendarBusinessHour } from '@interface/General/FullCalendarBusinessHour.interface';
import { Select } from '@interface/General/Select.interface';
import { Schedule } from '@interface/Schedule/Schedule.interface';
import { ScheduleType } from '@interface/Schedule/ScheduleType.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';

export default defineComponent({
    name: 'ScheduleComponent',
    components: {
        CalendarComponet: require('@component/schedule/CalendarComponent/CalendarComponent.vue').default,
        ScheduleSelectComponent: require('@component/schedule/ScheduleSelectComponent/ScheduleSelectComponent.vue').default,
    },
    props: {
    },
    data() {
        return {
            branchSelected: 0,
            userSelected: 0,
            schedules: [] as Schedule[],
            branchesList: [] as Select[],
            businessHours: [] as FullCalendarBusinessHour[]
        }
    },
    mounted() {
        this.getBranchesList();
    },
    watch: {
    },
    methods: {
        getScheduledData(branch: number, user: number)
        {
            this.branchSelected = branch;
            this.userSelected = user;
            this.getSchedules();
        },
        getSchedules(): void {
            axios.get<Schedule[]>(`/empleados/${this.userSelected}/sucursal/${this.branchSelected}/agenda`)
            .then(response => {
                this.schedules = response.data;
                this.getBusinessHours();
            })
            .catch(error => {
                console.log(error)
            })
        },
        getBusinessHours(): void {
            axios.get<EmployeeBusinessHour[]>(`/empleados/${this.userSelected}/sucursal/${this.branchSelected}/horarios`)
            .then(response => {
                console.log(response.data)
                this.businessHours = response.data.map(hour => {
                    console.log(hour)
                    const days = [];
                    for(var i = hour.start_day; i <= hour.finish_day; i++)
                    {
                        console.log(i)
                        days.push(i);
                    }
                    return {
                        daysOfWeek: days,
                        startTime: hour.start_time,
                        endTime: hour.finish_time
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },
        getBranchesList(): void
        {
            axios.get<Branch[]>(`/sucursales`)
            .then(response => {
                this.branchesList = response.data.map(branch => {
                    return {
                        id: branch.id,
                        text: branch.name,
                        data: []
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
        },
    },
})