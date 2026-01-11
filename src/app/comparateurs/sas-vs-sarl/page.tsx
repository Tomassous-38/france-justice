'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Download, ArrowRight, Check, X, ChevronRight, GitCompare } from 'lucide-react';

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

const comparisonData = [
  { criteria: 'Capital minimum', valueA: '1 €', valueB: '1 €', winner: 'equal' },
  { criteria: 'Nombre d\'associés', valueA: '1 à illimité', valueB: '1 à 100', winner: 'A' },
  { criteria: 'Dirigeant', valueA: 'Président', valueB: 'Gérant', winner: 'equal' },
  { criteria: 'Régime social dirigeant', valueA: 'Assimilé salarié', valueB: 'TNS ou assimilé', winner: null },
  { criteria: 'Charges sociales', valueA: '~65%', valueB: '~45%', winner: 'B' },
  { criteria: 'Cession de parts', valueA: 'Libre', valueB: 'Agrément requis', winner: 'A' },
  { criteria: 'Flexibilité statutaire', valueA: '★★★★★', valueB: '★★★☆☆', winner: 'A' },
  { criteria: 'Entrée d\'investisseurs', valueA: 'Facile', valueB: 'Difficile', winner: 'A' },
  { criteria: 'Coût de gestion', valueA: 'Moyen', valueB: 'Faible', winner: 'B' },
];

const sasPros = [
  'Grande liberté dans la rédaction des statuts',
  'Facilité d\'entrée et sortie des associés',
  'Crédibilité auprès des investisseurs',
  'Protection sociale du dirigeant (assimilé salarié)',
];

const sasCons = [
  'Charges sociales plus élevées (~65%)',
  'Formalisme de création plus complexe',
  'Coût de rédaction des statuts sur mesure',
];

const sarlPros = [
  'Cadre juridique sécurisant et bien connu',
  'Charges sociales réduites pour le gérant (~45%)',
  'Statuts types disponibles',
  'Possibilité de passer en EURL (associé unique)',
];

const sarlCons = [
  'Limitation à 100 associés maximum',
  'Agrément obligatoire pour céder des parts',
  'Moins attractive pour les investisseurs',
];

const faqItems = [
  {
    question: "Peut-on passer de SARL à SAS ?",
    answer: "Oui, il est possible de transformer une SARL en SAS. Cette opération nécessite la modification des statuts et l'accord unanime des associés."
  },
  {
    question: "Quel est le coût de création de chaque statut ?",
    answer: "Le coût de création est similaire (~200-300€ de frais). La principale différence réside dans le coût de rédaction des statuts : les statuts SAS nécessitent plus de personnalisation."
  },
  {
    question: "Quelle forme pour un freelance ?",
    answer: "Pour un freelance, la question se pose souvent entre SASU et EURL. La SASU offre plus de flexibilité mais avec des charges plus élevées. L'EURL permet d'optimiser les charges."
  },
];

export default function SASvsSARLPage() {
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
          className="max-w-5xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/comparateurs" className="hover:text-white/80 transition-colors">
              Comparateurs
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90">SAS vs SARL</span>
          </div>

          <GitCompare className="w-16 h-16 text-white/70 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SAS vs SARL
          </h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto mb-6">
            Quel statut juridique choisir pour votre entreprise ?
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              10 min de lecture
            </span>
            <span>•</span>
            <span>Mis à jour le 10/01/2026</span>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6">
        {/* Summary */}
        <motion.section 
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div 
            className="rounded-xl p-6"
            style={{ background: '#D1FAE5', borderLeft: `4px solid ${colors.green}` }}
          >
            <h2 className="font-bold mb-3" style={{ color: colors.charcoal }}>✅ En bref</h2>
            <ul className="space-y-2" style={{ color: colors.gray700 }}>
              <li>• <strong>SAS</strong> : plus flexible, idéale startups et levées de fonds</li>
              <li>• <strong>SARL</strong> : plus encadrée, adaptée aux projets familiaux</li>
              <li>• Coût création : similaire (~200-300€)</li>
              <li>• Fiscalité : identique (IS par défaut)</li>
            </ul>
          </div>
        </motion.section>

        {/* Separator */}
        <div className="flex justify-center py-4">
          <div className="h-1 w-24 rounded-full" style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }} />
        </div>

        {/* Comparison Table */}
        <motion.section 
          className="py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.charcoal }}>
            Tableau comparatif
          </h2>
          
          <div 
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${colors.gray200}` }}
          >
            {/* Header */}
            <div className="grid grid-cols-3" style={{ background: colors.blueDark }}>
              <div className="p-4 text-sm font-semibold text-white/70">Critère</div>
              <div className="p-4 text-center font-bold text-white">SAS</div>
              <div className="p-4 text-center font-bold text-white">SARL</div>
            </div>
            
            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={row.criteria}
                className="grid grid-cols-3 border-t"
                style={{ borderColor: colors.gray200, background: index % 2 === 0 ? colors.white : colors.gray50 }}
              >
                <div className="p-4 text-sm font-medium" style={{ color: colors.charcoal }}>
                  {row.criteria}
                </div>
                <div 
                  className="p-4 text-center text-sm"
                  style={{ 
                    color: row.winner === 'A' ? colors.green : colors.gray600,
                    fontWeight: row.winner === 'A' ? 600 : 400,
                  }}
                >
                  {row.valueA}
                </div>
                <div 
                  className="p-4 text-center text-sm"
                  style={{ 
                    color: row.winner === 'B' ? colors.green : colors.gray600,
                    fontWeight: row.winner === 'B' ? 600 : 400,
                  }}
                >
                  {row.valueB}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
              style={{ background: colors.bluePrimary }}
            >
              <Download className="w-5 h-5" />
              Télécharger le comparatif PDF
            </button>
          </div>
        </motion.section>

        {/* Detailed Analysis */}
        <motion.section 
          className="py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl font-bold mb-10 text-center" 
            style={{ color: colors.charcoal }}
            variants={fadeInUp}
          >
            Analyse détaillée
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SAS */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.charcoal }}>
                La SAS en détail
              </h3>
              <p className="mb-6" style={{ color: colors.gray600 }}>
                La <strong style={{ color: colors.charcoal }}>Société par Actions Simplifiée</strong> est la forme juridique préférée des startups et des entrepreneurs qui envisagent une levée de fonds.
              </p>
              
              {/* Pros */}
              <div className="mb-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: colors.green }}>
                  <Check className="w-5 h-5" /> Avantages
                </h4>
                <ul className="space-y-2">
                  {sasPros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: colors.green }} />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Cons */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: colors.red }}>
                  <X className="w-5 h-5" /> Inconvénients
                </h4>
                <ul className="space-y-2">
                  {sasCons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: colors.red }} />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* SARL */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.charcoal }}>
                La SARL en détail
              </h3>
              <p className="mb-6" style={{ color: colors.gray600 }}>
                La <strong style={{ color: colors.charcoal }}>Société à Responsabilité Limitée</strong> est une forme juridique très répandue en France, notamment pour les projets familiaux.
              </p>
              
              {/* Pros */}
              <div className="mb-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: colors.green }}>
                  <Check className="w-5 h-5" /> Avantages
                </h4>
                <ul className="space-y-2">
                  {sarlPros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: colors.green }} />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Cons */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: colors.red }}>
                  <X className="w-5 h-5" /> Inconvénients
                </h4>
                <ul className="space-y-2">
                  {sarlCons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: colors.red }} />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Verdict */}
        <motion.section 
          className="py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.charcoal }}>
            🎯 Notre verdict
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div 
              className="p-6 rounded-xl"
              style={{ background: colors.blueLight, border: `2px solid ${colors.bluePrimary}` }}
            >
              <h3 className="font-bold text-lg mb-4" style={{ color: colors.bluePrimary }}>
                Choisissez la SAS si...
              </h3>
              <ul className="space-y-2">
                {[
                  'Vous prévoyez une levée de fonds',
                  'Vous voulez de la flexibilité statutaire',
                  'Vous êtes plusieurs associés',
                  'Vous visez une croissance rapide',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: colors.gray700 }}>
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: colors.bluePrimary }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ background: '#F5F3FF', border: `2px solid ${colors.purple}` }}
            >
              <h3 className="font-bold text-lg mb-4" style={{ color: colors.purple }}>
                Choisissez la SARL si...
              </h3>
              <ul className="space-y-2">
                {[
                  'C\'est un projet familial ou entre proches',
                  'Vous voulez un cadre juridique sécurisant',
                  'Vous êtes seul (EURL)',
                  'Vous souhaitez optimiser les charges sociales',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: colors.gray700 }}>
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: colors.purple }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section 
          className="py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl font-bold mb-8" 
            style={{ color: colors.charcoal }}
            variants={fadeInUp}
          >
            Questions fréquentes
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                className="p-5 rounded-xl"
                style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
                variants={fadeInUp}
              >
                <h3 className="font-semibold mb-2" style={{ color: colors.charcoal }}>{item.question}</h3>
                <p className="text-sm" style={{ color: colors.gray600 }}>{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Related */}
        <motion.section 
          className="py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-6" style={{ color: colors.charcoal }}>
            📚 Pour aller plus loin
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { title: 'Créer une SAS', href: '/droit-affaires/creation-sas' },
              { title: 'Créer une SARL', href: '/droit-affaires/creation-sarl' },
              { title: 'Micro vs Société', href: '/comparateurs/micro-entreprise-vs-sasu' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md flex items-center gap-2"
                style={{ background: colors.gray50, color: colors.bluePrimary, border: `1px solid ${colors.gray200}` }}
              >
                {link.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
