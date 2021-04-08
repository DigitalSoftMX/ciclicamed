<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_schedules', function (Blueprint $table) {
            $table->unsignedMediumInteger('employee_id', false);
            $table->tinyInteger('start_day');
            $table->time('start_time');
            $table->tinyInteger('finish_day');
            $table->time('finish_time');
            $table->unsignedSmallInteger('branch_id');
            $table->timestamps();

            //Relaciones
            $table->foreign('employee_id')->references('id')->on('employees');
            $table->foreign('branch_id')->references('id')->on('branches');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_schedules');
    }
}
