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
                    Ticket
                </h2>
            }
        >
            <Head title="Ticket" />

            <div className="py-12">
                <p>{ticket.title}</p>
                <p>{ticket.description}</p>
                <p>{ticket.status}</p>
                <p>{ticket.priority}</p>

                <h3>Commentaires</h3>
                {ticket.comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.body}</p>
                    </div>
                ))}

                <form onSubmit={submit}>
                    <div>
                        <label>Commentaire</label>
                        <textarea
                            type="text"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        {errors.body && <p>{errors.body}</p>}
                    </div>

                    <button type="submit">Créer</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
