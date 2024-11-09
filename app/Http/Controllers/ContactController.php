<?php

namespace App\Http\Controllers;

use App\Mail\Contact as ContactMail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\RedirectResponse;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render("Contact");
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'message' => ['required', 'string'],
        ]);

        Mail::to(config('mail.from.address'))->queue(new ContactMail([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'message' => $validated['message'],
        ]));
        return to_route('contact.index')->with('success', 'Message sent successfully!');
    }
}
