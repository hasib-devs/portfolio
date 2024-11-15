<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostComment extends Model
{
    /** @use HasFactory<\Database\Factories\PostCommentFactory> */
    use HasFactory;

    protected $fillable = ['post_id', 'user_id', 'content', 'parent_id'];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Define the parent comment relationship
    public function parent()
    {
        return $this->belongsTo(PostComment::class, 'parent_id');
    }

    // Define the relationship for replies
    public function replies()
    {
        return $this->hasMany(PostComment::class, 'parent_id')->with('replies');
    }
}
