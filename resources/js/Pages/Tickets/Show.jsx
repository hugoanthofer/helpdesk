import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Show({ ticket }) {
    const { data, setData, post, errors } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("tickets.comments.store", ticket.id));
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {ticket.title}
                </h2>
            }
        >
            <Head title="Ticket" />

            <div className="py-12">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <p className="text-gray-700">{ticket.description}</p>
                        <div className="mt-4 flex gap-4 text-sm text-gray-500">
                            <span>
                                Statut : <strong>{ticket.status}</strong>
                            </span>
                            <span>
                                Priorité : <strong>{ticket.priority}</strong>
                            </span>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <h3 className="mb-4 text-lg font-semibold text-gray-800">
                            Commentaires
                        </h3>
                        {ticket.comments.length === 0 && (
                            <p className="text-sm text-gray-400">
                                Aucun commentaire pour l'instant.
                            </p>
                        )}
                        <div className="space-y-3">
                            {ticket.comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="rounded-md bg-gray-50 px-4 py-3 text-sm text-gray-700"
                                >
                                    {comment.body}
                                </div>
                            ))}
                        </div>
                    </div>

                    <form
                        onSubmit={submit}
                        className="rounded-lg bg-white p-6 shadow"
                    >
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Ajouter un commentaire
                        </label>
                        <textarea
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                            rows={3}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                        />
                        {errors.body && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.body}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="mt-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
