import { TestFileResultData } from '@data/Medical/Result/TestFileResult.data';
import { Prescription } from '@interface/Medical/Prescription.interface';
import { TestFileResult } from '@interface/Medical/Result/TestFileResult.interface';
import { defineComponent } from '@vue/runtime-core';
import { embed } from 'pdfobject';
import { PropType } from 'vue';
import pdf from 'vue3-pdf';

export default defineComponent({
    components: {
        pdf
    },
    props: {
        id: {
            type: String,
            default: ''
        },
        results: {
            type: Object as PropType<TestFileResult>,
            default: TestFileResultData
        }
    },
    data() {
        return {
            pdfSelected: ''
        };
    },
    watch:
    {
    },
    mounted() {
    },
    methods: {
        selectPDF(file: any)
        {
            embed(`/estudio/archivo/${file}`, '#example1')
        }
    }
})