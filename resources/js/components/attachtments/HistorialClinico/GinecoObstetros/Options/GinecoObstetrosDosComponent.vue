<template>
    <div class="atbd-collapse-item">
        <div class="atbd-collapse-item__header">
            <a class="item-link collapsed" data-toggle="collapse" :data-target="`#${id}`"
                aria-expanded="false" :aria-controls="`${id}`" @click="collapseMenu()">
                <i class="la la-angle-right"></i>
                <h6>{{ title }}</h6>
            </a>
        </div>
        <div :id="`${id}`" class="atbd-collapse-item__body collapse">
            <div class="collapse-body-text">
                <div class="col-12 row p-0 m-0">
                    <div class="col-md-3 mb-2">
                        <label for="" class="col-form-label col-form-label-lg">Año</label>
                        <input class="form-control form-control-lg" type="text" placeholder="Ejem: 1994"
                            name="anx1_g2_año" value="">
                    </div>
                    <div class="col-md-3 mb-2">
                        <label for="" class="col-form-label col-form-label-lg">Edad
                            Maternal</label>
                        <input class="form-control form-control-lg" type="number" placeholder="Edad"
                            name="anx1_g2_edadmat" value="">
                    </div>
                    <div class="col-md-3 mb-2">
                        <label for="" class="col-form-label col-form-label-lg">Duración de
                            embarazo</label>
                        <input class="form-control form-control-lg" type="number" placeholder="1 a 42 semanas"
                            name="anx1_g2_durembara" value="">
                    </div>
                    <div class="col-md-3 mb-2">
                        <label for="" class="col-form-label col-form-label-lg">Sexo</label>
                        <select class="form-control form-control-lg" id="" name="">
                            <option value="-1">Seleccione el sexo</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                        </select>
                    </div>
                    <div class="col-md-3 mb-2">
                        <label for="" class="col-form-label col-form-label-lg">Peso</label>
                        <input class="form-control form-control-lg" type="number" placeholder="Eje: 300 gr"
                            name="anx1_g2_peso" value="">
                    </div>
                    <div class="col-md-2 mb-2">
                        <label for="" class="col-form-label col-form-label-lg col-lg-12 pl-0">Vivo y
                            sano</label>
                        <div class="custom-control custom-switch switch-primary switch-md m-auto">
                            <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                            <label class="custom-control-label" for="switch-s1"></label>
                        </div>
                    </div>
                    <div class="col-md-2 mb-2">
                        <label for="" class="col-form-label col-form-label-lg">Resol.</label>
                        <select class="form-control form-control-lg" id="" name="anx1_g2_resol">
                            <option value="-1">Seleccione una opción</option>
                            <option value="Parto">Parto</option>
                            <option value="Cesarea">Cesarea</option>
                            <option value="Forceps">Forceps</option>
                            <option value="Aborto">Aborto</option>
                        </select>
                    </div>
                    <div class="col-md-2 mb-2">
                        <label for="" class="col-form-label col-form-label-lg pl-0">Comp</label>
                        <input class="form-control form-control-lg" type="number" placeholder="Meses"
                            name="anx1_g2_comp" value="">
                    </div>
                    <div class="col-md-3 mb-2">
                        <label for="" class="col-form-label col-form-label-lg">Lactancia</label>
                        <input class="form-control form-control-lg" type="number" placeholder="Meses"
                            name="anx1_g2_lactancia" value="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from '@vue/runtime-core';
import {
    DefineComponent,
    PropType
} from 'vue';
export default defineComponent({
    name: 'PersonalesPatologicosComponent',
    components: {
    },
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
        return {
            isCollapsed: true as boolean
        }
    },
    methods: {
        collapseMenu()
        { 
        }
    },
    mounted() {
    }
})

</script>
