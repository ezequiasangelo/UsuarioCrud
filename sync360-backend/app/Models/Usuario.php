<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $fillable = [
        'nome_completo',
        'idade',
        'rua',
        'bairro',
        'estado',
        'biografia',
        'imagem_perfil',
        'isDelete'
    ];
}
