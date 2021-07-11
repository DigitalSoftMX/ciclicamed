<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalAttachmentFollowUpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_attachment_follow_ups', function (Blueprint $table) {
            $table->unsignedInteger('medicalconsult_id', false);
            $table->json('data');
            $table->unsignedSmallInteger('medicalspecialty_id', false);
            $table->unsignedSmallInteger('updated_by', false);
            $table->string('update_note', 255)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('medicalconsult_id')->references('id')->on('medical_consults')->onDelete('cascade');
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
        Schema::dropIfExists('medical_attachment_follow_ups');
    }
}
