<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalAttachmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_attachments', function (Blueprint $table) {
            $table->unsignedMediumInteger('patient_id', false);
            $table->json('data');
            $table->unsignedSmallInteger('medicalspecialty_id', false);
            $table->unsignedMediumInteger('updated_by', false);
            $table->string('update_note', 255)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('medicalspecialty_id')->references('id')->on('medical_specialties');
            $table->foreign('updated_by')->references('id')->on('employees');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medical_attachments');
    }
}
