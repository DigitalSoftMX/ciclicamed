<template>
    <div class="breadcrumb-main">
        <div class="form-group p-0">
            <div class="with-icon">
                <span class="mr-5">
                    <img-component url="/svg/search.svg"  alt="Buscar"></img-component>
                </span>
                <input type="text" class="form-control form-control-lg bg-white" v-model="query"
                    @keyup="getUserDataQuery()" placeholder="Buscar">
            </div>
        </div>
        <h4 class="text-capitalize breadcrumb-title mb-25 mb-md-0">
            <button class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2" @click="createPatient"> Crear paciente</button>
        </h4>
    </div>
    <div class="card mt-30 spin-embadded" v-bind:class="{'spin-active': loading}">
        <div class="card-body">
            <div
                class="userDatatable adv-table-table global-shadow border-0 bg-white w-100 adv-table alert-content p-0">
                <div class="table-responsive hide-y-overflow">
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
                                    <span class="userDatatable-title">Paciente</span>
                                    <span class="fooicon fooicon-sort"></span></th>

                                <th class="footable-sortable" style="display: table-cell;">
                                    <span class="userDatatable-title">Fecha de nacimiento</span>
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
                                    <img-component :url="`/images/users/${user.photo}`" cssClass="ap-img__main bg-opacity-primary wh-50 rounded-circle" errorImg="/svg/person.svg"></img-component>
                                </td>


                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{fullName(user)}}
                                    </div>
                                </td>

                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{formatBirthday(user.birthday)}}
                                    </div>
                                </td>
                                <td style="display: table-cell;" class="border-primary border-bottom">
                                    <div class="userDatatable-content">
                                        {{user.cellphone}}
                                    </div>
                                </td>

                                <td class="footable-last-visible border-primary border-bottom"
                                    style="display: table-cell;">
                                    <ul class="orderDatatable_actions mb-0 d-flex flex-wrap justify-content-end">
                                        <li>
                                            <button
                                                @click="showPatientModal(user)"
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img-component url="/svg/show.svg"  alt="Mostrar"></img-component>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                @click="showEditModal(user)"
                                                class="btn btn-icon btn-circle btn-outline-primary border-0 button-img">
                                                <img-component url="/svg/edit.svg"  alt="Editar"></img-component>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                @click="showConfirmationAlert(user)"
                                                class="btn btn-icon btn-circle btn-outline-danger border-0 button-img">
                                                <img-component url="/svg/userDisable.svg" alt="Borrar" v-if="user.employeestatus_id === 1"></img-component>
                                                <img-component url="/svg/userEnable.svg" alt="Borrar" v-else></img-component>
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
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        <div class="loaded-spin text-center">
            <div class="spinner-border text-primary"></div>
        </div>
    </div>
    <success-alert-component id="patcSuccess" :title="successAlert.title" :message="successAlert.message"></success-alert-component>
    <patients-table-modal-component :patient="patientSelected" :disabled="disabledPatientEdit" :isNew="isNew"></patients-table-modal-component>
    <confirmation-alert-component id="patcConfirmation" :title="confirmationAlert.message" @confirmAction="deletePatient"></confirmation-alert-component>
</template>

<script lang="ts" src="./PatientsTableComponent.ts"></script>

<style>
    @import '../../../../../public/vendor_assets/css/footable.standalone.min.css';
</style>
