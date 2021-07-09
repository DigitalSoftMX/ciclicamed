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
    @endswitch
</div>
@endsection