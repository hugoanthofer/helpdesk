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
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                            <SelectInput
                                value={filtreStatut}
                                onChange={(e) => setFiltreStatut(e.target.value)}
                                className="w-auto"
                            >
                                <option value="">Tous les statuts</option>
                                <option value="Ouvert">Ouvert</option>
                                <option value="En cours">En cours</option>
                                <option value="En attente">En attente</option>
                            </SelectInput>

                            <SelectInput
                                value={filtrePriorite}
                                onChange={(e) => setFiltrePriorite(e.target.value)}
                                className="w-auto"
                            >
                                <option value="">Toutes les priorités</option>
                                <option value="Basse">Basse</option>
                                <option value="Normale">Normale</option>
                                <option value="Haute">Haute</option>
                                <option value="Urgente">Urgente</option>
                            </SelectInput>

                            <button
                                onClick={() => setMesTickets(!mesTickets)}
                                className={`rounded-md px-4 py-2 text-sm font-medium ${
                                    mesTickets
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                                }`}
                            >
                                Mes tickets
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href={route("tickets.resolved")}
                                className="rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-50"
                            >
                                Résolus
                            </a>

                            <a
                                href={route("tickets.archived")}
                                className="rounded-md border border-slate-400 px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100"
                            >
                                Archivés
                            </a>

                            <a
                                href={route("tickets.create")}
                                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                Nouveau ticket
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
                                    <th className="py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Priorité
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                {ticketsFiltres.map((ticket) => (
                                    <tr
                                        key={ticket.id}
                                        className="cursor-pointer hover:bg-slate-50"
                                        onClick={() =>
                                            (window.location.href = route(
                                                "tickets.show",
                                                ticket.id,
                                            ))
                                        }
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900">
                                            {ticket.title}
                                        </td>
                                        <td className="py-4">
                                            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statutBadge[ticket.status]}`}>
                                                {ticket.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
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
