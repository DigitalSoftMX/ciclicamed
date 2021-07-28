import CuestionarioMastografiaComponent from '@component/medical/test/Imagenologia/CuestionarioMastografia/CuestionarioMastografiaComponent';
import { TestFileResultData } from '@data/Medical/Result/TestFileResult.data';
import { EspermatobioscopiaDirectaData } from '@data/Medical/Test/Andrologia/EspermatobioscopiaDirecta.data';
import { InseminacionArtificialData } from '@data/Medical/Test/Andrologia/InseminacionArtificial.data';
import { OrinaPostEyaculadoData } from '@data/Medical/Test/Andrologia/OrinaPostEyaculado.data';
import { PruebaCapacitacionEspermaticaData } from '@data/Medical/Test/Andrologia/PruebaCapacitacionEspermatica.data';
import { PruebaHOSTData } from '@data/Medical/Test/Andrologia/PruebaHOST.data';
import { InterpretacionUltrasonidosData } from '@data/Medical/Test/Imagenologia/InterpretacionUltrasonidos.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { TestFileResult } from '@interface/Medical/Result/TestFileResult.interface';
import { CuestionarioMastografia } from '@interface/Medical/Test/Imagenologia/CuestionarioMastografia.interface';
import { defineComponent } from '@vue/runtime-core';
import { embed } from 'pdfobject';
import { PropType } from 'vue';
import pdf from 'vue3-pdf';

export default defineComponent({
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
    mounted() {
    },
    methods: {
        selectPDF(file: any)
        {
            embed(`${this.url}/estudio/archivo/${file}`, '#example1')
        }
    }
})