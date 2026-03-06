<?php

namespace App\Enums;

enum TicketCategory: string
{
    case Bug = 'Bug';
    case Request = 'Demande';
    case Incident = 'Incident';
    case Question = 'Question';
}
