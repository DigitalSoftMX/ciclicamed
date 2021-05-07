<template>
    <div class="card mb-25 atbd-collapse-item border">
        <div class="card-header d-flex justify-items-between atbd-collapse-item__header active p-0 active">
            <a href="#" class="item-link" data-toggle="collapse" :data-target="`#mc${id}`" aria-expanded="true"
                :aria-controls="`#mc${id}`">
                <i class="la la-angle-right"></i>
                <h6>{{ medicamentList[medicamentSelected].name }}</h6>
            </a>
            <div class="px-3">
                <button class="btn btn-icon btn-danger btn-circle button-size">
                    <img src="/svg/delete.svg" alt="Delete logo" class="svg-white">
                </button>
            </div>
        </div>
        <div :id="`mc${id}`" class="card-body row mx-0 collapse atbd-collapse-item__body bg-white show">
            <div class="col-12 col-md-6 mb-25">
                <label for="">Medicamento</label>
                <select name="patients" :id="`mcMedicamento${id}`" class="form-control select2-hidden-accessible" tabindex="-1"
                    aria-hidden="true">
                    <option v-for="medicament in medicamentList" :key="medicament.id" :value="medicament.id">
                        {{ medicament.name }}
                    </option>
                </select>
            </div>
            <div class="col-12 col-md-3 mb-25">
                <label for="">Dosis</label>
                <input class="form-control form-control-lg" type="text" placeholder="Dosis" v-model="medicamentData.dose">
            </div>

            <div class="col-12 col-md-3 mb-25">
                <label for="">Frecuencia</label>
                <input class="form-control form-control-lg" type="text" placeholder="Frecuencia" v-model="medicamentData.rate">
            </div>
            <div class="col-12 col-md-3">
                <label for="">Duración</label>
                <input class="form-control form-control-lg" type="text" placeholder="Duración" v-model="medicamentData.duration">
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./MedicamentComponent.ts"></script>

<style>
    .button-size {
        width: 40px !important;
        height: 40px !important;
    }

    .svg-white {
        filter: invert(1);
    }

</style>
