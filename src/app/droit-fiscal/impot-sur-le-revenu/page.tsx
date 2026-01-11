'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Eye, ArrowLeft, FileText, ChevronRight, Calculator } from 'lucide-react';

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
  orange: '#F97316',
  green: '#10B981',
  amber: '#F59E0B',
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

const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'qui-est-concerne', title: 'Qui est concerné ?' },
  { id: 'foyer-fiscal', title: 'Le foyer fiscal' },
  { id: 'revenus-imposables', title: 'Revenus imposables' },
  { id: 'bareme', title: 'Le barème progressif' },
  { id: 'prelevement', title: 'Prélèvement à la source' },
  { id: 'reductions', title: 'Réductions d\'impôt' },
];

const childPages = [
  { title: 'Foyer fiscal', href: '/droit-fiscal/impot-sur-le-revenu/foyer-fiscal' },
  { title: 'Barème progressif', href: '/droit-fiscal/impot-sur-le-revenu/bareme' },
  { title: 'Prélèvement à la source', href: '/droit-fiscal/impot-sur-le-revenu/prelevement-source' },
  { title: 'Réductions d\'impôt', href: '/droit-fiscal/impot-sur-le-revenu/reductions' },
  { title: 'Plus-values', href: '/droit-fiscal/impot-sur-le-revenu/plus-values' },
  { title: 'Quotient familial', href: '/droit-fiscal/impot-sur-le-revenu/quotient-familial' },
];

const baremeIR = [
  { tranche: "Jusqu'à 11 294 €", taux: "0%" },
  { tranche: "De 11 294 € à 28 797 €", taux: "11%" },
  { tranche: "De 28 797 € à 82 341 €", taux: "30%" },
  { tranche: "De 82 341 € à 177 106 €", taux: "41%" },
  { tranche: "Au-delà de 177 106 €", taux: "45%" },
];

const faqItems = [
  {
    question: "Comment est calculé l'impôt sur le revenu ?",
    answer: "L'impôt sur le revenu est calculé en appliquant le barème progressif à votre revenu net imposable, après division par le nombre de parts de votre foyer fiscal (quotient familial)."
  },
  {
    question: "Quand doit-on déclarer ses revenus ?",
    answer: "La déclaration de revenus doit être effectuée chaque année au printemps, généralement entre avril et juin. Les dates exactes dépendent de votre département."
  },
  {
    question: "Peut-on déclarer en version papier ?",
    answer: "La déclaration en ligne est obligatoire si votre résidence est équipée d'un accès internet. Des exceptions existent pour les personnes ne pouvant utiliser internet."
  },
];

export default function ImpotRevenuPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/droit-fiscal" className="hover:text-white/80 transition-colors">
              Droit Fiscal
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90">Impôt sur le Revenu</span>
          </div>

          <div className="flex items-start gap-4">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
            >
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Impôt sur le Revenu (IR)
                </h1>
                <span 
                  className="px-2 py-0.5 rounded text-xs font-semibold"
                  style={{ background: colors.green, color: colors.white }}
                >
                  Mis à jour
                </span>
              </div>
              <p className="text-xl text-white/70">Le guide complet 2026</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 mt-6 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              15 min de lecture
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              Mis à jour le 10/01/2026
            </span>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_260px] gap-12">
          {/* Main Content */}
          <motion.article
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Introduction */}
            <motion.section id="introduction" className="scroll-mt-28 mb-12" variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.charcoal }}>Introduction</h2>
              <p className="leading-relaxed mb-4" style={{ color: colors.gray600 }}>
                L'<strong style={{ color: colors.charcoal }}>impôt sur le revenu (IR)</strong> est un impôt direct qui frappe les revenus des personnes physiques domiciliées en France. Il représente l'une des principales sources de recettes de l'État français.
              </p>
              <p className="leading-relaxed" style={{ color: colors.gray600 }}>
                Cet impôt est calculé selon un barème progressif, ce qui signifie que le taux d'imposition augmente avec le niveau de revenu. Il est prélevé à la source depuis janvier 2019.
              </p>

              {/* Key Figures */}
              <div 
                className="rounded-xl p-6 mt-8"
                style={{ background: colors.blueLight }}
              >
                <h3 className="font-bold mb-4" style={{ color: colors.blueDark }}>📊 Chiffres clés</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold" style={{ color: colors.bluePrimary }}>38,3 M</div>
                    <div className="text-sm" style={{ color: colors.gray600 }}>foyers fiscaux</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: colors.bluePrimary }}>78 Md€</div>
                    <div className="text-sm" style={{ color: colors.gray600 }}>de recettes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: colors.bluePrimary }}>45%</div>
                    <div className="text-sm" style={{ color: colors.gray600 }}>taux max</div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Qui est concerné */}
            <motion.section id="qui-est-concerne" className="scroll-mt-28 mb-12" variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.charcoal }}>Qui est concerné ?</h2>
              <p className="leading-relaxed mb-4" style={{ color: colors.gray600 }}>
                Toute personne <strong style={{ color: colors.charcoal }}>domiciliée fiscalement en France</strong> est soumise à l'impôt sur le revenu sur l'ensemble de ses revenus, qu'ils soient de source française ou étrangère.
              </p>
              
              <div 
                className="p-5 rounded-xl"
                style={{ background: '#FEF3C7', borderLeft: `4px solid ${colors.amber}` }}
              >
                <p className="font-semibold mb-1" style={{ color: colors.charcoal }}>⚠️ Attention</p>
                <p className="text-sm" style={{ color: colors.gray600 }}>
                  Les non-résidents peuvent aussi être soumis à l'IR sur leurs revenus de source française. Des conventions fiscales internationales peuvent s'appliquer.
                </p>
              </div>
            </motion.section>

            {/* Foyer fiscal */}
            <motion.section id="foyer-fiscal" className="scroll-mt-28 mb-12" variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.charcoal }}>Le foyer fiscal</h2>
              <p className="leading-relaxed mb-4" style={{ color: colors.gray600 }}>
                Le <strong style={{ color: colors.charcoal }}>foyer fiscal</strong> est l'unité d'imposition de base. Il peut comprendre :
              </p>
              <ul className="space-y-2 mb-6" style={{ color: colors.gray600 }}>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: colors.bluePrimary }} />
                  Une personne seule (célibataire, veuf, divorcé)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: colors.bluePrimary }} />
                  Un couple marié ou pacsé
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: colors.bluePrimary }} />
                  Les enfants mineurs à charge
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: colors.bluePrimary }} />
                  Les enfants majeurs rattachés (sous conditions)
                </li>
              </ul>

              <div 
                className="p-5 rounded-xl"
                style={{ background: colors.blueLight, borderLeft: `4px solid ${colors.bluePrimary}` }}
              >
                <p className="font-semibold mb-1" style={{ color: colors.blueDark }}>💡 Bon à savoir</p>
                <p className="text-sm" style={{ color: colors.gray600 }}>
                  Le nombre de parts fiscales dépend de la composition du foyer. Un couple marié compte pour 2 parts, chaque enfant à charge ajoute généralement 0,5 part.
                </p>
              </div>
            </motion.section>

            {/* Revenus imposables */}
            <motion.section id="revenus-imposables" className="scroll-mt-28 mb-12" variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.charcoal }}>Revenus imposables</h2>
              <p className="leading-relaxed mb-4" style={{ color: colors.gray600 }}>
                L'impôt sur le revenu s'applique à différentes catégories de revenus :
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { label: 'Traitements et salaires', desc: 'Revenus d\'activité salariée' },
                  { label: 'Revenus fonciers', desc: 'Loyers perçus' },
                  { label: 'BIC/BNC', desc: 'Bénéfices commerciaux et non commerciaux' },
                  { label: 'Revenus de capitaux', desc: 'Dividendes, intérêts' },
                  { label: 'Plus-values', desc: 'Gains sur cessions' },
                  { label: 'Pensions et retraites', desc: 'Revenus de remplacement' },
                ].map((item) => (
                  <div 
                    key={item.label}
                    className="p-4 rounded-xl"
                    style={{ background: colors.gray50 }}
                  >
                    <p className="font-semibold" style={{ color: colors.charcoal }}>{item.label}</p>
                    <p className="text-sm" style={{ color: colors.gray500 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Barème */}
            <motion.section id="bareme" className="scroll-mt-28 mb-12" variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.charcoal }}>Le barème progressif</h2>
              <p className="leading-relaxed mb-6" style={{ color: colors.gray600 }}>
                Le barème de l'impôt sur le revenu 2026 (revenus 2025) est le suivant :
              </p>

              <div 
                className="rounded-xl overflow-hidden mb-6"
                style={{ border: `1px solid ${colors.gray200}` }}
              >
                <div className="p-4" style={{ background: colors.blueDark }}>
                  <h4 className="font-semibold text-white">Barème progressif 2026</h4>
                </div>
                <div className="divide-y" style={{ borderColor: colors.gray100 }}>
                  {baremeIR.map((row) => (
                    <div key={row.tranche} className="flex justify-between items-center p-4 bg-white">
                      <span style={{ color: colors.gray600 }}>{row.tranche}</span>
                      <span 
                        className="font-bold"
                        style={{ color: row.taux === "0%" ? colors.green : colors.charcoal }}
                      >
                        {row.taux}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="p-5 rounded-xl"
                style={{ background: colors.gray50, borderLeft: `4px solid ${colors.green}` }}
              >
                <p className="font-semibold mb-2" style={{ color: colors.charcoal }}>💡 Exemple de calcul</p>
                <p className="text-sm mb-3" style={{ color: colors.gray600 }}>
                  Pour un revenu imposable de 40 000 € (célibataire, 1 part) :
                </p>
                <div className="text-sm font-mono" style={{ color: colors.gray700 }}>
                  <p>• 0 € à 11 294 € × 0% = <strong>0 €</strong></p>
                  <p>• 11 294 € à 28 797 € × 11% = <strong>1 925 €</strong></p>
                  <p>• 28 797 € à 40 000 € × 30% = <strong>3 361 €</strong></p>
                  <p className="mt-2 pt-2 border-t" style={{ borderColor: colors.gray200 }}>
                    <strong>Impôt total : 5 286 €</strong>
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Prélèvement */}
            <motion.section id="prelevement" className="scroll-mt-28 mb-12" variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.charcoal }}>Prélèvement à la source</h2>
              <p className="leading-relaxed mb-4" style={{ color: colors.gray600 }}>
                Depuis le 1er janvier 2019, l'impôt sur le revenu est prélevé directement sur vos revenus par le <strong style={{ color: colors.charcoal }}>collecteur</strong> (employeur, caisse de retraite...) selon un taux calculé par l'administration fiscale.
              </p>
              <p className="leading-relaxed" style={{ color: colors.gray600 }}>
                Trois types de taux existent : le taux personnalisé, le taux individualisé (pour les couples) et le taux neutre (par défaut).
              </p>
            </motion.section>

            {/* Réductions */}
            <motion.section id="reductions" className="scroll-mt-28 mb-12" variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.charcoal }}>Réductions d'impôt</h2>
              <p className="leading-relaxed mb-4" style={{ color: colors.gray600 }}>
                De nombreux dispositifs permettent de réduire le montant de votre impôt :
              </p>
              <ul className="space-y-2" style={{ color: colors.gray600 }}>
                {[
                  'Dons aux associations',
                  'Emploi d\'un salarié à domicile',
                  'Frais de garde d\'enfants',
                  'Investissement locatif (Pinel, Denormandie...)',
                  'Travaux de rénovation énergétique',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.green }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Child Pages */}
            <motion.section className="mb-12 pt-8 border-t" style={{ borderColor: colors.gray200 }} variants={fadeInUp}>
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.charcoal }}>Approfondissez</h2>
              <div className="flex flex-wrap gap-2">
                {childPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md"
                    style={{ background: colors.gray50, color: colors.bluePrimary, border: `1px solid ${colors.gray200}` }}
                  >
                    {page.title} →
                  </Link>
                ))}
              </div>
            </motion.section>

            {/* Forms */}
            <motion.section 
              className="p-6 rounded-xl mb-12"
              style={{ background: colors.gray50 }}
              variants={fadeInUp}
            >
              <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.charcoal }}>
                <FileText className="w-5 h-5" />
                Formulaires liés
              </h3>
              <div className="flex flex-wrap gap-2">
                {['CERFA 2042', '2042-RICI', '2044', '2047'].map((cerfa) => (
                  <Link
                    key={cerfa}
                    href={`/formulaires/${cerfa.toLowerCase()}`}
                    className="px-3 py-1.5 rounded-lg text-sm transition-colors"
                    style={{ background: colors.white, border: `1px solid ${colors.gray200}`, color: colors.gray600 }}
                  >
                    {cerfa}
                  </Link>
                ))}
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section className="mb-12" variants={fadeInUp}>
              <h2 className="text-xl font-bold mb-6" style={{ color: colors.charcoal }}>Questions fréquentes</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-xl"
                    style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
                  >
                    <h3 className="font-semibold mb-2" style={{ color: colors.charcoal }}>{item.question}</h3>
                    <p className="text-sm" style={{ color: colors.gray600 }}>{item.answer}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Back Link */}
            <motion.div variants={fadeInUp}>
              <Link 
                href="/droit-fiscal"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: colors.gray500 }}
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au Droit Fiscal
              </Link>
            </motion.div>
          </motion.article>

          {/* Sidebar - TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div 
                className="rounded-xl p-5"
                style={{ background: colors.gray50 }}
              >
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: colors.gray500 }}>
                  Sommaire
                </h4>
                <nav>
                  <ul className="space-y-2">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm transition-colors hover:text-blue-600 block py-1"
                          style={{ color: colors.gray600 }}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
