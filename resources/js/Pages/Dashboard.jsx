import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ stats, recentTickets, archivedTickets, resolvedTickets }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-slate-900">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-blue-600">
                                {stats.total}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">Total</p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-sky-500">
                                {stats.ouvert}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                                Ouverts
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-yellow-500">
                                {stats.en_cours}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                                En cours
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-green-500">
                                {stats.resolu}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                                Résolus
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-slate-400">
                                {stats.ferme}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                                Fermés
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white shadow">
                        <div className="px-6 py-4 border-b border-slate-200">
                            <h3 className="text-base font-semibold text-slate-800">
                                Derniers tickets
                            </h3>
                        </div>
                        <ul className="divide-y divide-slate-100">
                            {recentTickets.map((ticket) => (
                                <li key={ticket.id}>
                                    <Link
                                        href={route("tickets.show", ticket.id)}
                                        className="flex items-center justify-between px-6 py-4 hover:bg-slate-50"
                                    >
                                        <span className="text-sm font-medium text-slate-800">
                                            {ticket.title}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            {ticket.status}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-lg bg-white shadow">
                        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-base font-semibold text-slate-800">
                                Tickets résolus
                            </h3>
                            <Link
                                href={route("tickets.resolved")}
                                className="text-sm text-green-600 hover:underline"
                            >
                                Voir tout
                            </Link>
                        </div>
                        <ul className="divide-y divide-slate-100">
                            {resolvedTickets.map((ticket) => (
                                <li key={ticket.id}>
                                    <Link
                                        href={route("tickets.show", ticket.id)}
                                        className="flex items-center justify-between px-6 py-4 hover:bg-slate-50"
                                    >
                                        <span className="text-sm font-medium text-green-700">
                                            {ticket.title}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            {ticket.status}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-lg bg-white shadow">
                        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-base font-semibold text-slate-800">
                                Tickets archivés
                            </h3>
                            <Link
                                href={route("tickets.archived")}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Voir tout
                            </Link>
                        </div>
                        <ul className="divide-y divide-slate-100">
                            {archivedTickets.map((ticket) => (
                                <li key={ticket.id}>
                                    <Link
                                        href={route("tickets.show", ticket.id)}
                                        className="flex items-center justify-between px-6 py-4 hover:bg-slate-50"
                                    >
                                        <span className="text-sm font-medium text-slate-500">
                                            {ticket.title}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            {ticket.status}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
