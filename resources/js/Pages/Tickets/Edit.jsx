import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ ticket }) {
    const { data, setData, put, errors } = useForm({
        title: ticket.title,
        description: ticket.description,
        priority: ticket.priority.value,
        category: ticket.category.value,
        status: ticket.status.value,
    });

    function submit(e) {
        e.preventDefault();
        put(route("tickets.update", ticket.id));
    }

    return (
        <AuthenticatedLayout header={<h2>Modification de Ticket</h2>}>
            <Head title="Modification de ticket" />
            <div className="py-12">
                <form onSubmit={submit}>
                    <div>
                        <label>Titre</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        {errors.title && <p>{errors.title}</p>}
                    </div>

                    <div>
                        <label>Description</label>
                        <input
                            type="text"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        {errors.description && <p>{errors.description}</p>}
                    </div>

                    <div>
                        <label>Priorité</label>
                        <select
                            value={data.priority}
                            onChange={(e) =>
                                setData("priority", e.target.value)
                            }
                        >
                            <option value="basse">Basse</option>
                            <option value="normal">Normale</option>
                            <option value="haute">Haute</option>
                            <option value="urgente">Urgente</option>
                        </select>
                    </div>

                    <div>
                        <label>Catégorie</label>
                        <select
                            value={data.category}
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                        >
                            <option value="bug">Bug</option>
                            <option value="demande">Demande</option>
                            <option value="incident">Incident</option>
                            <option value="question">Question</option>
                        </select>
                    </div>

                    <div>
                        <label>Status</label>
                        <select
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="ouvert">Ouvert</option>
                            <option value="en cours">En cours</option>
                            <option value="en attente">En attente</option>
                            <option value="resolu">Résolu</option>
                            <option value="ferme">Fermé</option>
                        </select>
                    </div>

                    <button type="submit">Modifier</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
