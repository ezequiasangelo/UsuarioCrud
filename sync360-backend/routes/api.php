<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;


Route::get('/usuario/{id}', [UsuarioController::class, 'get']);
Route::get('/usuarios', [UsuarioController::class, 'getAll']);
Route::post('/usuario', [UsuarioController::class, 'create']);
Route::put('/usuario/{id}', [UsuarioController::class, 'update']);
Route::delete('/usuario/{id}', [UsuarioController::class, 'delete']);
Route::post('/usuarios/upload-foto', [UsuarioController::class, 'uploadFoto']);
//Route::post('/teste-upload', [UsuarioController::class, 'testeUpload']);
