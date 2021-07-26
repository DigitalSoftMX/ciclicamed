@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Administrador')
            <administrador-prescription-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></administrador-prescription-page>
            @break
        @case('Paciente')
            <patient-prescription-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></patient-prescription-page>
            @break
        @case('Enfermera')
            <nurse-prescription-page :nurse="{{ json_encode($user) }}" role="Enfermera"></nurse-prescription-page>
            @break
    @endswitch
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorPrescriptionPage.js') }}"></script>
        @break
    @case('Paciente')
        <script src="{{ asset('js/PatientPrescriptionPage.js') }}"></script>
        @break
    @case('Enfermera')
        <script src="{{ asset('js/NursePrescriptionPage.js') }}"></script>
        @break
@endswitch