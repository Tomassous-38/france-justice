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
  ExternalLink,
  Check,
  Palette
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
  orange: '#F97316',
  pink: '#EC4899',
  purple: '#8B5CF6',
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

export default function StyleGuidePage() {
  const [activeSection, setActiveSection] = useState('colors');

  const navItems = [
    { id: 'colors', label: '🎨 Couleurs' },
    { id: 'typography', label: '📝 Typographie' },
    { id: 'buttons', label: '🔘 Boutons' },
    { id: 'cards', label: '🃏 Cartes' },
    { id: 'callouts', label: '📢 Alertes' },
    { id: 'badges', label: '🏷️ Badges' },
    { id: 'forms', label: '📋 Formulaires' },
    { id: 'progress', label: '📊 Progression' },
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

      {/* Navigation sticky */}
      <nav 
        className="sticky top-20 z-30 py-3"
        style={{ background: colors.white, borderBottom: `1px solid ${colors.gray200}` }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-1 -mx-2 px-2">
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

        {/* Separator */}
        <div className="flex justify-center">
          <div className="h-1 w-24 rounded-full" style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }} />
        </div>

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

          <ExampleCard title="Outline">
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-xl font-semibold transition-all hover:bg-blue-50" style={{ border: `2px solid ${colors.bluePrimary}`, color: colors.bluePrimary }}>
                Outline Blue
              </button>
              <button className="px-6 py-3 rounded-xl font-semibold transition-all hover:bg-gray-50" style={{ border: `2px solid ${colors.gray200}`, color: colors.gray600 }}>
                Outline Gray
              </button>
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

        {/* Callouts */}
        <Section id="callouts" title="📢 Alertes & Callouts">
          <div className="space-y-4">
            {[
              { type: 'info', icon: '💡', title: 'Bon à savoir', text: 'Le prélèvement à la source est obligatoire depuis le 1er janvier 2019.', bg: colors.blueLight, border: colors.bluePrimary },
              { type: 'warning', icon: '⚠️', title: 'Attention', text: 'Tout retard de déclaration peut entraîner des pénalités.', bg: '#FEF3C7', border: colors.amber },
              { type: 'error', icon: '🚫', title: 'Important', text: 'Cette démarche doit être effectuée dans les 30 jours.', bg: '#FEE2E2', border: '#EF4444' },
              { type: 'success', icon: '✅', title: 'En résumé', text: 'Vous pouvez modifier votre taux à tout moment sur impots.gouv.fr.', bg: '#D1FAE5', border: colors.green },
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
              {['Fiscal', 'Travail', 'Famille', 'Pénal', 'Immobilier'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-100 transition-colors" style={{ background: colors.blueLight, color: colors.bluePrimary }}>
                  {tag}
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
        </Section>

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

          <ExampleCard title="Steps">
            <div className="flex items-center justify-between max-w-lg">
              {['Infos', 'Documents', 'Validation', 'Terminé'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm"
                      style={{ 
                        background: index < 2 ? colors.bluePrimary : colors.gray200,
                        color: index < 2 ? colors.white : colors.gray500
                      }}
                    >
                      {index < 2 ? <Check className="w-5 h-5" /> : index + 1}
                    </div>
                    <span className="text-xs mt-2" style={{ color: index < 2 ? colors.bluePrimary : colors.gray500 }}>
                      {step}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="w-16 h-1 mx-2" style={{ background: index < 1 ? colors.bluePrimary : colors.gray200 }} />
                  )}
                </div>
              ))}
            </div>
          </ExampleCard>
        </Section>
      </div>
    </div>
  );
}
