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