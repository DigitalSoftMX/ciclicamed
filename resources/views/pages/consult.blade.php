@extends('layouts.app')
@section('content')
<div id="app">
    @if (Cookie::get('consult') !== null)
        @switch($roles[0]->name)
            @case('Doctor')
                <doctor-consult-page :doctor="{{ json_encode($user) }}" role="Doctor" :consult="{{ Cookie::get('consult') }}"></doctor-dashboard-page>
                @break
        @endswitch
    @else
        @switch($roles[0]->name)
            @case('Doctor')
                <doctor-consult-page></doctor-dashboard-page>
                @break
        @endswitch
    @endif
</div>
@endsection