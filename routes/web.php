<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;


Route::redirect("/", "/portfolio");
Route::prefix('portfolio')->group(function () {
    Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.index');
    Route::get('/resume', [PortfolioController::class, 'resume'])->name('portfolio.resume');
    Route::get('/resume/download', [PortfolioController::class, 'downloadResume'])->name('portfolio.resume.download');
    Route::get('/blog', [PortfolioController::class, 'blog'])->name('portfolio.blog');
    Route::get('/contact', [PortfolioController::class, 'contact'])->name('portfolio.contact');
    Route::post('/contact', [PortfolioController::class, 'sendContact'])->name('portfolio.sendContact');
});

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
