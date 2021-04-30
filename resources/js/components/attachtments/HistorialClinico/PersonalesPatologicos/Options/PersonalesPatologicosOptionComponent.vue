<template>
    <div class="card-single mb-4">
        <div class="card card-default card-md bg-normal card-bordered">
            <div class="card-header">
                <h6>{{ title }}</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :id="`${id}Check`" checked="">
                    <label class="custom-control-label" for="switch-s1"></label>
                </div>
            </div>
            <div class="card-body">
                <div class="with-icon">
                    <span class="mr-5">
                        <img src="/svg/text.svg" alt="Text logo">
                    </span>
                    <textarea type="text" class="form-control" :id="`${id}Description`" :placeholder="description"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PersonalesPatologicosOptionComponent.ts"></script>
