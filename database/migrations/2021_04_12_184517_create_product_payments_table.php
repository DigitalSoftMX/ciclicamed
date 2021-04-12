<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_payments', function (Blueprint $table) {
            $table->unsignedInteger('medicalconsult_id', false)->nullable();
            $table->unsignedInteger('payment_id', false);
            $table->unsignedMediumInteger('product_id', false);

            //Relaciones
            $table->foreign('medicalconsult_id')->references('id')->on('medical_consults');
            $table->foreign('payment_id')->references('id')->on('payments');
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_payments');
    }
}
