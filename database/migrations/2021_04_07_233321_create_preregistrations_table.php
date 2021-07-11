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
            $table->json('data')->nullable();
            $table->unsignedInteger('user_id', false)->unique();
            $table->timestamps();

            //Relaciones
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preregistrations');
    }
}
