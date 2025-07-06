<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function get()
    {
        return Usuario::first(); // ou find(1) se quiser fixo
    }

    public function save(Request $request)
    {
        $usuario = Usuario::first();
        if (!$usuario) {
            $usuario = new Usuario();
        }

        $usuario->fill($request->all());
        $usuario->save();

        return response()->json(['mensagem' => 'Usuário atualizado com sucesso']);
    }
}
