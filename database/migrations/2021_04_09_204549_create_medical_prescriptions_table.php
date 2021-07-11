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
            $table->string('administration_type', 100);
            $table->string('rate', 100);
            $table->string('duration', 100);
            $table->unsignedMediumInteger('updated_by', false)->nullable();
            $table->string('update_note', 255)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('medicalconsult_id')->references('id')->on('medical_consults')->onDelete('cascade');
            $table->foreign('medicament_id')->references('id')->on('medicaments')->onDelete('cascade');
            $table->foreign('updated_by')->references('id')->on('employees')->onDelete('cascade');
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
