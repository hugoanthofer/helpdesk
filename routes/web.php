<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TicketController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'stats' => [
            'ouvert' => \App\Models\Ticket::where('status', \App\Enums\TicketStatus::Open->value)->count(),
            'en_cours' => \App\Models\Ticket::where('status', \App\Enums\TicketStatus::In_progress->value)->count(),
            'resolu' => \App\Models\Ticket::where('status', \App\Enums\TicketStatus::Resolved->value)->count(),
            'ferme' => \App\Models\Ticket::where('status', \App\Enums\TicketStatus::Closed->value)->count(),
            'total' => \App\Models\Ticket::count(),
        ],
        'recentTickets' => \App\Models\Ticket::where('status', '!=', \App\Enums\TicketStatus::Closed->value)->latest()->take(5)->get(),
        'archivedTickets' => \App\Models\Ticket::where('status', \App\Enums\TicketStatus::Closed->value)->latest()->take(5)->get(),
        'resolvedTickets' => \App\Models\Ticket::where('status', \App\Enums\TicketStatus::Resolved->value)->latest()->take(5)->get(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('tickets/archives', [TicketController::class, 'archived'])->name('tickets.archived');
    Route::get('tickets/resolus', [TicketController::class, 'resolved'])->name('tickets.resolved');
    Route::resource('tickets', TicketController::class);
    Route::resource('tickets.comments', CommentController::class)->only(['store', 'destroy']);
});

require __DIR__.'/auth.php';
