<template>
    <div class="card mb-25 atbd-collapse-item rounded">
        <div class="card-header d-flex justify-items-between atbd-collapse-item__header active p-0 active bg-white">
            <a href="#" class="item-link" data-toggle="collapse" :data-target="`#oc${id}`" aria-expanded="true"
                :aria-controls="`#oc${id}`">
                <i class="la la-angle-right"></i>
                <h6>{{orderList[order.order.product_id].name}}</h6>
            </a>
            <div class="px-3">
                <button class="btn btn-icon btn-danger btn-circle button-size" @click="deleteThisComponent()">
                    <img-component url="/svg/delete.svg" alt="Borrar" cssClass="svg-white"></img-component>
                </button>
            </div>
        </div>
        <div :id="`oc${id}`" class="card-body row mx-0 collapse atbd-collapse-item__body bg-white show border-top">
            <div class="col-12 mb-25 p-0">
                <label for="">Orden de estudio</label>
                <v-select :options="orderList" label="name" :reduce="item => item.id" v-model="order.order.product_id"
                    :disabled="disabled" />
            </div>
            <div class="mb-25">
                <div class="card shadow-none bg-white">
                    <div class="card-header  bg-white">
                        <h4>Agendar estudio</h4>
                    </div>
                    <div class="card-body  bg-white">
                        <div class="row mx-0">
                            <div class="col-12 mb-25">
                                <label for="">Orden de estudio</label>
                                <v-select :options="orderList" label="name" :reduce="item => item.id"
                                    v-model="order.order.product_id" :disabled="disabled" />
                            </div>
                            <div class=" col-12 col-md-6 form-group mb-25 time-select">
                                <label>Hora inicial</label>
                                <el-time-select :start='startTime' step='00:15' :end='finishTime' v-model="startHour"
                                    placeholder="Hora inicial"></el-time-select>
                            </div>
                            <div class=" col-12 col-md-6 form-group mb-25 time-select">
                                <label>Hora final</label>
                                <el-time-select :start='startTime' step='00:15' :end='finishTime' v-model="finishHour"
                                    :minTime="startHour" placeholder="Hora final"></el-time-select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-12" v-if="isUpdate">
                <label for="">Nota de actualización</label>
                <textarea class="form-control form-control-lg" rows="4" placeholder="Nota de actualización"
                    v-model="order.order.update_note"></textarea>
            </div>
            <div class="col-12 row mx-0 p-0" v-show="order.order.product_id > 0">
                <div class="col-12 mb-25 text-center">
                    <h4>Indicaciones</h4>
                </div>
                <div class="col-12 mb-25" v-for="order in orderList[order.order.product_id].order_annotations"
                    :key="order">
                    <label for="">{{order.annotation}}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ConsultOrderComponent.ts"></script>

<style>
    .button-size {
        width: 40px !important;
        height: 40px !important;
    }

    .svg-white {
        filter: invert(1);
    }

</style>
