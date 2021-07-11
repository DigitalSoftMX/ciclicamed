<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalTestSamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_test_samples', function (Blueprint $table) {
            $table->unsignedInteger('medicaltest_id', false);
            $table->date('fum');
            $table->unsignedMediumInteger('collected_by', false);
            $table->dateTime('finish_at')->nullable();
            $table->unsignedMediumInteger('sent_by', false)->nullable();
            $table->dateTime('sent_at')->nullable();
            $table->unsignedMediumInteger('updated_by', false)->nullable();
            $table->string('update_note', 255)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('medicaltest_id')->references('id')->on('medical_tests')->onDelete('cascade');
            $table->foreign('collected_by')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('sent_by')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('updated_by')->references('id')->on('employees')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medical_test_samples');
    }
}
