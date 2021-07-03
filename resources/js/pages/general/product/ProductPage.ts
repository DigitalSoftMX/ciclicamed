import { Role } from '@interface/User/Role.interface';
import {
    defineComponent
} from '@vue/runtime-core';
import { DefineComponent, PropType } from 'vue';

export default defineComponent({
    components: {
        ProductTableComponent: require('@component/product/productTable/ProductTableComponent.vue').default,
        ProductComponent: require('@component/product/ProductComponent.vue').default
    },
    emits: [],
    props: {
        roles: {
            type: Array as PropType<Role[]>,
            default: []
        }
    },
    data() {
        return {
            enableActionOptions: true
        };
    },
    mounted() {
        this.checkRoles();
    },
    watch: {
        roles()
        {
           this.checkRoles();
        }
    },
    methods: {
        checkRoles()
        {
            this.enableActionOptions = this.roles.filter(item => item.name === 'Administrador').length > 0 ? true : false;
        }
    },
})