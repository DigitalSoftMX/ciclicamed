@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Checkup')
        <checkup-checkup-page :patient="{{ json_encode($user) }}" role="Checkup"></checkup-checkup-page>
    @endif
</div>
@endsection