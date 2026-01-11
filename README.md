# 🇫🇷 France Justice

> **Le droit français, enfin accessible.**

Site d'information juridique moderne destiné au grand public. Interface premium style "French Tech / Startup" avec animations fluides et design épuré.

[![GitHub](https://img.shields.io/badge/GitHub-Tomassous--38%2Ffrance--justice-181717?logo=github)](https://github.com/Tomassous-38/france-justice)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-FF0050)

---

## ✨ Fonctionnalités

- 🎨 **Design Premium** : Gradients fluides, glassmorphism, animations Framer Motion
- 📱 **Responsive** : Mobile-first design
- 🚀 **Performance** : Next.js 14 App Router, optimisation images
- 📊 **Google Discover Ready** : Métadonnées optimisées, images HD
- 📚 **10 Templates** : Accueil, Catégorie, Hub, Article, Actualités, Formulaires, Comparateur, Procédure, Glossaire, Style Guide

---

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

---

## 📁 Structure du projet

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Accueil
│   ├── droit-fiscal/       # Catégorie exemple
│   ├── actualites/         # Listing + articles
│   ├── formulaires/        # Formulaires CERFA
│   ├── comparateurs/       # Comparateurs
│   ├── procedures/         # Procédures interactives
│   ├── glossaire/          # Glossaire juridique
│   ├── styleguide/         # Guide des composants
│   └── templates/          # Liste des templates
│
└── components/
    ├── layout/             # Header, Footer
    └── ui/                 # Composants réutilisables
```

---

## 🎨 Design System

| Couleur | Hex | Usage |
|---------|-----|-------|
| France Blue Dark | `#002654` | Heroes, backgrounds |
| France Blue Primary | `#1E40AF` | Liens, accents |
| France Red | `#CE1126` | CTA, accents |
| Charcoal | `#0F172A` | Texte principal |

**Typographie** : Plus Jakarta Sans (Display), Inter (Body), JetBrains Mono (Code)

---

## 📖 Documentation

Consultez la [Documentation Développeur](./DOCUMENTATION_DEVELOPPEUR.md) pour :

- Guide complet du Design System
- Liste des composants UI
- Conventions de code
- Guide d'ajout de contenu
- **Workflow Multi-Agents avec Git Worktrees**

---

## 🤖 Développement Multi-Agents

Ce projet supporte le développement avec plusieurs agents IA en parallèle via **Git Worktrees**.

```bash
# Créer des worktrees pour chaque agent
git worktree add -b feature/blog ../fj-blog
git worktree add -b feature/seo ../fj-seo
git worktree add -b feature/forms ../fj-forms

# Chaque agent travaille dans son propre dossier
# Merger les branches quand les features sont prêtes
git checkout main && git merge feature/blog
```

Voir la [documentation complète](./DOCUMENTATION_DEVELOPPEUR.md#11-workflow-multi-agents-avec-git-worktrees) pour plus de détails.

---

## 🛠️ Scripts

```bash
npm run dev      # Développement
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Linting ESLint
```

---

## 📄 Licence

Projet privé - Tous droits réservés

---

*Dernière mise à jour : 11 janvier 2026*
