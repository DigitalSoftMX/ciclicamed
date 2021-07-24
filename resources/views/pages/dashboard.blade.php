@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Administrador')
            <administrador-dashboard-page :administrador="{{ json_encode($user) }}" role="Administrador"></administrador-dashboard-page>
            @break
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
        @case('Laboratorio')
            <laboratorio-dashboard-page :laboratorio="{{ json_encode($user) }}" role="Laboratorio"></laboratorio-dashboard-page>
            @break
        @case('Caja')
            <caja-dashboard-page :caja="{{ json_encode($user) }}" role="Caja"></caja-dashboard-page>
            @break
    @endswitch
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorDashboardPage.js') }}"></script>
        @break
    @case('Paciente')
        @break
    @case('Doctor')
        @break
    @case('Checkup')
        @break
    @case('Asistente')
        @break
    @case('Enfermera')
        @break
    @case('Imagenologia')
        @break
    @case('Laboratorio')
        @break
    @case('Caja')
        @break
@endswitch
