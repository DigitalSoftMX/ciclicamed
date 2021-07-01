@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Paciente')
        <patient-prescription-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></patient-prescription-page>
    @endif
</div>
@endsection