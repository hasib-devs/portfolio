<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get("/", function () {
    return to_route("portfolio.index");
});

Route::group(["prefix" => "portfolio"], function () {
    Route::get("/", [PortfolioController::class, "index"])->name("portfolio.index");
    Route::get("/resume", [PortfolioController::class, "resume"])->name("portfolio.resume");
    Route::get("/blog", [PortfolioController::class, "blog"])->name("portfolio.blog");
    Route::get("/contact", [PortfolioController::class, "contact"])->name("portfolio.contact");
});

// Route::resource("/portfolio", PortfolioController::class)->only(["index"]);

// Route::get("/", function () {
//     return Inertia::render("Home");
// });

// Route::get("/resume", function () {
//     return Inertia::render("Resume");
// });

// Route::resource("/blog", BlogController::class);

// Route::resource("/contact", ContactController::class)->only(["index", "store"]);

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
