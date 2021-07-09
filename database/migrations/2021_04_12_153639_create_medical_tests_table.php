<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_tests', function (Blueprint $table) {
            $table->unsignedInteger('id', true);
            $table->string('test_code', 25);
            $table->unsignedInteger('created_in', false)->nullable();
            $table->unsignedInteger('scheduled_in', false)->nullable();
            $table->dateTime('finished_at')->nullable();
            $table->unsignedTinyInteger('medicalteststatus_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('created_in')->references('id')->on('medical_consults');
            $table->foreign('scheduled_in')->references('id')->on('medical_consults');
            $table->foreign('medicalteststatus_id')->references('id')->on('medical_test_statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medical_tests');
    }
}
