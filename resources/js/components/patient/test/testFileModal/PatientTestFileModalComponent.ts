import CuestionarioMastografiaComponent from '@component/medical/test/Imagenologia/CuestionarioMastografia/CuestionarioMastografiaComponent';
import { TestFileResultData } from '@data/Medical/Result/TestFileResult.data';
import { EspermatobioscopiaDirectaData } from '@data/Medical/Test/Andrologia/EspermatobioscopiaDirecta.data';
import { InseminacionArtificialData } from '@data/Medical/Test/Andrologia/InseminacionArtificial.data';
import { OrinaPostEyaculadoData } from '@data/Medical/Test/Andrologia/OrinaPostEyaculado.data';
import { PruebaCapacitacionEspermaticaData } from '@data/Medical/Test/Andrologia/PruebaCapacitacionEspermatica.data';
import { PruebaHOSTData } from '@data/Medical/Test/Andrologia/PruebaHOST.data';
import { InterpretacionUltrasonidosData } from '@data/Medical/Test/Imagenologia/InterpretacionUltrasonidos.data';
import { TestFileResult } from '@interface/Medical/Result/TestFileResult.interface';
import { defineComponent } from '@vue/runtime-core';
import { embed } from 'pdfobject';
import { PropType } from 'vue';
import pdf from 'vue3-pdf';

/** 
 * @description Componente que muestra los resultados de un estudio médica seleccionado (solo rol paciente)
 * @class PatientTestFileModalComponent
 * @example <patient-test-file-component :id="" results="" :productCode=""></patient-test-file-component>
*/
export default defineComponent({
    /** 
     * {@link CuestionarioMastografiaComponent}, {@link InterpretacionUltrasonidosComponent}, {@link EspermatobioscopiaDirectaComponent}
     * {@link InseminacionArtificialComponent}, {@link OrinaPostEyaculadoComponent}, {@link PruebaCapacitacionComponent}, 
     * {@link PruebaHostComponent}
     * @member PatientTestFileModalComponent.components
    */
    components: {
        pdf,
        CuestionarioMastografiaComponent,
        InterpretacionUltrasonidosComponent: require('@component/medical/test/Imagenologia/InterpretacionUltrasonidos/InterpretacionUltrasonidosComponent.vue').default,
        EspermatobioscopiaDirectaComponent: require('@component/medical/test/Andrologia/EspermatobioscopiaDirecta/EspermatobioscopiaDirectaComponent.vue').default,
        InseminacionArtificialComponent: require('@component/medical/test/Andrologia/InseminacionArtificial/InseminacionArtificialComponent.vue').default,
        OrinaPostEyaculadoComponent: require('@component/medical/test/Andrologia/OrinaPostEyaculado/OrinaPostEyaculadoComponent.vue').default,
        PruebaCapacitacionComponent: require('@component/medical/test/Andrologia/PruebaCapacitacion/PruebaCapacitacionComponent.vue').default,
        PruebaHostComponent: require('@component/medical/test/Andrologia/PruebaHost/PruebaHostComponent.vue').default,
    },
    /** 
     * Propiedades que recibe el componente 
     * @member PatientTestFileModalComponent.props
     * @property {string} id ID del componente (necesario para mostrar los pdf)
     * @property {TestFileResult} results Resultados del examen médico seleccionado
     * @property {string} productCode Código del estudio médico seleccionado
     * 
    */
    props: {
        id: {
            type: String,
            default: ''
        },
        results: {
            type: Object as PropType<TestFileResult>,
            default: TestFileResultData
        },
        productCode: {
            type: String as PropType<String>,
            default: ''
        }
    },
    /**
    * Variables del componente
    * @member PatientTestFileModalComponent.data
    * @property {string} pdfSelected URL del pdf del estudio médico seleccionado
    * @property {string} form Guarda los archivos seleccionado por el usuario, junto con el formulario (si aplica) del resultado del estudio seleccionado
    * @property {string} componentEnabled Guarda el componente (formulario de resultado) que debe mostrarse
    * @property {CuestionarioMastografia} CuestionarioMastografiaComponent Guarda la información del cuestionario de mastografía
    * @property {InterpretacionUltrasonidos} interpretacionUltrasonidos Guarda la información del interpretacion de ultrasonidos
    * @property {EspermatobioscopiaDirecta} espermatobioscopiaDirecta Guarda la información del estudio de espermatobioscopía
    * @property {InseminacionArtificialHumana} inseminacionArtificialHumana Guarda la información del estudio de inseminación artificial
    * @property {OrinaPostEyaculado} orinaPostEyaculadoData Guarda la información del estudio de orina post eyaculadp
    * @property {PruebaCapacitacionEspermatica} pruebaCapacitacionEspermatica Guarda la información del estudio de capacitación espermática
    * @property {PruebaHOST} host Guarda la información del estudio de HOST
    * @property {string} url Guarda la URL base de donde se encuentre el proyecto (local o servidor)
    */
    data() {
        return {
            pdfSelected: '',
            form: {} as any,
            componentEnabled: '',
            cuestionarioMastografia: CuestionarioMastografiaComponent,
            interpretacionUltrasonidos: InterpretacionUltrasonidosData,
            espermatobioscopiaDirecta: EspermatobioscopiaDirectaData,
            inseminacionArtificialHumana: InseminacionArtificialData,
            orinaPostEyaculado: OrinaPostEyaculadoData,
            capacitacionEspermatica: PruebaCapacitacionEspermaticaData,
            host: PruebaHOSTData,
            url: (document.head.querySelector('meta[name="api-base-url"]') as any)!.content,
        };
    },
    /** 
     * Variables a observar por el componente
     * @member PatientTestFileModalComponent.watch
     * @property {TestFileResult} results Al actualizar los resultados seleccionados, muestro u oculta los formularios o pdf relacionados al estudio médico
     * de acuerdo al código de producto del estudio seleccionado, además que asigna a la variables necesarias los datos de dichos resultados
    */
    watch:
    {
        results:
        {
            handler()
            {
                switch(this.productCode)
                {
                    case 'IMA-0005':
                        this.cuestionarioMastografia = this.results.form.cuestionario;
                        this.interpretacionUltrasonidos = this.results.form.resultados;
                        this.componentEnabled = 'cuestionarioMastografia';
                        break;
                    case 'LAB-0011':
                        this.form = this.results.form;
                        this.componentEnabled = 'inseminacionArtificialHumana';
                        break;
                    case 'LAB-0021':
                        this.form = this.results.form;
                        this.componentEnabled = 'espermatobioscopiaDirecta';
                        break;
                    case 'LAB-0038':
                        this.form = this.results.form;
                        this.componentEnabled = 'orinaPostEyaculado';
                    case 'LAB-0068':
                        this.form = this.results.form;
                        this.componentEnabled = 'capacitacionEspermatica';
                        break;
                    case 'LAB-0069':
                        this.form = this.results.form;
                        this.componentEnabled = 'host';
                        break;
                }
            },
            deep: true
        }
    },
    methods: {
        /** 
         * Descarga el pdf de resultado médico del servidor y lo muestra en el componente
         * @param {any} file Archivos pdf del estudio médico
         * @function PatientTestFileModalComponent.selectPDF
        */
        selectPDF(file: any)
        {
            embed(`${this.url}/estudio/archivo/${file}`, `#pdf${this.id}`)
        }
    }
})