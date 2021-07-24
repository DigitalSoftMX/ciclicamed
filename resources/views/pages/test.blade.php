@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
    @case('Paciente')
        <patient-test-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></patient-test-page>
        @break
    @case('Enfermera')
        <nurse-test-page :nurse="{{ json_encode($user) }}" role="Enfermera"></nurse-test-page>
        @break
    @case('Imagenologia')
        <imagenologia-test-page :imagenologia="{{ json_encode($user) }}" role="Imagenologia"></imagenologia-test-page>
        @break
    @case('Laboratorio')
        <laboratorio-test-page :laboratorio="{{ json_encode($user) }}" role="Laboratorio"></laboratorio-test-page>
        @break
    @endswitch
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorTestPage.js') }}"></script>
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