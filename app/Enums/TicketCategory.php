<?php

namespace App\Enums;

enum TicketCategory: string
{
    case Low = 'low';
    case Normal = 'normal';
    case High = 'high';
    case Urgent = 'urgent';
}