import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ ticket, agents }) {
    const { data, setData, put, errors } = useForm({
        title: ticket.title,
        description: ticket.description,
        priority: ticket.priority.value,
        category: ticket.category.value,
        status: ticket.status.value,
        assignee_id: ticket.assignee_id ?? "",
    });

    function submit(e) {
        e.preventDefault();
        put(route("tickets.update", ticket.id));
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Modification de Ticket
                </h2>
            }
        >
            <Head title="Modification de ticket" />
            <div className="py-12">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-white p-8 shadow">
                        <form onSubmit={submit}>
                            <div className="mb-4">
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Titre
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                />
                                {errors.title && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                />
                                {errors.description && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Priorité
                                </label>
                                <select
                                    value={data.priority}
                                    onChange={(e) =>
                                        setData("priority", e.target.value)
                                    }
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                >
                                    <option value="basse">Basse</option>
                                    <option value="normal">Normale</option>
                                    <option value="haute">Haute</option>
                                    <option value="urgente">Urgente</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Catégorie
                                </label>
                                <select
                                    value={data.category}
                                    onChange={(e) =>
                                        setData("category", e.target.value)
                                    }
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                >
                                    <option value="bug">Bug</option>
                                    <option value="demande">Demande</option>
                                    <option value="incident">Incident</option>
                                    <option value="question">Question</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Statut
                                </label>
                                <select
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                >
                                    <option value="ouvert">Ouvert</option>
                                    <option value="en cours">En cours</option>
                                    <option value="en attente">
                                        En attente
                                    </option>
                                    <option value="resolu">Résolu</option>
                                    <option value="ferme">Fermé</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Assigné à
                                </label>
                                <select
                                    value={data.assignee_id}
                                    onChange={(e) =>
                                        setData("assignee_id", e.target.value)
                                    }
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                >
                                    <option value="">— Non assigné —</option>
                                    {agents.map((agent) => (
                                        <option key={agent.id} value={agent.id}>
                                            {agent.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="mt-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                Modifier
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
