import { Branch } from '@interface/Branch/Branch.interface';
import { BranchSpecialtyDoctors } from '@interface/Branch/BranchSpecialtyDoctors.interface';
import { Select } from '@interface/General/Select.interface';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';

export default defineComponent({
    name: 'ScheduleSelectComponent',
    components: {
        SelectComponent: require('@component/general/select/SelectComponent.vue').default,
    },
    emits: ['onDoctorSelected'],
    props: {
    },
    data() {
        return {
            branchSelected: 0,
            userSelected: 0,
            branchesList: [] as Select[],
            usersList: [] as Select[],
        }
    },
    mounted() {
        this.getBranchesList();
    },
    watch: {
        branchSelected()
        {
            this.getUsersList();
        },
        userSelected()
        {
            this.$emit('onDoctorSelected', this.branchSelected, this.userSelected);
        }
    },
    methods: {
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
        getUsersList(): void
        {
            axios.get<BranchSpecialtyDoctors[]>(`/sucursales/${this.branchSelected}/especialidades/doctores`)
            .then(response => {
                const doctorFilter = response.data.filter((list: BranchSpecialtyDoctors) => list.doctors.length > 0);
                this.usersList = doctorFilter.map(doctor => {
                    return {
                        id: doctor.id,
                        text: doctor.name,
                        data: doctor.doctors.map(doctor => {
                            return {
                                id: doctor.id,
                                text: `${doctor.first_name} ${doctor.last_name}`,
                                data: []
                            }
                        })
                    }
                });
                console.log(this.usersList)
            })
            .catch(error => {
                console.log(error)
            })
        },
    },
})