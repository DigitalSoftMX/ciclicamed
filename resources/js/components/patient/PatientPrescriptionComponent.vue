<template>
    <div class="col-12">
        <div class="breadcrumb-main user-member justify-content-between p-0">
            <div class="d-flex align-items-center user-member__title justify-content-center mr-sm-25">
                <h4 class="text-capitalize fw-500 breadcrumb-title">Recetas</h4>
                <!-- <span class="sub-title ml-sm-25 pl-sm-25">24 recetas</span> -->
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
        <div class="row">
            <div class="col-lg-4" v-for="prescription in prescriptionsData" :key="prescription">
                <div class="card banner-feature banner-feature--2 ">
                    <div class="banner-feature__shape">
                        <img src="/svg/view-prescription.svg" alt="View prescription" class="ml-4"
                            style="width: 40% !important;">
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="card-body">
                            <h1 class="banner-feature__heading color-white text-center">
                                {{ getDateFormatted(prescription[0].medicalconsult.consult_schedule_start) }}</h1>
                            <button
                                class="banner-feature__btn btn color-primary btn-md px-20 bg-white radius-xs fs-15 mt-5 float-right"
                                type="button"
                                v-on:click="getPrescriptionsByDate(prescription[0].medicalconsult.consult_schedule_start)">Ver
                                receta</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import moment from 'moment';
    require('../../../../public/vendor_assets/js/daterangepicker');
    require('../../../../public/vendor_assets/js/jquery/jquery-ui');
    require('../../../../public/vendor_assets/js/jquery/jquery-datepicker-es')
    export default {
        props: ['prescriptions'],
        mounted() {
            $("#search").daterangepicker({
                ranges: {
                    'Hoy': [moment(), moment()],
                    'Últimos 7 dias': [moment().subtract(6, 'days'), moment()],
                    'Últimos 30 dias': [moment().subtract(29, 'days'), moment()],
                    'Este mes': [moment().startOf('month'), moment().endOf('month')],
                    'Último mes': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month')
                        .endOf('month')
                    ],
                    'Este año': [moment().startOf('year'), moment().endOf('year')],
                },
                locale: {
                    cancelLabel: 'Cancelar',
                    applyLabel: 'Seleccionar',
                    "customRangeLabel": "Seleccionar otra fecha",
                }
                // changeMonth: true,
                // changeYear: true,
                // dateFormat: "dd/mm/yy",
                // yearRange: `1930:${new Date().getFullYear().toString()}`,

                // onSelect() {
                //     $("#birthday").trigger("click");
                // }
            });
        },
        data: function () {
            return {
                prescriptionsData: Object.assign({}, this.$props.prescriptions),
            }
        },
        methods: {
            getDateFormatted(date) {
                moment.locale('es');
                return moment(date).calendar();
            },
            getPrescriptionsByDate(date) {

                const data = Object.values(this.prescriptionsData).filter(data => moment(data[0].medicalconsult
                    .consult_schedule_start).isBetween('1980-10-19', '2010-10-25'))
                this.prescriptionsData = data;
            }
        }
    }

</script>
