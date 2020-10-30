<?php

use Illuminate\Http\Request;

//Authorized requests
Route::middleware('auth')->group(function () {
  Route::prefix('auth')->group(function () {
    Route::prefix('file')->group(function () {
      Route::post('', 'FileController@upload');
      Route::delete('{id}', 'FileController@delete');
    });
  });
});

//Non-authorized requests
Route::prefix('file')->group(function () {
  Route::get('{url}', 'FileController@index');
  Route::post('download', 'FileController@download');
});

Route::prefix('user')->group(function () {
  Route::get('', 'UserController@index');
});
