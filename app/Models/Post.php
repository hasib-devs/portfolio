<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $fillable = ['title', 'slug', 'content', 'user_id', 'published_at'];

    public function author()
    {
        return $this->belongsTo(User::class);
    }

    public function categories()
    {
        return $this->belongsToMany(PostCategory::class);
    }

    public function tags()
    {
        return $this->belongsToMany(PostTag::class);
    }

    public function comments()
    {
        return $this->hasMany(PostComment::class);
    }
}
