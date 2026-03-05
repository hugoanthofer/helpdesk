import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ stats, recentTickets, archivedTickets }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-indigo-600">
                                {stats.total}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">Total</p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-blue-500">
                                {stats.ouvert}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Ouverts
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-yellow-500">
                                {stats.en_cours}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                En cours
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-green-500">
                                {stats.resolu}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Résolus
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow text-center">
                            <p className="text-3xl font-bold text-gray-400">
                                {stats.ferme}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Fermés
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white shadow">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-base font-semibold text-gray-800">
                                Derniers tickets
                            </h3>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {recentTickets.map((ticket) => (
                                <li key={ticket.id}>
                                    <Link
                                        href={route("tickets.show", ticket.id)}
                                        className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
                                    >
                                        <span className="text-sm font-medium text-gray-800">
                                            {ticket.title}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {ticket.status}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-lg bg-white shadow">
                        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                            <h3 className="text-base font-semibold text-gray-800">
                                Tickets archivés
                            </h3>
                            <Link
                                href={route("tickets.archived")}
                                className="text-sm text-indigo-600 hover:underline"
                            >
                                Voir tout
                            </Link>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {archivedTickets.map((ticket) => (
                                <li key={ticket.id}>
                                    <Link
                                        href={route("tickets.show", ticket.id)}
                                        className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
                                    >
                                        <span className="text-sm font-medium text-gray-500">
                                            {ticket.title}
                                        </span>
                                        <span className="text-xs text-gray-400">
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
