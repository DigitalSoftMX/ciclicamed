<template>
    <div class="card" v-bind:class="{ 'shadow-none': noShadow }">
        <div class="card-header">
            <h4>{{title}}</h4>
        </div>
        <div class="card-body" :id="`chart${id}`">
            <Chart :size="{ width: width, height: 400 }" :data="data" :margin="margin" :direction="direction">

                <template #layers>
                    <Grid strokeDasharray="2,2" />
                    <Bar :dataKeys="['name', 'pl']" :barStyle="{ fill: '#60269E' }" />
                </template>

            </Chart>
        </div>
    </div>
</template>

<script lang="ts" src="./ChartComponent.ts"></script>
