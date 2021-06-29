<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->unsignedMediumInteger('id', true);
            $table->string('patient_code', 25)->nullable();
            $table->string('first_name', 100);
            $table->string('last_name', 100);
            $table->boolean('gender');
            $table->date('birthday');
            $table->string('address', 255)->nullable();
            $table->string('phone', 10)->nullable();
            $table->string('cellphone', 10)->nullable();
            $table->string('photo', 100)->nullable();
            $table->unsignedMediumInteger('preregistration_id', false);//->unique();
            $table->timestamps();

            //Relaciones
            $table->foreign('preregistration_id')->references('id')->on('preregistrations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}