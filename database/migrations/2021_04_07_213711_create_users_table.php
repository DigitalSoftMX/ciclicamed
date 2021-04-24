<?php

use App\Models\User\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->unsignedInteger('id', true);
            $table->string('email', 100);//->unique();
            // $table->string('provider')->nullable();
            // $table->string('provider_id')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->unsignedTinyInteger('userstatus_id', false);
            $table->unsignedTinyInteger('usercategory_id', false);
            $table->rememberToken();
            $table->timestamps();

            //Relaciones
            $table->foreign('userstatus_id')->references('id')->on('user_statuses');
            $table->foreign('usercategory_id')->references('id')->on('user_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
