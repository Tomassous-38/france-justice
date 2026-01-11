'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, FileText, Filter, ExternalLink, Download, ChevronRight } from 'lucide-react';

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
  orange: '#F97316',
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
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const categories = [
  { name: 'Tous', value: 'all' },
  { name: 'Fiscal', value: 'fiscal' },
  { name: 'Travail', value: 'travail' },
  { name: 'Famille', value: 'famille' },
  { name: 'Immobilier', value: 'immobilier' },
  { name: 'Identité', value: 'identite' },
];

const forms = [
  { cerfa: 'CERFA 2042', title: 'Déclaration de revenus', category: 'fiscal', popular: true, href: '/formulaires/cerfa-2042' },
  { cerfa: 'CERFA 2042-RICI', title: 'Réductions et crédits d\'impôt', category: 'fiscal', href: '/formulaires/cerfa-2042-rici' },
  { cerfa: 'CERFA 2044', title: 'Revenus fonciers', category: 'fiscal', href: '/formulaires/cerfa-2044' },
  { cerfa: 'CERFA 2047', title: 'Revenus encaissés à l\'étranger', category: 'fiscal', href: '/formulaires/cerfa-2047' },
  { cerfa: 'CERFA 2074', title: 'Plus-values sur valeurs mobilières', category: 'fiscal', href: '/formulaires/cerfa-2074' },
  { cerfa: 'CERFA 14463', title: 'Attestation employeur (France Travail)', category: 'travail', popular: true, href: '/formulaires/cerfa-14463' },
  { cerfa: 'CERFA 14598', title: 'Rupture conventionnelle', category: 'travail', popular: true, href: '/formulaires/cerfa-14598' },
  { cerfa: 'CERFA 10170', title: 'Contrat d\'apprentissage', category: 'travail', href: '/formulaires/cerfa-10170' },
  { cerfa: 'CERFA 11423', title: 'Demande d\'aide juridictionnelle', category: 'famille', href: '/formulaires/cerfa-11423' },
  { cerfa: 'CERFA 11530', title: 'Déclaration de changement de situation', category: 'famille', href: '/formulaires/cerfa-11530' },
  { cerfa: 'CERFA 14208', title: 'Demande de pension alimentaire', category: 'famille', href: '/formulaires/cerfa-14208' },
  { cerfa: 'CERFA 13703', title: 'Déclaration préalable de travaux', category: 'immobilier', popular: true, href: '/formulaires/cerfa-13703' },
  { cerfa: 'CERFA 13406', title: 'Permis de construire', category: 'immobilier', href: '/formulaires/cerfa-13406' },
  { cerfa: 'CERFA 51423', title: 'Bail d\'habitation (logement vide)', category: 'immobilier', popular: true, href: '/formulaires/cerfa-51423' },
  { cerfa: 'CERFA 12100', title: 'Demande de carte d\'identité', category: 'identite', popular: true, href: '/formulaires/cerfa-12100' },
  { cerfa: 'CERFA 12101', title: 'Demande de passeport', category: 'identite', popular: true, href: '/formulaires/cerfa-12101' },
  { cerfa: 'CERFA 14011', title: 'Déclaration de perte de documents', category: 'identite', href: '/formulaires/cerfa-14011' },
];

interface FormCardProps {
  cerfa: string;
  title: string;
  href: string;
  popular?: boolean;
}

function FormCard({ cerfa, title, href, popular }: FormCardProps) {
  return (
    <Link 
      href={href}
      className="group block p-5 rounded-xl bg-white border transition-all duration-300 hover:shadow-lg"
      style={{ borderColor: colors.gray200 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = colors.bluePrimary + '40';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = colors.gray200;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span 
              className="px-2 py-1 rounded text-xs font-bold"
              style={{ background: colors.blueLight, color: colors.bluePrimary }}
            >
              {cerfa}
            </span>
            {popular && (
              <span className="text-xs font-medium" style={{ color: colors.orange }}>🔥 Populaire</span>
            )}
          </div>
          <h3 
            className="font-semibold group-hover:text-blue-600 transition-colors"
            style={{ color: colors.charcoal }}
          >
            {title}
          </h3>
        </div>
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors"
          style={{ background: colors.gray100 }}
        >
          <Download className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
        </div>
      </div>
    </Link>
  );
}

export default function FormulairesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredForms = forms.filter(form => {
    const matchesSearch = 
      form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.cerfa.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularForms = forms.filter(f => f.popular);

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
          <FileText className="w-14 h-14 text-white/70 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Formulaires CERFA
          </h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto mb-8">
            Téléchargez gratuitement tous les formulaires administratifs officiels
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un formulaire..."
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
        {/* Categories */}
        <motion.div 
          className="py-6 flex flex-wrap items-center gap-2 border-b"
          style={{ borderColor: colors.gray200 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Filter className="w-4 h-4 mr-1" style={{ color: colors.gray400 }} />
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{ 
                background: selectedCategory === cat.value ? colors.bluePrimary : colors.white,
                color: selectedCategory === cat.value ? colors.white : colors.gray600,
                border: `1px solid ${selectedCategory === cat.value ? colors.bluePrimary : colors.gray200}`
              }}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Popular Forms */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <motion.section 
            className="py-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-xl font-bold mb-6" 
              style={{ color: colors.charcoal }}
              variants={fadeInUp}
            >
              🔥 Formulaires les plus téléchargés
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularForms.map((form) => (
                <motion.div key={form.cerfa} variants={fadeInUp}>
                  <FormCard {...form} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Separator */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <div className="flex justify-center py-2">
            <div 
              className="h-1 w-24 rounded-full"
              style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }}
            />
          </div>
        )}

        {/* All Forms */}
        <motion.section 
          className="py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-between mb-6"
            variants={fadeInUp}
          >
            <h2 className="text-xl font-bold" style={{ color: colors.charcoal }}>
              {selectedCategory === 'all' ? 'Tous les formulaires' : `Formulaires ${selectedCategory}`}
            </h2>
            <span className="text-sm" style={{ color: colors.gray500 }}>
              {filteredForms.length} résultat{filteredForms.length > 1 ? 's' : ''}
            </span>
          </motion.div>

          {filteredForms.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredForms.map((form) => (
                <motion.div key={form.cerfa} variants={fadeInUp}>
                  <FormCard {...form} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16" style={{ color: colors.gray500 }}>
              Aucun formulaire trouvé pour votre recherche.
            </div>
          )}
        </motion.section>

        {/* Info Section */}
        <motion.section 
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div 
            className="rounded-2xl p-8"
            style={{ background: colors.gray50, border: `1px solid ${colors.gray200}` }}
          >
            <h3 className="font-bold text-lg mb-4" style={{ color: colors.charcoal }}>
              ℹ️ À propos des formulaires CERFA
            </h3>
            <p className="mb-4 leading-relaxed" style={{ color: colors.gray600 }}>
              Les formulaires CERFA sont les documents officiels utilisés pour vos démarches administratives en France. 
              Ils sont gratuits et disponibles en téléchargement sur les sites officiels.
            </p>
            <p className="mb-6" style={{ color: colors.gray600 }}>
              Effectuez vos formalités directement en ligne :
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'impots.gouv.fr', url: 'https://www.impots.gouv.fr' },
                { name: 'service-public.fr', url: 'https://www.service-public.fr' },
                { name: 'francetravail.fr', url: 'https://www.francetravail.fr' },
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-50"
                  style={{ background: colors.white, color: colors.bluePrimary, border: `1px solid ${colors.gray200}` }}
                >
                  {link.name}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
