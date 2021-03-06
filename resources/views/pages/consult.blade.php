@extends('layouts.app')
@section('content')
<div id="app">
    @if (Cookie::get('consult') !== null)
        @switch($roles[0]->name)
            @case('Administrador')
                <administrador-consult-page :doctor="{{ json_encode($user) }}" role="Administrador" :consult="{{ Cookie::get('consult') }}" :specialty="{{ $consultSpecialty }}"></doctor-dashboard-page>
                @break
            @case('Doctor')
                <doctor-consult-page :doctor="{{ json_encode($user) }}" role="Doctor" :consult="{{ Cookie::get('consult') }}"></doctor-dashboard-page>
                @break
            @case('Enfermera')
                <nurse-consult-page :nurse="{{ json_encode($user) }}" :consult="{{ Cookie::get('consult') }}"></doctor-dashboard-page>
                @break
        @endswitch
    @else
        @switch($roles[0]->name)
            @case('Administrador')
                <administrador-consult-page></doctor-dashboard-page>
                @break
            @case('Doctor')
                <doctor-consult-page></doctor-dashboard-page>
                @break
            @case('Enfermera')
                <nurse-consult-page></doctor-dashboard-page>
                @break
        @endswitch
    @endif
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorConsultPage.js') }}"></script>
        @break
    @case('Doctor')
        <script src="{{ asset('js/DoctorConsultPage.js') }}"></script>
        @break
    @case('Enfermera')
        <script src="{{ asset('js/NurseConsultPage.js') }}"></script>
        @break
@endswitch