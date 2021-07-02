@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Paciente')
        <patient-dashboard-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></patient-dashboard-page>
    @endif
    @if($roles[0]->name === 'Doctor')
        <doctor-dashboard-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></doctor-dashboard-page>
    @endif
</div>
@endsection