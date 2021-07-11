<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeLicensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_licenses', function (Blueprint $table) {
            $table->unsignedMediumInteger('employee_id', false);
            $table->string('degree_title', 100);
            $table->string('license_number', 8);
            $table->string('school_name', 100);
            $table->unsignedSmallInteger('medicalspecialty_id');
            $table->timestamps();

            //Relaciones
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('medicalspecialty_id')->references('id')->on('medical_specialties')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_licenses');
    }
}
