import { Link } from "@inertiajs/react";

const accounts = [
    {
        role: "Technicien",
        email: "technicienUn@helpdesk.nc",
        badge: "bg-sky-100 text-sky-700",
        description: "Traitement et assignation des tickets",
    },
    {
        role: "Technicien",
        email: "technicienDeux@helpdesk.nc",
        badge: "bg-sky-100 text-sky-700",
        description: "Traitement et assignation des tickets",
    },
    {
        role: "Client",
        email: "clientUn@helpdesk.nc",
        badge: "bg-slate-100 text-slate-600",
        description: "Création et suivi de tickets",
    },
    {
        role: "Client",
        email: "clientDeux@helpdesk.nc",
        badge: "bg-slate-100 text-slate-600",
        description: "Création et suivi de tickets",
    },
    {
        role: "Client",
        email: "clientTrois@helpdesk.nc",
        badge: "bg-slate-100 text-slate-600",
        description: "Création et suivi de tickets",
    },
];

export default function Welcome({ canLogin }) {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col gap-10">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900">
                        HelpDesk
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
                        Plateforme de gestion de tickets de support. Les clients
                        soumettent des demandes, les techniciens les traitent.
                    </p>
                    {canLogin && (
                        <Link
                            href={route("login")}
                            className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                        >
                            Se connecter
                        </Link>
                    )}
                </div>

                <div className="rounded-lg bg-white shadow p-6">
                    <h2 className="text-base font-semibold text-slate-800 mb-1">
                        Comptes de démonstration
                    </h2>
                    <p className="text-sm text-slate-500 mb-4">
                        Mot de passe commun :{" "}
                        <span className="font-mono font-medium text-slate-700">
                            password
                        </span>
                    </p>

                    <div className="divide-y divide-slate-100">
                        {accounts.map((account, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between py-3 gap-4"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <span
                                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${account.badge}`}
                                    >
                                        {account.role}
                                    </span>
                                    <span className="font-mono text-sm text-slate-700 truncate">
                                        {account.email}
                                    </span>
                                </div>
                                <span className="shrink-0 text-xs text-slate-400 hidden sm:block">
                                    {account.description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-center">
                    <div className="rounded-lg bg-white shadow p-5">
                        <p className="text-sm font-medium text-slate-500">
                            Rôle Client
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                            Crée des tickets et suit leur avancement
                        </p>
                    </div>
                    <div className="rounded-lg bg-white shadow p-5">
                        <p className="text-sm font-medium text-slate-500">
                            Rôle Technicien
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                            Traite et met à jour les tickets assignés
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
