<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Checkups extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checkups', function (Blueprint $table) {
            $table->unsignedInteger('id', true);
            $table->unsignedSmallInteger('checkupcategory_id', false);
            $table->unsignedMediumInteger('patient_id', false);
            $table->unsignedTinyInteger('checkupstatus_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('checkupcategory_id')->references('id')->on('checkup_categories');
            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('checkupstatus_id')->references('id')->on('checkup_statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('checkups');
    }
}
