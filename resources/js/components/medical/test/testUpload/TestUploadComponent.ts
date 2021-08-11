import { EspermatobioscopiaDirectaData } from '@data/Medical/Test/Andrologia/EspermatobioscopiaDirecta.data';
import { InseminacionArtificialData } from '@data/Medical/Test/Andrologia/InseminacionArtificial.data';
import { OrinaPostEyaculadoData } from '@data/Medical/Test/Andrologia/OrinaPostEyaculado.data';
import { PruebaCapacitacionEspermaticaData } from '@data/Medical/Test/Andrologia/PruebaCapacitacionEspermatica.data';
import { PruebaHOSTData } from '@data/Medical/Test/Andrologia/PruebaHOST.data';
import { CuestionarioMastografiaData } from '@data/Medical/Test/Imagenologia/CuestionarioMastografia.data';
import { InterpretacionUltrasonidosData } from '@data/Medical/Test/Imagenologia/InterpretacionUltrasonidos.data';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, PropType } from 'vue';
import CuestionarioMastografiaComponent from '../Imagenologia/CuestionarioMastografia/CuestionarioMastografiaComponent';
import { serialize } from 'object-to-formdata';
import axios from 'axios';
import { TestUploadData } from '@data/Medical/Test/TestUpload.data';
import { ElProgress } from 'element-plus';

/** 
 * @description Componente que permite al rol imagenología, laboratorio o administrador subir los resultados de un estudio médico
 * @class TestUploadComponent
 * @example <test-upload-component :productCode="" :role="" :uploadFile="" testID=""></test-upload-component>
*/
export default defineComponent({
    /** 
     * {@link https://element-plus.org/#/es/component/progress}, {@link CuestionarioMastografiaComponent}, {@link UserBioComponent},
     * {@link UploadFileComponent}, {@link InterpretacionUltrasonidosComponent}, {@link EspermatobioscopiaDirectaComponent}, {@link InseminacionArtificialComponent},
     * {@link OrinaPostEyaculadoComponent}, {@link PruebaCapacitacionComponent}, {@link PruebaHostComponent},
     * @member TestUploadComponent.components
    */
    components: {
        ElProgress,
        CuestionarioMastografiaComponent,
        UserBioComponent: require('@component/user/userBioComponent/UserBioComponent.vue').default,
        UploadFileComponent: require('@component/general/uploadFile/UploadFileComponent.vue').default,
        InterpretacionUltrasonidosComponent: require('@component/medical/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue').default,
        EspermatobioscopiaDirectaComponent: require('@component/medical/test/Andrologia/EspermatobioscopiaDirecta/EspermatobioscopiaDirectaComponent.vue').default,
        InseminacionArtificialComponent: require('@component/medical/test/Andrologia/InseminacionArtificial/InseminacionArtificialComponent.vue').default,
        OrinaPostEyaculadoComponent: require('@component/medical/test/Andrologia/OrinaPostEyaculado/OrinaPostEyaculadoComponent.vue').default,
        PruebaCapacitacionComponent: require('@component/medical/test/Andrologia/PruebaCapacitacion/PruebaCapacitacionComponent.vue').default,
        PruebaHostComponent: require('@component/medical/test/Andrologia/PruebaHost/PruebaHostComponent.vue').default,
    },
    /** 
     * Eventos del componente
     * @member EmployeeTableModalComponent.emits
     * @property {null || Object[]} afterSendData Evento que se lanza después de enviar los resultados de un estudio médico
    */
    emits: ['afterSendData'],
    /** 
     * Propiedades que recibe el componente 
     * @member TestUploadComponent.props
     * @property {string} productCode (Obligatorio) código del producto del estudio médico
     * @property {string} role (Obligatorio) Rol del usuario logueado actualmente
     * @property {boolean} uploadFile (Obligatorio) Habilita la subida de los resultados médicos al servidor
     * @property {number} testID (Obligatorio) ID del estudio médico al cual se van a subir los resultados
    */
    props: {
        productCode: {
            type: String,
            default: ''
        },
        role: {
            type: String,
            default: ''
        },
        uploadFile: {
            type: Boolean as PropType<Boolean>,
            default: false
        },
        testID: {
            type: Number as PropType<Number>,
            default: -1
        }
    },
    /**
    * Variables del componente
    * @member TestUploadComponent.data
    * @property {CuestionarioMastografia} cuestionarioMastografia Guarda la información del estudio de mastografía
    * @property {InterpretacionUltrasonidos} interpretacionUltrasonidos Guarda la información del interpretacion de ultrasonidos
    * @property {EspermatobioscopiaDirecta} espermatobioscopiaDirecta Guarda la información del estudio de espermatobioscopía
    * @property {InseminacionArtificialHumana} inseminacionArtificialHumana Guarda la información del estudio de inseminación artificial
    * @property {OrinaPostEyaculado} orinaPostEyaculadoData Guarda la información del estudio de orina post eyaculadp
    * @property {PruebaCapacitacionEspermatica} pruebaCapacitacionEspermatica Guarda la información del estudio de capacitación espermática
    * @property {PruebaHOST} host Guarda la información del estudio de HOST
    * @property {string} componentEnabled Habilita los formularios de resultados, de acuerdo al tipo de estudio médico
    * @property {string} form Guarda los archivos seleccionado por el usuario, junto con el formulario (si aplica) del resultado del estudio seleccionado
    * @property {string} files Guarda los archivos seleccionados por el usuario
    * @property {Array<Object>} errors Guarda los mensajes de error provenientes del backend si existe un error en la petición HTTP mediante axios, los cuales se muestran en el componente {@link ErrorAlertComponent}
    * @property {boolean} loading Activa o no la animación de carga dentro de la tabla
    * @property {number} uploadPercentage Indica el porcentaje de subida de un resultado al servidor
    */
    data() {
        return {
            cuestionarioMastografia: CuestionarioMastografiaData,
            interpretacionUltrasonidos: InterpretacionUltrasonidosData,
            espermatobioscopiaDirecta: EspermatobioscopiaDirectaData,
            inseminacionArtificialHumana: InseminacionArtificialData,
            orinaPostEyaculado: OrinaPostEyaculadoData,
            capacitacionEspermatica: PruebaCapacitacionEspermaticaData,
            host: PruebaHOSTData,
            componentEnabled: '',
            form: TestUploadData,
            files: [] as File[],
            errors: [],
            loading: false,
            uploadPercentage: 0,
        };
    },
    /** 
     * Al iniciar el componente, se {@link TestUploadComponent.enableForm|habilita el formulario de resultados, si aplica}
     * @member TestUploadComponent.mounted
    */
    mounted() {
        this.enableForm();
    },
    /** 
     * Variables a observar por el componente
     * @member TestUploadComponent.watch
     * @property {string} roleSelected Al actualizar el código del producto, se asigna a la variable form la varaible TestUploadData y se se {@link TestUploadComponent.enableForm|habilita el formulario de resultados, si aplica}
     * @property {string} uploadFile Al actualizar la variable uploadFile, verifica si es true para permitir enviar al servidor los resultados {@link TestUploadComponent.sendToServer|del estudio médico seleccionado}
     * @member TestUploadComponent.mounted
    */
    watch: {
        productCode()
        {
            this.form = TestUploadData;
            this.enableForm();
        },
        uploadFile()
        {
            if(this.uploadFile)
            {
                this.sendToServer();
            }
        }
    },
    methods: {
        /** 
         * Habilita el formulario de resultados, de acuerdo al código del estudio médico
         * @function TestUploadComponent.enableForm
        */
        enableForm()
        {
            switch(this.productCode)
            {
                case 'IMA-0005':
                    this.componentEnabled = 'cuestionarioMastografia';
                    break;
                case 'LAB-0011':
                    this.componentEnabled = 'inseminacionArtificialHumana';
                    break;
                case 'LAB-0021':
                    this.componentEnabled = 'espermatobioscopiaDirecta';
                    break;
                case 'LAB-0038':
                    this.componentEnabled = 'orinaPostEyaculado';
                    break;
                case 'LAB-0068':
                    this.componentEnabled = 'capacitacionEspermatica';
                    break;
                case 'LAB-0069':
                    this.componentEnabled = 'host';
                    break;
            }
        },
        /** 
         * Agrega datos vacíos al formulario de resultados, de acuerdo al código del estudio médico
         * @function TestUploadComponent.setFormData
        */
        setFormData()
        {
            switch(this.productCode)
            {
                case 'IMA-0005':
                    this.form.form = {
                        cuestionario: this.cuestionarioMastografia,
                        resultados: this.interpretacionUltrasonidos,
                    },
                    this.form.files = this.files
                    break;
                case 'LAB-0011':
                    this.form.form = this.inseminacionArtificialHumana;
                    break;
                case 'LAB-0021':
                    this.form.form = this.espermatobioscopiaDirecta;
                    break;
                case 'LAB-0038':
                    this.form.form = this.orinaPostEyaculado;
                case 'LAB-0068':
                    this.form.form = this.capacitacionEspermatica;
                    break;
                case 'LAB-0069':
                    this.form.form = this.host;
                    break;
                default:
                    if(this.productCode.includes('IMA'))
                    {
                        this.form.form = this.interpretacionUltrasonidos
                        this.form.files = this.files
                        this.componentEnabled = 'interpretacionUltrasonidos';
                    }
                    if(this.productCode.includes('COD'))
                    {
                        this.form.files = this.files
                    }
            }
        },
        /** 
         * Envía al servidor los resultados del estudio médico seleccionado. Mientras el estudio se sube al servidor, se actualiza el porcentaje de subida al asignar a la
         * variable uploadPercentage el porcentaje actual de subido. Si la petición se procesa correctamente, se envía en evento afterSendData para indicar que finaliza la subida, se reinician
         * todos los datos del formulario (tanto de archivos, como de formularios) y de muestra el componente {@link AlertSuccessComponente} con un mensaje de éxito. En caso
         * contrario, se reinician todos los datos del formulario, se asigna a la variable errors los errores provistos por el servidor, se muestra el componente {@link ErrorAlertComponent}
         * y se envía un evento afterSendData con los datos de error del servidor
         * @function TestUploadComponent.sendToServer
        */
        sendToServer()
        {
            const self = this;
            this.setFormData();
            var formData = serialize(this.form);
            const config = {
                headers: { 'content-type': 'multipart/form-data' },
                onUploadProgress: function(progressEvent: any) {
                    self.uploadPercentage = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                }
            }
            
            this.files.map(file => formData.append(`file[]`, file))
            this.loading = true;
            axios.post(`/estudios/${this.testID}/resultados`, formData, config)
            .then(response => {
                this.$emit('afterSendData');
                this.cuestionarioMastografia = CuestionarioMastografiaData,
                this.interpretacionUltrasonidos = InterpretacionUltrasonidosData,
                this.espermatobioscopiaDirecta = EspermatobioscopiaDirectaData,
                this.inseminacionArtificialHumana = InseminacionArtificialData,
                this.orinaPostEyaculado = OrinaPostEyaculadoData,
                this.capacitacionEspermatica = PruebaCapacitacionEspermaticaData,
                this.host = PruebaHOSTData,
                this.componentEnabled = '',
                this.form = TestUploadData,
                this.files = [] as File[],
                this.loading = false;
                this.uploadPercentage = 0;
                $('#testucSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                this.loading = false;
                this.uploadPercentage = 0;
                $('#testucError').modal('show');
                this.$emit('afterSendData', error.response.data.errors);
            })
        },
    },
})