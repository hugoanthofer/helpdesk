<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Models\Comment;
use App\Models\Ticket;

class CommentController extends Controller
{
    public function store(StoreCommentRequest $request, Ticket $ticket)
    {
        Comment::create([
            ...$request->validated(),
            'ticket_id' => $ticket->id,
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('tickets.show', $ticket);
    }

    public function destroy(Ticket $ticket, Comment $comment)
    {
        $comment->delete();

        return redirect()->route('tickets.show', $ticket);
    }
}
