<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentDebtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_debts', function (Blueprint $table) {
            $table->unsignedInteger('id', true);
            $table->unsignedInteger('payment_id', false);
            $table->string('description', 255);
            $table->decimal('total', 7, 2);
            $table->unsignedTinyInteger('paymentmethod_id', false);
            $table->unsignedMediumInteger('charged_by', false);
            $table->string('credit_card', 4)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('payment_id')->references('id')->on('payments');
            $table->foreign('paymentmethod_id')->references('id')->on('payment_methods');
            $table->foreign('charged_by')->references('id')->on('employees');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_debts');
    }
}
