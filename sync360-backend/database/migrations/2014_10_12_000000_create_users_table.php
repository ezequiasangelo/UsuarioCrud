<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nome_completo');
            $table->integer('idade')->nullable();
            $table->string('rua')->nullable();
            $table->string('bairro')->nullable();
            $table->string('estado')->nullable();
            $table->text('biografia')->nullable();
            $table->string('imagem_perfil')->nullable();
            $table->string('isDelete')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
};
