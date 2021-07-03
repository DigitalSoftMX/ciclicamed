@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Paciente')
            <patient-dashboard-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></patient-dashboard-page>
            @break
        @case('Doctor')
            <doctor-dashboard-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></doctor-dashboard-page>
            @break
        @case('Checkup')
            <checkup-dashboard-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></checkup-dashboard-page>
            @break
        @case('Asistente')
            <asistente-dashboard-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></asistente-dashboard-page>
            @break
    @endswitch
</div>
@endsection