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
            $table->unsignedMediumInteger('charged_by', false)->nullable();
            $table->unsignedTinyInteger('paymentmethod_id', false)->nullable();
            $table->unsignedSmallInteger('branch_id', false);
            $table->decimal('discount', 5, 2)->nullable();
            $table->decimal('total', 7, 2);
            $table->string('credit_card', 4)->nullable();
            $table->unsignedTinyInteger('paymentstatus_id', false);
            $table->unsignedMediumInteger('patient_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('created_by')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('updated_by')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('charged_by')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('paymentmethod_id')->references('id')->on('payment_methods')->onDelete('cascade');
            $table->foreign('branch_id')->references('id')->on('branches')->onDelete('cascade');
            $table->foreign('paymentstatus_id')->references('id')->on('payment_statuses')->onDelete('cascade');
            $table->foreign('patient_id')->references('id')->on('patients')->onDelete('cascade');
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
