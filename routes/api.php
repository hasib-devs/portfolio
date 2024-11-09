<?php

use Illuminate\Support\Facades\Route;

Route::prefix("api/v1")->group(function () {
    Route::get("/users", function () {
        return [
            "users" => [
                ["name" => "John Doe"],
                ["name" => "Jane Doe"],
            ],
        ];
    });
});
