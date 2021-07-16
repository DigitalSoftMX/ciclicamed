<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBranchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('branches', function (Blueprint $table) {
            $table->unsignedSmallInteger('id', true);
            $table->string('name', '100');
            $table->string('address', 255);
            $table->string('phone', 10);
            $table->unsignedSmallInteger('branchstatus_id', false);
            $table->timestamps();

            $table->foreign('branchstatus_id')->references('id')->on('branch_statuses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('branches');
    }
}
