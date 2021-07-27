import { TestUploadData } from '@data/Medical/Test/TestUpload.data';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { serialize } from 'object-to-formdata';
import { PropType } from 'vue';
import { ElProgress } from 'element-plus';
require('bootstrap');

export default defineComponent({
    components: {
        ElProgress
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
        },
        upload: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
        test: {
            type: Number as PropType<Number>,
            default: 0
        }
    },
    data() {
        return {
            isFileOver: false,
            fileList: this.modelValue,
            acceptFiles: '',
            form: TestUploadData,
            uploadPercentage: 0,
            load: false,
            errors: []
        };
    },
    mounted() {
        this.acceptFiles = '.pdf';
    },
    watch: {
        role()
        {
            this.acceptFiles = '.pdf';
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
            const self = this;
            const config = {
                headers: { 'content-type': 'multipart/form-data' },
                onUploadProgress: function(progressEvent: any) {
                    self.uploadPercentage = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                }
            }
            var formData = serialize(this.form);
            this.fileList.map(file => formData.append(`file[]`, file))
            this.load = true;
            axios.post(`/estudios/${this.test}/resultados`, formData, config)
            .then(response => {
                this.load = false;
                this.uploadPercentage = 0;
                $(`#upfUploadSuccess`).modal('show');
            })
            .catch(error => {
                this.load = false;
                this.uploadPercentage = 0;
                this.errors = error.response.data.errors;
                $(`#upfUploadError`).modal('show');
            })
        }
    },
})