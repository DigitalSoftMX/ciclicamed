@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Paciente')
        <patient-test-order-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></patient-test-order-page>
    @endif
</div>
@endsection