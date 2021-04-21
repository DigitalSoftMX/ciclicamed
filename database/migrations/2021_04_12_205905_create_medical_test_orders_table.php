<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalTestOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_test_orders', function (Blueprint $table) {
            $table->unsignedInteger('medicaltest_id', false);
            $table->unsignedMediumInteger('product_id', false);
            $table->unsignedMediumInteger('updated_by', false)->nullable();
            $table->string('update_note', 255)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('medicaltest_id')->references('id')->on('medical_tests');
            $table->foreign('product_id')->references('id')->on('products');
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
        Schema::dropIfExists('medical_test_orders');
    }
}
