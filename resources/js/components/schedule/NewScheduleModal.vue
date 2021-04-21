<template>
    <div class="e-info-modal modal fade show" id="schedule-modal" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-sm e-info-dialog modal-dialog-centered" id="c-event" role="document">
            <div class="modal-content">
                <div class="modal-header e-info-header bg-primary text-center">
                    <h6 class="modal-title e-info-title">Agendar cita</h6>
                    <button type="button" class="btn btn-icon btn-circle btn-outline-primary p-0" data-dismiss="modal" aria-label="Close">
                        <img src="/svg/close.svg" alt="Alert logo" style="filter: invert(1);">
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="e-info-list">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-calendar">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span class="list-line">
                                <span class="list-label">Date :</span>
                                <span class="list-meta"> Thursday, January 23</span>
                            </span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-clock">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span class="list-line">
                                <span class="list-label">Time :</span>
                                <span class="list-meta"> 23⋅5:00 – 6:00 am</span>
                            </span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-align-left">
                                <line x1="17" y1="10" x2="3" y2="10"></line>
                                <line x1="21" y1="6" x2="3" y2="6"></line>
                                <line x1="21" y1="14" x2="3" y2="14"></line>
                                <line x1="17" y1="18" x2="3" y2="18"></line>
                            </svg>
                            <span class="list-line">
                                <span class="list-text"> Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                                    consetetur sadipscing elitr sed diam</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: ['test'],
        data: function () {
            return {}
        },
        methods: {}
    }

</script>

<style>
</style>
