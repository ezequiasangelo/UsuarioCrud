<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Cloudinary\Cloudinary;
                                                   

class UsuarioController extends Controller
{
    public function get($id)
    {
        $usuario = Usuario::where('id', $id)->where('isDelete', false)->first();

        if (!$usuario) {
            return response()->json(['erro' => 'Usuário não encontrado ou excluído'], 404);
        }

        return response()->json($usuario);
    }

    public function getAll()
    {
        $usuarios = Usuario::where('isDelete', false)->get();
        return response()->json($usuarios);
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'nome_completo' => 'required|string|max:255',
            'idade' => 'nullable|integer|min:0',
            'rua' => 'nullable|string|max:255',
            'bairro' => 'nullable|string|max:255',
            'estado' => 'nullable|string|max:255',
            'biografia' => 'nullable|string',
            'imagem_perfil' => 'nullable|string|max:255',
        ]);

        $usuario = Usuario::create($validatedData);

        return response()->json(['mensagem' => 'Usuário criado com sucesso', 'usuario' => $usuario], 201);
    }

    public function update(Request $request, $id)
    {
        $usuario = Usuario::where('id', $id)->where('isDelete', false)->first();

        if (!$usuario) {
            return response()->json(['erro' => 'Usuário não encontrado ou já excluído'], 404);
        }

        $validatedData = $request->validate([
            'nome_completo' => 'sometimes|required|string|max:255',
            'idade' => 'nullable|integer|min:0',
            'rua' => 'nullable|string|max:255',
            'bairro' => 'nullable|string|max:255',
            'estado' => 'nullable|string|max:255',
            'biografia' => 'nullable|string',
            'imagem_perfil' => 'nullable|string|max:255',
        ]);

        $usuario->update($validatedData);

        return response()->json(['mensagem' => 'Usuário atualizado com sucesso', 'usuario' => $usuario]);
    }

    public function delete($id)
    {
        $usuario = Usuario::where('id', $id)->where('isDelete', false)->first();

        if (!$usuario) {
            return response()->json(['erro' => 'Usuário não encontrado ou já excluído'], 404);
        }

        $usuario->isDelete = true;
        $usuario->save();

        return response()->json(['mensagem' => 'Usuário marcado como excluído com sucesso']);
    }

public function uploadFoto(Request $request)
{
    Log::info('Cloudinary upload iniciado');

    $request->validate([
        'foto' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    try {

        \Cloudinary::config([
            'cloud_name' => env('CLOUDINARY_CLOUD_NAME'),
            'api_key'    => env('CLOUDINARY_API_KEY'),
            'api_secret' => env('CLOUDINARY_API_SECRET'),
            'secure'     => true,
        ]);

        $uploadResult = \Cloudinary\Uploader::upload(
            $request->file('foto')->getRealPath(),
            ['folder' => 'usuarios']
        );

        return response()->json([
            'mensagem' => 'Imagem enviada com sucesso',
            'url' => $uploadResult['secure_url'],
        ]);
    } catch (\Exception $e) {
        Log::error('Erro upload Cloudinary: ' . $e->getMessage());
        return response()->json([
            'erro' => 'Erro ao enviar imagem: ' . $e->getMessage(),
        ], 500);
    }
}

}
