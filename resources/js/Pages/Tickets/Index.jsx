import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SelectInput from "@/Components/SelectInput";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const statutBadge = {
    "Ouvert":     "bg-blue-100 text-blue-700",
    "En cours":   "bg-yellow-100 text-yellow-700",
    "En attente": "bg-slate-100 text-slate-600",
    "Résolu":     "bg-green-100 text-green-700",
};

const prioriteBadge = {
    "Basse":   "bg-slate-100 text-slate-500",
    "Normale": "bg-blue-100 text-blue-600",
    "Haute":   "bg-orange-100 text-orange-600",
    "Urgente": "bg-red-100 text-red-600",
};

export default function Index({ tickets, authId, userRole }) {
    const [filtreStatut, setFiltreStatut] = useState("");
    const [filtrePriorite, setFiltrePriorite] = useState("");
    const [mesTickets, setMesTickets] = useState(false);

    const ticketsFiltres = tickets.filter((ticket) => {
        const matchStatut =
            filtreStatut === "" || ticket.status === filtreStatut;
        const matchPriorite =
            filtrePriorite === "" || ticket.priority === filtrePriorite;
        const matchAssigne =
            !mesTickets ||
            (userRole === "Client" && ticket.user_id === authId) ||
            (userRole !== "Client" && ticket.assignee_id === authId);

        return matchStatut && matchPriorite && matchAssigne;
    });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-slate-900">
                    Tickets
                </h2>
            }
        >
            <Head title="Tickets" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
                            <SelectInput
                                value={filtreStatut}
                                onChange={(e) => setFiltreStatut(e.target.value)}
                            >
                                <option value="">Tous les statuts</option>
                                <option value="Ouvert">Ouvert</option>
                                <option value="En cours">En cours</option>
                                <option value="En attente">En attente</option>
                            </SelectInput>

                            <SelectInput
                                value={filtrePriorite}
                                onChange={(e) => setFiltrePriorite(e.target.value)}
                            >
                                <option value="">Toutes les priorités</option>
                                <option value="Basse">Basse</option>
                                <option value="Normale">Normale</option>
                                <option value="Haute">Haute</option>
                                <option value="Urgente">Urgente</option>
                            </SelectInput>
                        </div>

                        <div className="flex items-center gap-3 sm:ml-auto">
                            <button
                                onClick={() => setMesTickets(!mesTickets)}
                                title="Mes tickets"
                                className={`rounded-md px-4 py-2 text-sm font-medium ${
                                    mesTickets
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                                }`}
                            >
                                <span className="hidden lg:inline">Mes tickets</span>
                                <svg className="lg:hidden h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </button>

                            <a
                                href={route("tickets.resolved")}
                                title="Résolus"
                                className="rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-green-600 transition-colors duration-150 hover:bg-green-50"
                            >
                                <span className="hidden lg:inline">Résolus</span>
                                <svg className="lg:hidden h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </a>

                            <a
                                href={route("tickets.archived")}
                                title="Archivés"
                                className="rounded-md border border-slate-400 px-4 py-2 text-sm font-medium text-slate-500 transition-colors duration-150 hover:bg-slate-100"
                            >
                                <span className="hidden lg:inline">Archivés</span>
                                <svg className="lg:hidden h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                            </a>

                            <a
                                href={route("tickets.create")}
                                title="Nouveau ticket"
                                className="ml-auto sm:ml-0 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-blue-700"
                            >
                                <span className="hidden lg:inline">Nouveau ticket</span>
                                <svg className="lg:hidden h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Titre
                                    </th>
                                    <th className="hidden sm:table-cell px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Statut
                                    </th>
                                    <th className="hidden sm:table-cell px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Priorité
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                {ticketsFiltres.map((ticket) => (
                                    <tr
                                        key={ticket.id}
                                        className="cursor-pointer transition-colors duration-150 hover:bg-slate-50"
                                        onClick={() =>
                                            (window.location.href = route(
                                                "tickets.show",
                                                ticket.id,
                                            ))
                                        }
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900">
                                            {ticket.title}
                                            <div className="mt-1 flex gap-2 sm:hidden">
                                                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statutBadge[ticket.status]}`}>
                                                    {ticket.status}
                                                </span>
                                                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${prioriteBadge[ticket.priority]}`}>
                                                    {ticket.priority}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="hidden sm:table-cell px-3 py-4">
                                            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statutBadge[ticket.status]}`}>
                                                {ticket.status}
                                            </span>
                                        </td>
                                        <td className="hidden sm:table-cell px-3 py-4">
                                            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${prioriteBadge[ticket.priority]}`}>
                                                {ticket.priority}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
