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

        Mail::to(config('mail.from.address'))->send(new ContactMail());
        return Inertia::render("Contact");
    }
}
