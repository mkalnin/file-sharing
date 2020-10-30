<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Authenticate user response
     * @param  Request $request
     * @param  User  $user
     * @return Illuminate\Http\Response
     */
    protected function authenticated(Request $request, $user)
    {
      return Auth::user()->load('files');
    }
}
