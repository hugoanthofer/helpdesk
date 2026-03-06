import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextareaInput from "@/Components/TextareaInput";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ ticket, agents, userRole }) {
    const { data, setData, put, errors } = useForm({
        title: ticket.title,
        description: ticket.description,
        priority: ticket.priority,
        category: ticket.category,
        status: ticket.status,
        assignee_id: ticket.assignee_id ?? "",
    });

    function submit(e) {
        e.preventDefault();
        put(route("tickets.update", ticket.id));
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-slate-900">
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
                                <InputLabel htmlFor="title" value="Titre" />
                                <TextInput
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("title", e.target.value)}
                                />
                                <InputError message={errors.title} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="description" value="Description" />
                                <TextareaInput
                                    id="description"
                                    value={data.description}
                                    className="mt-1"
                                    onChange={(e) => setData("description", e.target.value)}
                                />
                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="priority" value="Priorité" />
                                <SelectInput
                                    id="priority"
                                    value={data.priority}
                                    className="mt-1"
                                    onChange={(e) => setData("priority", e.target.value)}
                                >
                                    <option value="Basse">Basse</option>
                                    <option value="Normale">Normale</option>
                                    <option value="Haute">Haute</option>
                                    <option value="Urgente">Urgente</option>
                                </SelectInput>
                                <InputError message={errors.priority} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="category" value="Catégorie" />
                                <SelectInput
                                    id="category"
                                    value={data.category}
                                    className="mt-1"
                                    onChange={(e) => setData("category", e.target.value)}
                                >
                                    <option value="Bug">Bug</option>
                                    <option value="Demande">Demande</option>
                                    <option value="Incident">Incident</option>
                                    <option value="Question">Question</option>
                                </SelectInput>
                                <InputError message={errors.category} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="status" value="Statut" />
                                <SelectInput
                                    id="status"
                                    value={data.status}
                                    className="mt-1"
                                    onChange={(e) => setData("status", e.target.value)}
                                >
                                    <option value="Ouvert">Ouvert</option>
                                    <option value="En cours">En cours</option>
                                    <option value="En attente">En attente</option>
                                    <option value="Résolu">Résolu</option>
                                    <option value="Fermé">Fermé</option>
                                </SelectInput>
                                <InputError message={errors.status} className="mt-2" />
                            </div>

                            {userRole !== "Client" && (
                                <div className="mb-4">
                                    <InputLabel htmlFor="assignee_id" value="Assigné à" />
                                    <SelectInput
                                        id="assignee_id"
                                        value={data.assignee_id}
                                        className="mt-1"
                                        onChange={(e) => setData("assignee_id", e.target.value)}
                                    >
                                        <option value="">— Non assigné —</option>
                                        {agents.map((agent) => (
                                            <option key={agent.id} value={agent.id}>
                                                {agent.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError message={errors.assignee_id} className="mt-2" />
                                </div>
                            )}

                            <button
                                type="submit"
                                className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
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
