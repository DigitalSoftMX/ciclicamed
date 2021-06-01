import { EventChangeArg, EventInput } from '@fullcalendar/core';
import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';

export default defineComponent({
    components: {
    },
    emits: [],
    props: {
        disabled: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isFileOver: false,
            fileList: [] as File[]
        };
    },
    mounted() {
    },
    watch: {

    },
    methods: {
        click()
        {
            document.getElementById("ufcUpload")?.click();
        },
        dragOver(event: DragEvent)
        {
            event.preventDefault();
            this.isFileOver = true;
        },
        dragLeave()
        {
            this.isFileOver = false;
        },
        dropFile(event: DragEvent)
        {
            event.preventDefault();
            this.fileList = Object.values(event.dataTransfer!.files).filter(file => file.type === 'application/pdf');
            this.isFileOver = false;
        },
        deleteFileSelected(index: number)
        {
            this.fileList.splice(index, 1);
        },
        onChange(event: Event) {
            const files = (event.target as HTMLInputElement).files || [];
            this.fileList = Object.values<File>(files).filter(file => file.type === 'application/pdf');
        },
        uploadFile()
        {
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            let formData = new FormData();
            this.fileList.map(file => formData.append(`file[]`, file))

            axios.post(`/estudios/1/resultados`, formData, config)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        },
        downloadFile()
        {
            axios.get(`/estudios/resultados/WNnEWizqRdqMsv3pEqdw9jcpY3bTL2Mbo5GryBH1.pdf`, {
                responseType: 'blob',
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
})