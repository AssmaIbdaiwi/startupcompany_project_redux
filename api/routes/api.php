<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('apiposts',[PostController::class , 'PostsAPI']);

Route::get('apicomment/{id}',[CommentController::class , 'CommentAPI']);
Route::post('addComment',[CommentController::class , 'addComment']);



//login and register
Route::post('register', [UserController::class, 'registerAPI']);
Route::post('login', [UserController::class, 'loginAPI']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});