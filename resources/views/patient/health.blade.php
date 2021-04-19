<!-- @extends('layouts.app') -->
@section('content')
<div id="app" class="contents">

    <user-health-page :prescriptions="{{ json_encode($prescriptions) }}"></user-health-page>

</div>
@endsection