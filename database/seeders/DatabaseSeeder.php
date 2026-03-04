<?php

namespace Database\Seeders;

use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
            RoleSeeder::class,
        ]);

        User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => bcrypt('password'),
            ]
        );

        $admin = User::firstOrCreate(
            ['email' => 'admin@helpdesk.nc'],
            [
                'name' => 'Admin',
                'password' => bcrypt('password'),
            ]
        );
        $admin->assignRole('Admin');

        $technicienUn = User::firstOrCreate(
            ['email' => 'technicienUn@helpdesk.nc'],
            [
                'name' => 'TechnicienUn',
                'password' => bcrypt('password'),
            ]
        );
        $technicienUn->assignRole('Technicien');

        $technicienDeux = User::firstOrCreate(
            ['email' => 'technicienDeux@helpdesk.nc'],
            [
                'name' => 'technicienDeux',
                'password' => bcrypt('password'),
            ]
        );
        $technicienDeux->assignRole('Technicien');

        $clients = User::factory(10)->create();
        $clients->each(fn ($client) => $client->assignRole('Client'));
        $clients->each(function ($client) {
            Ticket::factory(3)->create(['user_id' => $client->id]);
        });
    }
}
