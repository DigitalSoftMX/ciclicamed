<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeDaysOffTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_days_off', function (Blueprint $table) {
            $table->unsignedMediumInteger('employee_id', false);
            $table->date('day_off');
            $table->time('start_time')->nullable();
            $table->time('finish_time')->nullable();
            $table->unsignedSmallInteger('branch_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('branch_id')->references('id')->on('branches')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_days_off');
    }
}
