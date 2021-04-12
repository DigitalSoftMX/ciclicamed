<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->unsignedMediumInteger('id', true);
            $table->string('product_code', 25);
            $table->string('lans_code', 25)->nullable();
            $table->string('name', 255);
            $table->string('unit', 25)->nullable();
            $table->unsignedSmallInteger('quantity_available', false)->nullable();
            $table->decimal('price', 7, 2);
            $table->decimal('discount', 5, 2);
            $table->unsignedTinyInteger('productcategory_id', false);
            $table->unsignedTinyInteger('productstatus_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('productcategory_id')->references('id')->on('product_categories');
            $table->foreign('productstatus_id')->references('id')->on('product_statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
