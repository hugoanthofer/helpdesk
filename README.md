
# 🎫 HelpDesk App

Application web de gestion de tickets de support — les clients soumettent des demandes, les techniciens les traitent et les résolvent.

---

## 👥 Rôles

| Rôle | Permissions |
|------|-------------|
| **Client** | Crée et suit ses propres tickets, commente |
| **Technicien** | Gère et traite les tickets, change statut/priorité/assignation, commente |

---

## ✨ Fonctionnalités

### 🙋 Client
- Création de tickets (titre, description, catégorie)
- Suivi du statut de ses tickets
- Commentaires sur ses tickets

### 🔧 Technicien
- Liste des tickets actifs avec filtres (statut, priorité, "Mes tickets")
- Consultation et modification d'un ticket (statut, priorité, assignation)
- Ajout et suppression de commentaires
- Vue dédiée tickets résolus et tickets archivés

---

## 🎫 Tickets

**Catégories** : `Bug` · `Demande` · `Incident` · `Question`

**Statuts** : `Ouvert` → `En cours` → `En attente` → `Résolu` → `Fermé`

**Priorités** : `Basse` · `Normale` · `Haute` · `Urgente`

> Les tickets **Résolus** et **Fermés** sont séparés de la liste principale et accessibles via des pages dédiées.

---

## 📊 Dashboard

- Compteurs par statut (Total, Ouverts, En cours, Résolus, Fermés)
- Liste des derniers tickets actifs
- Aperçu des tickets résolus et archivés récents

---

## 🛠️ Stack technique

| Technologie | Rôle |
|-------------|------|
| **Laravel 12** | Backend, Auth, logique métier |
| **Inertia.js** | Bridge Laravel ↔ React |
| **React 18** | Frontend SPA |
| **Tailwind CSS** | Styles |
| **Spatie Permissions** | Gestion des rôles et permissions |

---

## 🗄️ Base de données

```
users       id, name, email, avatar, active, timestamps
tickets     id, title, description, status, priority, category, user_id, assignee_id, timestamps
comments    id, body, is_internal, ticket_id, user_id, timestamps
```

---

## 🚀 Installation

```bash
git clone https://github.com/ton-user/helpdesk.git
cd helpdesk
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
npm install && npm run build
```

---
