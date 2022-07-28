<?php

use App\Http\Controllers\AskDoctorController;
use App\Http\Controllers\DoctorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

    Route::get('doctors', [DoctorController::class, 'getDoctors']);
    Route::get('doctorDetails/{id}', [DoctorController::class, 'getDoctorDetail']);
    Route::post('updateDoctorDetails/{id}', [DoctorController::class, 'updateDoctorDetails']);
    Route::post('askDoctor', [AskDoctorController::class, 'addAsk']);
});
