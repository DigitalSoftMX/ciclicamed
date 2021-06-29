@extends('layouts.app')
@section('content')
<div id="app">
    @if($role[0]->name === 'Paciente')
        <patient-dashboard-page></patient-dashboard-page>
    @endif
</div>
@endsection