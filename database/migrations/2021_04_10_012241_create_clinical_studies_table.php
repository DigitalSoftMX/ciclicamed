<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClinicalStudiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clinical_studies', function (Blueprint $table) {
            $table->unsignedInteger('id', true);
            $table->unsignedInteger('created_in', false)->nullable();
            $table->unsignedInteger('scheduled_in', false);
            $table->dateTime('finished_at');
            $table->unsignedTinyInteger('clinicalstudystatus_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('created_in')->references('id')->on('medical_consults');
            $table->foreign('scheduled_in')->references('id')->on('medical_consults');
            $table->foreign('clinicalstudystatus_id')->references('id')->on('clinical_study_statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clinical_studies');
    }
}
