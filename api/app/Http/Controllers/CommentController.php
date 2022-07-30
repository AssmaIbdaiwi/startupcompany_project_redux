<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    //     public  function CommentAPI($id)
    // {
    //     $com = Comment::select('comments.*', 'users.name')
    //     ->join('users', 'users.id', '=', 'comments.user_id_comment')->get();
    //     return $com;
    // }




    // public function addComment(Request $request)
    // {
        
    //     $comment = new Comment();
        
    //     $comment->date = $request->date;
    //     $comment->comment = $request->comment;
    //     $comment->user_id_comment = $request->user_id_comment;
    //     $comment->post_id_comment = $request->post_id_comment;
    //     $comment->save();


    // }
   
}



