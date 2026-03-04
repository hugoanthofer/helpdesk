<?php

namespace App\Enums;

enum TicketStatus: string
{
    case Open = 'ouvert';
    case In_progress = 'en cours';
    case Waiting = 'en attente';
    case Resolved = 'resolu';
    case Closed = 'ferme';
}
