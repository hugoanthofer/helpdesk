<?php

use App\Enums\TicketStatus;
use App\Models\Ticket;
use App\Models\User;

test('un utilisateur connecte peut voir la liste des tickets', function () {
    $user = User::factory()->create();
    Ticket::factory()->count(3)->create();

    $reponse = $this->actingAs($user)->get(route('tickets.index'));

    $reponse->assertSuccessful();
});

test('un visiteur non connecte est redirige vers le login', function () {
    $reponse = $this->get(route('tickets.index'));

    $reponse->assertRedirect(route('login'));
});

test('un utilisateur connecte peut creer un ticket', function () {
    $user = User::factory()->create();

    $reponse = $this->actingAs($user)->post(route('tickets.store'), [
        'title' => 'Mon ticket test',
        'description' => 'Lorem ipsum',
        'priority' => 'Haute',
        'category' => 'Bug',
    ]);

    $reponse->assertRedirect(route('tickets.index'));
    expect(Ticket::count())->toBe(1);
});

test('un utilisateur connecte peut modifier un ticket', function () {
    $user = User::factory()->create();
    $ticket = Ticket::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->put(route('tickets.update', $ticket), [
        'title' => 'Mon ticket modifie',
        'description' => 'Lorem ipsum modifie',
        'priority' => 'Basse',
        'category' => 'Incident',
        'status' => TicketStatus::Resolved->value,
    ]);

    $response->assertRedirect(route('tickets.show', $ticket));
    expect($ticket->fresh()->title)->toBe('Mon ticket modifie');
});

test('un utilisateur connecte peut supprimer un ticket', function () {
    $user = User::factory()->create();
    $ticket = Ticket::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->delete(route('tickets.destroy', $ticket));

    $response->assertRedirect(route('tickets.index'));
    expect(Ticket::count())->toBe(0);
});
