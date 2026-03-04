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
                <table>
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Status</th>
                            <th>Priorité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <tr key={ticket.id}>
                                <td>{ticket.title}</td>
                                <td>{ticket.status}</td>
                                <td>{ticket.priority}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
