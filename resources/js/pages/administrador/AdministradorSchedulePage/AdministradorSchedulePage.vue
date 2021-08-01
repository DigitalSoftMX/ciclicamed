<template>
    <navbar-component @menuSelect="changeSidebarStatus" title="Horarios y títulos profesionales" role="Administrador"
        :userData="administrador" :photo="administrador.photo"></navbar-component>
    <sidebar-component title="Menú lateral" :items="sidebarItems"></sidebar-component>
    <div id="pdpContent" class="contents expanded">
        <div class="row mx-0">
            <div class="col-12 col-md-4">
                <div class="mb-25">
                    <div class="card">
                        <div class="card-header">
                            <h4>Lista de doctores</h4>
                        </div>
                        <div class="card-body">
                            <div class="mb-25">
                                <label>Doctor</label>
                                <v-select :options="doctors"
                                    :getOptionLabel="item => `${item.first_name} ${ item.last_name}`"
                                    :reduce="item => item.id" v-model="doctorSelected" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8">
                <employees-schedule-component :id="doctorSelected"></employees-schedule-component>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./AdministradorSchedulePage.ts"></script>
