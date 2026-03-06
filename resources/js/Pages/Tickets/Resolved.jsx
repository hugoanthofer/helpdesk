import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const prioriteBadge = {
    "Basse":   "bg-slate-100 text-slate-500",
    "Normale": "bg-blue-100 text-blue-600",
    "Haute":   "bg-orange-100 text-orange-600",
    "Urgente": "bg-red-100 text-red-600",
};

export default function Resolved({ tickets }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-slate-900">
                    Tickets résolus
                </h2>
            }
        >
            <Head title="Tickets résolus" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-4 flex items-center gap-3">
                        <a
                            href={route("tickets.index")}
                            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                        >
                            ← Retour aux tickets
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Titre
                                    </th>
                                    <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Priorité
                                    </th>
                                    <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Créé par
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                {tickets.map((ticket) => (
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
                                            <div className="mt-1 flex gap-2 sm:hidden">
                                                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${prioriteBadge[ticket.priority]}`}>
                                                    {ticket.priority}
                                                </span>
                                                <span className="text-xs text-slate-400">
                                                    {ticket.user?.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="hidden sm:table-cell px-6 py-4">
                                            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${prioriteBadge[ticket.priority]}`}>
                                                {ticket.priority}
                                            </span>
                                        </td>
                                        <td className="hidden sm:table-cell px-6 py-4 text-sm text-slate-500">
                                            {ticket.user?.name}
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
