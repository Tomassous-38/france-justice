'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Home, 
  FolderOpen, 
  Layers, 
  FileText, 
  Newspaper, 
  FileDown,
  List,
  GitCompare,
  Workflow,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Layout
} from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray50: '#F8FAFC',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray600: '#475569',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
  red: '#CE1126',
  green: '#10B981',
  amber: '#F59E0B',
  purple: '#8B5CF6',
  pink: '#EC4899',
  orange: '#F97316',
  teal: '#14B8A6',
};

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

interface Template {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  color: string;
  features: string[];
  status: 'ready' | 'wip';
}

const templates: Template[] = [
  {
    icon: Home,
    title: 'Page d\'accueil',
    description: 'Landing page avec hero, catégories et actualités',
    href: '/',
    color: colors.blueDark,
    features: ['Hero avec recherche', 'Grille de catégories', 'Actualités', 'Section confiance'],
    status: 'ready',
  },
  {
    icon: FolderOpen,
    title: 'Page Catégorie',
    description: 'Hub principal d\'un domaine du droit',
    href: '/droit-fiscal',
    color: colors.orange,
    features: ['Hero avec image', 'Cours complet', 'Thématiques', 'Actualités'],
    status: 'ready',
  },
  {
    icon: Layers,
    title: 'Page Hub',
    description: 'Sous-catégorie avec navigation structurée',
    href: '/droit-fiscal/impot-sur-le-revenu',
    color: colors.purple,
    features: ['Layout 2 colonnes', 'TOC sticky', 'Callouts visuels'],
    status: 'ready',
  },
  {
    icon: FileText,
    title: 'Page Article',
    description: 'Article de fond avec barre de progression',
    href: '/actualites/reforme-impots-2026',
    color: colors.green,
    features: ['Progress bar', 'TOC flottant', 'Articles similaires'],
    status: 'ready',
  },
  {
    icon: Newspaper,
    title: 'Page Actualités',
    description: 'Liste des actualités juridiques',
    href: '/actualites',
    color: colors.pink,
    features: ['Filtres catégories', 'Article featured', 'Pagination'],
    status: 'ready',
  },
  {
    icon: List,
    title: 'Page Formulaires',
    description: 'Liste des formulaires CERFA',
    href: '/formulaires',
    color: colors.bluePrimary,
    features: ['Filtres', 'Recherche', 'Populaires'],
    status: 'ready',
  },
  {
    icon: GitCompare,
    title: 'Page Comparateur',
    description: 'Comparaison côte à côte',
    href: '/comparateurs/sas-vs-sarl',
    color: colors.red,
    features: ['Tableau comparatif', 'Avantages/inconvénients', 'Verdict'],
    status: 'ready',
  },
  {
    icon: Workflow,
    title: 'Page Procédure',
    description: 'Schéma de procédure interactif',
    href: '/procedures/licenciement-economique',
    color: colors.amber,
    features: ['Timeline verticale', 'Étapes détaillées', 'Documents'],
    status: 'ready',
  },
  {
    icon: BookOpen,
    title: 'Page Glossaire',
    description: 'Index et définitions juridiques',
    href: '/glossaire',
    color: colors.teal,
    features: ['Index A-Z', 'Filtres domaines', 'Définitions'],
    status: 'ready',
  },
];

function TemplateCard({ icon: Icon, title, description, href, color, features, status }: Template) {
  return (
    <motion.div variants={fadeInUp}>
      <Link 
        href={href}
        className="group block rounded-2xl overflow-hidden bg-white border transition-all duration-300 hover:shadow-xl"
        style={{ borderColor: colors.gray200 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = color + '40';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = colors.gray200;
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Header */}
        <div 
          className="p-6"
          style={{ background: `linear-gradient(135deg, ${color}08 0%, ${color}03 100%)` }}
        >
          <div className="flex items-start justify-between">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: color }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            {status === 'ready' ? (
              <span 
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ background: `${colors.green}15`, color: colors.green }}
              >
                <CheckCircle className="w-3 h-3" /> Prêt
              </span>
            ) : (
              <span 
                className="px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ background: `${colors.amber}15`, color: colors.amber }}
              >
                🚧 En cours
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold mt-4" style={{ color: colors.charcoal }}>{title}</h3>
          <p className="text-sm mt-1" style={{ color: colors.gray500 }}>{description}</p>
        </div>

        {/* Features */}
        <div className="p-6 pt-4">
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: colors.gray600 }}>
                <span 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: color }}
                />
                {feature}
              </li>
            ))}
          </ul>
          
          <div 
            className="flex items-center gap-2 mt-6 pt-4 text-sm font-medium"
            style={{ borderTop: `1px solid ${colors.gray100}`, color: color }}
          >
            Voir le template
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function TemplatesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section 
        className="relative pt-32 pb-20 overflow-hidden"
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
          <Layout className="w-14 h-14 text-white/70 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Templates de Pages
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-8">
            Explorez tous les modèles de pages disponibles sur France Justice. 
            Chaque template est conçu pour un type de contenu spécifique.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/styleguide" 
              className="px-5 py-2.5 rounded-xl text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              🎨 Style Guide
            </Link>
            <Link 
              href="/" 
              className="px-5 py-2.5 rounded-xl text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              🏠 Accueil
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6">
        {/* Templates Grid */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
              Tous les templates
            </h2>
            <p style={{ color: colors.gray500 }}>
              {templates.length} modèles de pages disponibles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <TemplateCard key={template.title} {...template} />
            ))}
          </div>
        </motion.section>

        {/* Separator */}
        <div className="flex justify-center">
          <div 
            className="h-1 w-24 rounded-full"
            style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }}
          />
        </div>

        {/* Architecture Section */}
        <motion.section 
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.charcoal }}>
            🏗️ Architecture des pages
          </h2>
          
          <div 
            className="rounded-2xl p-6 overflow-x-auto"
            style={{ background: colors.charcoal }}
          >
            <pre className="font-mono text-sm text-green-400">
{`📁 src/app/
├── 📄 page.tsx                    → Accueil
├── 📄 styleguide/page.tsx         → Style Guide
├── 📄 templates/page.tsx          → Cette page
│
├── 📁 droit-fiscal/
│   ├── 📄 page.tsx                → Catégorie
│   └── 📁 impot-sur-le-revenu/
│       └── 📄 page.tsx            → Hub
│
├── 📁 actualites/
│   ├── 📄 page.tsx                → Listing
│   └── 📁 reforme-impots-2026/
│       └── 📄 page.tsx            → Article
│
├── 📁 formulaires/page.tsx        → Listing CERFA
├── 📁 glossaire/page.tsx          → Glossaire A-Z
└── 📁 comparateurs/               → Comparateurs`}
            </pre>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
