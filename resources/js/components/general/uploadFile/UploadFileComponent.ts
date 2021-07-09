import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { PropType } from 'vue';

export default defineComponent({
    components: {
    },
    emits: ['update:modelValue'],
    props: {
        disabled: {
            type: Boolean,
            default: true
        },
        modelValue: {
            type: Array as PropType<File[]>,
            default: []
        }
    },
    data() {
        return {
            isFileOver: false,
            fileList: this.modelValue
        };
    },
    mounted() {
    },
    watch: {
        modelValue: {
            handler()
            {
                this.fileList = this.modelValue;
            },
            deep: true
        },
        fileList: {
            
            handler()
            {
                this.$emit('update:modelValue', this.fileList);
            },
            deep: true
        }
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
            this.fileList = Object.values(event.dataTransfer!.files).filter(file => file.type === 'application/pdf').slice(0,3);
            this.isFileOver = false;
        },
        deleteFileSelected(index: number)
        {
            this.fileList.splice(index, 1);
        },
        onChange(event: Event) {
            const files = (event.target as HTMLInputElement).files || [];
            if(files.length > 0)
            {
                this.fileList = Object.values<File>(files).filter(file => file.type === 'application/pdf').slice(0,3);
            }
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