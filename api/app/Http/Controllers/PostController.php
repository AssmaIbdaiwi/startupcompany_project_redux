<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
      public  function PostsAPI()
    {
        $posts = Post::all();
        return $posts;
    }

        public function single_post($id)
    {
        $single_post = Post::find($id);
        return $single_post;
    }
}
