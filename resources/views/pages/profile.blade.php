@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Administrador')
            <administrador-profile-page :administrador="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></administrador-profile-page>
            @break
        @case('Paciente')
            <patient-profile-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></patient-profile-page>
            @break
        @case('Doctor')
            <doctor-profile-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></doctor-profile-page>
            @break
        @case('Checkup')
            <checkup-profile-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></checkup-profile-page>
            @break
        @case('Asistente')
            <asistente-profile-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></asistente-profile-page>
            @break
        @case('Enfermera')
            <nurse-profile-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></nurse-profile-page>
            @break
        @case('Imagenologia')
            <imagenologia-profile-page :imagenologia="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></imagenologia-profile-page>
            @break
        @case('Laboratorio')
            <laboratorio-profile-page :laboratorio="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></laboratorio-profile-page>
            @break
        @case('Caja')
            <caja-profile-page :caja="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></caja-profile-page>
            @break
    @endswitch
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorProfilePage.js') }}"></script>
        @break
    @case('Paciente')
        <script src="{{ asset('js/PatientProfilePage.js') }}"></script>
        @break
    @case('Doctor')
        <script  cript src="{{ asset('js/DoctorProfilePage.js') }}"></script>
        @break
    @case('Checkup')
        <script    ipt src="{{ asset('js/CheckupProfilePage.js') }}"></script>
        @break
    @case('Asistente')
        <script   pt src="{{ asset('js/AsistenteProfilePage.js') }}"></script>
        @break
    @case('Enfermera')
        <script ript src="{{ asset('js/NurseProfilePage.js') }}"></script>
        @break
    @case('Imagenologia')
        <script ript src="{{ asset('js/ImagenologiaProfilePage.js') }}"></script>
        @break
    @case('Laboratorio')
        <script  cript src="{{ asset('js/LaboratorioProfilePage.js') }}"></script>
        @break
    @case('Caja')
        <script ript src="{{ asset('js/CajaProfilePage.js') }}"></script>
        @break
@endswitch