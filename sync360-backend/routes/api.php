<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::get('/usuario', [UsuarioController::class, 'get']);
Route::post('/usuario', [UsuarioController::class, 'save']);
