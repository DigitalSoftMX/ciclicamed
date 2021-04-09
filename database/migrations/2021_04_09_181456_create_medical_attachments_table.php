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
            $table->unsignedInteger('medicalconsult_id', false);
            $table->json('data');
            $table->unsignedSmallInteger('medicalattachmentform_id', false);
            $table->unsignedSmallInteger('updated_by', false);
            $table->string('update_note', 255)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('medicalconsult_id')->references('id')->on('medical_consults');
            $table->foreign('medicalattachmentform_id')->references('id')->on('medical_attachment_forms');
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
