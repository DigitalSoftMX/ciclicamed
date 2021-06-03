<template>
    <div class="modal-info-confirmed modal fade show w-100 " :id="id" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="card border-0">
                <div class="modal-content">
                    <div class="card-header">
                        <h6>Medicamentos</h6>
                    </div>
                    <div class="card-body p-0">
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="t_channel-today" role="tabpanel"
                                aria-labelledby="t_channel-today-tab">
                                <div class="table-responsive">
                                    <table class="table table--default mb-0">
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Dosis</th>
                                                <th>Frecuencia</th>
                                                <th>Duracion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="medicament in medicaments" :key="medicament.id">
                                                <td>{{medicament.medicament.name}}</td>
                                                <td>{{medicament.dose}}</td>
                                                <td>{{medicament.rate}}</td>
                                                <td>{{medicament.duration}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id', 'title', 'medicaments']
    }
</script>