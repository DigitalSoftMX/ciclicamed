import { PatientData } from '@data/Patient/Patient.data';
import { Employee } from '@interface/Employee/Employee.interface';
import { Sidebar } from '@interface/General/Sidebar.interface';
import { Patient } from '@interface/Patient/Patient.interface';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent, DefineComponent, Prop, PropType } from 'vue';
import {asset} from '@codinglabs/laravel-asset'

export default defineComponent({
    emits: ['menuSelect'],
    mixins: [asset],
    props: {
        url: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        cssClass: {
            type: String,
            default: ''
        },
        errorImg: {
            type: String,
            default: ''
        },
        styleData: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            path: ((document.head.querySelector('meta[name="api-base-url"]') as any)!.content as string)
        };
    },
    mounted() {
    },
    computed: {
        src(): string
        {
            return `${this.path}${this.url}`;
        },
        srcError(): string
        {
            return `${this.path}${this.errorImg}`;
        }
    },
    methods: {
    },
})