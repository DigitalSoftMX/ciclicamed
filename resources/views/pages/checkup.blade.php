@extends('layouts.app')
@section('content')
<div id="app">
    @if($roles[0]->name === 'Checkup')
        <checkup-checkup-page :patient="{{ json_encode($user) }}" :roles="{{ json_encode($roles) }}"></checkup-checkup-page>
    @endif
</div>
@endsection