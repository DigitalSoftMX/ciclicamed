<template>
    <div class="card">
        <div class="card-header">
            <h3>Expediente</h3>
        </div>
        <div class="card-body">
            <section id="timeLine" class="cd-horizontal-timeline" v-show="consultList.length > 0">
                <div class="timeline">
                    <div class="events-wrapper">
                        <div class="events">
                            <ol>
                                <li v-for="(consult, index) in consultList" :key="consult.id"><a
                                        v-bind:class="{'selected': index == 0}" @click="getInfoConsult(consult.id)"
                                        :data-date="formatConsultDateTime(consult.consult_schedule_start)">{{formatConsultDateTime(consult.consult_schedule_start)}}</a>
                                </li>
                            </ol>
                            <span class="filling-line" aria-hidden="true"></span>
                        </div> <!-- .events -->
                    </div> <!-- .events-wrapper -->

                    <ul class="cd-timeline-navigation">
                        <li><a href="#0" class="prev">Prev</a></li>
                        <li><a href="#0" class="next inactive">Next</a></li>
                    </ul> <!-- .cd-timeline-navigation -->
                </div> <!-- .timeline -->

                <div class="events-content">
                    <ol>
                        <li v-bind:class="{'selected': index == 0}"
                            :data-date="formatConsultDateTime(consult.consult_schedule_start)"
                            v-for="(consult, index) in consultList" :key="consult.id">
                            <div class="row mx-0" v-if="followUp.id !== -1">
                            </div>
                            <h3>Expediente</h3>
                        </li>
                    </ol>
                </div> <!-- .events-content -->
            </section>
        </div>
    </div>
</template>

<script lang="ts" src="./RecordComponent.ts"></script>
<style lang="sass">
    @import "./RecordComponent.scss"

</style>
