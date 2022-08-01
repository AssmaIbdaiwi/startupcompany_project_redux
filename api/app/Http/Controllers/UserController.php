<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{


    public function registerAPI(Request $request)
    {

        //dd($request);
        // $validator = Validator::make(
        //     $request->all(),
        //     [
        //         'name' => 'required|string',
        //         'email' => 'email|required|unique:users',
        //         'pass' => 'required|min:8',
        //         'phone' => 'required|min:10|max:10',
        //     ]
        // );

        // if ($validator->fails()) {
        //     return response()->json(['errors' => $validator->errors()->all()]);
        // }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->input('password'));


        // $user->name = "a";
        // $user->email = "aaa";
        // $user->password = Hash::make("12345");

        
        $user->save();

       return response($user, 201);
    }




    
    public function loginAPI(Request $request)
    {
        // $email = $request->email;
        // $user = User::where('email', $email);
        // return $user;

        // $validator = Validator::make(
        //     $request->all(),
        //     [
        //         'email' => 'email|required',
        //         'pass' => 'required|min:8',
        //     ]
        // );

        // if ($validator->fails()) {
        //     return response()->json(['errors' => $validator->errors()->all()]);
        // }

        $user = User::where('email', $request->input('email'))->first();

        if (!$user || !Hash::check($request->input('password'), $user->password)) {
            return response()->json([
                'errors' => ['Email or Password is incorrect']
            ]);
        }
        return response($user, 201);
    }




    

    public  function getInfo($id)
    {

        $data = User::find($id);
        // $data = User::all();
        return $data;
    }

    public function updateAPI(Request $request, $id)
    {


        $user = User::find($id);

        $user->name = $request->name;
        $user->email = $request->email;
        // $user->age = $request->age;
        $user->password = $request->password;
        // $user->address = $request->address;
        $user->mobile = $request->mobile;

        $user->update();
    }

    
   
    public function getUser($id)
    {
        $user = User::find($id);
        return $user;
    }








}