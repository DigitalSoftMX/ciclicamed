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
    @case('Asistente')
        <asistente-test-page :nurse="{{ json_encode($user) }}" role="Enfermera"></asistente-test-page>
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
    @case('Paciente')
        <script src="{{ asset('js/PatientTestPage.js') }}"></script>
        @break
    @case('Enfermera')
        <script src="{{ asset('js/NurseTestPage.js') }}"></script>
        @break
    @case('Asistente')
        <script src="{{ asset('js/AsistenteTestPage.js') }}"></script>
        @break
    @case('Imagenologia')
        <script src="{{ asset('js/ImagenologiaTestPage.js') }}"></script>
        @break
    @case('Laboratorio')
        <script src="{{ asset('js/LaboratorioTestPage.js') }}"></script>
        @break
@endswitch