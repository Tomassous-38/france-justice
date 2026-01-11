'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Briefcase, 
  Scale, 
  Home, 
  Calculator,
  FileText,
  ArrowRight,
  Download,
  Check,
  Palette,
  ChevronRight,
  HelpCircle,
  Clock,
  List
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
  gray700: '#334155',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
  red: '#CE1126',
  green: '#10B981',
  amber: '#F59E0B',
  orange: '#F97316',
  pink: '#EC4899',
  purple: '#8B5CF6',
  teal: '#14B8A6',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section 
      id={id} 
      className="scroll-mt-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
    >
      <h2 
        className="text-2xl font-bold mb-8 pb-3"
        style={{ color: colors.charcoal, borderBottom: `2px solid ${colors.bluePrimary}` }}
      >
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function ExampleCard({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div 
      className="rounded-xl p-6 mb-6"
      style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
    >
      {title && (
        <p className="text-sm font-medium mb-4" style={{ color: colors.gray500 }}>{title}</p>
      )}
      {children}
    </div>
  );
}

function Separator() {
  return (
    <div className="flex justify-center py-4">
      <div className="h-1 w-24 rounded-full" style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }} />
    </div>
  );
}

export default function StyleGuidePage() {
  const [activeSection, setActiveSection] = useState('colors');
  const [accordionOpen, setAccordionOpen] = useState<number | null>(0);
  const [currentStep, setCurrentStep] = useState(2);

  const navItems = [
    { id: 'colors', label: '🎨 Couleurs' },
    { id: 'typography', label: '📝 Typographie' },
    { id: 'buttons', label: '🔘 Boutons' },
    { id: 'cards', label: '🃏 Cartes' },
    { id: 'callouts', label: '📢 Alertes' },
    { id: 'badges', label: '🏷️ Badges' },
    { id: 'forms', label: '📋 Formulaires' },
    { id: 'progress', label: '📊 Progression' },
    { id: 'navigation', label: '🧭 Navigation' },
    { id: 'accordion', label: '📂 Accordéon' },
    { id: 'comparison', label: '⚖️ Comparaison' },
    { id: 'procedure', label: '📋 Procédures' },
    { id: 'glossary', label: '📖 Glossaire' },
    { id: 'social', label: '🔗 Social' },
  ];

  const faqItems = [
    { question: 'Qu\'est-ce que le prélèvement à la source ?', answer: 'Le prélèvement à la source est un mode de collecte de l\'impôt sur le revenu consistant à le faire prélever directement par un tiers payeur.' },
    { question: 'Comment modifier mon taux de prélèvement ?', answer: 'Vous pouvez modifier votre taux de prélèvement depuis votre espace personnel sur impots.gouv.fr, rubrique "Gérer mon prélèvement à la source".' },
    { question: 'Quand dois-je faire ma déclaration ?', answer: 'La déclaration de revenus doit être effectuée chaque année, généralement entre avril et juin.' },
  ];

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
          <Palette className="w-14 h-14 text-white/70 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Style Guide
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-8">
            Tous les composants UI et guidelines de design du site France Justice
          </p>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/templates"
              className="px-5 py-2.5 rounded-xl text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              📄 Templates
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

      {/* Gradient separator */}
      <div 
        className="w-full h-1"
        style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }}
      />

      {/* Navigation sticky */}
      <nav 
        className="sticky top-20 z-30 py-3"
        style={{ background: colors.white, borderBottom: `1px solid ${colors.gray200}` }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-1 -mx-2 px-2 scrollbar-hide">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all"
                style={{ 
                  background: activeSection === item.id ? colors.blueLight : 'transparent',
                  color: activeSection === item.id ? colors.bluePrimary : colors.gray600,
                }}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        
        {/* Colors */}
        <Section id="colors" title="🎨 Palette de couleurs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { name: 'France Blue Dark', hex: '#002654', desc: 'Primary dark' },
              { name: 'France Blue', hex: '#1E40AF', desc: 'Primary' },
              { name: 'France Red', hex: '#CE1126', desc: 'Accent' },
              { name: 'Blue Light', hex: '#EFF6FF', desc: 'Background' },
              { name: 'Success', hex: '#10B981', desc: 'Positive' },
              { name: 'Warning', hex: '#F59E0B', desc: 'Attention' },
              { name: 'Error', hex: '#EF4444', desc: 'Negative' },
              { name: 'Charcoal', hex: '#0F172A', desc: 'Text' },
              { name: 'Gray 600', hex: '#475569', desc: 'Text secondary' },
              { name: 'Gray 400', hex: '#94A3B8', desc: 'Text muted' },
              { name: 'Gray 200', hex: '#E2E8F0', desc: 'Border' },
              { name: 'Gray 50', hex: '#F8FAFC', desc: 'Background' },
              { name: 'Orange', hex: '#F97316', desc: 'Fiscal' },
              { name: 'Pink', hex: '#EC4899', desc: 'Actualités' },
              { name: 'Purple', hex: '#8B5CF6', desc: 'Pénal' },
              { name: 'Teal', hex: '#14B8A6', desc: 'Glossaire' },
            ].map((color) => (
              <motion.div 
                key={color.hex} 
                className="rounded-xl overflow-hidden"
                style={{ border: `1px solid ${colors.gray200}` }}
                whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
              >
                <div className="h-20" style={{ background: color.hex }} />
                <div className="p-3 bg-white">
                  <p className="font-semibold text-sm" style={{ color: colors.charcoal }}>{color.name}</p>
                  <p className="text-xs font-mono" style={{ color: colors.gray500 }}>{color.hex}</p>
                  <p className="text-xs mt-1" style={{ color: colors.gray400 }}>{color.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.charcoal }}>Dégradés</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Hero Gradient', gradient: `linear-gradient(135deg, ${colors.blueDark} 0%, ${colors.bluePrimary} 50%, ${colors.red} 100%)` },
              { name: 'CTA Gradient', gradient: 'linear-gradient(135deg, #CE1126 0%, #e02040 100%)' },
              { name: 'Progress Gradient', gradient: `linear-gradient(90deg, ${colors.blueDark} 0%, ${colors.bluePrimary} 50%, ${colors.red} 100%)` },
            ].map((g) => (
              <div key={g.name} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${colors.gray200}` }}>
                <div className="h-16" style={{ background: g.gradient }} />
                <div className="p-3 bg-white">
                  <p className="font-medium text-sm" style={{ color: colors.charcoal }}>{g.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Separator />

        {/* Typography */}
        <Section id="typography" title="📝 Typographie">
          <ExampleCard>
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider" style={{ color: colors.gray400 }}>Font Family</span>
                <p className="font-semibold mt-1" style={{ color: colors.charcoal }}>Plus Jakarta Sans (Display & Body)</p>
              </div>
              <hr style={{ borderColor: colors.gray200 }} />
              {[
                { label: 'H1', size: 'text-5xl', weight: 'font-bold', example: 'Titre Principal' },
                { label: 'H2', size: 'text-4xl', weight: 'font-bold', example: 'Titre de Section' },
                { label: 'H3', size: 'text-2xl', weight: 'font-semibold', example: 'Sous-titre' },
                { label: 'H4', size: 'text-xl', weight: 'font-semibold', example: 'Titre de carte' },
                { label: 'Body', size: 'text-base', weight: 'font-normal', example: 'Texte de paragraphe. Lorem ipsum dolor sit amet.' },
                { label: 'Small', size: 'text-sm', weight: 'font-normal', example: 'Texte secondaire pour les métadonnées.' },
              ].map((typo) => (
                <div key={typo.label}>
                  <span className="text-xs uppercase tracking-wider" style={{ color: colors.gray400 }}>{typo.label}</span>
                  <p className={`${typo.size} ${typo.weight} mt-1`} style={{ color: colors.charcoal }}>{typo.example}</p>
                </div>
              ))}
              <div>
                <span className="text-xs uppercase tracking-wider" style={{ color: colors.gray400 }}>Code</span>
                <code 
                  className="block mt-2 p-4 rounded-xl text-sm font-mono"
                  style={{ background: colors.gray100, color: colors.charcoal }}
                >
                  const taxRate = 0.30; // Taux d'imposition
                </code>
              </div>
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Buttons */}
        <Section id="buttons" title="🔘 Boutons">
          <ExampleCard title="Primary">
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ background: colors.blueDark }}>
                Primary Dark
              </button>
              <button className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ background: colors.bluePrimary }}>
                Primary Blue
              </button>
              <button className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ background: colors.red }}>
                Accent Red
              </button>
              <button className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ background: colors.green }}>
                Success
              </button>
            </div>
          </ExampleCard>

          <ExampleCard title="GlowButton (Premium)">
            <div className="flex flex-wrap gap-3">
              <motion.button 
                className="px-6 py-3 rounded-xl font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${colors.red} 0%, #e02040 100%)`, boxShadow: '0 4px 15px rgba(206, 17, 38, 0.3)' }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Primary CTA
              </motion.button>
              <motion.button 
                className="px-6 py-3 rounded-xl font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${colors.blueDark} 0%, ${colors.bluePrimary} 100%)`, boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)' }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Secondary CTA
              </motion.button>
              <motion.button 
                className="px-6 py-3 rounded-xl font-semibold"
                style={{ background: 'rgba(255, 255, 255, 0.1)', color: colors.gray700, border: `1px solid ${colors.gray200}` }}
                whileHover={{ scale: 1.02, y: -2, background: colors.gray100 }}
                whileTap={{ scale: 0.98 }}
              >
                Outline
              </motion.button>
            </div>
          </ExampleCard>

          <ExampleCard title="Avec icônes">
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2" style={{ background: colors.bluePrimary }}>
                Continuer <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2" style={{ background: colors.green }}>
                <Download className="w-4 h-4" /> Télécharger
              </button>
            </div>
          </ExampleCard>

          <ExampleCard title="Tailles">
            <div className="flex flex-wrap items-center gap-3">
              <button className="px-3 py-1.5 rounded-lg text-sm font-medium text-white" style={{ background: colors.bluePrimary }}>Small</button>
              <button className="px-5 py-2.5 rounded-xl font-semibold text-white" style={{ background: colors.bluePrimary }}>Medium</button>
              <button className="px-8 py-4 rounded-2xl text-lg font-semibold text-white" style={{ background: colors.bluePrimary }}>Large</button>
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Cards */}
        <Section id="cards" title="🃏 Cartes">
          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.charcoal }}>Category Cards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Briefcase, title: 'Travail', count: 124, color: colors.bluePrimary },
              { icon: Scale, title: 'Pénal', count: 89, color: colors.purple },
              { icon: Home, title: 'Famille', count: 156, color: colors.pink },
              { icon: Calculator, title: 'Fiscal', count: 98, color: colors.orange },
            ].map((cat) => (
              <motion.div 
                key={cat.title}
                className="p-5 rounded-xl bg-white cursor-pointer group"
                style={{ border: `1px solid ${colors.gray200}` }}
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${cat.color}15` }}
                >
                  <cat.icon className="w-6 h-6" style={{ color: cat.color }} />
                </div>
                <h3 className="font-bold" style={{ color: colors.charcoal }}>{cat.title}</h3>
                <p className="text-sm" style={{ color: colors.gray500 }}>{cat.count} articles</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.charcoal }}>Article Cards</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { title: 'Réforme des impôts 2026', cat: 'Fiscal', color: colors.orange, date: 'Il y a 2h' },
              { title: 'Licenciement économique', cat: 'Travail', color: colors.bluePrimary, date: 'Hier' },
              { title: 'Divorce : nouvelles règles', cat: 'Famille', color: colors.pink, date: '10 jan' },
            ].map((article) => (
              <motion.div 
                key={article.title}
                className="rounded-xl overflow-hidden bg-white cursor-pointer group"
                style={{ border: `1px solid ${colors.gray200}` }}
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
              >
                <div className="aspect-video relative overflow-hidden" style={{ background: colors.gray200 }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-xs font-semibold" style={{ background: `${article.color}15`, color: article.color }}>
                      {article.cat}
                    </span>
                    <span className="text-xs" style={{ color: colors.gray400 }}>{article.date}</span>
                  </div>
                  <h3 className="font-semibold group-hover:text-blue-600 transition-colors" style={{ color: colors.charcoal }}>
                    {article.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.charcoal }}>Form Cards</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { cerfa: 'CERFA 2042', title: 'Déclaration de revenus' },
              { cerfa: 'CERFA 13703', title: 'Déclaration préalable travaux' },
              { cerfa: 'CERFA 12100', title: 'Demande carte identité' },
            ].map((form) => (
              <motion.div 
                key={form.cerfa}
                className="p-5 rounded-xl bg-white cursor-pointer group"
                style={{ border: `1px solid ${colors.gray200}` }}
                whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2 py-1 rounded text-xs font-bold mb-2" style={{ background: colors.blueLight, color: colors.bluePrimary }}>
                      {form.cerfa}
                    </span>
                    <h3 className="font-semibold" style={{ color: colors.charcoal }}>{form.title}</h3>
                  </div>
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors"
                    style={{ background: colors.gray100 }}
                  >
                    <Download className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Separator />

        {/* Callouts */}
        <Section id="callouts" title="📢 Alertes & Callouts">
          <div className="space-y-4">
            {[
              { type: 'info', icon: '💡', title: 'Bon à savoir', text: 'Le prélèvement à la source est obligatoire depuis le 1er janvier 2019.', bg: colors.blueLight, border: colors.bluePrimary },
              { type: 'warning', icon: '⚠️', title: 'Attention', text: 'Tout retard de déclaration peut entraîner des pénalités.', bg: '#FEF3C7', border: colors.amber },
              { type: 'error', icon: '🚫', title: 'Important', text: 'Cette démarche doit être effectuée dans les 30 jours.', bg: '#FEE2E2', border: '#EF4444' },
              { type: 'success', icon: '✅', title: 'En résumé', text: 'Vous pouvez modifier votre taux à tout moment sur impots.gouv.fr.', bg: '#D1FAE5', border: colors.green },
              { type: 'example', icon: '📝', title: 'Exemple', text: 'Si vous gagnez 30 000 € par an, votre impôt annuel sera d\'environ 2 500 €.', bg: colors.gray50, border: colors.gray400 },
            ].map((callout) => (
              <motion.div 
                key={callout.type}
                className="p-5 rounded-xl"
                style={{ background: callout.bg, borderLeft: `4px solid ${callout.border}` }}
                whileHover={{ x: 4 }}
              >
                <p className="font-semibold mb-1" style={{ color: colors.charcoal }}>
                  {callout.icon} {callout.title}
                </p>
                <p style={{ color: colors.gray600 }}>{callout.text}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Separator />

        {/* Badges */}
        <Section id="badges" title="🏷️ Badges & Tags">
          <ExampleCard title="Status Badges">
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Nouveau', bg: colors.green, color: colors.white },
                { label: 'Mis à jour', bg: colors.bluePrimary, color: colors.white },
                { label: 'Populaire', bg: colors.red, color: colors.white },
                { label: 'En cours', bg: colors.amber, color: colors.charcoal },
              ].map((badge) => (
                <span key={badge.label} className="px-3 py-1 rounded-full text-sm font-semibold" style={{ background: badge.bg, color: badge.color }}>
                  {badge.label}
                </span>
              ))}
            </div>
          </ExampleCard>

          <ExampleCard title="Category Tags">
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Fiscal', color: colors.orange },
                { name: 'Travail', color: colors.bluePrimary },
                { name: 'Famille', color: colors.pink },
                { name: 'Pénal', color: colors.purple },
                { name: 'Immobilier', color: colors.teal },
              ].map((tag) => (
                <span key={tag.name} className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-colors" style={{ background: `${tag.color}15`, color: tag.color }}>
                  {tag.name}
                </span>
              ))}
            </div>
          </ExampleCard>

          <ExampleCard title="CERFA Badges">
            <div className="flex flex-wrap gap-3">
              {['2042', '13703', '12100', '14598'].map((num) => (
                <span key={num} className="px-3 py-1 rounded text-sm font-mono font-bold" style={{ background: colors.gray100, color: colors.gray600 }}>
                  CERFA {num}
                </span>
              ))}
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Forms */}
        <Section id="forms" title="📋 Formulaires">
          <ExampleCard title="Search Input">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Rechercher un sujet juridique..."
                className="w-full px-4 py-3 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
                style={{ border: `1px solid ${colors.gray200}` }}
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </ExampleCard>

          <ExampleCard title="Text Inputs">
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.charcoal }}>Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
                  style={{ border: `1px solid ${colors.gray200}` }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.charcoal }}>Message</label>
                <textarea
                  placeholder="Votre message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  style={{ border: `1px solid ${colors.gray200}` }}
                />
              </div>
            </div>
          </ExampleCard>

          <ExampleCard title="Select & Checkbox">
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.charcoal }}>Catégorie</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
                  style={{ border: `1px solid ${colors.gray200}` }}
                >
                  <option>Droit fiscal</option>
                  <option>Droit du travail</option>
                  <option>Droit de la famille</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="newsletter" className="w-5 h-5 rounded" style={{ accentColor: colors.bluePrimary }} />
                <label htmlFor="newsletter" className="text-sm" style={{ color: colors.gray600 }}>Je souhaite recevoir la newsletter</label>
              </div>
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Progress */}
        <Section id="progress" title="📊 Indicateurs de progression">
          <ExampleCard title="Reading Progress Bar">
            <div className="space-y-4">
              <div className="h-1 rounded-full overflow-hidden" style={{ background: colors.gray200 }}>
                <motion.div 
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${colors.blueDark} 0%, ${colors.bluePrimary} 50%, ${colors.red} 100%)` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
              <p className="text-sm" style={{ color: colors.gray500 }}>65% de l'article lu</p>
            </div>
          </ExampleCard>

          <ExampleCard title="Stepper Horizontal">
            <div className="flex items-center justify-between max-w-lg">
              {['Infos', 'Documents', 'Validation', 'Terminé'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm"
                      style={{ 
                        background: index < currentStep ? colors.bluePrimary : index === currentStep ? colors.blueDark : colors.gray200,
                        color: index <= currentStep ? colors.white : colors.gray500,
                        boxShadow: index === currentStep ? `0 0 0 4px ${colors.blueLight}` : 'none',
                      }}
                    >
                      {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
                    </div>
                    <span className="text-xs mt-2" style={{ color: index <= currentStep ? colors.bluePrimary : colors.gray500 }}>
                      {step}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="w-16 h-1 mx-2" style={{ background: index < currentStep ? colors.bluePrimary : colors.gray200 }} />
                  )}
                </div>
              ))}
            </div>
          </ExampleCard>

          <ExampleCard title="Stepper Vertical">
            <div className="max-w-md space-y-0">
              {['Préparation du dossier', 'Envoi des documents', 'Validation administrative', 'Obtention finale'].map((step, index) => (
                <div key={step} className="relative flex gap-4 pb-8 last:pb-0">
                  {index < 3 && (
                    <div 
                      className="absolute left-5 top-10 w-0.5 h-[calc(100%-2rem)]"
                      style={{ background: index < currentStep ? colors.bluePrimary : colors.gray200 }}
                    />
                  )}
                  <div 
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0"
                    style={{ 
                      background: index < currentStep ? colors.bluePrimary : index === currentStep ? colors.blueDark : colors.gray100,
                      color: index <= currentStep ? colors.white : colors.gray400,
                      boxShadow: index === currentStep ? `0 0 0 4px ${colors.blueLight}` : 'none',
                    }}
                  >
                    {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-semibold" style={{ color: index === currentStep ? colors.blueDark : colors.charcoal }}>{step}</h4>
                    <p className="text-sm mt-1" style={{ color: colors.gray500 }}>Description de l'étape en cours.</p>
                  </div>
                </div>
              ))}
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Navigation */}
        <Section id="navigation" title="🧭 Navigation">
          <ExampleCard title="Breadcrumb (Fil d'Ariane)">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <Link href="/" className="flex items-center gap-1.5 px-2 py-1 rounded-lg transition-colors hover:bg-gray-100" style={{ color: colors.gray500 }}>
                <Home className="w-4 h-4" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="w-4 h-4" style={{ color: colors.gray400 }} />
              <Link href="#" className="px-2 py-1 rounded-lg transition-colors hover:bg-gray-100" style={{ color: colors.gray500 }}>
                Droit Fiscal
              </Link>
              <ChevronRight className="w-4 h-4" style={{ color: colors.gray400 }} />
              <span className="px-2 py-1 font-semibold" style={{ color: colors.charcoal }}>
                Impôt sur le revenu
              </span>
            </nav>
          </ExampleCard>

          <ExampleCard title="Table des matières (TOC)">
            <div className="max-w-xs rounded-2xl p-5" style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}>
              <div className="flex items-center gap-2 mb-4">
                <List className="w-5 h-5" style={{ color: colors.gray400 }} />
                <h3 className="font-semibold text-sm uppercase tracking-wider" style={{ color: colors.gray500 }}>Sommaire</h3>
              </div>
              <ul className="space-y-1">
                {['Introduction', 'Les tranches d\'imposition', 'Calcul de l\'impôt', 'Déductions possibles', 'FAQ'].map((item, i) => (
                  <li key={item}>
                    <button
                      className="w-full text-left py-2 px-3 rounded-lg text-sm transition-all flex items-center gap-2"
                      style={{
                        background: i === 1 ? colors.blueLight : 'transparent',
                        color: i === 1 ? colors.bluePrimary : colors.gray600,
                        fontWeight: i === 1 ? 500 : 400,
                      }}
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: i === 1 ? colors.bluePrimary : colors.gray400 }}
                      />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${colors.gray100}` }}>
                <div className="flex items-center justify-between text-xs mb-2" style={{ color: colors.gray500 }}>
                  <span>Progression</span>
                  <span>35%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: colors.gray100 }}>
                  <div className="h-full w-[35%] rounded-full" style={{ background: `linear-gradient(135deg, ${colors.bluePrimary} 0%, ${colors.red} 100%)` }} />
                </div>
              </div>
            </div>
          </ExampleCard>

          <ExampleCard title="Article Navigation (Précédent / Suivant)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4" style={{ borderTop: `1px solid ${colors.gray200}` }}>
              <div className="p-5 rounded-2xl group cursor-pointer" style={{ border: `1px solid ${colors.gray200}` }}>
                <div className="flex items-center gap-2 text-sm mb-2" style={{ color: colors.gray500 }}>
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  <span>Précédent</span>
                </div>
                <h4 className="font-semibold" style={{ color: colors.charcoal }}>Introduction au droit fiscal</h4>
              </div>
              <div className="p-5 rounded-2xl group cursor-pointer text-right" style={{ border: `1px solid ${colors.gray200}` }}>
                <div className="flex items-center justify-end gap-2 text-sm mb-2" style={{ color: colors.gray500 }}>
                  <span>Suivant</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-semibold" style={{ color: colors.charcoal }}>Réductions d'impôt</h4>
              </div>
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Accordion */}
        <Section id="accordion" title="📂 Accordéon & FAQ">
          <ExampleCard title="FAQ Section">
            <div className="flex items-start gap-4 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${colors.blueLight} 0%, rgba(30, 64, 175, 0.1) 100%)` }}
              >
                <HelpCircle className="w-6 h-6" style={{ color: colors.bluePrimary }} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: colors.charcoal }}>Questions fréquentes</h3>
                <p style={{ color: colors.gray500 }}>Trouvez les réponses à vos questions</p>
              </div>
            </div>
            <div 
              className="rounded-2xl overflow-hidden"
              style={{ background: colors.white, border: `1px solid ${colors.gray200}`, boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.08)' }}
            >
              {faqItems.map((item, index) => (
                <div key={index} className="px-6 md:px-8" style={{ borderBottom: index < faqItems.length - 1 ? `1px solid ${colors.gray200}` : 'none' }}>
                  <button
                    onClick={() => setAccordionOpen(accordionOpen === index ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left"
                  >
                    <span 
                      className="font-semibold text-lg pr-4"
                      style={{ color: accordionOpen === index ? colors.bluePrimary : colors.charcoal }}
                    >
                      {item.question}
                    </span>
                    <motion.div 
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: accordionOpen === index 
                          ? `linear-gradient(135deg, ${colors.bluePrimary} 0%, #3B82F6 100%)`
                          : colors.gray100,
                        boxShadow: accordionOpen === index ? '0 4px 12px rgba(30, 64, 175, 0.3)' : 'none',
                      }}
                      animate={{ rotate: accordionOpen === index ? 180 : 0 }}
                    >
                      {accordionOpen === index ? (
                        <span className="text-white text-lg font-bold">−</span>
                      ) : (
                        <span style={{ color: colors.gray500 }} className="text-lg font-bold">+</span>
                      )}
                    </motion.div>
                  </button>
                  {accordionOpen === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="pb-6 leading-relaxed"
                      style={{ color: colors.gray600 }}
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Comparison */}
        <Section id="comparison" title="⚖️ Comparaison">
          <ExampleCard title="Comparison Table">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-4 font-semibold" style={{ background: colors.gray50, color: colors.gray600, borderBottom: `2px solid ${colors.gray200}` }}>
                      Critère
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-white" style={{ background: colors.blueDark }}>
                      SAS
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-white" style={{ background: colors.bluePrimary }}>
                      SARL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { criteria: 'Capital minimum', sas: '1 €', sarl: '1 €', winner: 'equal' },
                    { criteria: 'Nombre d\'associés', sas: '1 à illimité', sarl: '1 à 100', winner: 'A' },
                    { criteria: 'Régime social du dirigeant', sas: 'Assimilé salarié', sarl: 'TNS', winner: 'A' },
                    { criteria: 'Flexibilité des statuts', sas: 'Très flexible', sarl: 'Encadrée', winner: 'A' },
                  ].map((row, index) => (
                    <tr key={index} style={{ background: index % 2 === 0 ? colors.white : `${colors.gray50}80`, borderBottom: `1px solid ${colors.gray100}` }}>
                      <td className="py-4 px-4 font-medium" style={{ color: colors.charcoal }}>{row.criteria}</td>
                      <td className="py-4 px-4 text-center" style={{ color: colors.gray700 }}>{row.sas}</td>
                      <td className="py-4 px-4 text-center" style={{ color: colors.gray700 }}>{row.sarl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ExampleCard>

          <ExampleCard title="Pros & Cons">
            <div className="rounded-2xl overflow-hidden" style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}>
              <div className="px-6 py-4" style={{ background: colors.gray50, borderBottom: `1px solid ${colors.gray200}` }}>
                <h3 className="font-semibold" style={{ color: colors.charcoal }}>SAS - Société par Actions Simplifiée</h3>
              </div>
              <div className="grid md:grid-cols-2">
                <div className="p-6" style={{ borderRight: `1px solid ${colors.gray200}` }}>
                  <h4 className="flex items-center gap-2 font-semibold mb-4" style={{ color: colors.green }}>
                    <Check className="w-5 h-5" /> Avantages
                  </h4>
                  <ul className="space-y-3">
                    {['Grande flexibilité statutaire', 'Protection sociale du dirigeant', 'Image moderne'].map((pro, i) => (
                      <li key={i} className="flex items-start gap-2" style={{ color: colors.gray600 }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: colors.green }} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <h4 className="flex items-center gap-2 font-semibold mb-4" style={{ color: colors.red }}>
                    <span className="text-red-500">✕</span> Inconvénients
                  </h4>
                  <ul className="space-y-3">
                    {['Charges sociales élevées', 'Formalisme de création', 'Coût de fonctionnement'].map((con, i) => (
                      <li key={i} className="flex items-start gap-2" style={{ color: colors.gray600 }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: colors.red }} />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ExampleCard>

          <ExampleCard title="Verdict">
            <div className="rounded-2xl p-6 md:p-8" style={{ background: colors.blueLight }}>
              <h3 className="text-center font-bold text-xl mb-6" style={{ color: colors.charcoal }}>
                🎯 Verdict : Quelle forme choisir ?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg p-6" style={{ background: colors.white }}>
                  <h4 className="font-semibold mb-4" style={{ color: colors.charcoal }}>Choisissez la SAS si :</h4>
                  <ul className="space-y-2">
                    {['Vous souhaitez lever des fonds', 'Vous voulez une protection sociale optimale', 'Vous prévoyez plusieurs associés'].map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.green }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg p-6" style={{ background: colors.white }}>
                  <h4 className="font-semibold mb-4" style={{ color: colors.charcoal }}>Choisissez la SARL si :</h4>
                  <ul className="space-y-2">
                    {['Vous êtes seul ou en couple', 'Vous voulez minimiser les charges', 'Vous préférez un cadre réglementé'].map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.green }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Procedure */}
        <Section id="procedure" title="📋 Procédures">
          <ExampleCard title="Procedure Schema (Étapes interactives)">
            <div className="rounded-2xl p-6 md:p-8" style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}>
              <h3 className="text-xl font-bold mb-6 text-center" style={{ color: colors.charcoal }}>Procédure de licenciement économique</h3>
              <div className="relative">
                {[
                  { id: 1, title: 'Consultation des représentants', subtitle: 'Étape obligatoire', duration: '15 jours' },
                  { id: 2, title: 'Notification à la DREETS', subtitle: 'Administration du travail', duration: '8 jours' },
                  { id: 3, title: 'Entretien préalable', subtitle: 'Convocation du salarié', duration: '5 jours' },
                  { id: 4, title: 'Notification du licenciement', subtitle: 'Lettre recommandée', duration: '7 jours' },
                ].map((step, index) => (
                  <div key={step.id} className="relative pb-8 last:pb-0">
                    {index < 3 && (
                      <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-3rem)]" style={{ background: colors.gray200 }} />
                    )}
                    <div className="relative flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-lg shadow-lg" style={{ background: colors.blueDark }}>
                          {step.id}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-semibold" style={{ color: colors.charcoal }}>{step.title}</h4>
                            <p className="text-sm" style={{ color: colors.gray500 }}>{step.subtitle}</p>
                          </div>
                          <span className="flex items-center gap-1 text-sm px-3 py-1 rounded-full" style={{ background: colors.gray50, color: colors.gray500 }}>
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ExampleCard>

          <ExampleCard title="Timeline (Horizontal)">
            <div className="rounded-2xl p-6 overflow-x-auto" style={{ background: colors.gray50 }}>
              <div className="flex items-center min-w-max">
                {[
                  { label: 'Convocation', date: 'J-5', duration: '5 jours' },
                  { label: 'Entretien', date: 'J', duration: '2 jours' },
                  { label: 'Notification', date: 'J+2', duration: '15 jours' },
                  { label: 'Préavis', date: 'J+17', duration: '1 mois' },
                  { label: 'Fin de contrat', date: 'J+47' },
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full" style={{ background: colors.blueDark }} />
                      <div className="mt-2 text-center">
                        <div className="text-sm font-medium whitespace-nowrap" style={{ color: colors.charcoal }}>{step.label}</div>
                        <div className="text-xs" style={{ color: colors.gray500 }}>{step.date}</div>
                      </div>
                    </div>
                    {index < 4 && (
                      <div className="flex flex-col items-center mx-4">
                        <div className="w-20 h-0.5" style={{ background: colors.bluePrimary }} />
                        {step.duration && (
                          <div className="text-xs mt-1" style={{ color: colors.gray400 }}>{step.duration}</div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Glossary */}
        <Section id="glossary" title="📖 Glossaire">
          <ExampleCard title="Glossary Tooltip">
            <p className="leading-relaxed" style={{ color: colors.gray600 }}>
              Le{' '}
              <span 
                className="cursor-help relative inline-block group"
                style={{ borderBottom: `1px dashed ${colors.bluePrimary}`, color: colors.bluePrimary }}
              >
                foyer fiscal
                <span 
                  className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto"
                  style={{ background: colors.white, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', border: `1px solid ${colors.gray200}` }}
                >
                  <span className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-semibold" style={{ color: colors.charcoal }}>Foyer fiscal</span>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full" style={{ background: colors.blueLight, color: colors.bluePrimary }}>Fiscal</span>
                  </span>
                  <span className="text-sm leading-relaxed block mb-2" style={{ color: colors.gray600 }}>
                    Ensemble des personnes inscrites sur une même déclaration de revenus.
                  </span>
                  <span className="text-sm font-medium" style={{ color: colors.bluePrimary }}>En savoir plus →</span>
                </span>
              </span>
              {' '}désigne l'ensemble des personnes inscrites sur une même déclaration de revenus. Il est composé du déclarant, de son conjoint ou partenaire de PACS, ainsi que des personnes à charge.
            </p>
          </ExampleCard>

          <ExampleCard title="Glossary Index">
            <div className="flex flex-wrap gap-2 mb-6">
              {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
                <button
                  key={letter}
                  className="w-10 h-10 rounded-lg font-semibold text-sm transition-colors"
                  style={{ 
                    background: letter === 'F' ? colors.bluePrimary : colors.gray100, 
                    color: letter === 'F' ? colors.white : colors.gray600 
                  }}
                >
                  {letter}
                </button>
              ))}
              <span className="px-3 py-2 text-sm" style={{ color: colors.gray400 }}>...</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: 'Foyer fiscal', domain: 'Fiscal', definition: 'Ensemble des personnes inscrites sur une même déclaration de revenus.' },
                { term: 'Frais réels', domain: 'Fiscal', definition: 'Déduction des frais professionnels pour leur montant exact.' },
              ].map((item) => (
                <div key={item.term} className="p-4 rounded-xl cursor-pointer hover:shadow-md transition-shadow" style={{ border: `1px solid ${colors.gray200}` }}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold" style={{ color: colors.charcoal }}>{item.term}</h4>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full" style={{ background: `${colors.orange}15`, color: colors.orange }}>{item.domain}</span>
                  </div>
                  <p className="text-sm" style={{ color: colors.gray600 }}>{item.definition}</p>
                </div>
              ))}
            </div>
          </ExampleCard>
        </Section>

        <Separator />

        {/* Social */}
        <Section id="social" title="🔗 Social & Feedback">
          <ExampleCard title="Share Buttons">
            <div className="flex items-center gap-3">
              <span className="text-sm" style={{ color: colors.gray500 }}>Partager :</span>
              {[
                { name: 'X', icon: '𝕏' },
                { name: 'LinkedIn', icon: 'in' },
                { name: 'Facebook', icon: 'f' },
                { name: 'Copier', icon: '📋' },
              ].map((social) => (
                <button 
                  key={social.name}
                  className="p-2 rounded-lg transition-colors hover:bg-gray-100"
                  style={{ color: colors.gray500 }}
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </button>
              ))}
            </div>
          </ExampleCard>

          <ExampleCard title="Feedback Widget">
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 px-6 rounded-2xl text-center"
              style={{ background: colors.gray50 }}
            >
              <span style={{ color: colors.gray600 }}>💬 Cette page vous a-t-elle été utile ?</span>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-green-50" style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}>
                  👍 Oui
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-red-50" style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}>
                  👎 Non
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-blue-50" style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}>
                  💡 Suggérer
                </button>
              </div>
            </div>
          </ExampleCard>

          <ExampleCard title="Newsletter Signup">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-lg font-bold mb-2" style={{ color: colors.charcoal }}>Restez informé</h3>
              <p className="text-sm mb-4" style={{ color: colors.gray500 }}>Recevez les dernières actualités juridiques</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="votre@email.com"
                  className="flex-1 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
                  style={{ border: `1px solid ${colors.gray200}` }}
                />
                <motion.button 
                  className="px-6 py-3 rounded-xl font-semibold text-white"
                  style={{ background: colors.bluePrimary }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  S'inscrire
                </motion.button>
              </div>
            </div>
          </ExampleCard>
        </Section>

      </div>
    </div>
  );
}
