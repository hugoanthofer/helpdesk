<?php

namespace App\Enums;

enum TicketCategory: string
{
    case Bug = 'bug';
    case Request = 'demande';
    case Incident = 'incident';
    case Question = 'question';
}