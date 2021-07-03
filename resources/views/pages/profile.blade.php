@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
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
    @endswitch
</div>
@endsection