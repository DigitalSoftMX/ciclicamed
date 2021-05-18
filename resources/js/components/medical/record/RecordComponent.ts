import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
require('../../../../../public/js/horizontal_timeline.2.0.min');
import axios from 'axios';
import { Consult } from '@/resources/js/interfaces/Medical/Consult.interface';
import moment from 'moment';

export default defineComponent({
    name: 'RecordComponent',
    components: {
    },
    props:{
    },
    mounted() {
        this.getConsultData();
        
    },
    data(){
        return {
            consultList: [] as Consult[]
        }
    },
    watch: {
    },
    methods: {
        getConsultData()
        {
            axios.get<Consult[]>('/pacientes/1/consultas/categoria/5')
                .then(response => {
                    this.consultList = Object.values(response.data);
                    console.log(this.consultList)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        formatConsultDateTime(dateTime: string)
        {
            return moment(dateTime).format('DD/MM/YYYY')
        },
        getInfoConsult(consultID: number)
        {
            console.log(consultID)
        }
    }
})
