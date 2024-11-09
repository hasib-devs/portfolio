<?php

namespace App\Http\Controllers;

use App\Mail\Contact as ContactMail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render("Contact");
    }

    public function store(Request $request)
    {
        Mail::to(config('mail.from.address'))->send(new ContactMail([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ]));
        return to_route('contact.index')->with('success', 'Message sent successfully!');
    }
}
