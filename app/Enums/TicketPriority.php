<?php

namespace App\Enums;

enum TicketPriority: string
{
    case Low = 'basse';  
    case Normal = 'normal';  
    case High = 'haute';  
    case Urgent = 'urgente';  
}