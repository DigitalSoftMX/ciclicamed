<template>
    <div class="row mx-0 mt-25" v-bind:class="{'justify-content-center': testData.length === 0 }">
        <div class="text-center" v-if="testData.length === 0">
            <img-component url="/svg/empty.svg" alt="Vacío" cssClass="ml-4 w-25"></img-component>
            <h5 class="fw-500 mt-5 display-4">No se encontraron estudios</h5>
        </div>

        <div class="col-12 col-md-6 col-lg-4" v-for="test in testData" :key="test" v-else>
            <div class="card shadow-none border-0 mb-25">
                <div class="card-body banner-feature--15">
                    <div class="pb-md-0 text-center">
                        <h4 class="m-0">{{ getDateFormatted(test.created_at) }}</h4>
                        <p>{{test.order.product.name}}</p>
                        <p>{{test.status?.name}}</p>
                    </div>
                    <div class="content-center mt-25">
                        <button class="btn btn-primary btn-sm btn-squared rounded-pill"
                            v-if="test.result"
                            v-on:click="showFileResults(test)">Ver resultados</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <patient-test-file-modal-component :id="'conchekFileTest'" :results="results" :productCode="productSelected">
    </patient-test-file-modal-component>
</template>

<script lang="ts" src="./ConsultCheckupTest.ts"></script>
