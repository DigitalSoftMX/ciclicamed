import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import axios from 'axios';
import { PDFDocument } from 'pdf-lib';
import moment from 'moment';
import * as download from 'downloadjs';
import printJS from 'print-js'
import { Test } from '@interface/Medical/Test.interface';
import { TestData } from '@data/Medical/Test.data';
import cloneDeep from 'lodash/cloneDeep';
import { Patient } from '@interface/Patient/Patient.interface';
import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { EmployeeData } from '@data/Employee/Employee.data';
import { ConsultData } from '@data/Medical/Consult.data';
import { Consult } from '@interface/Medical/Consult.interface';
import { Select } from '@interface/General/Select.interface';
export default defineComponent({
    components: {
        OrderComponent: require('./order/ConsultOrderComponent.vue').default
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Array as PropType<Test[]>,
            default: []
        },
        disabled: {
            type: Boolean as PropType<Boolean>,
            default: true
        },
        patientData: {
            type: Object as PropType<Patient>,
            default: PatientData
        },
        doctorData: {
            type: Object as PropType<Employee>,
            default: EmployeeData
        },
        consultData: {
            type: Object as PropType<Consult>,
            default: ConsultData
        },
        branches: {
            type: Array as PropType<Select[]>,
            default: []
        }
    },
    data() {
        return {
            orderData: this.modelValue,
            orderList: [] as {
                id: number;
                name: string;
                product_code: string;
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
        modelValue: 
        {
            handler()
            {
                if(this.modelValue.length !== this.orderData.length)
                {
                    this.modelValue.map(order => this.addTestOrder(order));
                }
                this.orderData = this.modelValue;
            },
        deep: true
        },
        orderData:
        {
            handler()
            {
                this.$emit('update:modelValue', this.orderData);
            },
            deep: true
        }
    },
    methods: {
       addTestOrder(data: Test = TestData)
       {
           const newArray = [cloneDeep(data)].concat(this.orderData)
           this.orderData = newArray;
       },
       deleteTestOrder(index: number)
       {
           this.orderData[index].id > 0 ? this.orderData[index].medicalteststatus_id = 5 : this.orderData.splice(index, 1);
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
                
            })
        },
        async createPDF()
        {
            const doctorLicence = this.doctorData.specialties?.filter(specialty => specialty.pivot.medicalspecialty_id === this.consultData.medicalspecialty_id)[0];
            const prescriptionDoc = '../../../../files/testOrder.pdf';
            const buffer: ArrayBuffer = await fetch(prescriptionDoc, {
                headers: new Headers({'content-type': 'application/pdf'}),
            }).then(res => res.arrayBuffer());
            const filterOrderList = this.orderData.filter(item => item.order.product_id >= 1);

            const pdfDoc = await PDFDocument.create();
            for await(let order of filterOrderList)
            {
                const index = this.orderList.findIndex(orderSelected => orderSelected.id === order.order.product_id);
                var newPDF = await PDFDocument.load(buffer);
                const testCategory = this.orderList[index].product_code.includes('IMA') ? 'IMAGENOLOGÍA' : 'LABORATORIO';
                
                newPDF.getForm().getTextField('patient').setText(`${this.patientData.first_name} ${this.patientData.last_name}`);
                newPDF.getForm().getTextField('birthday').setText(moment(this.patientData.birthday).format('DD/MM/YYYY'));
                newPDF.getForm().getTextField('age').setText( moment().diff(this.patientData.birthday, 'years').toString() );
                newPDF.getForm().getTextField('date').setText( moment().format('DD/MM/YYYY') );
                newPDF.getForm().getTextField('doctorName').setText( `${this.doctorData.first_name} ${this.doctorData.last_name}` );
                newPDF.getForm().getTextField('doctorPhone').setText( this.doctorData.cellphone );
                newPDF.getForm().getTextField('doctorEmail').setText( this.doctorData.user.email );
                newPDF.getForm().getTextField('doctorDegree').setText( doctorLicence?.pivot.degree_title );
                newPDF.getForm().getTextField('doctorLicenseNumber').setText( doctorLicence?.pivot.license_number );
                newPDF.getForm().getTextField('doctorSchool').setText( doctorLicence?.pivot.school_name );
                newPDF.getForm().getTextField('code').setText(testCategory);
                newPDF.getForm().getTextField('name').setText(this.orderList[index].name);
                newPDF.getForm().getTextField('indications').setText( `${this.orderList[index].order_annotations.map(annotation => `${annotation.annotation}\n`)}` );

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