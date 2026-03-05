<?php

namespace Database\Factories;

use App\Enums\TicketCategory;
use App\Enums\TicketPriority;
use App\Enums\TicketStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'description' => fake()->sentence(),
            'status' => fake()->randomElement(TicketStatus::cases()),
            'priority' => fake()->randomElement(TicketPriority::cases()),
            'category' => fake()->randomElement(TicketCategory::cases()),
            'user_id' => User::factory(),
            'assignee_id' => null,
        ];
    }
}
