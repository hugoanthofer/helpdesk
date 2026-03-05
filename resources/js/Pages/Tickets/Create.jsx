import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const SelectArrow = () => (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </div>
);

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
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Nouveau Ticket</h2>}>
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
                                <div className="relative">
                                    <select
                                        value={data.priority}
                                        onChange={(e) =>
                                            setData("priority", e.target.value)
                                        }
                                        className="appearance-none w-full rounded-md border border-gray-300 px-3 py-2 pr-8 text-sm focus:border-indigo-500 focus:outline-none"
                                    >
                                        <option value="Basse">Basse</option>
                                        <option value="Normale">Normale</option>
                                        <option value="Haute">Haute</option>
                                        <option value="Urgente">Urgente</option>
                                    </select>
                                    <SelectArrow />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Catégorie
                                </label>
                                <div className="relative">
                                    <select
                                        value={data.category}
                                        onChange={(e) =>
                                            setData("category", e.target.value)
                                        }
                                        className="appearance-none w-full rounded-md border border-gray-300 px-3 py-2 pr-8 text-sm focus:border-indigo-500 focus:outline-none"
                                    >
                                        <option value="Bug">Bug</option>
                                        <option value="Demande">Demande</option>
                                        <option value="Incident">Incident</option>
                                        <option value="Question">Question</option>
                                    </select>
                                    <SelectArrow />
                                </div>
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
