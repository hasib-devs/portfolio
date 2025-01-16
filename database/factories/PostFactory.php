<?php

namespace Database\Factories;

use App\Models\PostCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'slug' => fake()->slug(),
            'content' => json_encode(['data' => fake()->paragraphs(asText: true)]),
            'status' => 'published',
            'user_id' => User::factory()->create()->id,
            'published_at' => now(),
            'category_id' => PostCategory::factory()->create()->id,
        ];
    }
}
