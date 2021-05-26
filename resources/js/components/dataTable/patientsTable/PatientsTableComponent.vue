<template>
    <div class="card mt-30">
        <div class="card-body">
            <div class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table">
                <div class="table-responsive">
                    <div class="row mx-0 justify-content-end">
                        <div class="form-group col-12 col-md-4 p-0 mb-25">
                            <div class="with-icon">
                                <span class="mr-5">
                                    <img src="/svg/search.svg" alt="Search">
                                </span>
                                <input type="text" class="form-control form-control-lg bg-white" v-model="query"
                                    @keyup="getUserDataQuery()" placeholder="Buscar">
                                <span class="mr-5">
                                    <img src="/svg/search.svg" alt="Search">
                                </span>
                            </div>
                        </div>
                    </div>
                    <table
                        class="table mb-0 table-borderless adv-table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-right breakpoint-md container default-skin"
                        data-sorting="true" data-paging-current="1" data-paging-position="right" data-paging-size="10"
                        style="">
                        <thead>
                            <tr class="userDatatable-header footable-header">
                                <th class="footable-sortable footable-first-visible" style="display: table-cell;">
                                    <span class="userDatatable-title">ID</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Imagen</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Nombres</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Apellidos</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Teléfono</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable footable-last-visible border-primary border-0 border-bottom rounded-0"
                                    style="display: table-cell;">
                                    <span class="userDatatable-title float-right">Acciones</span>
                                    <span class="fooicon fooicon-sort"></span></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="user in userData.data" :key="user.id">

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <div class="userDatatable-content">{{user.patient_code}}</div>
                                </td>

                                <td class="footable-first-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <img class="ap-img__main bg-opacity-primary wh-50 rounded-circle"
                                        src="https://demo.jsnorm.com/laravel/strikingdash/img/tm1.png" alt="profile">
                                </td>


                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{user.first_name}}
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{user.last_name}}
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{user.cellphone}}
                                    </div>
                                </td>

                                <td class="footable-last-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img src="/svg/show.svg">
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img src="/svg/edit.svg">
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="btn btn-icon btn-circle btn-outline-danger border-0 button-img">
                                                <img src="/svg/delete.svg">
                                            </button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr class="footable-paging">
                                <td colspan="8">
                                    <div class="footable-pagination-wrapper">
                                        <ul class="pagination justify-content-center">

                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="first"
                                                @click="getUserData(1)"><a class="footable-page-link">«</a>
                                            </li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === 1}" data-page="prev"
                                                @click="getUserData(paginationActive - 1)"><a
                                                    class="footable-page-link">‹</a></li>

                                            <li class="footable-page visible"
                                                v-bind:class="{ 'active': pagination === paginationActive }"
                                                data-page="1" v-for="pagination in paginationPages" :key="pagination"
                                                @click="getUserData(pagination)">
                                                <a class="footable-page-link">{{pagination}}</a>
                                            </li>


                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === userData.pagination.last_page}"
                                                @click="getUserData(paginationActive + 1)" data-page="next"><a
                                                    class="footable-page-link">›</a></li>
                                            <li class="footable-page-nav"
                                                v-bind:class="{'disabled': paginationActive === userData.pagination.last_page}"
                                                @click="getUserData(userData.pagination.last_page)" data-page="last"><a
                                                    class="footable-page-link">»</a></li>
                                        </ul>
                                        <div class="divider"></div><span class="label label-default">1 of 3</span>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PatientsTableComponent.ts"></script>

<style scoped>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';
    @import './PatientsTableComponent.scss';

</style>
