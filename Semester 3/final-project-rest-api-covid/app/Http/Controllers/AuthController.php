<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Helpers\BaseResponse;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        // validation
        $validatedData = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        // validation if fails
        if ($validatedData->fails()) {
            return BaseResponse::error($validatedData->errors(), 400);
        }

        // create new user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $accessToken = $user->createToken('authToken')->plainTextToken;

        return BaseResponse::success(['user' => $user, 'access_token' => $accessToken], 'User created successfully', 201);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($loginData)) {

            return BaseResponse::error('Invalid Credentials', 401);
        }

        $accessToken = auth()->user()->createToken('authToken')->plainTextToken;

        return BaseResponse::success(['user' => auth()->user(), 'access_token' => $accessToken], 'User logged in successfully', 200);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return BaseResponse::success(null, 'User logged out successfully', 200);
    }
}
