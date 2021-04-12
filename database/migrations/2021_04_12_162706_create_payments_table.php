<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->unsignedInteger('id', true);
            $table->unsignedMediumInteger('created_by', false);
            $table->unsignedMediumInteger('updated_by', false)->nullable();
            $table->unsignedMediumInteger('charged_by', false);
            $table->unsignedTinyInteger('paymentmethod_id', false);
            $table->unsignedSmallInteger('branch_id', false);
            $table->decimal('discount', 5, 2)->nullable();
            $table->decimal('total', 7, 2);
            $table->string('credit_card', 4)->nullable();
            $table->unsignedTinyInteger('paymentstatus_id', false);
            $table->unsignedMediumInteger('patient_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('created_by')->references('id')->on('employees');
            $table->foreign('updated_by')->references('id')->on('employees');
            $table->foreign('charged_by')->references('id')->on('employees');
            $table->foreign('paymentmethod_id')->references('id')->on('payment_methods');
            $table->foreign('branch_id')->references('id')->on('branches');
            $table->foreign('paymentstatus_id')->references('id')->on('payment_statuses');
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
        Schema::dropIfExists('payments');
    }
}
