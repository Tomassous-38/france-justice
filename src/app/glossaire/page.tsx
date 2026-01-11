'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, BookOpen, TrendingUp, ChevronRight } from 'lucide-react';

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
  orange: '#F97316',
  pink: '#EC4899',
  purple: '#8B5CF6',
  green: '#10B981',
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
    transition: { staggerChildren: 0.03, delayChildren: 0.1 }
  }
};

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const domainColors: Record<string, string> = {
  fiscal: colors.orange,
  travail: colors.bluePrimary,
  famille: colors.pink,
  penal: colors.purple,
  affaires: colors.green,
  civil: colors.teal,
};

const domains = [
  { name: 'Tous', value: 'all' },
  { name: 'Fiscal', value: 'fiscal' },
  { name: 'Travail', value: 'travail' },
  { name: 'Famille', value: 'famille' },
  { name: 'Pénal', value: 'penal' },
  { name: 'Affaires', value: 'affaires' },
];

const glossaryTerms = [
  { term: 'Abus de biens sociaux', slug: 'abus-biens-sociaux', domain: 'penal', definition: 'Utilisation des biens d\'une société à des fins personnelles' },
  { term: 'Acompte', slug: 'acompte', domain: 'civil', definition: 'Paiement partiel à valoir sur une somme due' },
  { term: 'Acte authentique', slug: 'acte-authentique', domain: 'civil', definition: 'Document rédigé par un officier public (notaire)' },
  { term: 'Acte sous seing privé', slug: 'acte-sous-seing-prive', domain: 'civil', definition: 'Document signé par les parties sans officier public' },
  { term: 'Bail', slug: 'bail', domain: 'civil', definition: 'Contrat de location d\'un bien immobilier' },
  { term: 'Barème', slug: 'bareme', domain: 'fiscal', definition: 'Tableau de référence pour le calcul d\'une taxe ou d\'une indemnité' },
  { term: 'Capacité juridique', slug: 'capacite-juridique', domain: 'civil', definition: 'Aptitude à être titulaire de droits et à les exercer' },
  { term: 'Capital social', slug: 'capital-social', domain: 'affaires', definition: 'Apports des associés au moment de la création d\'une société' },
  { term: 'Clause de non-concurrence', slug: 'clause-non-concurrence', domain: 'travail', definition: 'Engagement du salarié à ne pas exercer une activité concurrente' },
  { term: 'Contentieux', slug: 'contentieux', domain: 'civil', definition: 'Litige porté devant les tribunaux' },
  { term: 'Décote', slug: 'decote', domain: 'fiscal', definition: 'Réduction d\'impôt accordée aux contribuables modestes' },
  { term: 'Dommages et intérêts', slug: 'dommages-interets', domain: 'civil', definition: 'Somme versée en réparation d\'un préjudice' },
  { term: 'Faute grave', slug: 'faute-grave', domain: 'travail', definition: 'Manquement du salarié rendant impossible son maintien dans l\'entreprise' },
  { term: 'Foyer fiscal', slug: 'foyer-fiscal', domain: 'fiscal', definition: 'Ensemble des personnes inscrites sur une même déclaration de revenus' },
  { term: 'Garde alternée', slug: 'garde-alternee', domain: 'famille', definition: 'Mode de garde où l\'enfant réside alternativement chez chaque parent' },
  { term: 'Garde à vue', slug: 'garde-a-vue', domain: 'penal', definition: 'Mesure de contrainte permettant de retenir une personne soupçonnée' },
  { term: 'Indemnité de licenciement', slug: 'indemnite-licenciement', domain: 'travail', definition: 'Somme versée au salarié lors de la rupture de son contrat' },
  { term: 'Mise en demeure', slug: 'mise-en-demeure', domain: 'civil', definition: 'Acte formel exigeant l\'exécution d\'une obligation' },
  { term: 'Parts fiscales', slug: 'parts-fiscales', domain: 'fiscal', definition: 'Unités de mesure du quotient familial pour le calcul de l\'IR' },
  { term: 'Pension alimentaire', slug: 'pension-alimentaire', domain: 'famille', definition: 'Somme versée pour l\'entretien d\'un enfant ou d\'un ex-conjoint' },
  { term: 'Plus-value', slug: 'plus-value', domain: 'fiscal', definition: 'Gain réalisé lors de la cession d\'un bien' },
  { term: 'Préavis', slug: 'preavis', domain: 'travail', definition: 'Délai à respecter avant la rupture effective du contrat de travail' },
  { term: 'Prescription', slug: 'prescription', domain: 'civil', definition: 'Délai au-delà duquel une action en justice n\'est plus possible' },
  { term: 'Prestation compensatoire', slug: 'prestation-compensatoire', domain: 'famille', definition: 'Somme versée à l\'ex-conjoint pour compenser la disparité de niveau de vie' },
  { term: 'Quotient familial', slug: 'quotient-familial', domain: 'fiscal', definition: 'Mécanisme divisant le revenu par le nombre de parts du foyer' },
  { term: 'Récidive', slug: 'recidive', domain: 'penal', definition: 'Commission d\'une nouvelle infraction après condamnation' },
  { term: 'Rupture conventionnelle', slug: 'rupture-conventionnelle', domain: 'travail', definition: 'Mode de rupture amiable du contrat de travail' },
  { term: 'Solde de tout compte', slug: 'solde-tout-compte', domain: 'travail', definition: 'Document récapitulant les sommes versées au salarié lors de son départ' },
  { term: 'Sursis', slug: 'sursis', domain: 'penal', definition: 'Suspension de l\'exécution d\'une peine sous conditions' },
];

const popularTerms = ['Foyer fiscal', 'Préavis', 'Plus-value', 'Garde alternée', 'Rupture conventionnelle'];

export default function GlossairePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = selectedDomain === 'all' || term.domain === selectedDomain;
    const matchesLetter = !selectedLetter || term.term[0].toUpperCase() === selectedLetter;
    return matchesSearch && matchesDomain && matchesLetter;
  });

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

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
          className="max-w-5xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BookOpen className="w-14 h-14 text-white/70 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Glossaire juridique
          </h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto mb-8">
            Plus de 500 définitions du droit français
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un terme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
              style={{ color: colors.charcoal }}
            />
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6">
        {/* Alphabet Navigation */}
        <motion.div 
          className="py-6 border-b"
          style={{ borderColor: colors.gray200 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-1">
            <button
              onClick={() => setSelectedLetter(null)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{ 
                background: !selectedLetter ? colors.bluePrimary : 'transparent',
                color: !selectedLetter ? colors.white : colors.gray600,
              }}
            >
              Tous
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className="w-9 h-9 rounded-lg text-sm font-medium transition-all"
                style={{ 
                  background: selectedLetter === letter ? colors.bluePrimary : 'transparent',
                  color: selectedLetter === letter ? colors.white : colors.gray600,
                }}
              >
                {letter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Domain Filter */}
        <motion.div 
          className="py-4 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-sm mr-2" style={{ color: colors.gray500 }}>Domaine :</span>
          {domains.map((domain) => (
            <button
              key={domain.value}
              onClick={() => setSelectedDomain(domain.value)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{ 
                background: selectedDomain === domain.value ? colors.bluePrimary : colors.white,
                color: selectedDomain === domain.value ? colors.white : colors.gray600,
                border: `1px solid ${selectedDomain === domain.value ? colors.bluePrimary : colors.gray200}`
              }}
            >
              {domain.name}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 py-10">
          {/* Terms List */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {Object.keys(groupedTerms).sort().map((letter) => (
              <motion.div key={letter} className="mb-10" variants={fadeInUp}>
                <h2 
                  className="text-2xl font-bold mb-4 pb-2"
                  style={{ color: colors.bluePrimary, borderBottom: `2px solid ${colors.gray200}` }}
                >
                  {letter}
                </h2>
                <div className="space-y-3">
                  {groupedTerms[letter].map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossaire/${term.slug}`}
                      className="group block p-4 rounded-xl bg-white border transition-all duration-300 hover:shadow-md"
                      style={{ borderColor: colors.gray200 }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = colors.bluePrimary + '40';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = colors.gray200;
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 
                            className="font-semibold group-hover:text-blue-600 transition-colors"
                            style={{ color: colors.charcoal }}
                          >
                            {term.term}
                          </h3>
                          <p className="text-sm mt-1" style={{ color: colors.gray600 }}>
                            {term.definition}
                          </p>
                        </div>
                        <span 
                          className="px-2 py-0.5 rounded text-xs font-medium flex-shrink-0"
                          style={{ 
                            background: (domainColors[term.domain] || colors.gray500) + '15',
                            color: domainColors[term.domain] || colors.gray500
                          }}
                        >
                          {term.domain}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}

            {Object.keys(groupedTerms).length === 0 && (
              <div className="text-center py-16" style={{ color: colors.gray500 }}>
                Aucun terme trouvé pour votre recherche.
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-28 space-y-6">
              {/* Popular Terms */}
              <motion.div 
                className="rounded-2xl p-6"
                style={{ background: colors.gray50 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.charcoal }}>
                  <TrendingUp className="w-5 h-5" style={{ color: colors.red }} />
                  Les plus consultés
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTerms.map((termName) => {
                    const termData = glossaryTerms.find(t => t.term === termName);
                    return termData ? (
                      <Link
                        key={termName}
                        href={`/glossaire/${termData.slug}`}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white transition-colors hover:bg-blue-50"
                        style={{ border: `1px solid ${colors.gray200}`, color: colors.gray600 }}
                      >
                        {termName}
                      </Link>
                    ) : null;
                  })}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="rounded-2xl p-6 text-center"
                style={{ background: colors.blueLight }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-4xl font-bold mb-1" style={{ color: colors.bluePrimary }}>
                  {glossaryTerms.length}+
                </div>
                <div className="text-sm" style={{ color: colors.gray600 }}>
                  définitions juridiques
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
