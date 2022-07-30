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
Route::get('/register', [UserController::class, 'registerAPI']);
// Route::post('/register',function(Request $request){
//     $user = new User();
//     $user->name = $request->name;
//     $user->email = $request->email;
//     $user->phone = $request->phone;
//    // $user->password = Hash::make($request->input('pass'));
//     $user->save();
//     return response($user, 201)->json();
// });

Route::post('/login', [UserController::class, 'loginAPI']);

Route::get('/users',function(){
    $users = User::get();
    return response()->json($users);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});