<?php

namespace App\Http\Controllers;

use App\Models\ComunityPost;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;

class ComunityPostController extends Controller
{
        public  function CommunityPostAPI()
    {
              $posts = User::Join('comunity_posts', 'comunity_posts.user_id_ComunityPost', '=', 'users.id')
        ->get(['*']);

        // $posts = Post::all();
        return $posts;
    }

      public function  SingleCommentAPI($id)
    {

        $singlePost = ComunityPost::Join('users', 'users.id', '=', 'comunity_posts.user_id_ComunityPost')->find($id);
        return $singlePost;
    }


    public function addComunityPost(Request $request)
    {
        
        $comment = new ComunityPost();
        $comment->comment_comunity_posts = $request->get('comment_comunity_posts');    
        $comment->subject = $request->get('subject');    
        $comment->user_id_ComunityPost = $request->get('user_id_ComunityPost');   
        
        // if($request->has('image')) {
        //         $image= $request->file('image');
        //         $filename =time().'.'.$image->getClientOriginalExtension();
        //         $image->move('upload/', $filename);
        //         $comment->image_comunity_posts = $filename;
        // }

        
        if ($request->hasfile('image')) {
            
            $file = $request->file('image');
            $extention = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extention;
            $file->move('upload/', $filename);
            dd($filename);
            $comment->image_comunity_posts = $filename;
        }

        $comment->save();      
        return response()->json($comment);
   


    }


      public function updateComunityPost(Request $request,$id )
    {


        $comment = ComunityPost::find($id);
        $comment->comment_comunity_posts = $request->comment_comunity_posts;
        $comment->subject = $request->subject;
        $comment->user_id_ComunityPost = $request->get('user_id_ComunityPost');             
     


        $comment->update();

return $comment;
    }



    public function deleteComunityPost($id)
    {
        $comment = ComunityPost::find($id);
        $delete = $comment;
        $comment->delete();
        return $delete;
        
    }

}
