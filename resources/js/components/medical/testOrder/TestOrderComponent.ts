import {
    defineComponent
} from '@vue/runtime-core';
import Vue from 'vue';
import { DefineComponent, PropType } from 'vue';
import axios from 'axios';
import { Consult } from '@/resources/js/interfaces/Medical/Consult.interface';
import { Patient } from '@/resources/js/interfaces/Patient/Patient.interface';
import { Doctor } from '@/resources/js/interfaces/Doctor/Doctor.interface';
import { ConsultData } from '../../../defaultData/Medical/Consult.data';
import { PatientData } from '../../../defaultData/Patient/Patient.data';
import { DoctorData } from '../../../defaultData/Doctor/Doctor.data';
import { PDFDocument, PDFPage } from 'pdf-lib';
import moment from 'moment';
import * as download from 'downloadjs';
import printJS from 'print-js'

export default defineComponent({
    components: {
        OrderComponent: require('./order/OrderComponent.vue').default
    },
    emits: [],
    props: {
        consultData: {
            type: Object as PropType<Consult>,
            default: ConsultData
        },
        patientData: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        doctorData: {
            type: Object as PropType<Doctor>,
            default: DoctorData
        }
    },
    data() {
        return {
            orderDataList: [] as Number[],
            orderComponentList: [] as Number[],
            orderList: [] as {
                id: number;
                name: string;
                order_annotations: [{
                    product_id: number,
                    annotation: string
                }]
            }[]
        };
    },
    mounted() {
        this.getTestList();
    },
    watch: {
    },
    methods: {
       addTestOrder()
       {
           this.orderDataList.unshift(-1);
           this.orderComponentList.unshift(Math.floor(Math.random() * (50 - 1 + 1)) + 1);
       },
       getTestList(): void
        {
            axios.get(`/productos/estudios`)
                .then(response => {
                    this.orderList = [{
                        id: 0,
                        name: 'Seleccione un estudio',
                        order_annotations: []
                    }, ...response.data];
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteOrderComponent(index: number)
        {
            this.orderDataList.splice(index, 1);
            this.orderComponentList.splice(index, 1);
        },
        updateOrderSelected(index: number, value: number)
        {
            this.orderDataList[index] = value;
        },
        async createPDF()
        {
            const doctorLicence = this.doctorData.specialties?.filter(specialty => specialty.pivot.medicalspecialty_id === this.consultData.medicalspecialty_id)[0];
            const prescriptionDoc = '../../../../files/testOrder.pdf';
            const buffer: ArrayBuffer = await fetch(prescriptionDoc, {
                headers: new Headers({'content-type': 'application/pdf'}),
            }).then(res => res.arrayBuffer());
            const filterOrderList = this.orderDataList.filter(order => order !== -1);

            const pdfDoc = await PDFDocument.create();
            for await(let order of filterOrderList)
            {
                console.log(order)
                var newPDF = await PDFDocument.load(buffer);
                
                newPDF.getForm().getTextField('patient').setText(`${this.patientData.first_name} ${this.patientData.last_name}`);
                newPDF.getForm().getTextField('birthday').setText(moment(this.patientData.birthday).format('DD/MM/YYYY'));
                newPDF.getForm().getTextField('age').setText( moment().diff(this.patientData.birthday, 'years').toString() );
                newPDF.getForm().getTextField('date').setText( moment().format('DD/MM/YYYY') );
                newPDF.getForm().getTextField('doctorName').setText( `${this.doctorData.first_name} ${this.doctorData.last_name}` );
                newPDF.getForm().getTextField('doctorPhone').setText( this.doctorData.cellphone );
                newPDF.getForm().getTextField('doctorEmail').setText( this.doctorData.email );
                newPDF.getForm().getTextField('doctorDegree').setText( doctorLicence?.pivot.degree_title );
                newPDF.getForm().getTextField('doctorLicenseNumber').setText( doctorLicence?.pivot.license_number );
                newPDF.getForm().getTextField('doctorSchool').setText( doctorLicence?.pivot.school_name );
                newPDF.getForm().getTextField('code').setText(order.toString());
                newPDF.getForm().getTextField('name').setText(this.orderList[Number(order)].name);
                newPDF.getForm().getTextField('indications').setText( `${this.orderList[Number(order)].order_annotations.map(annotation => `${annotation.annotation}\n`)}` );

                newPDF.getForm().flatten();
                const [copiedPages] = await pdfDoc.copyPages(newPDF, [0]);
                await pdfDoc.addPage(copiedPages);
            }
            
            return await pdfDoc.save()
        },
        async downloadPDF()
        {
            const pdf = await this.createPDF();
            download(pdf, `Orden_${this.patientData.first_name}_${this.patientData.last_name}_${moment().format('DD-MM-YYYY')}.pdf`, 'application/pdf');
        },
        async printPDF()
        {
            const pdfBlob = new Blob([await this.createPDF()], { type: "application/pdf" });
            const url = URL.createObjectURL(pdfBlob);
            printJS(url);
        }
    },
})