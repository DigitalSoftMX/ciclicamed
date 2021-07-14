@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Administrador')
            <!-- <administrador-consult-page :doctor="{{ json_encode($user) }}" role="Administrador" :consult="{{ Cookie::get('consult') }}" :specialty="{{ $consultSpecialty }}"></doctor-dashboard-page> -->
            @break
        @case('Doctor')
            <doctor-schedule-page :doctor="{{ json_encode($user) }}"></doctor-dashboard-page>
            @break
    @endswitch
</div>
@endsection