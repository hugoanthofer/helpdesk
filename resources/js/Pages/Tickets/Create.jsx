import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextareaInput from "@/Components/TextareaInput";
import TextInput from "@/Components/TextInput";
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
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-slate-900">Nouveau Ticket</h2>}>
            <Head title="Nouveau ticket" />
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
                                    <option value="" disabled>— Choisir —</option>
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
                                    <option value="" disabled>— Choisir —</option>
                                    <option value="Bug">Bug</option>
                                    <option value="Demande">Demande</option>
                                    <option value="Incident">Incident</option>
                                    <option value="Question">Question</option>
                                </SelectInput>
                                <InputError message={errors.category} className="mt-2" />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
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
