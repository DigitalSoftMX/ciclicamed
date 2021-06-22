<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalConsultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_consults', function (Blueprint $table) {
            $table->unsignedInteger('id', true);
            $table->unsignedMediumInteger('patient_id', false);
            $table->unsignedMediumInteger('doctor_id', false)->nullable();
            $table->unsignedMediumInteger('created_by', false)->nullable();
            $table->unsignedTinyInteger('medicalconsultcategory_id', false);
            $table->unsignedMediumInteger('updated_by', false)->nullable();
            $table->string('update_note', 255)->nullable();
            $table->string('consult_reason', 500);
            $table->dateTime('consult_schedule_start')->nullable();
            $table->dateTime('consult_schedule_finish')->nullable();
            $table->dateTime('consult_start_at')->nullable();
            $table->dateTime('consult_finish_at')->nullable();
            $table->unsignedSmallInteger('branch_id', false);
            $table->unsignedTinyInteger('medicalconsultstatus_id', false);
            $table->unsignedSmallInteger('medicalspecialty_id', false);
            $table->unsignedInteger('checkup_id', false)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('doctor_id')->references('id')->on('employees');
            $table->foreign('created_by')->references('id')->on('employees');
            $table->foreign('medicalconsultcategory_id')->references('id')->on('medical_consult_categories');
            $table->foreign('updated_by')->references('id')->on('employees');
            $table->foreign('branch_id')->references('id')->on('branches');
            $table->foreign('medicalconsultstatus_id')->references('id')->on('medical_consult_statuses');
            $table->foreign('medicalspecialty_id')->references('id')->on('medical_specialties');
            $table->foreign('checkup_id')->references('id')->on('checkups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medical_consults');
    }
}
