<?php
use App\Models\Comment;
use App\Models\User;
use App\Models\Ticket;

test('un utilisateur connecté peut ajouter un commentaire', function() {
    $user = User::factory()->create();
    $ticket = Ticket::factory()->create();

    $reponse = $this->actingAs($user)->post(route('tickets.comments.store', $ticket), [
        'body' => 'Ceci est un commentaire reponse',
    ]);

    $reponse->assertRedirect(route('tickets.show', $ticket));
    expect(Comment::count())->toBe(1);
});


