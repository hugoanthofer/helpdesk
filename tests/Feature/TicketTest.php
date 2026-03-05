<?php

use App\Models\Ticket;
use App\Models\User;

test('un utilisateur connecté peut voir la liste des tickets', function () {
    $user = User::factory()->create();
    Ticket::factory()->count(3)->create();

    $reponse = $this->actingAs($user)->get(route('tickets.index'));

    $reponse->assertSuccessful();
});

test('un visiteur non connecté est redirigé vers le login', function () {
    $reponse = $this->get(route('tickets.index'));

    $reponse->assertRedirect(route('login'));
});

test('un utilisateur connecté peut créer un ticket', function () {
    $user = User::factory()->create();

    $reponse = $this->actingAs($user)->post(route('tickets.store'), [
        'title' => 'Mon ticket test reponse',
        'description' => 'Lorem ispum',
        'priority' => 'haute',
        'category' => 'bug',
    ]);

    $reponse->assertRedirect(route('tickets.index'));
    expect(Ticket::count())->toBe(1);
});

test('un utilisateur connecté peut modifier un ticket', function () {
    $user = User::factory()->create();
    $ticket = Ticket::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->put(route('tickets.update', $ticket), [
        'title' => 'Mon ticket test reponse modifié',
        'description' => 'Lorem ispum modifié',
        'priority' => 'basse',
        'category' => 'incident',
        'status' => 'resolu',
    ]);

    $response->assertRedirect(route('tickets.show', $ticket));
    expect($ticket->fresh()->title)->toBe('Mon ticket test reponse modifié');
});

test('un utilisateur connecté peut supprimer un ticket', function () {
    $user = User::factory()->create();
    $ticket = Ticket::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->delete(route('tickets.destroy', $ticket));

    $response->assertRedirect(route('tickets.index'));
    expect(Ticket::count())->toBe(0);
});
