<template>
    <div class="card mb-25 atbd-collapse-item rounded">
        <div class="card-header d-flex justify-items-between atbd-collapse-item__header active p-0 active bg-white">
            <a href="#" class="item-link" data-toggle="collapse" :data-target="`#cmc${id}`" aria-expanded="true"
                :aria-controls="`#cmc${id}`">
                <i class="la la-angle-right"></i>
                <h6>{{ medicamentList[medicament.medicament_id].name }}</h6>
            </a>
            <div class="px-3">
                <button class="btn btn-icon btn-danger btn-circle button-size" @click="deleteThisComponent">
                    <img src="/svg/delete.svg" alt="Delete logo" class="svg-white">
                </button>
            </div>
        </div>
        <div :id="`cmc${id}`" class="card-body row mx-0 collapse atbd-collapse-item__body bg-white show border-top">
            <div class="col-12 col-md-6 mb-25">
                <label for="">Medicamento</label>
                <v-select :options="medicamentList" label="name" :reduce="item => item.id" v-model="medicament.medicament_id"/>
            </div>
            
            <div class="col-12 col-md-6 mb-25">
                <label for="">Frecuencia</label>
                <input class="form-control form-control-lg" type="text" placeholder="Frecuencia" v-model="medicament.rate">
            </div>

            <div class="col-12 col-md-6 mb-25">
                <label for="">Vía de administración</label>
                <input class="form-control form-control-lg" type="text" placeholder="Dosis" v-model="medicament.administation_type">
            </div>

            <div class="col-12 col-md-6">
                <label for="">Duración</label>
                <input class="form-control form-control-lg" type="text" placeholder="Duración" v-model="medicament.duration">
            </div>

            <div class="col-12" v-if="isUpdate">
                <label for="">Nota de actualización</label>
                <textarea class="form-control form-control-lg" rows="4" placeholder="Nota de actualización" v-model="medicament.update_note"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ConsultMedicamentComponent.ts"></script>

<style>
    .button-size {
        width: 40px !important;
        height: 40px !important;
    }

    .svg-white {
        filter: invert(1);
    }

</style>
