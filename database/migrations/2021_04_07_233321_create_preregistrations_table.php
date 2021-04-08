<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreregistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('preregistrations', function (Blueprint $table) {
            $table->unsignedMediumInteger('id', true);
            $table->string('business_name', 50);
            $table->boolean('has_children');
            $table->string('children_total', 2)->nullable();
            $table->unsignedInteger('user_id', false)->unique();
            $table->timestamps();

            //Relaciones
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preregistration');
    }
}
