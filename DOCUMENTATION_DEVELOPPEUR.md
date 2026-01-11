# 📚 Documentation Développeur - France Justice

> **Version:** 2.2.0  
> **Date:** 11 janvier 2026  
> **Stack:** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

---

## 📋 Table des matières

1. [Vue d'ensemble du projet](#1-vue-densemble-du-projet)
2. [Installation et démarrage](#2-installation-et-démarrage)
3. [Architecture du projet](#3-architecture-du-projet)
4. [Design System v2](#4-design-system-v2)
5. [Composants UI](#5-composants-ui)
6. [Templates de pages](#6-templates-de-pages)
7. [Animations Framer Motion](#7-animations-framer-motion)
8. [SEO et Google Discover](#8-seo-et-google-discover)
9. [Conventions de code](#9-conventions-de-code)
10. [Ajouter du contenu](#10-ajouter-du-contenu)
11. [Workflow Multi-Agents avec Git Worktrees](#11-workflow-multi-agents-avec-git-worktrees)
12. [Dépannage](#12-dépannage)

---

## 1. Vue d'ensemble du projet

### 🎯 Objectif

**France Justice** est un site d'information juridique destiné au grand public. L'objectif est de rendre le droit français accessible et compréhensible avec une interface moderne de type "French Tech / Startup".

### 🛠️ Stack technique

| Technologie | Version | Rôle |
|-------------|---------|------|
| **Next.js** | 14.2.x | Framework React avec App Router |
| **TypeScript** | 5.x | Typage statique |
| **Tailwind CSS** | 4.x | Styling utilitaire |
| **Framer Motion** | 11.x | Animations fluides |
| **Lucide React** | 0.x | Icônes |

### 🎨 Philosophie de design v2

- **Style French Tech Premium** : Moderne, épuré, professionnel
- **Gradients fluides** : Heroes avec dégradés bleu-rouge animés
- **Animations omniprésentes** : Framer Motion sur toutes les pages
- **Typography moderne** : Plus Jakarta Sans
- **Glassmorphism** : Effets de transparence et blur
- **Mobile-first** : Responsive design prioritaire
- **Google Discover Ready** : Images optimisées, métadonnées complètes

---

## 2. Installation et démarrage

### Prérequis

- Node.js >= 20.9.0 (recommandé)
- npm ou yarn

### Installation

```bash
# Cloner le projet
cd /Users/tomcannaoa/Desktop/DEV/FRANCE-JUSTICE-PROJECT/france-justice

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### URLs importantes

| URL | Description |
|-----|-------------|
| `http://localhost:3000` | Page d'accueil |
| `http://localhost:3000/styleguide` | Guide des composants UI |
| `http://localhost:3000/templates` | Liste des templates de pages |
| `http://localhost:3000/droit-fiscal` | Exemple de page catégorie |

### Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification ESLint
```

---

## 3. Architecture du projet

### Structure des dossiers

```
france-justice/
├── public/                     # Assets statiques
├── src/
│   ├── app/                    # Pages (App Router Next.js 14)
│   │   ├── layout.tsx          # Layout racine (Header + Footer)
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── globals.css         # Styles globaux + CSS variables
│   │   │
│   │   ├── styleguide/         # Page Style Guide
│   │   ├── templates/          # Page liste des templates
│   │   │
│   │   ├── droit-fiscal/       # Catégorie Droit Fiscal
│   │   │   ├── page.tsx        # Page catégorie (cours complet)
│   │   │   └── impot-sur-le-revenu/
│   │   │       └── page.tsx    # Page Hub
│   │   │
│   │   ├── actualites/         # Listing + articles actualités
│   │   │   ├── page.tsx        # Listing
│   │   │   └── reforme-impots-2026/
│   │   │       └── page.tsx    # Article avec progress bar
│   │   │
│   │   ├── formulaires/        # Listing formulaires CERFA
│   │   ├── comparateurs/       # Pages comparateur
│   │   │   └── sas-vs-sarl/
│   │   │       └── page.tsx    # Comparateur SAS vs SARL
│   │   ├── procedures/         # Pages procédure
│   │   │   └── licenciement-economique/
│   │   │       └── page.tsx    # Procédure interactive
│   │   └── glossaire/          # Index + termes glossaire
│   │
│   └── components/
│       ├── layout/             # Header, Footer
│       └── ui/                 # Composants UI réutilisables
│           ├── index.ts        # Export centralisé
│           ├── Card.tsx        # Cartes (Category, Article, etc.)
│           ├── Callout.tsx     # Encadrés d'information
│           ├── Badge.tsx       # Tags et badges
│           ├── Search.tsx      # Barre de recherche glassmorphism
│           ├── TOC.tsx         # Table des matières
│           ├── Breadcrumb.tsx  # Fil d'Ariane
│           ├── Accordion.tsx   # FAQ accordéon
│           ├── GlowButton.tsx  # Boutons avec glow
│           ├── GradientBlob.tsx # Blobs animés pour backgrounds
│           └── ...             # Autres composants
│
├── tailwind.config.ts          # Configuration Tailwind
├── next.config.js              # Configuration Next.js
├── tsconfig.json               # Configuration TypeScript
└── package.json                # Dépendances
```

### Hiérarchie des pages (SEO)

```
/                                           → Accueil
├── /droit-fiscal                           → Catégorie (niveau 1)
│   └── /droit-fiscal/impot-sur-le-revenu   → Hub (niveau 2)
│
├── /actualites                             → Listing articles
│   └── /actualites/reforme-impots-2026     → Article (avec progress bar)
│
├── /formulaires                            → Listing formulaires
├── /comparateurs/sas-vs-sarl               → Comparateur
├── /procedures/licenciement-economique     → Procédure interactive
├── /glossaire                              → Index glossaire
├── /styleguide                             → Guide des composants
└── /templates                              → Liste des templates
```

---

## 4. Design System v2

### 🎨 Palette de couleurs

Les couleurs sont définies en **constantes JavaScript** dans chaque composant pour une utilisation optimale avec les styles inline.

#### Couleurs principales

| Nom | Hex | Usage |
|-----|-----|-------|
| `blueDark` | `#002654` | Backgrounds principaux, heroes |
| `bluePrimary` | `#1E40AF` | Liens, accents, gradients |
| `blueLight` | `#EFF6FF` | Backgrounds clairs |
| `red` | `#CE1126` | Accent secondaire, CTA |
| `charcoal` | `#0F172A` | Texte principal |
| `white` | `#FFFFFF` | Backgrounds, texte sur fond sombre |

#### Couleurs neutres

| Nom | Hex | Usage |
|-----|-----|-------|
| `gray50` | `#F8FAFC` | Backgrounds sections alternées |
| `gray100` | `#F1F5F9` | Backgrounds secondaires |
| `gray200` | `#E2E8F0` | Bordures |
| `gray400` | `#94A3B8` | Texte désactivé, icônes |
| `gray500` | `#64748B` | Texte secondaire |
| `gray600` | `#475569` | Texte body |
| `gray700` | `#334155` | Texte emphase |

#### Couleurs sémantiques

| Nom | Hex | Usage |
|-----|-----|-------|
| `green` | `#10B981` | Succès, avantages |
| `amber` | `#F59E0B` | Avertissements |
| `red` | `#CE1126` | Erreurs, inconvénients |
| `purple` | `#8B5CF6` | Accent tertiaire |
| `orange` | `#F97316` | Catégorie fiscale |
| `pink` | `#EC4899` | Actualités |
| `teal` | `#14B8A6` | Glossaire |

#### Exemple de constantes dans un composant

```typescript
const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray50: '#F8FAFC',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray600: '#475569',
  gray700: '#334155',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
  red: '#CE1126',
  green: '#10B981',
  amber: '#F59E0B',
  purple: '#8B5CF6',
  orange: '#F97316',
};
```

### 📝 Typographie

| Élément | Police | Taille | Poids |
|---------|--------|--------|-------|
| H1 Hero | Plus Jakarta Sans | 3rem - 4.5rem | ExtraBold (800) |
| H1 Page | Plus Jakarta Sans | 2.5rem - 3rem | Bold (700) |
| H2 | Plus Jakarta Sans | 1.875rem - 2rem | Bold (700) |
| H3 | Plus Jakarta Sans | 1.5rem | Bold (700) |
| Body | Plus Jakarta Sans | 1rem | Regular (400) |
| Small | Plus Jakarta Sans | 0.875rem | Regular (400) |
| Code | JetBrains Mono | 0.875rem | Regular (400) |

### 🌈 Gradients

```typescript
// Hero gradient principal (bleu vers rouge) - UTILISÉ SUR TOUTES LES PAGES
background: `linear-gradient(135deg, ${colors.blueDark}f5 0%, ${colors.bluePrimary}e8 50%, ${colors.red}dd 100%)`

// Gradient séparateur (ligne sous le hero)
background: `linear-gradient(90deg, ${colors.bluePrimary} 0%, ${colors.red} 100%)`
```

> **Note :** Toutes les pages (Hub, Catégorie, Procédure, Comparateur, etc.) utilisent le même gradient bleu-rouge pour garantir une cohérence visuelle.

### 🔲 Border Radius

| Usage | Valeur |
|-------|--------|
| Petits éléments | `0.5rem` (8px) |
| Boutons | `0.75rem` (12px) |
| Cartes | `1rem` (16px) |
| Grandes cartes | `1.5rem` (24px) |
| Pills | `9999px` |

### 🌊 Ombres

```css
/* Carte au repos */
box-shadow: none ou border: 1px solid ${colors.gray200}

/* Carte au hover */
box-shadow: 0 10px 40px -10px rgba(0,0,0,0.15);

/* Glassmorphism */
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.15);
```

---

## 5. Composants UI

Tous les composants sont exportés depuis `@/components/ui/index.ts`.

### Import centralisé

```typescript
import { 
  CategoryCard, 
  ArticleCard, 
  FormCard,
  InfoCallout, 
  WarningCallout,
  SearchBar,
  Breadcrumb,
  TOC,
  FAQSection,
  // ...
} from '@/components/ui';
```

### 📦 Liste des composants principaux

#### Cartes

| Composant | Props | Description |
|-----------|-------|-------------|
| `CategoryCard` | `icon, title, count, href, color?` | Carte catégorie grille |
| `ArticleCard` | `title, category, categoryColor, date, image, href` | Carte article actualité |
| `FormCard` | `cerfa, title, href, downloadUrl?` | Carte formulaire CERFA |
| `HubLinkCard` | `title, href` | Lien style chip |

#### Callouts

| Composant | Couleur | Icône |
|-----------|---------|-------|
| `InfoCallout` | Bleu | 💡 |
| `WarningCallout` | Ambre | ⚠️ |
| `ErrorCallout` | Rouge | ❌ |
| `SuccessCallout` | Vert | ✅ |

#### Navigation

| Composant | Description |
|-----------|-------------|
| `Breadcrumb` | Fil d'Ariane avec dropdown |
| `TOC` | Table des matières sticky |
| `FAQSection` | Section FAQ accordéon |

#### Interactions

| Composant | Description |
|-----------|-------------|
| `SearchBar` | Recherche glassmorphism |
| `GlowButton` | Bouton avec effet glow |

---

## 6. Templates de pages

### Vue d'ensemble

| Template | URL exemple | Statut |
|----------|-------------|--------|
| **Accueil** | `/` | ✅ Prêt |
| **Catégorie** | `/droit-fiscal` | ✅ Prêt |
| **Hub** | `/droit-fiscal/impot-sur-le-revenu` | ✅ Prêt |
| **Article** | `/actualites/reforme-impots-2026` | ✅ Prêt |
| **Actualités** | `/actualites` | ✅ Prêt |
| **Formulaires** | `/formulaires` | ✅ Prêt |
| **Comparateur** | `/comparateurs/sas-vs-sarl` | ✅ Prêt |
| **Procédure** | `/procedures/licenciement-economique` | ✅ Prêt |
| **Glossaire** | `/glossaire` | ✅ Prêt |
| **Style Guide** | `/styleguide` | ✅ Prêt |
| **Templates** | `/templates` | ✅ Prêt |

### Structure type d'une page v2

```tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from 'lucide-react';

// 1. Constantes de couleurs
const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  // ...
};

// 2. Variants d'animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

// 3. Données
const pageData = { /* ... */ };

// 4. Composant principal
export default function PageName() {
  return (
    <div className="bg-white">
      {/* Hero avec gradient */}
      <section 
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.blueDark}f5 0%, ${colors.bluePrimary}e8 50%, ${colors.red}dd 100%)`
        }}
      >
        <motion.div 
          className="max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contenu hero */}
        </motion.div>
      </section>

      {/* Séparateur gradient */}
      <div 
        className="w-full h-1"
        style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }}
      />

      {/* Contenu avec animations */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Contenu animé */}
        </div>
      </motion.section>
    </div>
  );
}
```

---

## 7. Animations Framer Motion

### Variants réutilisables

```typescript
// Fade in avec translation vers le haut
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Container avec stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

// Section avec scroll reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  }
};
```

### Scroll-triggered animations

```tsx
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={sectionVariants}
>
  {/* Contenu */}
</motion.section>
```

### Hover effects sur les cartes

```tsx
<motion.div
  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>
  {/* Carte */}
</motion.div>
```

### Blobs animés pour les heroes

```tsx
<motion.div
  className="absolute w-[600px] h-[600px] rounded-full opacity-20"
  style={{
    background: 'radial-gradient(circle, rgba(30, 64, 175, 0.8) 0%, transparent 70%)',
    filter: 'blur(60px)',
  }}
  animate={{
    x: [0, 50, 0],
    y: [0, 30, 0],
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
/>
```

---

## 8. SEO et Google Discover

### Optimisation des images

```tsx
import Image from 'next/image';

<Image
  src="https://images.unsplash.com/..."
  alt="Description détaillée et pertinente"
  fill
  priority // Pour les images LCP
  sizes="100vw" // ou "(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
```

### Reading Progress Bar (articles)

```typescript
function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const readProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, readProgress)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}
```

### Métadonnées recommandées

```tsx
// Dans layout.tsx ou page.tsx
export const metadata = {
  title: 'Titre de la page | France Justice',
  description: 'Description de 150-160 caractères...',
  openGraph: {
    title: 'Titre',
    description: 'Description',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};
```

---

## 9. Conventions de code

### Nommage

| Type | Convention | Exemple |
|------|------------|---------|
| Composants | PascalCase | `CategoryCard.tsx` |
| Pages | kebab-case (dossiers) | `droit-fiscal/page.tsx` |
| Fonctions | camelCase | `handleClick()` |
| Constantes couleurs | camelCase | `colors.bluePrimary` |
| Interfaces | PascalCase | `CardProps` |

### Structure d'un composant

```tsx
'use client';

// 1. Imports externes
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from 'lucide-react';

// 2. Imports internes
import { OtherComponent } from '@/components/ui';

// 3. Constantes couleurs
const colors = { /* ... */ };

// 4. Variants animation
const fadeInUp = { /* ... */ };

// 5. Interfaces
interface ComponentProps {
  title: string;
  href?: string;
}

// 6. Composant principal
export default function Component({ title, href }: ComponentProps) {
  return (
    <motion.div variants={fadeInUp}>
      {/* JSX */}
    </motion.div>
  );
}
```

### Styles inline obligatoires pour les couleurs

```tsx
// ✅ BON - Style inline avec constantes
<div style={{ 
  background: colors.white,
  border: `1px solid ${colors.gray200}`,
  color: colors.charcoal 
}}>

// ❌ ÉVITER - Classes Tailwind personnalisées
<div className="bg-france-blue border-fj-gray-200">
```

**Classes Tailwind sûres à utiliser :**
- Layout : `flex`, `grid`, `items-center`, `justify-between`
- Spacing : `p-4`, `m-2`, `gap-4`, `py-12`
- Sizing : `w-full`, `h-12`, `max-w-5xl`
- Responsive : `md:grid-cols-2`, `lg:hidden`
- Typography : `text-sm`, `font-bold`, `leading-relaxed`

---

## 10. Ajouter du contenu

### Créer une nouvelle page Catégorie

1. Créer le dossier : `src/app/[nom-categorie]/`
2. Créer `page.tsx` basé sur `droit-fiscal/page.tsx`
3. Adapter :
   - Titre et description
   - Gradient hero (couleur accent)
   - Thématiques/hubs
   - Contenu encyclopédique

### Créer un nouvel article

1. Créer : `src/app/actualites/[slug-article]/page.tsx`
2. Copier `reforme-impots-2026/page.tsx`
3. Modifier :
   - Image hero (optimisée Google Discover)
   - Titre et chapô
   - Contenu avec sections
   - Articles similaires

### Créer un nouveau comparateur

1. Créer : `src/app/comparateurs/[option-a]-vs-[option-b]/page.tsx`
2. Copier `sas-vs-sarl/page.tsx`
3. Modifier :
   - Données de comparaison
   - Avantages/inconvénients
   - Verdict
   - FAQ

### Créer une nouvelle procédure

1. Créer : `src/app/procedures/[nom-procedure]/page.tsx`
2. Copier `licenciement-economique/page.tsx`
3. Modifier :
   - Étapes de la procédure
   - Timeline
   - Documents
   - FAQ

---

## 11. Workflow Multi-Agents avec Git Worktrees

### 🌳 Qu'est-ce que Git Worktrees ?

**Git Worktrees** permet d'avoir **plusieurs copies de travail** du même dépôt, chacune sur une branche différente, **sans cloner plusieurs fois le repo**. C'est idéal pour faire travailler plusieurs agents IA en parallèle.

### Avantages pour le développement multi-agents

| Avantage | Description |
|----------|-------------|
| **Isolation totale** | Chaque agent travaille dans son propre dossier |
| **Pas de conflits** | Plus besoin de `git stash` ou switch de branche |
| **Même dépôt** | Tous les worktrees partagent le même `.git` |
| **Merge facile** | Les branches se mergent comme d'habitude |
| **Économie d'espace** | Un seul `.git` pour tous les worktrees |

### Commandes essentielles

```bash
# Créer un worktree avec une nouvelle branche
git worktree add ../france-justice-feature feature/nom-feature

# Créer un worktree pour une branche existante
git worktree add ../france-justice-hotfix hotfix/urgent

# Lister tous les worktrees
git worktree list

# Supprimer un worktree
git worktree remove ../france-justice-feature

# Nettoyer les worktrees orphelins
git worktree prune
```

### Configuration multi-agents pour France Justice

**Structure recommandée :**

```
FRANCE-JUSTICE-PROJECT/
├── france-justice/              ← main (repo principal)
├── fj-blog/                     ← feature/blog (Agent 1)
├── fj-seo/                      ← feature/seo (Agent 2)
├── fj-forms/                    ← feature/forms (Agent 3)
└── fj-hotfix/                   ← hotfix/urgent (Agent 4)
```

**Setup complet :**

```bash
# Depuis le repo principal
cd /Users/tomcannaoa/Desktop/DEV/FRANCE-JUSTICE-PROJECT/france-justice

# Agent 1 : Développement du blog
git worktree add -b feature/blog ../fj-blog

# Agent 2 : Optimisation SEO
git worktree add -b feature/seo ../fj-seo

# Agent 3 : Nouveaux formulaires
git worktree add -b feature/forms ../fj-forms

# Agent 4 : Hotfixes urgents
git worktree add -b hotfix/urgent ../fj-hotfix
```

### Workflow avec Cursor

1. **Ouvrir plusieurs fenêtres Cursor** : `Cmd + Shift + N`
2. **Ouvrir un worktree différent** dans chaque fenêtre
3. **Donner une tâche spécifique** à chaque agent
4. **Merger les branches** quand les features sont prêtes

```bash
# Depuis le repo principal (france-justice/)
git checkout main
git merge feature/blog
git merge feature/seo
git push origin main
```

### Bonnes pratiques

| Règle | Pourquoi |
|-------|----------|
| **1 branche = 1 feature** | Évite les conflits de merge |
| **Nommer clairement** | `feature/`, `fix/`, `hotfix/` préfixes |
| **Merge régulièrement** | Évite les branches trop divergentes |
| **Supprimer après merge** | `git worktree remove` + `git branch -d` |
| **Installer les deps** | Faire `npm install` dans chaque worktree |

### Synchronisation entre worktrees

```bash
# Mettre à jour main dans un worktree
cd ../fj-blog
git fetch origin
git rebase origin/main

# Ou merger main dans la feature
git merge main
```

### Alternatives au Multi-Agents

| Méthode | Avantages | Inconvénients |
|---------|-----------|---------------|
| **Git Worktrees** | Simple, natif Git | Setup manuel |
| **Multi-fenêtres Cursor** | Rapide | Même branche |
| **Claude Code CLI** | Scriptable | Terminal only |
| **CrewAI / AutoGen** | Orchestration avancée | Setup complexe |
| **N8N workflows** | Automatisation | Overhead config |

---

## 12. Dépannage

### Problème : Les animations ne fonctionnent pas

**Solution :** Vérifier que `'use client'` est en haut du fichier.

### Problème : Les couleurs Tailwind ne s'appliquent pas

**Solution :** Utiliser les styles inline avec les constantes de couleurs.

### Problème : Hydration mismatch

**Solution :** Ajouter `'use client'` et éviter les valeurs dynamiques côté serveur.

### Problème : Images externes ne s'affichent pas

**Solution :** Configurer `next.config.js` :

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
```

### Problème : Le serveur ne démarre pas

```bash
# Nettoyer et redémarrer
rm -rf .next
npm run dev
```

---

## 📝 Changelog

### v2.2.0 (11/01/2026)
- ✅ **Uniformisation des gradients** : Toutes les pages utilisent désormais le même gradient bleu-rouge
- ✅ **Page Hub** : Gradient corrigé (bleu-orange → bleu-rouge)
- ✅ **Page Procédure** : Gradient corrigé + ajout séparateur gradient
- ✅ **Page Comparateur** : Gradient corrigé (bleu-violet → bleu-rouge)

### v2.1.0 (11/01/2026)
- ✅ **Git Worktrees** : Documentation workflow multi-agents
- ✅ **GitHub** : Repo public sur github.com/Tomassous-38/france-justice

### v2.0.0 (11/01/2026)
- ✅ **Nouveau design fluide** avec gradients et animations
- ✅ **Typographie** : Plus Jakarta Sans
- ✅ **Framer Motion** : Animations sur toutes les pages
- ✅ **Heroes** : Gradients bleu-rouge avec blobs animés
- ✅ **10 templates** de pages tous mis à jour
- ✅ **Google Discover** : Optimisation images et métadonnées
- ✅ **Reading Progress Bar** : Sur les articles
- ✅ **Procédures interactives** : Accordéons avec timeline
- ✅ **Comparateurs** : Design premium avec verdict

### v1.0.0 (10/01/2026)
- Setup initial Next.js 14 + TypeScript + Tailwind
- Design System v1
- 13 composants UI
- 10 templates de pages

---

*Documentation mise à jour le 11/01/2026 - v2.2.0*
