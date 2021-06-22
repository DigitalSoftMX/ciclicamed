<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->unsignedMediumInteger('id', true);
            $table->string('first_name', 100);
            $table->string('last_name', 100);
            $table->boolean('gender');
            $table->date('birthday');
            $table->string('address', 255)->nullable();
            $table->string('phone', 10)->nullable();
            $table->string('cellphone', 10)->nullable();
            $table->string('email', 100)->nullable();
            $table->string('photo', 100)->nullable();
            $table->unsignedTinyInteger('employeecategory_id', false);
            $table->unsignedTinyInteger('employeestatus_id', false);
            $table->unsignedInteger('user_id', false)->nullable();
            $table->timestamps();

            //Relaciones
            $table->foreign('employeecategory_id')->references('id')->on('employee_categories');
            $table->foreign('employeestatus_id')->references('id')->on('employee_statuses');
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
        Schema::dropIfExists('employees');
    }
}
