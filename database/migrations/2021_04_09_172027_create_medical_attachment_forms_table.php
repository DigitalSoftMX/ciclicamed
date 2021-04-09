<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalAttachmentFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_attachment_forms', function (Blueprint $table) {
            $table->unsignedSmallInteger('id', true);
            $table->string('name', 150);
            $table->unsignedSmallInteger('medicalspecialty_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('medicalspecialty_id')->references('id')->on('medical_specialties');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medical_attachment_forms');
    }
}
