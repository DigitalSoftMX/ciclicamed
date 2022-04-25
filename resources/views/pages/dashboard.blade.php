@extends('layouts.app')
@section('content')
<div id="app">
    <!-- <br><br><br>
        Usuario: {{$user}} <br>
        Role: {{$roles}} -->
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
        <script src="{{ asset('js/PatientDashboardPage.js') }}"></script>
        @break
    @case('Doctor')
        <script  cript src="{{ asset('js/DoctorDashboardPage.js') }}"></script>
        @break
    @case('Checkup')
        <script    ipt src="{{ asset('js/CheckupDashboardPage.js') }}"></script>
        @break
    @case('Asistente')
        <script   pt src="{{ asset('js/AsistenteDashboardPage.js') }}"></script>
        @break
    @case('Enfermera')
        <script ript src="{{ asset('js/NurseDashboardPage.js') }}"></script>
        @break
    @case('Imagenologia')
        <script ript src="{{ asset('js/ImagenologiaDashboardPage.js') }}"></script>
        @break
    @case('Laboratorio')
        <script  cript src="{{ asset('js/LaboratorioDashboardPage.js') }}"></script>
        @break
    @case('Caja')
        <script ript src="{{ asset('js/CajaDashboardPage.js') }}"></script>
        @break
@endswitch
