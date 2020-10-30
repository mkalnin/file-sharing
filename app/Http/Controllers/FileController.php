<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\UploadFile;
use App\Http\Requests\GetFile;
use App\Http\Requests\DownloadFile;
use App\Http\Requests\DeleteFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\File;


class FileController extends Controller
{
    private $userId;
    private $path;
    private $storedFileName;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Get file data by url
     *
     * @param GetFile $request
     * @return Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      if ($file = File::where('url', $request->url)->first()) {
        return $file;
      }
      return redirect('/404');
    }

    /**
     * Download File
     * @return App\Http\Response
     */
    public function download(DownloadFile $request)
    {
      $file = File::findOrFail($request->id);
      $file->times_downloaded = $file->times_downloaded + 1;
      $file->save();
      return 'success';
    }

    /**
     * Save uploaded file
     * @param UploadFile $request
     * @return Illuminate\Http\Response
     */
    public function upload(UploadFile $request) {
      $this->store($request);
      $file = new File;
      $file->user_id = $this->userId;
      $file->url = md5(microtime());
      $file->path = '/uploads/'  . $this->path . $this->storedFileName;
      $file->original_name = $request->file->getClientOriginalName();
      $file->save();
    }

    /**
     * Store uploaded file
     * @param  UploadFile $request
     * @return void
     */
    private function store($request)
    {
      $this->userId =  Auth::id();
      $this->path = 'user-files/' . $this->userId . '/';
      $this->storedFileName = $request->file->hashName();
      Storage::disk('public')->put($this->path, $request->file);
      return;
    }

    /**
     * Delete file
     * @param DeleteFile
     * @return void
     */
    public function delete(Request $request)
    {
      File::find($request->id)->delete();
      return;
    }

}
