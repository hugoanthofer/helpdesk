<?php

namespace App\Enums;

enum TicketStatus: string
{
    case Open = 'open';  
    case In_progress = 'in_progress';  
    case Waiting = 'waiting';  
    case Resolved = 'resolved';  
    case Closed = 'closed';  
}
