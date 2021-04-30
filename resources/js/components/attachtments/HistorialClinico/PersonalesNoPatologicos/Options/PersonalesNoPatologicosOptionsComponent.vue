<template>
    <div class="card-single mb-4">
        <div class="card card-default card-md bg-normal card-bordered">
            <div class="card-header">
                <h6>{{ title }}</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="alcoholismoCheck" checked="">
                    <label class="custom-control-label" for="switch-s1"></label>
                </div>
            </div>
            <div class="card-body">
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/text.svg" alt="Text logo">
                    </span>
                    <textarea type="text" class="form-control" :id="`${id}Description`" :placeholder="title"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';

export default defineComponent({
    name: 'PersonalesNoPatologicosOptionComponent',
    props:{
        id: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    data(){
        return {}
    },
    methods: {}
})

</script>
