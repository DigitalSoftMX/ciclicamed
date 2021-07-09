@extends('layouts.app')
@section('content')
<div id="app">
    @switch($roles[0]->name)
        @case('Paciente')
            <patient-prescription-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></patient-prescription-page>
            @break
        @case('Enfermera')
            <nurse-prescription-page :nurse="{{ json_encode($user) }}" role="Enfermera"></nurse-prescription-page>
            @break
    @endswitch
</div>
@endsection