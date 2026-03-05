<?php

namespace App\Http\Controllers;

use App\Enums\TicketStatus;
use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use App\Models\Ticket;
use Inertia\Inertia;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tickets = Ticket::query()
            ->with(['user', 'assignee'])
            ->latest()
            ->get();

        return Inertia::render('Tickets/Index', [
            'tickets' => $tickets,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tickets/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTicketRequest $request)
    {
        Ticket::create([
            ...$request->validated(),
            'user_id' => auth()->id(),
            'status' => TicketStatus::Open,
        ]);

        return redirect()->route('tickets.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $ticket = Ticket::query()
            ->with(['user', 'assignee', 'comments'])
            ->findOrFail($id);

        return Inertia::render('Tickets/Show', [
            'ticket' => $ticket,
            'canEdit' => auth()->user()->can('update', $ticket),
            'canDelete' => auth()->user()->can('delete', $ticket),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $ticket = Ticket::query()
            ->with(['user', 'assignee', 'comments'])
            ->findOrFail($id);
        $this->authorize('update', $ticket);

        return Inertia::render('Tickets/Edit', [
            'ticket' => $ticket,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTicketRequest $request, string $id)
    {
        $ticket = Ticket::findOrFail($id);
        $this->authorize('update', $ticket);
        $ticket->update($request->validated());

        return redirect()->route('tickets.show', $ticket);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $ticket = Ticket::findOrFail($id);
        $this->authorize('delete', $ticket);
        $ticket->delete();

        return redirect()->route('tickets.index');
    }
}
