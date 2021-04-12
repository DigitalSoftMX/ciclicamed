<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalTestResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_test_results', function (Blueprint $table) {
            $table->unsignedInteger('medicaltest_id', false);
            $table->unsignedMediumInteger('created_by', false);
            $table->json('results');
            $table->string('result_note', 500);
            $table->unsignedMediumInteger('updated_by', false)->nullable();
            $table->string('update_note', 255);
            $table->unsignedTinyInteger('medicalteststatus_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('medicaltest_id')->references('id')->on('medical_tests');
            $table->foreign('created_by')->references('id')->on('employees');
            $table->foreign('updated_by')->references('id')->on('employees');
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
        Schema::dropIfExists('medical_test_results');
    }
}
