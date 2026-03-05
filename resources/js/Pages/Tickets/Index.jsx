import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

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
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tickets
                </h2>
            }
        >
            <Head title="Tickets" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-4 flex items-center gap-3">
                        <select
                            value={filtreStatut}
                            onChange={(e) => setFiltreStatut(e.target.value)}
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                        >
                            <option value="">Tous les statuts</option>
                            <option value="Ouvert">Ouvert</option>
                            <option value="En cours">En cours</option>
                            <option value="En attente">En attente</option>
                            <option value="Résolu">Résolu</option>
                            <option value="Fermé">Fermé</option>
                        </select>
                        <select
                            value={filtrePriorite}
                            onChange={(e) => setFiltrePriorite(e.target.value)}
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                        >
                            <option value="">Toutes les priorités</option>
                            <option value="Basse">Basse</option>
                            <option value="Normale">Normale</option>
                            <option value="Haute">Haute</option>
                            <option value="Urgente">Urgente</option>
                        </select>
                        <button
                            onClick={() => setMesTickets(!mesTickets)}
                            className={`rounded-md px-4 py-2 text-sm font-medium ${
                                mesTickets
                                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                    : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                            }`}
                        >
                            Mes tickets
                        </button>
                        <a
                            href={route("tickets.create")}
                            className="ml-auto rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                            Nouveau ticket
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Titre
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Priorité
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {ticketsFiltres.map((ticket) => (
                                    <tr
                                        key={ticket.id}
                                        className="cursor-pointer hover:bg-gray-50"
                                        onClick={() =>
                                            (window.location.href = route(
                                                "tickets.show",
                                                ticket.id,
                                            ))
                                        }
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {ticket.title}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {ticket.status}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {ticket.priority}
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
