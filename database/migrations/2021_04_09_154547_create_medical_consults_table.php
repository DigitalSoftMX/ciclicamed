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
            $table->unsignedMediumInteger('created_by', false);
            $table->unsignedTinyInteger('medicalconsulttype_id', false);
            $table->unsignedMediumInteger('updated_by', false);
            $table->string('update_note', 255)->nullable();
            $table->boolean('is_confirmed')->default(0);
            $table->string('consult_reason', 500);
            $table->dateTime('consult_schedule_start');
            $table->dateTime('consult_schedule_finish');
            $table->dateTime('consult_start_at');
            $table->dateTime('consult_finish_at');
            $table->unsignedSmallInteger('branch_id', false);
            $table->unsignedTinyInteger('medicalconsultstatus_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('created_by')->references('id')->on('employees');
            $table->foreign('medicalconsulttype_id')->references('id')->on('medical_consult_types');
            $table->foreign('updated_by')->references('id')->on('employees');
            $table->foreign('branch_id')->references('id')->on('branches');
            $table->foreign('medicalconsultstatus_id')->references('id')->on('medical_consult_statuses');
            
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
