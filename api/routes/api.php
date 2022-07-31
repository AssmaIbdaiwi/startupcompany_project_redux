<?php
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ContactController;
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
Route::get('apiposts/{id}',[PostController::class , 'singlePostsAPI']);

Route::get('apicomment',[CommentController::class , 'CommentAPI']);
Route::post('addComment',[CommentController::class , 'addComment']);

Route::get('apicontact',[ContactController::class , 'ContactAPI']);
Route::post('addContact',[ContactController::class , 'addContact']);


//login and register
Route::post('/register', [UserController::class, 'registerAPI']);
Route::post('/login', [UserController::class, 'loginAPI']);


Route::get('get/{id}', [UserController::class, 'getUser']);
Route::post('update/{id}', [UserController::class, 'updateAPI']);


Route::get('/users',function(){
    $users = User::get();
    return response()->json($users);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});