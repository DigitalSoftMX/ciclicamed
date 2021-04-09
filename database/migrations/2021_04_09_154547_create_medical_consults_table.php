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
            $table->unsignedTinyInteger('medicalconsultstatus_id', false);
            $table->boolean('is_confirmed')->default(0);
            $table->string('consult_reason', 500);
            $table->date('consult_date');
            $table->time('consult_start_time');
            $table->time('consult_finish_time');
            $table->unsignedSmallInteger('branch_id', false);
            $table->unsignedMediumInteger('updated_by', false);
            $table->string('update_note', 255)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('created_by')->references('id')->on('employees');
            $table->foreign('medicalconsulttype_id')->references('id')->on('medical_consult_types');
            $table->foreign('medicalconsultstatus_id')->references('id')->on('medical_consult_statuses');
            $table->foreign('branch_id')->references('id')->on('branches');
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
        Schema::dropIfExists('medical_consults');
    }
}
