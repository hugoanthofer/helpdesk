<?php

namespace App\Enums;

enum TicketPriority: string
{
    case Low = 'Basse';
    case Normal = 'Normale';
    case High = 'Haute';
    case Urgent = 'Urgente';
}
