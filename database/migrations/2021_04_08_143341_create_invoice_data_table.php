<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_data', function (Blueprint $table) {
            $table->unsignedMediumInteger('patient_id', false);
            $table->string('business_name', 255);
            $table->string('rfc', 13);
            $table->string('email', 100);
            $table->string('phone', 10);
            $table->string('cfdi', 100)->nullable();
            $table->string('country', 50);
            $table->timestamps();

            //Relaciones
            $table->foreign('patient_id')->references('id')->on('patients');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice_data');
    }
}
