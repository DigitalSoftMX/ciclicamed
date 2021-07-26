<template>
    <div class="row">
        <div class="col-12 mb-5">
            <div class="breadcrumb-main user-member justify-content-between p-0">
                <div class="d-flex align-items-center user-member__title justify-content-center mr-sm-25">
                    <h4 class="text-capitalize fw-500 breadcrumb-title"></h4>
                </div>

                <div class="d-flex align-items-center user-member__form my-sm-0 my-2 float-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input class="form-control border-0 box-shadow-none" type="search" id="search"
                        placeholder="Buscar por fecha" aria-label="Search">
                </div>
            </div>
        </div>
    </div>
    <div class="row mx-0" v-bind:class="{'justify-content-center': prescriptionsData.data.length === 0 }">
        <div class="text-center" v-if="prescriptionsData.data.length === 0">
            <img-component url="/svg/empty.svg" alt="Vacío" cssClass="ml-4 w-25"></img-component>
            <h5 class="fw-500 mt-5 display-4">No se encontraron recetas</h5>
        </div>

        <div class="col-12 col-md-6 col-lg-4" v-for="prescription in prescriptionsData.data" :key="prescription" v-else>
            <div class="card shadow-none border-0 mb-25">
                <div class="card-body banner-feature--15">
                    <div class="pb-md-0 text-center">
                        <h4 class="m-0">{{ getDateFormatted(prescription.consult_schedule_start) }}
                        </h4>
                        <p>{{prescription.prescriptions?.length}} medicamento(s) recetados</p>
                    </div>
                    <div class="content-center mt-25">
                        <button class="btn btn-primary btn-sm btn-squared btn-transparent-primary rounded-pill"
                            v-on:click="showMedicaments(prescription)">Ver receta</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <table class="table mb-0 table-borderless adv-table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-right breakpoint-md container default-skin"
                        data-sorting="true" data-paging-current="1" data-paging-position="right" data-paging-size="10"
                        style="">
            <tfoot v-if="prescriptionsData.data.length > 0">
                <tr class="footable-paging">
                    <td colspan="8">
                        <div class="footable-pagination-wrapper">
                            <ul class="pagination justify-content-center">

                                <li class="footable-page-nav" v-bind:class="{'disabled': paginationActive === 1}"
                                    data-page="first" @click="getPrescriptionsData(1)"><a class="footable-page-link">«</a>
                                </li>
                                <li class="footable-page-nav" v-bind:class="{'disabled': paginationActive === 1}"
                                    data-page="prev" @click="getPrescriptionsData(paginationActive - 1)"><a
                                        class="footable-page-link">‹</a></li>

                                <li class="footable-page visible"
                                    v-bind:class="{ 'active': pagination === paginationActive }" data-page="1"
                                    v-for="pagination in paginationPages" :key="pagination"
                                    @click="getPrescriptionsData(pagination)">
                                    <a class="footable-page-link">{{pagination}}</a>
                                </li>


                                <li class="footable-page-nav"
                                    v-bind:class="{'disabled': paginationActive === prescriptionsData.pagination.last_page}"
                                    @click="getPrescriptionsData(paginationActive + 1)" data-page="next"><a
                                        class="footable-page-link">›</a></li>
                                <li class="footable-page-nav"
                                    v-bind:class="{'disabled': paginationActive === prescriptionsData.pagination.last_page}"
                                    @click="getPrescriptionsData(prescriptionsData.pagination.last_page)" data-page="last"><a
                                        class="footable-page-link">»</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>

    <!-- Modal -->
    <prescription-modal-component :id="'medicamentsModal'" :prescriptions="prescriptions"></prescription-modal-component>
</template>

<script lang="ts" src="./PrescriptionComponent.ts"></script>

<style scoped>
    @import '../../../../../public/vendor_assets/css/daterangepicker.css';
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';
</style>
