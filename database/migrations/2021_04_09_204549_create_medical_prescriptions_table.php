<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalPrescriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_prescriptions', function (Blueprint $table) {
            $table->unsignedInteger('medicalconsult_id', false);
            $table->unsignedMediumInteger('medicament_id');
            $table->string('administation_type', 100);
            $table->string('rate', 100);
            $table->string('duration', 100);
            $table->unsignedMediumInteger('updated_by', false)->nullable();
            $table->string('update_note', 255)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('medicalconsult_id')->references('id')->on('medical_consults');
            $table->foreign('medicament_id')->references('id')->on('medicaments');
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
        Schema::dropIfExists('medical_prescriptions');
    }
}
