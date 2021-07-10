import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { Prop, PropType } from 'vue';

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
        },
        role: {
            type: String as PropType<String>,
            default: ''
        }
    },
    data() {
        return {
            isFileOver: false,
            fileList: this.modelValue,
            acceptFiles: ''
        };
    },
    mounted() {
        switch(this.role)
        {
            case 'Laboratorio':
                this.acceptFiles = '.pdf';
                break;
            case 'Imagenología':
                this.acceptFiles = '.jpg,.jpeg,.png,.bmp';
                break;
        }
    },
    watch: {
        role()
        {
            switch(this.role)
            {
                case 'Laboratorio':
                    this.acceptFiles = '.pdf';
                    break;
                case 'Imagenología':
                    this.acceptFiles = 'image/jpg,image/jpeg,image/png,image/bmp';
                    break;
            }
        },
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
            switch(this.role)
            {
                case 'Laboratorio':
                    this.fileList = Object.values(event.dataTransfer!.files).filter(file => file.type === 'application/pdf').slice(0,3);
                    break;
                case 'Imagenología':
                    this.fileList = Object.values(event.dataTransfer!.files).filter(file => file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp').slice(0,3);
                    break;
            }
            
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
                switch(this.role)
                {
                    case 'Laboratorio':
                        this.fileList = Object.values<File>(files).filter(file => file.type === 'application/pdf').slice(0,3);
                        break;
                    case 'Imagenología':
                        this.fileList = Object.values<File>(files).filter(file => file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp').slice(0,3);
                        break;
                }
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