<template>
    <div class="card-single mb-4">
        <div class="card card-default card-md card-bordered">
            <div class="card-header">
                <h6>{{ title }}</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" :id="`${id}Check`" checked="">
                    <label class="custom-control-label" for="switch-s1"></label>
                </div>
            </div>
            <div class="card-body">
                <textarea type="text" class="form-control" :id="`ppc${id}Description`" :placeholder="description" rows="4"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PersonalesPatologicosOptionComponent.ts"></script>
