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
            $table->dateTime('nurse_start_at')->nullable();
            $table->dateTime('nurse_finish_at')->nullable();
            $table->dateTime('assistant_start_at')->nullable();
            $table->dateTime('assistant_finish_at')->nullable();
            $table->unsignedSmallInteger('branch_id', false);
            $table->unsignedTinyInteger('medicalconsultstatus_id', false);
            $table->unsignedSmallInteger('medicalspecialty_id', false);
            $table->unsignedInteger('checkup_id', false)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('patient_id')->references('id')->on('patients')->onDelete('cascade');
            $table->foreign('doctor_id')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('created_by')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('medicalconsultcategory_id')->references('id')->on('medical_consult_categories')->onDelete('cascade');
            $table->foreign('updated_by')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('branch_id')->references('id')->on('branches')->onDelete('cascade');
            $table->foreign('medicalconsultstatus_id')->references('id')->on('medical_consult_statuses')->onDelete('cascade');
            $table->foreign('medicalspecialty_id')->references('id')->on('medical_specialties')->onDelete('cascade');
            $table->foreign('checkup_id')->references('id')->on('checkups')->onDelete('cascade');
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
