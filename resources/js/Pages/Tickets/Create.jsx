import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
        priority: "",
        category: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("tickets.store"));
    }

    return (
        <AuthenticatedLayout header={<h2>Nouveau Ticket</h2>}>
            <Head title="Nouveau ticket" />
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
                                    type="text"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                />
                                {errors.description && (
                                    <p>{errors.description}</p>
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

                            <button
                                type="submit"
                                className="mt-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                Créer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
