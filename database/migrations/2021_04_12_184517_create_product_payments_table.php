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
            $table->unsignedInteger('consult_created', false)->nullable();
            $table->unsignedInteger('consult_scheduled', false)->nullable();
            $table->unsignedInteger('checkup_id', false)->nullable();
            $table->unsignedInteger('payment_id', false);
            $table->unsignedMediumInteger('product_id', false);

            //Relaciones
            $table->foreign('consult_created')->references('id')->on('medical_consults')->onDelete('cascade');
            $table->foreign('consult_scheduled')->references('id')->on('medical_consults')->onDelete('cascade');
            $table->foreign('checkup_id')->references('id')->on('checkups')->onDelete('cascade');
            $table->foreign('payment_id')->references('id')->on('payments')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
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
