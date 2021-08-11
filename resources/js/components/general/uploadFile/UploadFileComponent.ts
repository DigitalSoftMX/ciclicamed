import { TestUploadData } from '@data/Medical/Test/TestUpload.data';
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import { serialize } from 'object-to-formdata';
import { PropType } from 'vue';
import { ElProgress } from 'element-plus';
require('bootstrap');

/** 
 * @description Componente que permite subir archivos pdf al servidor
 * @class UploadFileComponent
 * @example <upload-file-component></upload-file-component>
*/
export default defineComponent({
    /** 
     * {@link https://element-plus.org/#/es/component/loading}
     * @member UploadFileComponent.components
    */
    components: {
        ElProgress
    },
    /** 
     * Eventos del componente
     * @member UploadFileComponent.emits
     * @property {Select} update:modelValue Evento que se lanza para actualizar la variable utilizada en la propiedad v-model
    */
    emits: ['update:modelValue'],
    /** 
     * Propiedades que recibe el componente 
     * @member UploadFileComponent.props
     * @property {boolean} disabled (Obligatorio) Indica si el componente está habilitado o no
     * @property {Select} modelValue (Opcional) Valor que recibe y actualiza al componente padre. Ver {@link https://v3.vuejs.org/guide/migration/v-model.html|v-model} de vue para mas referencia
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
     * @property {boolean} upload (Obligatorio) Habilita o no la opción de subir desde el componente archivos (solo válido para la consulta médica)
     * @property {number} test (Obligatorio) ID del examen médico
    */
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
    /**
    * Variables del componente
    * @member UploadFileComponent.data
    * @property {boolean]} isFileOver Identifica si un archivo ha sido arrastrado o no del área de selección de archivos
    * @property {File[]]} fileList Guarda los archivos que han sido seleccionados por el usuario
    * @property {File[]]} acceptFiles Guarda las extensiones de archivos que son aceptadas para subir al servidor
    * @property {TestUpload} form Guarda los archivos en el formato de guardado del backend
    * @property {number} uploadPercentage Guarda el porcentaje numérico de la subida de los archivos al servidor
    * @property {boolean} load Habilita o deshabilita la animación de carga
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    */
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
    /** 
     * Al iniciar el componente, se asigna a la variable acceptFiles solo los archivos pdf
     * @member UploadFileComponent.mounted
    */
    mounted() {
        this.acceptFiles = '.pdf';
    },
    /** 
     * Variables a observar por el componente
     * @member UploadFileComponent.watch
     * @property {string} role Al actualizar un rol se asigna a la variable acceptFiles solo los archivos pdf
     * @property {Select} modelValue Al actualizar la variable, se asigna a la variable fileList para poder modificar la información y retonarla si hay una variable asignada a la propiedad v-model
     * @property {Select} localValue Al actualizar los archivos seleccionados lanza el evento para actualizar la variable de v-model en el componente padre. Ver custom v-model vue 3 en google para más información
    */
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
        /** 
         * Permite abrir el explorador de archivos para seleccionar los archivos deseados con el click del raton
         * por el backend
         * @function UploadFileComponent.click
        */
        click()
        {
            document.getElementById("ufcUpload")?.click();
        },
        /** 
         * Permite arrastar y soltar los archivos en el área específica del componente
         * @function UploadFileComponent.dragOver
        */
        dragOver(event: DragEvent)
        {
            event.preventDefault();
            this.isFileOver = true;
        },
        /** 
         * Detecta cuando el usuario suelta el click del raton en el área de arrastre de archivos
         * @function UploadFileComponent.dragLeave
        */
        dragLeave()
        {
            this.isFileOver = false;
        },
        /** 
         * Cuando detecta que hay archivos seleccionados al momento de soltar el click del raton en el área de arrastre, asigna a la variable fileList
         * los archivos y filtra los archivos que no sean pdf y selecciona los primeros 3 archivos seleccionados
         * @function UploadFileComponent.dropFile
         * @param {DragEvent} event Evento del HTML
        */
        dropFile(event: DragEvent)
        {
            event.preventDefault();
            this.fileList = Object.values(event.dataTransfer!.files).filter(file => file.type === 'application/pdf').slice(0,3);
            
            this.isFileOver = false;
        },
        /** 
         * Elimina el archivo seleccionado de la variable fileList
         * @function UploadFileComponent.deleteFileSelected
         * @param {number} index Número de fila dentro de la variable fileList a eliminar
        */
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
        /** 
         * Envía al servidor los archivos seleccionados por el usuario. Mientras la petición es procesada se actualiza la variable uploadPercentage, para
         * indicar el porcentaje de subida de los archivos. Si la petición se procesó correctamente, se muestral el modal {@link SuccessAlertComponent},
         * en caso contrario se asigna a la variable errors el mensaje de error provisto por el servidor y se muestra el componente {@link ErrorAlertComponent}.
         * En ambos casos, la variable uploadPercentage se reinicia a 0 una vez finalizado la subida.
         * Nota: solo aplica si la variable upload es true y solo se utiliza en la consulta médica
         * @function UploadFileComponent.uploadFile
        */
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