import UploadFileComponent from '@component/general/uploadFile/UploadFileComponent';
import {
    defineComponent
} from '@vue/runtime-core';
import axios from 'axios';
import { Prop, PropType } from 'vue';

export default defineComponent({
    components: {
        UploadFileComponent
    },
    emits: [],
    props: {
        testID: {
            type: Number as PropType<Number>,
            default: 0
        }
    },
    mounted() {
    },
    watch: {
    },
    methods: {
    },
})