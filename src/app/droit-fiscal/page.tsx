'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, ArrowRight, TrendingUp, Check, AlertTriangle, ChevronRight } from 'lucide-react';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const themes = [
  {
    title: "Impôt sur le Revenu",
    description: "Barème progressif, prélèvement à la source, réductions et crédits d'impôt",
    href: '/droit-fiscal/impot-sur-le-revenu',
    articles: 56,
  },
  {
    title: "Impôt sur les Sociétés",
    description: "Taux normal et réduit, régimes spéciaux, crédit d'impôt recherche",
    href: '/droit-fiscal/impot-societes',
    articles: 23,
  },
  {
    title: "TVA",
    description: "Taux applicables, exonérations, déclaration et récupération",
    href: '/droit-fiscal/tva',
    articles: 34,
  },
  {
    title: "Droits de Succession",
    description: "Abattements, barèmes, optimisation de la transmission",
    href: '/droit-fiscal/succession-donation',
    articles: 28,
  },
  {
    title: "Plus-Values",
    description: "Immobilières, mobilières, exonérations et abattements",
    href: '/droit-fiscal/plus-values',
    articles: 18,
  },
  {
    title: "Contrôle Fiscal",
    description: "Procédures, droits du contribuable, recours et contentieux",
    href: '/droit-fiscal/controle-fiscal',
    articles: 12,
  },
];

const articles = [
  {
    title: "Réforme des impôts 2026 : ce qui change pour les particuliers",
    date: "Il y a 2h",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    href: "/actualites/reforme-impots-2026",
  },
  {
    title: "Prélèvement à la source : comment modifier votre taux",
    date: "Hier",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    href: "/actualites/modifier-taux-pas",
  },
  {
    title: "Crédit d'impôt rénovation énergétique 2026",
    date: "8 jan",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
    href: "/actualites/credit-impot-renovation",
  },
];

const baremeIR = [
  { tranche: "Jusqu'à 11 294 €", taux: "0%" },
  { tranche: "De 11 294 € à 28 797 €", taux: "11%" },
  { tranche: "De 28 797 € à 82 341 €", taux: "30%" },
  { tranche: "De 82 341 € à 177 106 €", taux: "41%" },
  { tranche: "Au-delà de 177 106 €", taux: "45%" },
];

export default function DroitFiscalPage() {
  return (
    <div className="bg-white">
      {/* Hero avec image */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80"
            alt="Droit Fiscal"
            fill
            priority
            className="object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ 
              background: `linear-gradient(135deg, ${colors.blueDark}f0 0%, ${colors.bluePrimary}e0 50%, ${colors.red}d0 100%)`
            }}
          />
        </div>

        <motion.div 
          className="relative z-10 w-full pb-20 pt-44"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
              >
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-white/50 text-sm font-medium uppercase tracking-wider">Catégorie</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight">
              Droit Fiscal
            </h1>
            <p className="text-xl text-white/75 max-w-xl leading-relaxed">
              Maîtrisez les règles de l'imposition en France : impôts directs, indirects, déclarations et optimisation fiscale.
            </p>
          </div>
        </motion.div>

      </section>

      {/* Contenu principal - flux continu */}
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Définition */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <p className="text-xl md:text-2xl leading-relaxed" style={{ color: colors.gray600 }}>
            Le <strong style={{ color: colors.blueDark }}>droit fiscal</strong> est la branche du droit public qui régit l'établissement et le recouvrement des impôts. Il encadre les relations entre l'administration fiscale et les contribuables — particuliers comme entreprises — et définit les règles de calcul, de déclaration et de paiement des différentes impositions.
          </p>
        </motion.section>

        {/* Ligne de séparation subtile */}
        <div className="h-px w-24 mx-auto" style={{ background: colors.gray200 }} />

        {/* Thématiques */}
        <motion.section 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: colors.charcoal }}>
              Les grandes thématiques
            </h2>
            <p style={{ color: colors.gray500 }}>Explorez chaque domaine du droit fiscal</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {themes.map((theme, index) => (
              <motion.div key={theme.title} variants={fadeInUp}>
                <Link
                  href={theme.href}
                  className="group block p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg"
                  style={{ borderColor: colors.gray200 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.bluePrimary + '40';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.gray200;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h3 
                    className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors"
                    style={{ color: colors.charcoal }}
                  >
                    {theme.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: colors.gray500 }}>
                    {theme.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium" style={{ color: colors.gray400 }}>
                      {theme.articles} articles
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Séparateur visuel */}
        <motion.div 
          className="py-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="h-1 w-32 mx-auto rounded-full"
            style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }}
          />
        </motion.div>

        {/* Guide complet */}
        <motion.section 
          className="py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="text-center mb-16">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: colors.blueLight, color: colors.bluePrimary }}
            >
              📖 Guide complet
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.charcoal }}>
              Comprendre le droit fiscal français
            </h2>
          </div>

          {/* Introduction */}
          <motion.div 
            className="mb-20"
            variants={fadeInUp}
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: colors.gray600 }}>
              Le système fiscal français est l'un des plus complexes au monde. Il repose sur une multitude d'impôts et de taxes qui financent l'État, les collectivités territoriales et la protection sociale. Pour le citoyen comme pour l'entrepreneur, comprendre ses mécanismes est essentiel pour respecter ses obligations et optimiser légalement sa situation.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${colors.bluePrimary}, ${colors.blueDark})` }}
              >
                1
              </span>
              <h3 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
                Les principes fondamentaux
              </h3>
            </div>
            
            <p className="mb-8 text-lg" style={{ color: colors.gray600 }}>
              Le droit fiscal français s'appuie sur des principes constitutionnels qui garantissent les droits des contribuables et encadrent le pouvoir de l'État en matière d'imposition.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Légalité de l'impôt", desc: "Seul le Parlement peut créer un impôt (art. 34 Constitution)" },
                { title: "Égalité devant l'impôt", desc: "Tous les citoyens contribuent selon leurs capacités" },
                { title: "Nécessité de l'impôt", desc: "L'impôt finance les dépenses publiques et les services" },
                { title: "Annualité", desc: "Les impôts sont votés chaque année en loi de finances" },
              ].map((principe, i) => (
                <motion.div 
                  key={principe.title}
                  className="p-5 rounded-xl transition-all duration-300 hover:shadow-md"
                  style={{ background: colors.gray50 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: colors.charcoal }}>{principe.title}</h4>
                  <p className="text-sm" style={{ color: colors.gray500 }}>{principe.desc}</p>
                </motion.div>
              ))}
            </div>

            <p style={{ color: colors.gray600 }}>
              Ces principes impliquent que le contribuable a des <strong style={{ color: colors.charcoal }}>droits</strong> : droit à l'information, droit de contester une imposition, droit au respect de la vie privée. En contrepartie, il a des <strong style={{ color: colors.charcoal }}>obligations</strong> : déclarer ses revenus, payer ses impôts dans les délais, conserver ses justificatifs.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${colors.bluePrimary}, ${colors.blueDark})` }}
              >
                2
              </span>
              <h3 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
                Classification des impôts
              </h3>
            </div>

            <p className="mb-8 text-lg" style={{ color: colors.gray600 }}>
              Les impôts français se classent selon plusieurs critères. La distinction la plus courante oppose les impôts <strong style={{ color: colors.charcoal }}>directs</strong> (supportés directement par le contribuable) et les impôts <strong style={{ color: colors.charcoal }}>indirects</strong> (collectés par un tiers).
            </p>

            <motion.div 
              className="p-8 rounded-2xl mb-8"
              style={{ background: colors.gray50 }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-bold mb-8 text-center text-lg" style={{ color: colors.charcoal }}>
                Classification des principaux impôts
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${colors.gray200}` }}>
                  <div 
                    className="py-3 px-4 font-semibold text-white text-center"
                    style={{ background: colors.bluePrimary }}
                  >
                    Impôts directs
                  </div>
                  <div className="bg-white p-5 space-y-3">
                    {['Impôt sur le revenu (IR)', 'Impôt sur les sociétés (IS)', 'Impôt sur la fortune immobilière', 'Taxe foncière', 'Cotisations sociales'].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm" style={{ color: colors.gray600 }}>
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: colors.bluePrimary }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${colors.gray200}` }}>
                  <div 
                    className="py-3 px-4 font-semibold text-white text-center"
                    style={{ background: colors.red }}
                  >
                    Impôts indirects
                  </div>
                  <div className="bg-white p-5 space-y-3">
                    {['TVA (Taxe sur la valeur ajoutée)', 'Droits de douane', 'Accises (alcool, tabac, carburants)', 'Droits d\'enregistrement', 'Taxes sur les transactions'].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm" style={{ color: colors.gray600 }}>
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: colors.red }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Section 3 - IR */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${colors.bluePrimary}, ${colors.blueDark})` }}
              >
                3
              </span>
              <h3 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
                L'impôt sur le revenu (IR)
              </h3>
            </div>

            <p className="mb-8 text-lg" style={{ color: colors.gray600 }}>
              L'<Link href="/droit-fiscal/impot-sur-le-revenu" className="font-semibold text-blue-600 hover:underline">impôt sur le revenu</Link> est l'impôt emblématique du système français. Créé en 1914, il est <strong style={{ color: colors.charcoal }}>progressif</strong> (le taux augmente avec le revenu) et <strong style={{ color: colors.charcoal }}>personnalisé</strong> (il tient compte de la situation familiale via le quotient familial).
            </p>

            {/* Barème */}
            <motion.div 
              className="rounded-2xl overflow-hidden mb-8"
              style={{ border: `1px solid ${colors.gray200}` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div 
                className="p-4"
                style={{ background: `linear-gradient(135deg, ${colors.blueDark}, ${colors.bluePrimary})` }}
              >
                <h4 className="font-semibold text-white">Barème progressif 2026 (revenus 2025)</h4>
              </div>
              <div className="divide-y" style={{ borderColor: colors.gray100 }}>
                {baremeIR.map((row, index) => (
                  <motion.div 
                    key={row.tranche}
                    className="flex justify-between items-center p-4 bg-white"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span style={{ color: colors.gray600 }}>{row.tranche}</span>
                    <span 
                      className="font-bold text-lg"
                      style={{ color: row.taux === "0%" ? colors.green : colors.charcoal }}
                    >
                      {row.taux}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Exemple */}
            <motion.div 
              className="p-6 rounded-xl mb-8"
              style={{ 
                background: `linear-gradient(135deg, ${colors.blueLight}, white)`,
                borderLeft: `4px solid ${colors.bluePrimary}` 
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4" style={{ color: colors.blueDark }}>
                💡 Exemple de calcul simplifié
              </h4>
              <p className="text-sm mb-4" style={{ color: colors.gray600 }}>
                Un célibataire (1 part) avec 40 000 € de revenu net imposable :
              </p>
              <div className="space-y-2 text-sm font-mono" style={{ color: colors.gray700 }}>
                <p>0 € → 11 294 € × 0% = <strong>0 €</strong></p>
                <p>11 294 € → 28 797 € × 11% = <strong>1 925 €</strong></p>
                <p>28 797 € → 40 000 € × 30% = <strong>3 361 €</strong></p>
                <div className="pt-3 mt-3" style={{ borderTop: `1px dashed ${colors.bluePrimary}40` }}>
                  <p className="text-base"><strong>Impôt brut = 5 286 €</strong> <span className="text-gray-500">(taux moyen : 13,2%)</span></p>
                </div>
              </div>
            </motion.div>

            <p style={{ color: colors.gray600 }}>
              Depuis 2019, l'IR est prélevé <strong style={{ color: colors.charcoal }}>à la source</strong> : l'employeur ou l'organisme payeur retient directement l'impôt sur le salaire ou la pension. Le contribuable doit toujours déclarer ses revenus chaque année pour régulariser sa situation.
            </p>
          </motion.div>

          {/* Section 4 - TVA */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${colors.bluePrimary}, ${colors.blueDark})` }}
              >
                4
              </span>
              <h3 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
                La TVA
              </h3>
            </div>

            <p className="mb-8 text-lg" style={{ color: colors.gray600 }}>
              La <Link href="/droit-fiscal/tva" className="font-semibold text-blue-600 hover:underline">taxe sur la valeur ajoutée</Link> est l'impôt qui rapporte le plus à l'État français (environ 180 milliards d'euros par an). C'est un impôt <strong style={{ color: colors.charcoal }}>indirect sur la consommation</strong>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { taux: "20%", label: "Normal", exemples: "Majorité des biens", color: colors.charcoal },
                { taux: "10%", label: "Intermédiaire", exemples: "Restauration, travaux", color: colors.bluePrimary },
                { taux: "5,5%", label: "Réduit", exemples: "Alimentation, livres", color: colors.green },
                { taux: "2,1%", label: "Super-réduit", exemples: "Médicaments, presse", color: colors.amber },
              ].map((t, i) => (
                <motion.div 
                  key={t.taux} 
                  className="p-5 rounded-xl text-center bg-white transition-all duration-300 hover:shadow-md"
                  style={{ border: `1px solid ${colors.gray200}` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: t.color }}>{t.taux}</div>
                  <div className="font-semibold text-sm mb-2" style={{ color: colors.charcoal }}>{t.label}</div>
                  <div className="text-xs" style={{ color: colors.gray500 }}>{t.exemples}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 5 - IS */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${colors.bluePrimary}, ${colors.blueDark})` }}
              >
                5
              </span>
              <h3 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
                L'impôt sur les sociétés (IS)
              </h3>
            </div>

            <p className="mb-8 text-lg" style={{ color: colors.gray600 }}>
              L'<Link href="/droit-fiscal/impot-societes" className="font-semibold text-blue-600 hover:underline">impôt sur les sociétés</Link> frappe les bénéfices réalisés par les personnes morales. C'est un impôt à <strong style={{ color: colors.charcoal }}>taux proportionnel</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <motion.div 
                className="p-6 rounded-xl bg-white"
                style={{ border: `1px solid ${colors.gray200}` }}
                whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: colors.bluePrimary }}>25%</div>
                <div className="font-semibold mb-2" style={{ color: colors.charcoal }}>Taux normal</div>
                <p className="text-sm" style={{ color: colors.gray500 }}>
                  Applicable à toutes les entreprises sur l'ensemble de leurs bénéfices.
                </p>
              </motion.div>
              <motion.div 
                className="p-6 rounded-xl"
                style={{ background: colors.blueLight, border: `1px solid ${colors.bluePrimary}20` }}
                whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(30, 64, 175, 0.1)' }}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: colors.green }}>15%</div>
                <div className="font-semibold mb-2" style={{ color: colors.charcoal }}>Taux réduit PME</div>
                <p className="text-sm" style={{ color: colors.gray500 }}>
                  Pour les PME (CA &lt; 10M€) sur les premiers 42 500 € de bénéfice.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Section 6 - Succession */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${colors.bluePrimary}, ${colors.blueDark})` }}
              >
                6
              </span>
              <h3 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
                Droits de succession et donation
              </h3>
            </div>

            <p className="mb-8 text-lg" style={{ color: colors.gray600 }}>
              Les <Link href="/droit-fiscal/succession-donation" className="font-semibold text-blue-600 hover:underline">droits de mutation à titre gratuit</Link> s'appliquent lors de la transmission d'un patrimoine. Le montant dépend du lien de parenté et de la valeur transmise.
            </p>

            <motion.div 
              className="rounded-2xl overflow-hidden mb-8"
              style={{ border: `1px solid ${colors.gray200}` }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="p-4" style={{ background: colors.green }}>
                <h4 className="font-semibold text-white">Principaux abattements (renouvelables tous les 15 ans)</h4>
              </div>
              <div className="bg-white divide-y" style={{ borderColor: colors.gray100 }}>
                {[
                  { relation: "Parent → Enfant", abattement: "100 000 €" },
                  { relation: "Grand-parent → Petit-enfant", abattement: "31 865 €" },
                  { relation: "Entre époux/partenaires PACS", abattement: "80 724 €" },
                  { relation: "Entre frères et sœurs", abattement: "15 932 €" },
                ].map((row, i) => (
                  <motion.div 
                    key={row.relation}
                    className="flex justify-between items-center p-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span style={{ color: colors.gray600 }}>{row.relation}</span>
                    <span className="font-bold" style={{ color: colors.green }}>{row.abattement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="p-5 rounded-xl flex items-start gap-4"
              style={{ background: '#FEF3C7' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.amber }} />
              <div>
                <p className="font-semibold mb-1" style={{ color: colors.charcoal }}>Anticipez la transmission</p>
                <p className="text-sm" style={{ color: colors.gray600 }}>
                  La transmission anticipée permet de profiter plusieurs fois des abattements et de réduire considérablement les droits.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Section 7 - Contrôle */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${colors.bluePrimary}, ${colors.blueDark})` }}
              >
                7
              </span>
              <h3 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
                Le contrôle fiscal
              </h3>
            </div>

            <p className="mb-8 text-lg" style={{ color: colors.gray600 }}>
              L'administration dispose d'un <Link href="/droit-fiscal/controle-fiscal" className="font-semibold text-blue-600 hover:underline">pouvoir de contrôle</Link> pour vérifier l'exactitude des déclarations.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { type: "Contrôle sur pièces", desc: "Vérification depuis les bureaux de l'administration", duree: "Quelques semaines" },
                { type: "Examen de comptabilité", desc: "Contrôle à distance via fichiers informatiques", duree: "6 mois max" },
                { type: "Vérification de comptabilité", desc: "Contrôle sur place dans les locaux", duree: "3 mois à 1 an" },
              ].map((item, i) => (
                <motion.div 
                  key={item.type}
                  className="p-5 rounded-xl bg-white flex flex-col md:flex-row md:items-center justify-between gap-3"
                  style={{ border: `1px solid ${colors.gray200}` }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ borderColor: colors.bluePrimary + '40' }}
                >
                  <div>
                    <h4 className="font-semibold" style={{ color: colors.charcoal }}>{item.type}</h4>
                    <p className="text-sm" style={{ color: colors.gray500 }}>{item.desc}</p>
                  </div>
                  <span 
                    className="text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap"
                    style={{ background: colors.blueLight, color: colors.bluePrimary }}
                  >
                    {item.duree}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 8 - Optimisation */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${colors.bluePrimary}, ${colors.blueDark})` }}
              >
                8
              </span>
              <h3 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
                Optimisation fiscale légale
              </h3>
            </div>

            <p className="mb-8 text-lg" style={{ color: colors.gray600 }}>
              L'optimisation fiscale consiste à utiliser les dispositifs légaux pour réduire sa charge d'impôt. Elle est parfaitement légale tant qu'elle ne constitue pas un <strong style={{ color: colors.charcoal }}>abus de droit</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <motion.div 
                className="p-6 rounded-xl"
                style={{ background: '#D1FAE5' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4 flex items-center gap-2" style={{ color: colors.green }}>
                  <Check className="w-5 h-5" /> Pratiques légales
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: colors.gray600 }}>
                  <li>• Utiliser les réductions et crédits d'impôt</li>
                  <li>• Choisir le régime fiscal adapté</li>
                  <li>• Anticiper les donations</li>
                  <li>• Déduire les charges réelles</li>
                </ul>
              </motion.div>
              <motion.div 
                className="p-6 rounded-xl"
                style={{ background: '#FEE2E2' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4 flex items-center gap-2" style={{ color: colors.red }}>
                  <AlertTriangle className="w-5 h-5" /> Pratiques risquées
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: colors.gray600 }}>
                  <li>• Montages sans substance économique</li>
                  <li>• Dissimulation de revenus</li>
                  <li>• Utilisation abusive de paradis fiscaux</li>
                  <li>• Abus de droit sanctionné</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="p-10 rounded-3xl text-center mb-20"
            style={{ background: `linear-gradient(135deg, ${colors.blueDark} 0%, ${colors.bluePrimary} 100%)` }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Explorez les thématiques en détail
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Chaque domaine du droit fiscal fait l'objet d'articles détaillés pour approfondir vos connaissances.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {themes.slice(0, 4).map((theme) => (
                <Link
                  key={theme.title}
                  href={theme.href}
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {theme.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* Actualités - pleine largeur */}
      <section className="py-20" style={{ background: colors.gray50 }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-end justify-between mb-10">
              <div>
                <span 
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold mb-3"
                  style={{ background: `${colors.red}12`, color: colors.red }}
                >
                  <TrendingUp className="w-4 h-4" />
                  À la une
                </span>
                <h2 className="text-3xl font-bold" style={{ color: colors.charcoal }}>
                  Actualités fiscales
                </h2>
              </div>
              <Link 
                href="/actualites?categorie=fiscal"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-md"
                style={{ background: colors.white, color: colors.bluePrimary, border: `1px solid ${colors.gray200}` }}
              >
                Toutes les actualités
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <motion.div key={article.title} variants={fadeInUp}>
                  <Link
                    href={article.href}
                    className="group block rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl"
                    style={{ border: `1px solid ${colors.gray200}` }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span 
                          className="px-2.5 py-0.5 rounded text-xs font-semibold"
                          style={{ background: `${colors.orange}12`, color: colors.orange }}
                        >
                          Fiscal
                        </span>
                        <span className="text-xs" style={{ color: colors.gray400 }}>{article.date}</span>
                      </div>
                      <h3 
                        className="font-semibold group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug"
                        style={{ color: colors.charcoal }}
                      >
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
