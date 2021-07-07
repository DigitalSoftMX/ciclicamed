import { CDFIData } from '@data/General/CDFI.data';
import { CountriesData } from '@data/General/Countries.data';
import { defineComponent } from '@vue/runtime-core';
import { defineAsyncComponent } from 'vue';

export default defineComponent({
    components: {
        SelectComponent: require('@component/general/select/SelectComponent.vue').default,
    },
    emits: [],
    props: {
    },
    data() {
        return {
            countryList: CountriesData,
            cdfiList: CDFIData
        };
    },
    mounted() {
    },
    watch: {

    },
    methods: {
    },
})