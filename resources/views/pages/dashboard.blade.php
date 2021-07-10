@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Paciente')
            <patient-dashboard-page :patient="{{ json_encode($user) }}" role="Paciente"></patient-dashboard-page>
            @break
        @case('Doctor')
            <doctor-dashboard-page :doctor="{{ json_encode($user) }}" role="Doctor"></doctor-dashboard-page>
            @break
        @case('Checkup')
            <checkup-dashboard-page :patient="{{ json_encode($user) }}" role="Checkup"></checkup-dashboard-page>
            @break
        @case('Asistente')
            <asistente-dashboard-page :patient="{{ json_encode($user) }}" role="Asistente"></asistente-dashboard-page>
            @break
        @case('Enfermera')
            <nurse-dashboard-page :nurse="{{ json_encode($user) }}" role="Enfermera"></nurse-dashboard-page>
            @break
        @case('Imagenologia')
            <imagenologia-dashboard-page :imagenologia="{{ json_encode($user) }}" role="Imagenologia"></imagenologia-dashboard-page>
            @break
    @endswitch
</div>
@endsection