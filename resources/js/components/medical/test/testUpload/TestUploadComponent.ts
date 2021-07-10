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


export default defineComponent({
    components: {
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
    emits: ['afterSendData'],
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
            errors: []
        };
    },
    mounted() {
        this.enableForm();
    },
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
        sendToServer()
        {
            this.setFormData();
            var formData = serialize(this.form);
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            this.files.map(file => formData.append(`file[]`, file))
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
                $('#testucSuccess').modal('show');
            })
            .catch(error => {
                this.errors = error.response.data.errors;
                $('#testucError').modal('show');
                this.$emit('afterSendData', error.response.data.errors);
            })
        },
    },
})