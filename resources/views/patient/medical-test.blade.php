<!-- @extends('layouts.app') -->
@section('content')
<div id="app" class="contents">
    <user-test-page :tests="{{ json_encode($medicaltest) }}"></user-test-page>
</div>
@endsection