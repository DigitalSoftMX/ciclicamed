<!-- @extends('layouts.app') -->
@section('content')
<div id="app" class="contents">
<schedule-component :schedules="{{ json_encode($schedules) }}"></schedule-component>
</div>
@endsection
