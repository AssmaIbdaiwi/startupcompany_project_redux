<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;

class CommentController extends Controller
{
        public  function CommentAPI()
    {
        // $com = Comment::select('comments.*' , 'posts.*')->join('users', 'comments.user_id_comment', '=', 'users.id')
        // ->Join('posts','comments.post_id_comment' ,'=','posts.id')->where('comments.user_id_comment',1)
        // ->get(['*']);


        $com = Comment::Join('users', 'comments.user_id_comment', '=', 'users.id')
        ->Join('posts','comments.post_id_comment' ,'=','posts.id')->select('comments.*', 'users.name', 'users.image')->get();
        return $com;
    }




    public function addComment(Request $request)
    {
        
        $comment = new Comment();
        
        $comment->date = $request->date;
        $comment->comment = $request->comment;
        $comment->user_id_comment = $request->user_id_comment;
        $comment->post_id_comment = $request->post_id_comment;
        $comment->save();


    }
   
}



