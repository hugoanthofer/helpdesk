import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, router } from "@inertiajs/react";

export default function Show({ ticket, canEdit, canDelete }) {
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
                <h2 className="text-xl font-semibold leading-tight text-slate-900">
                    {ticket.title}
                </h2>
            }
        >
            <Head title="Ticket" />

            <div className="py-12">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <p className="text-slate-700">{ticket.description}</p>
                        <div className="mt-4 flex gap-4 text-sm text-slate-500">
                            <span>
                                Statut : <strong>{ticket.status}</strong>
                            </span>
                            <span>
                                Priorité : <strong>{ticket.priority}</strong>
                            </span>
                            <span>
                                Assigné à :{" "}
                                <strong>
                                    {ticket.assignee
                                        ? ticket.assignee.name
                                        : "Non assigné"}
                                </strong>
                            </span>
                        </div>
                        {(canEdit || canDelete) && (
                            <div className="mt-4 flex gap-2">
                                {canEdit && (
                                    <Link
                                        href={route("tickets.edit", ticket.id)}
                                        className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                                    >
                                        Modifier
                                    </Link>
                                )}
                                {canDelete && (
                                    <button
                                        onClick={() => {
                                            if (
                                                confirm("Supprimer ce ticket ?")
                                            ) {
                                                router.delete(
                                                    route(
                                                        "tickets.destroy",
                                                        ticket.id,
                                                    ),
                                                );
                                            }
                                        }}
                                        className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
                                    >
                                        Supprimer
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <h3 className="mb-4 text-lg font-semibold text-slate-800">
                            Commentaires
                        </h3>
                        {ticket.comments.length === 0 && (
                            <p className="text-sm text-slate-400">
                                Aucun commentaire pour l'instant.
                            </p>
                        )}
                        <div className="space-y-3">
                            {ticket.comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="rounded-md bg-slate-50 px-4 py-3 text-sm text-slate-700"
                                >
                                    <div className="mb-1 flex items-center gap-2">
                                        <span className="font-medium text-slate-800">
                                            {comment.user.name}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            {new Date(comment.created_at).toLocaleDateString("fr-FR", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </span>
                                    </div>
                                    {comment.body}
                                </div>
                            ))}
                        </div>
                    </div>

                    <form
                        onSubmit={submit}
                        className="rounded-lg bg-white p-6 shadow"
                    >
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            Ajouter un commentaire
                        </label>
                        <textarea
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                            rows={3}
                            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                        />
                        {errors.body && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.body}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
