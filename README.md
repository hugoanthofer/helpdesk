
# 🎫 HelpDesk App

Application web de gestion de tickets de support — les clients soumettent des demandes, les techniciens les traitent et les résolvent.

---

## 👥 Rôles

| Rôle | Permissions |
|------|-------------|
| **Client** | Crée et suit ses propres tickets |
| **Technicien** | Gère, traite et commente les tickets assignés |
| **Admin** | Accès total + gestion utilisateurs + analytics |

---

## ✨ Fonctionnalités

### 🙋 Client
- Création de tickets (titre, description, catégorie, pièces jointes)
- Suivi en temps réel du statut de ses tickets
- Commentaires et échanges avec le technicien

### 🔧 Technicien
- Dashboard avec filtres avancés sur les tickets
- Vue Kanban par statut
- Changement de statut, priorité, assignation
- Commentaires publics + notes internes (invisibles au client)
- Ajout de pièces jointes

### 👑 Admin
- Tout ce que peut faire un technicien
- Gestion des utilisateurs (créer, désactiver, changer le rôle)
- Dashboard analytics :
  - Tickets par statut et catégorie
  - Performance des techniciens
  - Temps moyen de résolution

---

## 🎫 Tickets

**Catégories** : `Bug` · `Demande` · `Incident` · `Question`

**Statuts** : `Ouvert` → `En cours` → `En attente` → `Résolu` → `Fermé`

**Priorités** : `Basse` · `Normale` · `Haute` · `Urgente`

---

## 🛠️ Stack technique

| Technologie | Rôle |
|-------------|------|
| **Laravel 12** | Backend, Auth, logique métier |
| **Inertia.js** | Bridge Laravel ↔ React |
| **React 18** | Frontend SPA |
| **Tailwind CSS** | Styles |
| **Spatie Permissions** | Gestion des rôles et permissions |
| **Spatie Media Library** | Upload et gestion des pièces jointes |

---

## 🗄️ Base de données

```
users         id, name, email, role, avatar, active
tickets       id, title, description, status, priority, category, user_id, assignee_id
comments      id, body, is_internal, ticket_id, user_id
attachments   id, path, filename, attachable_id, attachable_type
```

---

## 🚀 Installation

```bash
git clone https://github.com/ton-user/helpdesk-app.git
cd helpdesk-app

composer install
npm install

cp .env.example .env
php artisan key:generate

# Configurer la base de données dans .env, puis :
php artisan migrate --seed

npm run dev
php artisan serve
```

---
