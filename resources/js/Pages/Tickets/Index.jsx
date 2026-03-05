import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ tickets }) {
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
                    <div className="mb-4 flex justify-end">
                        <a
                            href={route("tickets.create")}
                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
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
                                {tickets.map((ticket) => (
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
