@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Administrador')
            <administrador-schedule-page :administrador="{{ json_encode($user) }}"></administrador-schedule-page>
            @break
        @case('Doctor')
            <doctor-schedule-page :doctor="{{ json_encode($user) }}"></doctor-schedule-page>
            @break
    @endswitch
</div>
@endsection

@yield('scripts')
@switch($roles[0]->name)
    @case('Administrador')
        <script src="{{ asset('js/AdministradorSchedulePage.js') }}"></script>
        @break
    @case('Doctor')
        <script src="{{ asset('js/DoctorSchedulePage.js') }}"></script>
        @break
@endswitch