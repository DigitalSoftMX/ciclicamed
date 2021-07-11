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
            $table->string('product_code', 25)->nullable();
            $table->string('supplier_code', 25)->nullable();
            $table->string('name', 255);
            $table->string('unit', 25)->nullable();
            $table->unsignedSmallInteger('quantity_available', false)->nullable();
            $table->decimal('price', 9, 2);
            $table->decimal('discount', 9, 2)->nullable();
            $table->unsignedTinyInteger('productcategory_id', false);
            $table->unsignedTinyInteger('productstatus_id', false);
            $table->timestamps();

            //Relaciones
            $table->foreign('productcategory_id')->references('id')->on('product_categories')->onDelete('cascade');
            $table->foreign('productstatus_id')->references('id')->on('product_statuses')->onDelete('cascade');
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
