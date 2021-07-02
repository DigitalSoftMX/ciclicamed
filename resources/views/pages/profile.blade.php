@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Paciente')
        <patient-profile-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></patient-profile-page>
    @endif
    @if($roles[0]->name === 'Doctor')
        <doctor-profile-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></doctor-profile-page>
    @endif
</div>
@endsection