<!-- @extends('layouts.app') -->
@section('content')
<div id="app" class="contents">
    <user-prescription-page :prescriptions="{{ json_encode($prescriptions) }}"></user-prescription-page>
</div>
@endsection