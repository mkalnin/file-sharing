<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class UserController extends Controller
{
  /**
   * Get authenticated user data
   * @return App\User
   */
    public function index() {
      if(Auth::check()) {
          return Auth::user()->load('files');
      }
      return;
    }
}
