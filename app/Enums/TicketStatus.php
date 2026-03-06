<?php

namespace App\Enums;

enum TicketStatus: string
{
    case Open = 'Ouvert';
    case In_progress = 'En cours';
    case Waiting = 'En attente';
    case Resolved = 'Résolu';
    case Closed = 'Fermé';
}
