<template>
    <div class="card mb-25 atbd-collapse-item border">
        <div class="card-header d-flex justify-items-between atbd-collapse-item__header active p-0 active">
            <a href="#" class="item-link" data-toggle="collapse" :data-target="`#oc${id}`" aria-expanded="true"
                :aria-controls="`#oc${id}`">
                <i class="la la-angle-right"></i>
                <h6>{{testList[testSelected].name}}</h6>
            </a>
            <div class="px-3">
                <button class="btn btn-icon btn-danger btn-circle button-size">
                    <img src="/svg/delete.svg" alt="Delete logo" class="svg-white">
                </button>
            </div>
        </div>
        <div :id="`oc${id}`" class="card-body row mx-0 collapse atbd-collapse-item__body bg-white show">
            <div class="col-12 mb-25">
                <label for="">Orden de estudio</label>
                <select name="patients" :id="`test${id}`" class="form-control select2-hidden-accessible" tabindex="-1"
                    aria-hidden="true">
                    <option v-for="test in testList" :key="test.id" :value="test.id">
                        {{ test.name }}
                    </option>
                </select>
            </div>
            <div class="col-12 row mx-0 p-0" v-show="testSelected > 0">
                <div class="col-12 mb-25 text-center">
                    <h4>Indicaciones</h4>
                </div>
                <div class="col-12 mb-25" v-for="test in testList[testSelected].order_annotations" :key="test.id">
                    <label for="">{{test.annotation}}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./OrderComponent.ts"></script>

<style>
    .button-size {
        width: 40px !important;
        height: 40px !important;
    }

    .svg-white {
        filter: invert(1);
    }

</style>
